import { Task } from "../models/task.js";
import { OK, NOT_FOUND, FAIL } from "../shared/response.js";

const createOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const content = bodyData.enteredTask;
  const isCompleted = false;
  const data = { content, isCompleted };

  if (content) {
    const task = new Task(data);

    try {
      const result = await Task.create(task);
      return res.json(OK[result]);
    } catch (e) {
      return res.json(FAIL([]));
    }
  }
  return res.json(NOT_FOUND([]))
  
};

const createOneCompletedTask = async (req, res, next) => {
  const bodyData = req.body;
  const content = bodyData.enteredTask;
  const isCompleted = true;
  const data = { content, isCompleted };

  if (content) {
    const task = new Task(data);

    try {
      const result = await Task.create(task);
      return res.json(OK[result]);
    } catch (e) {
      return res.json(FAIL([]));
    }
  }
  return res.json(NOT_FOUND([]))
  
};

const getOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const { id } = bodyData;

  if (id !== "") {
    try {
      const task = await Task.findById(id);
      return res.json(OK([task]));
    } catch (e) {
      return res.json(NOT_FOUND([]));
    }
  }
  return res.json(NOT_FOUND([]));
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.json(OK([tasks]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const getUncompletedTasks = async (req, res, next) => {
  try {
    const uncompletedTasks = await Task.find({ isCompleted: false });
    return res.json(OK([uncompletedTasks]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const getCompletedTasks = async (req, res, next) => {
  try {
    const completedTasks = await Task.find({ isCompleted: true });
    return res.json(OK([completedTasks]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const completeOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const {taskId} = bodyData;
  if (taskId !== "") {
    try {
      const task = await Task.findOne({ _id: taskId, isCompleted: false });

      if (!task) {
        return res.json(NOT_FOUND([]));
      }

      task.isCompleted = true;
      task.save();
      return res.json(OK([task]));
    } catch (e) {
      return res.json(FAIL([]));
    }
  }

  return res.json(NOT_FOUND([]));
};

const uncompleteOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const {taskId} = bodyData;
  if (taskId !== "") {
    try {
      const task = await Task.findOne({ _id: taskId, isCompleted: true });

      if (!task) {
        return res.json(NOT_FOUND([]));
      }

      task.isCompleted = false;
      task.save();
      return res.json(OK([task]));
    } catch (e) {
      return res.json(FAIL([]));
    }
  }

  return res.json(NOT_FOUND([]));
};

const completeAllTasks = async (req, res, next) => {
  try {
    const unCompletedTasks = await Task.find({ isCompleted: false });
    unCompletedTasks.forEach((task) => {
      task.isCompleted = true;
      task.save();
    });
    return res.json(OK([unCompletedTasks]));
  } catch (e) {
    return res.json(FAIL([]));
  }
};

const updateOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const { id, content } = bodyData;

  if (id !== "") {
    try {
      const task = await Task.findById(id);

      if (!task) {
        return res.json(NOT_FOUND([]));
      }
      task.content = content;
      task.save();
      return res.json(OK([task]));
    } catch (e) {
      return res.json(FAIL([]));
    }
  }
  return res.json(NOT_FOUND([]));
};

const deleteOneTask = async (req, res, next) => {
  const bodyData = req.body;
  const { taskId } = bodyData;

  if (taskId !== "") {
    try {
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        return res.json(NOT_FOUND([]));
      }
      return res.json(OK([task]));
    } catch (e) {
      return res.json(FAIL([]));
    }
  }
  return res.json(NOT_FOUND([]));
};

const deleteAllCompletedTasks = async (req, res, next) => {
  try {
    const completedTasks = await Task.deleteMany({ isCompleted: true });
    if (!completedTasks) {
      return res.json(NOT_FOUND([]));
    }
    return res.json(OK([completedTasks]));
  } catch (e) {}
};

export {
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
};
