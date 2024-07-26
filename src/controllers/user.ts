import type { Request, Response } from "express";
import bcrypt from "bcryptjs";

import User from "@models/user";


export async function register(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}
