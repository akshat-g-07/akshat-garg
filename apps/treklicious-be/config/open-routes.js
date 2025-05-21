const openRoutes = [
  {
    route: "/health",
    description: "Tells about health of both Server & DB",
  },
  {
    route: "/health/db",
    description: "Tells about health of DB",
  },
  {
    route: "/health/server",
    description: "Tells about health of Server",
  },
  {
    route: "/logs",
    description: "Gives a list of log files",
  },
  {
    route: "/logs/:index",
    description: "Gives content of a log file at index",
  },
  {
    route: "/logs/delete/:index",
    description: "Deletes a log file at index (if 'all' deletes all files).",
  },
];

module.exports = openRoutes;
