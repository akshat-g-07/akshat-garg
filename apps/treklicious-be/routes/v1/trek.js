const express = require("express");
const {
  AllTreks,
  TrekByID,
  TileInfo,
  TrekNames,
} = require("../../controllers/trek");
const router = express.Router();

router.get("/", AllTreks);
router.get("/trekID/:trekID", TrekByID);
router.get("/tileInfo", TileInfo);
router.get("/allNames", TrekNames);
// get random trek for dashboard page
router.get("/random", () => {});
// get trek on category basis {filterParam, filterVal}
router.get("/category", () => {});

module.exports = router;
