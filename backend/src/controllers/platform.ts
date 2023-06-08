import { Request, Response } from "express";

import Platform from "../model/platform";

const getAll = async (req: Request, res: Response) => {
  const emailRegistered = await Platform.getAll();

  return res.status(200).json(emailRegistered);
};

const create = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const platform = await Platform.save(name);

  return res.status(201).json(platform);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Bad Request" });
  }

  await Platform.update(id, name);

  return res.status(200).json({ id, name });
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const platform = await Platform.remove(id);

  return res.status(200).json(platform);
};

export default { getAll, create, update, remove };
