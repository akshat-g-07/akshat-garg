const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function TileInfo(req, res) {
  const state = req.query.state;
  const fields = {
    name: 1,
    img: 1,
  };
  if (state) fields["state"] = 1;

  try {
    const trekList = await trekDetailsModel.find(null, { ...fields }).lean();

    res.status(200).send(trekList);
  } catch (error) {
    logger.log("Error in TileInfo");
    logger.log(error);

    res.status(500).send("Something went wrong.");
  }
}

module.exports = TileInfo;
