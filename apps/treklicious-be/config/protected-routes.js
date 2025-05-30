const { USER_ROUTE } = require("@repo/treklicious-constants");

function CheckProtectedRoute(url) {
  if (url.includes(USER_ROUTE)) return true;
  if (url.includes("/allNames")) return true;
  if (url.includes("/random")) return true;
  if (url.includes("/trekID")) return true;
  return false;
}

module.exports = CheckProtectedRoute;
