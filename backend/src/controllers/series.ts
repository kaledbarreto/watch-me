import { Request, Response } from "express";

import Platform from "../model/platform";
import Series from "../model/series";

const getAllOnPlatform = async (req: Request, res: Response) => {
  const { platform_id } = req.params;

  const platform = await Platform.getById(platform_id);

  if (!platform) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const series = await Series.getAllByPlatform(platform.id);

  return res.status(200).json({ platform, series });
};

const getSerieDetailed = async (req: Request, res: Response) => {
  const { id } = req.params;

  const existingSerie = await Series.getById(id);

  return res.status(200).json(existingSerie);
};

const create = async (req: Request, res: Response) => {
  const { name, description, image_url, platform_id } = req.body;

  if (!name || !description || !image_url || !platform_id) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const platform = await Platform.getById(platform_id);

  if (!platform) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const series = await Series.save({
    name,
    description,
    image_url,
    platform_id,
  });

  return res.status(201).json(series);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const serie = req.body;

  if (!serie) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const existingSerie = await Series.getById(id);

  const newSerie = {
    ...existingSerie,
    ...serie,
  };

  const series = await Series.update(id, newSerie);

  return res.status(200).json(series);
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const series = await Series.remove(id);

  return res.status(200).json(series);
};

export default { getAllOnPlatform, getSerieDetailed, create, update, remove };
