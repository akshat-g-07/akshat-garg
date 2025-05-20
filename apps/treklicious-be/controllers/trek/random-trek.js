const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function RandomTrek(req, res) {
  try {
    const monsoonTrekList = await trekDetailsModel
      .find({ season: "Monsoon" })
      .lean();
    res
      .status(200)
      .send(
        monsoonTrekList[Math.floor(Math.random() * monsoonTrekList.length)]
      );
  } catch (error) {
    logger.log("Error in RandomTrek");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = RandomTrek;
