import type { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

import User from "@models/user";
import { IUsersDocument, userJWToken } from "@interfaces/user";

export async function validateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      message: "AuthToken is required"
    });
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.SECRET_OR_PRIVATE_KEY as Secret
    );
    const authUser: IUsersDocument | null = await User.findById(
      (payload as userJWToken).uid
    );

    if (!authUser) {
      return res.status(401).json({
        message: "user does not exist!"
      });
    }
    req.authUser = authUser;
    next();
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : error
    });
  }
}
