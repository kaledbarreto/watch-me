import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verify = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const bearer = authorization.split(" ");

  if (bearer.length !== 2 || bearer[0].toLocaleLowerCase() !== "bearer") {
    return res.status(401).json({ message: "Invalid Token, expected bearer" });
  }

  return next();
};

const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const bearer = authorization.split(" ");

  if (bearer.length !== 2 || bearer[0].toLocaleLowerCase() !== "bearer") {
    return res.status(401).json({ message: "Invalid Token, expected bearer" });
  }

  const token = bearer[1];

  const id: any = jwt.verify(
    token,
    process.env.SECRET ?? "secret",
    (err, decoded: any) => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      return decoded
        ? decoded.id
        : res.status(503).json({ message: "Internal Error" });
    }
  );

  const adminID = process.env.ADMIN_ID ?? "admin";

  if (id !== adminID) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
};

export default { verify, verifyAdmin };
