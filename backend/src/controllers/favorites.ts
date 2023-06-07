import { Response } from "express";

import { RequestId } from "../middleware/auth";
import Favorites from "../model/favorites";

const favorite = async (req: RequestId, res: Response) => {
  const { serie_id } = req.params;

  if (!req.userId || !serie_id) {
    return res.status(400).json({ message: "Bad Request" });
  }

  await Favorites.addToUser(req.userId, serie_id);

  return res.status(201).json(favorite);
};

const unfavorite = async (req: RequestId, res: Response) => {
  const { serie_id } = req.params;

  if (!req.userId || !serie_id) {
    return res.status(400).json({ message: "Bad Request" });
  }

  await Favorites.removeFromUser(req.userId, serie_id);

  return res.status(204).json();
};

const getFavorites = async (req: RequestId, res: Response) => {
  if (!req.userId) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const favorites = await Favorites.getByUser(req.userId);

  return res.status(200).json(favorites);
};

export default { favorite, unfavorite, getFavorites };
