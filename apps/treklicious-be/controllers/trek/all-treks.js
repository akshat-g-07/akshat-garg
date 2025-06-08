const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function AllTreks(req, res) {
  console.log("10");

  try {
    const trekList = await trekDetailsModel.find().lean();
    // console.log("trekList");
    console.log("11");
    // console.log(trekList);
    console.log("HEADERS SENT?3", res.headersSent);

    return res.status(200).send(trekList);
    console.log("HEADERS SENT?4", res.headersSent);
    console.log("12");
  } catch (error) {
    console.log("HEADERS SENT?5", res.headersSent);
    console.log("13");
    logger.log("Error in AllTreks");
    logger.log(error);

    return res.sendStatus(500);
    console.log("HEADERS SENT?6", res.headersSent);
    console.log("14");
  }
  console.log("15");
}

module.exports = AllTreks;
