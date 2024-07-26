import type { NextFunction, Request, Response } from "express";

import Task from "@models/task";

export async function isTaskRegistered(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(400)
        .json({ message: `The task with id ${id} is not registered!` });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}
