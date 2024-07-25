import type { Request, Response } from "express";

import User from "@models/user";

const bcrypt = require("bcryptjs");

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const isTheSamePassword = bcrypt.compareSync(password, user.password);
    if (!isTheSamePassword) {
      return res.status(400).json({
        error: `The username or password is incorrect!`
      });
    }
    res.json({ username, password });
  }
}
