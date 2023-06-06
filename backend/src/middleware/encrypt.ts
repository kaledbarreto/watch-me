import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";

const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).send("Password is required 🦆");
  }

  if (password.length < 8) {
    return res
      .status(400)
      .send("Password needs to be at least 8 characters 🦆");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  req.body.passwordHash = hashedPassword;

  next();
};

export default { hashPassword };
