import type { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { generateJWT } from "@helpers/generate-jwt";
import User from "@models/user";


export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const isTheSamePassword = bcrypt.compareSync(password, user.password);
      if (!isTheSamePassword) {
        return res.status(400).json({
          error: `The username or password is incorrect!`
        });
      }
      const token = await generateJWT(user._id.toString());
      res.json({ user, token });
    }
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}
