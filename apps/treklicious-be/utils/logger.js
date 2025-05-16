const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");

const { GetDateTime } = require("./date-time");

class Logger {
  constructor(options = {}) {
    // Defaults
    this.maxSizeBytes = options.maxSizeBytes || 100 * 1024; // 100kB default
    this.backupCount = options.backupCount || 5;
    this.dirPath = path.join(__dirname, "../logs");
    this.currentLogFile = "";
  }

  async getLogFiles() {
    try {
      if (!fsSync.existsSync(this.dirPath)) {
        await fs.mkdir(this.dirPath, { recursive: true });
      }

      const logFiles = await fs.readdir(this.dirPath);

      return logFiles.filter((file) => file.startsWith("logs_"));
    } catch (err) {
      console.error("Error in getLogFiles:", err);
    }
  }

  async getLogFilesStats() {
    try {
      const logFiles = await this.getLogFiles();

      if (!logFiles.length) return [];

      return await Promise.all(
        logFiles.map(async (file) => {
          const filePath = path.join(this.dirPath, file);
          const stats = await fs.stat(filePath);
          return { file, lastModifiedTime: stats.mtime };
        })
      );
    } catch (err) {
      console.error("Error in getLogFilesStats:", err);
    }
  }

  async checkLatestLogFile() {
    try {
      const logFiles = await this.getLogFiles();

      if (!logFiles.length) {
        await this.createNewLogFile();
        return;
      }

      const logFilesStats = await this.getLogFilesStats();

      const latestLogFile = logFilesStats.reduce((latest, current) => {
        return current.lastModifiedTime > latest.lastModifiedTime
          ? current
          : latest;
      }, logFilesStats[0]);

      const latestLogFilePath = path.join(this.dirPath, latestLogFile.file);

      const stats = await fs.stat(latestLogFilePath);

      if (stats.size >= this.maxSizeBytes) {
        await this.createNewLogFile();
        return;
      }

      this.currentLogFile = latestLogFilePath;
    } catch (err) {
      console.error("Error in checkLatestLogFile:", err);
    }
  }

  async createNewLogFile() {
    try {
      const logFiles = await this.getLogFiles();

      if (logFiles.length >= this.backupCount) {
        await this.deleteOldestLogFile();
      }

      const newLogFileName = `logs_${GetDateTime()
        .replaceAll(" ", "_")
        .replace(",", "")
        .replaceAll(":", "_")}.log`;
      const newLogFilePath = path.join(this.dirPath, newLogFileName);
      await fs.writeFile(newLogFilePath, "");

      this.currentLogFile = newLogFilePath;
    } catch (err) {
      console.error("Error in createNewLogFile:", err);
    }
  }

  async deleteOldestLogFile() {
    try {
      const logFilesStats = await this.getLogFilesStats();

      const oldestLogFile = logFilesStats.reduce((oldest, current) => {
        return current.lastModifiedTime < oldest.lastModifiedTime
          ? current
          : oldest;
      }, logFilesStats[0]);

      const oldestLogFilePath = path.join(this.dirPath, oldestLogFile.file);
      await fs.unlink(oldestLogFilePath);
    } catch (err) {
      console.error("Error in deleteOldestLogFile:", err);
    }
  }

  async log(message) {
    await this.checkLatestLogFile();

    await fs.appendFile(
      this.currentLogFile,
      `(${GetDateTime()}) ⏩⏩` + "\t" + message + "\n"
    );
  }
}

module.exports = Logger;
