import { Request, Response } from "express";

import User from "../model/users";
import session from "./session";

const create = async (req: Request, res: Response) => {
  const { email, passwordHash } = req.body;

  if (!email || !passwordHash) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const emailRegistered = await User.getByEmail(email);

  if (emailRegistered?.email) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const user = await User.save({ email, passwordHash });

  const token = session.generateToken(user.id);

  return res.status(201).json({ user, token });
};

export default { create };
