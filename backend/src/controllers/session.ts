import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/users";

const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.SECRET ?? "secret");
};

const auth = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const user = await User.getByEmail(email);

  const unHashedPassword = await bcrypt.compare(password, user?.password ?? "");

  if (!user || !unHashedPassword) {
    return res.status(404).json({ message: "User or Password incorrect" });
  }

  const token = generateToken(user.id);

  return res.status(200).json({ token });
};

export default { auth, generateToken };
