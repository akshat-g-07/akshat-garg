const express = require("express");
const {
  AllTreks,
  TrekByID,
  TileInfo,
  TrekNames,
  RandomTrek,
} = require("../../controllers/trek");
const router = express.Router();

router.get("/", AllTreks);
router.get("/trekID/:trekID", TrekByID);
router.get("/tileInfo", TileInfo);
router.get("/allNames", TrekNames);
router.get("/random", RandomTrek);
// get trek on category basis {filterParam, filterVal}
router.get("/category", () => {});

module.exports = router;
