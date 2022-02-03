import express from "express";
import {
  createOneTask,
  createOneCompletedTask,
  getOneTask,
  getAllTasks,
  getUncompletedTasks,
  getCompletedTasks,
  completeOneTask,
  uncompleteOneTask,
  completeAllTasks,
  updateOneTask,
  deleteOneTask,
  deleteAllCompletedTasks,
} from "../controllers/task.js";
const router = express.Router();

router.post("/create-one-task", createOneTask);
router.post("/create-one-completed-task", createOneCompletedTask);
router.post("/get-one-task", getOneTask);
router.post("/get-all-tasks", getAllTasks);
router.post("/get-uncompleted-tasks", getUncompletedTasks);
router.post("/get-completed-tasks", getCompletedTasks);
router.post("/complete-one-task", completeOneTask);
router.post("/uncomplete-one-task", uncompleteOneTask);
router.post("/complete-all-tasks", completeAllTasks);
router.post("/update-one-task", updateOneTask);
router.post("/delete-one-task", deleteOneTask);
router.post("/delete-all-completed-tasks", deleteAllCompletedTasks);

export default router;
