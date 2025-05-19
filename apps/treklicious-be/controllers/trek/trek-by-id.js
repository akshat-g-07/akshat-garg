const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function TrekByID(req, res) {
  const trekID = req.params.trekID;
  try {
    const trek = await trekDetailsModel.findById(trekID).lean();
    res.status(200).send(trek);
  } catch (error) {
    logger.log("Error in TrekByID");
    logger.log(error);

    res.status(500).send("Something went wrong.");
  }
}

module.exports = TrekByID;
