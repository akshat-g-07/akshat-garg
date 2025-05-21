const logger = require("../../utils/logger");
const { trekDetailsModel } = require("../../models");

async function CategoryTreks(req, res) {
  const { filterParam, filterValue } = req.params;
  try {
    const trekList = await trekDetailsModel
      .find({ [filterParam]: filterValue })
      .lean();

    res.status(200).send(trekList);
  } catch (error) {
    logger.log("Error in CategoryTreks");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = CategoryTreks;
