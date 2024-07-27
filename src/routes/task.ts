import Router from "express";
import { check } from "express-validator";

import { validateFields } from "@middlewares/validate-fields";
import { validateJWT } from "@middlewares/validate-jwt";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "@controllers/task";
import { isTaskRegistered } from "@middlewares/validate-task";

const router = Router();

router.get("/show", [validateJWT], getTasks);

router.get("/:id", [validateJWT], getTaskById);

router.post(
  "/create",
  [
    validateJWT,
    check("content", "The content is required").notEmpty(),
    check("title", "The title is required").notEmpty(),
    check("date", "The date is required").notEmpty(),
    validateFields
  ],
  createTask
);

router.put(
  "/:id",
  [
    validateJWT,
    isTaskRegistered,
    check("id", "Must be an mongoose id valid!").isMongoId(),
    check("content", "The content is required").notEmpty(),
    check("title", "The title is required").notEmpty(),
    check("date", "The date is required").notEmpty(),
    validateFields
  ],
  updateTask
);

router.delete(
  "/:id",
  [
    validateJWT,
    isTaskRegistered,
    check("id", "Must be an mongoose id valid!").isMongoId(),
    validateFields
  ],
  deleteTask
);

export default router;
