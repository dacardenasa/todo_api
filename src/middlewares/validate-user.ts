import type { Request, Response, NextFunction } from "express";
import User from "@models/user";

export async function isUserAlreadyRegistered(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ message: `The username ${username} is already registered!` });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}

export async function hasUserAccount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: `The username ${username} is not registered!` });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}
