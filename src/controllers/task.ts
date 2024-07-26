import type { Request, Response } from "express";

import Task from "@models/task";

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.find({ user: req.authUser._id, isActive: true });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const { content, title, date } = req.body;
    const task = new Task({ content, title, date, user: req.authUser._id });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { content, title, date } = req.body;
    const taskUpdated = await Task.findByIdAndUpdate(
      id,
      { content, title, date },
      { new: true }
    );
    res.json(taskUpdated);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
}
