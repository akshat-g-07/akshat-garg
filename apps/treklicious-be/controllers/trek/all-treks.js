const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function AllTreks(req, res) {
  try {
    const trekList = await trekDetailsModel.find().lean();
    res.status(200).send(trekList);
  } catch (error) {
    logger.log("Error in AllTreks");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = AllTreks;
