const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function TileInfoState(req, res) {
  try {
    const trekList = await trekDetailsModel.find(null, "name img state").lean();

    res.status(200).send(trekList);
  } catch (error) {
    logger.log("Error in TileInfoState");
    logger.log(error);

    res.status(500).send("Something went wrong.");
  }
}

module.exports = TileInfoState;
