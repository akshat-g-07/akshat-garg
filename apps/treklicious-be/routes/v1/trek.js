const express = require("express");
const { AllTreks, TrekByID } = require("../../controllers/trek");
const router = express.Router();

router.get("/", AllTreks);
router.get("/:trekID", TrekByID);
// get title, image, uuid of all treks
router.get("/tileInfo", () => {});
// get title, state, image, uuid of all treks
router.get("/tileInfoWithState", () => {});
// get uuid and name of all treks
router.get("/allNames", () => {});
// get random trek for dashboard page
router.get("/random", () => {});
// get trek on category basis {filterParam, filterVal}
router.get("/category", () => {});

module.exports = router;
