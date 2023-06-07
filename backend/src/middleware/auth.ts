import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface RequestId extends Request {
  userId?: string;
}

const addUserIdToRequest = (req: RequestId, res: Response, token: string) => {
  req.userId = jwt.verify(
    token,
    process.env.SECRET ? process.env.SECRET : "secret",
    (err, decoded): any => {
      if (err) return res.status(401).json({ message: "Invalid Token" });
      return decoded
        ? (<any>decoded).id
        : res.status(503).json({ message: "Internal Error" });
    }
  ) as string | undefined;
};

const verify = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const bearer = authorization.split(" ");

  if (bearer.length !== 2 || bearer[0].toLocaleLowerCase() !== "bearer") {
    return res.status(401).json({ message: "Invalid Token, expected bearer" });
  }

  addUserIdToRequest(req, res, bearer[1]);

  return next();
};

const verifyAdmin = async (
  req: RequestId,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const bearer = authorization.split(" ");

  if (bearer.length !== 2 || bearer[0].toLocaleLowerCase() !== "bearer") {
    return res.status(401).json({ message: "Invalid Token, expected bearer" });
  }

  addUserIdToRequest(req, res, bearer[1]);

  const adminID = process.env.ADMIN_ID ?? "admin";

  if (req.userId !== adminID) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
};

export default { verify, verifyAdmin };
