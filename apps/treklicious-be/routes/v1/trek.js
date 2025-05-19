const express = require("express");
const {
  AllTreks,
  TrekByID,
  TileInfo,
  TrekNames,
  RandomTrek,
  CategoryTreks,
} = require("../../controllers/trek");
const router = express.Router();

router.get("/", AllTreks);
router.get("/trekID/:trekID", TrekByID);
router.get("/tileInfo", TileInfo);
router.get("/allNames", TrekNames);
router.get("/random", RandomTrek);
router.get(
  "/category/filterParam/:filterParam/filterValue/:filterValue",
  CategoryTreks
);

module.exports = router;
