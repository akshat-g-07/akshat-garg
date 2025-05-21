const { userDetailsModel, trekDetailsModel } = require("../../models");
const {
  USER_NOT_FOUND_RESPONSE,
  PREFERENCES_NOT_SET_RESPONSE,
} = require("@repo/treklicious-constants");

const logger = require("../../utils/logger");

async function Recommended(req, res) {
  const userIDModel_id = req.userIDModel_id;
  try {
    const user = await userDetailsModel
      .findOne({ userIDModel_id }, { preferences: 1 })
      .lean();

    if (!user)
      return res.sendStatus(400).json({ message: USER_NOT_FOUND_RESPONSE });

    const { state, season, difficulty } = user.preferences;
    if (state === "NA" || season === "NA" || difficulty === "NA")
      return res
        .sendStatus(400)
        .json({ message: PREFERENCES_NOT_SET_RESPONSE });

    const recommendedTreks = await trekDetailsModel
      .find({
        $or: [{ state }, { season }, { difficulty }],
      })
      .lean();

    res.status(200).send(recommendedTreks);
  } catch (error) {
    logger.log("Error in Recommended");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = Recommended;
