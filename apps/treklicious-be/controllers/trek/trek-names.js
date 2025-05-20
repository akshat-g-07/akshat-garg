const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function TrekNames(req, res) {
  try {
    const trekNamesList = await trekDetailsModel.find(null, { name: 1 }).lean();

    res.status(200).send(trekNamesList);
  } catch (error) {
    logger.log("Error in TrekNames");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = TrekNames;
