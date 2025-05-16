const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");

const { GetDateTime } = require("./date-time");

class logger {
  static #maxSizeBytes = 100 * 1024; // 100kB default
  static #backupCount = 5;
  static #dirPath = path.join(__dirname, "../logs");
  static #currentLogFile = "";
  static #logFilesCache = {};
  static #logFilesStatsCache = {};
  static #cacheTime = 10 * 60 * 1000; // 10 mins default

  static async #getLogFiles() {
    if (
      this.#logFilesCache.logFiles &&
      new Date() - this.#logFilesCache.timeLastCalculated < this.#cacheTime
    )
      return this.#logFilesCache.logFiles;

    try {
      if (!fsSync.existsSync(this.#dirPath)) {
        await fs.mkdir(this.#dirPath, { recursive: true });
      }

      const files = await fs.readdir(this.#dirPath);

      const logFiles = files.filter((file) => file.startsWith("logs_"));

      this.#logFilesCache = {
        logFiles,
        timeLastCalculated: new Date(),
      };

      return logFiles;
    } catch (err) {
      console.error("Error in getLogFiles:", err);
    }
  }

  static async #getLogFilesStats() {
    if (
      this.#logFilesStatsCache.logFilesStats &&
      new Date() - this.#logFilesStatsCache.timeLastCalculated < this.#cacheTime
    )
      return this.#logFilesStatsCache.logFilesStats;

    try {
      const logFiles = await this.#getLogFiles();

      if (!logFiles.length) {
        this.#logFilesStatsCache = {
          logFilesStats: [],
          timeLastCalculated: new Date(),
        };
        return [];
      }

      const logFilesStats = await Promise.all(
        logFiles.map(async (file) => {
          const filePath = path.join(this.#dirPath, file);
          const stats = await fs.stat(filePath);
          return { file, lastModifiedTime: stats.mtime };
        })
      );
      this.#logFilesStatsCache = {
        logFilesStats,
        timeLastCalculated: new Date(),
      };

      return logFilesStats;
    } catch (err) {
      console.error("Error in getLogFilesStats:", err);
    }
  }

  static async #checkLatestLogFile() {
    try {
      const logFiles = await this.#getLogFiles();

      if (!logFiles.length) {
        await this.#createNewLogFile();
        return;
      }

      const logFilesStats = await this.#getLogFilesStats();

      const latestLogFile = logFilesStats.reduce((latest, current) => {
        return current.lastModifiedTime > latest.lastModifiedTime
          ? current
          : latest;
      }, logFilesStats[0]);

      const latestLogFilePath = path.join(this.#dirPath, latestLogFile.file);

      const stats = await fs.stat(latestLogFilePath);

      if (stats.size >= this.#maxSizeBytes) {
        await this.#createNewLogFile();
        return;
      }

      this.#currentLogFile = latestLogFilePath;
    } catch (err) {
      console.error("Error in checkLatestLogFile:", err);
    }
  }

  static async #createNewLogFile() {
    try {
      const logFiles = await this.#getLogFiles();

      if (logFiles.length >= this.#backupCount) {
        await this.#deleteOldestLogFile();
      }

      const newLogFileName = `logs_${GetDateTime()
        .replaceAll(" ", "_")
        .replace(",", "")
        .replaceAll(":", "_")}.log`;
      const newLogFilePath = path.join(this.#dirPath, newLogFileName);
      await fs.writeFile(newLogFilePath, "");

      this.#logFilesCache = {};

      this.#currentLogFile = newLogFilePath;
    } catch (err) {
      console.error("Error in createNewLogFile:", err);
    }
  }

  static async #deleteOldestLogFile() {
    try {
      const logFilesStats = await this.#getLogFilesStats();

      const oldestLogFile = logFilesStats.reduce((oldest, current) => {
        return current.lastModifiedTime < oldest.lastModifiedTime
          ? current
          : oldest;
      }, logFilesStats[0]);

      const oldestLogFilePath = path.join(this.#dirPath, oldestLogFile.file);
      await fs.unlink(oldestLogFilePath);
      this.#logFilesCache = {};
    } catch (err) {
      console.error("Error in deleteOldestLogFile:", err);
    }
  }

  static async log(message) {
    await this.#checkLatestLogFile();

    await fs.appendFile(
      this.#currentLogFile,
      `(${GetDateTime()}) ⏩⏩` + "\t" + message + "\n"
    );
    this.#logFilesStatsCache = {};
  }
}

module.exports = logger;
