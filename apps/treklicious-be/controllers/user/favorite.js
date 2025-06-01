const {
  BAD_REQUEST_RESPONSE,
  USER_NOT_FOUND_RESPONSE,
} = require("@repo/treklicious-constants");
const { userDetailsModel } = require("../../models");
const logger = require("../../utils/logger");

async function GETFavorite(req, res) {
  const userIDModel_id = req.userIDModel_id;

  try {
    const user = await userDetailsModel
      .findOne({ userIDModel_id }, { favorites: 1 })
      .lean();

    if (!user) return res.sendStatus(400);
    res.status(200).send(user.favorites);
  } catch (error) {
    logger.log("Error in GETFavorite");
    logger.log(error);

    res.sendStatus(500);
  }
}

async function CheckFavorite(req, res) {
  const { favID } = req.params;
  const userIDModel_id = req.userIDModel_id;

  try {
    const user = await userDetailsModel
      .findOne({ userIDModel_id }, { favorites: 1 })
      .lean();

    if (!user) return res.sendStatus(400);

    if (user.favorites.includes(favID)) res.status(200).send(true);
    else res.status(200).send(false);
  } catch (error) {
    logger.log("Error in CheckFavorite");
    logger.log(error);

    res.sendStatus(500);
  }
}

async function POSTFavorite(req, res) {
  const userIDModel_id = req.userIDModel_id;
  const { favorite } = req.body;

  if (!favorite)
    return res.sendStatus(400).json({ message: BAD_REQUEST_RESPONSE });

  try {
    const user = await userDetailsModel.findOne(
      { userIDModel_id },
      { favorites: 1 }
    );

    if (!user)
      return res.sendStatus(400).json({ message: USER_NOT_FOUND_RESPONSE });

    // const updatedUser = await UserDetail.findOneAndUpdate(
    //     { userIDModel_id, favorites: { $ne: favorite } },
    //     { $addToSet: { favorites: favorite } },
    //     { new: true, select: 'favorites', lean: true }
    //   );

    user.favorites = [...user.favorites, favorite];
    const userUpdated = await user.save();

    if (userUpdated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    logger.log("Error in POSTFavorite");
    logger.log(error);

    res.sendStatus(500);
  }
}

async function DELETEFavorite(req, res) {
  const userIDModel_id = req.userIDModel_id;
  const { favorite } = req.params;

  if (!favorite)
    return res.sendStatus(400).json({ message: BAD_REQUEST_RESPONSE });

  try {
    const user = await userDetailsModel.findOne(
      { userIDModel_id },
      { favorites: 1 }
    );

    if (!user)
      return res.sendStatus(400).json({ message: USER_NOT_FOUND_RESPONSE });

    // const updatedUser = await UserDetail.findOneAndUpdate(
    //     { userIDModel_id },
    //     { $pull: { favorites: favorite } },
    //     { new: true, select: 'favorites', lean: true }
    //   );

    user.favorites = user.favorites.filter((item) => item !== favorite);
    const userUpdated = await user.save();

    if (userUpdated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    logger.log("Error in DELETEFavorite");
    logger.log(error);

    res.sendStatus(500);
  }
}

module.exports = { GETFavorite, POSTFavorite, DELETEFavorite, CheckFavorite };
