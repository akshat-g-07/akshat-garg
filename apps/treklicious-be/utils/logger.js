const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");

const { GetDateTime } = require("./date-time");

class logger {
  static #maxSizeBytes = 100 * 1024; // 100kB default
  static #backupCount = 5;
  static #cwd = process.env.NODE_ENV === "production" ? "/tmp" : __dirname;
  static #logFolder =
    process.env.NODE_ENV === "production" ? "/logs" : "../logs";
  static #dirPath = path.join(this.#cwd, this.#logFolder);
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
    console.log(process.env.NODE_ENV);
    console.log(this.#dirPath);
    await this.#checkLatestLogFile();

    await fs.appendFile(
      this.#currentLogFile,
      `(${GetDateTime()}) ⏩⏩` + "\t" + message + "\n"
    );
    this.#logFilesStatsCache = {};
  }

  static async listLogFiles() {
    try {
      const logFiles = await this.#getLogFiles();

      if (!logFiles.length) {
        return "No log files found";
      }

      return logFiles
        .map((file, index) => `${index + 1}- \`${file}\``)
        .join("<br>");
    } catch (err) {
      console.error("Error in listLogFiles:", err);
      return "Error listing log files";
    }
  }

  static async getLogFileContent(indx) {
    const index = indx - 1;
    try {
      const logFiles = await this.#getLogFiles();
      if (!logFiles.length) {
        return "No log files found";
      }
      if (indx === null || index < 0 || index >= logFiles.length) {
        return "Invalid file index";
      }
      const logFile = logFiles[index];
      const logFilePath = path.join(this.#dirPath, logFile);
      const content = await fs.readFile(logFilePath, "utf8");
      return `<h1>File: ${logFile}</h1>${content.replace(/\n/g, "<br>")}`;
    } catch (err) {
      console.error("Error in getLogFileContent:", err);
    }
  }

  static async deleteLogFile(index) {
    try {
      const logFiles = await this.#getLogFiles();

      if (!logFiles.length) {
        return "No log files found";
      }

      if (index === "all") {
        await Promise.all(
          logFiles.map(async (file) => {
            const filePath = path.join(this.#dirPath, file);
            await fs.unlink(filePath);
          })
        );
        this.#logFilesCache = {};
        return "All log files deleted successfully";
      }

      const fileIndex = index - 1;
      if (fileIndex < 0 || fileIndex >= logFiles.length) {
        return "Invalid file index";
      }

      const fileToDelete = logFiles[fileIndex];
      const filePath = path.join(this.#dirPath, fileToDelete);
      await fs.unlink(filePath);
      this.#logFilesCache = {};
      return `Log file ${fileToDelete} deleted successfully`;
    } catch (err) {
      console.error("Error in deleteLogFile:", err);
      return "Error deleting log file(s)";
    }
  }
}

module.exports = logger;
