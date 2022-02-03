import "./ToDoList.css";
import TaskCard from "../TaskCard/TaskCard.js";
import CompletedCard from "../CompletedCard/CompletedCard.js";
import axios from "axios";
import { useState, useEffect } from "react";

const ToDoList = () => {
  const [tasksList, setTasksList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const getUncompletedTasks = async () => {
    const response = await axios.post(
      "http://localhost:2000/get-uncompleted-tasks"
    );
    const tasks = response.data.resources[0];
    setTasksList(tasks);
  };
  const getCompletedTasks = async () => {
    const response = await axios.post(
      "http://localhost:2000/get-completed-tasks"
    );
    const tasks = response.data.resources[0];
    setCompletedTasks(tasks);
  };

  useEffect(() => {
    getCompletedTasks();
    getUncompletedTasks();
  }, []);

  const saveTaskHandler = async (enteredTask) => {
    await axios.post("http://localhost:2000/create-one-task", { enteredTask });
    getUncompletedTasks();
  };

  const deleteTaskHandler = async (taskId) => {
    await axios.post("http://localhost:2000/delete-one-task", { taskId });
    getUncompletedTasks();
    getCompletedTasks();
  };

  const completeTaskHandler = async (taskId) => {
    await axios.post("http://localhost:2000/complete-one-task", { taskId });
    getUncompletedTasks();
    getCompletedTasks();
  };

  const uncompleteTaskHandler = async (taskId) => {
    await axios.post("http://localhost:2000/uncomplete-one-task", { taskId });
    getUncompletedTasks();
    getCompletedTasks();
  };

  const deleteAllCompletedTasksHandler = async () => {
    await axios.post("http://localhost:2000/delete-all-completed-tasks");
    getCompletedTasks();
  };

  return (
    <div className="todo-list">
      <TaskCard
        tasksList={tasksList}
        deleteTaskHandler={deleteTaskHandler}
        saveTaskHandler={saveTaskHandler}
        completeTaskHandler={completeTaskHandler}
      />
      <CompletedCard
        completedTasks={completedTasks}
        deleteTaskHandler={deleteTaskHandler}
        uncompleteTaskHandler={uncompleteTaskHandler}
        deleteAllCompletedTasksHandler={deleteAllCompletedTasksHandler}
      />
    </div>
  );
};

export default ToDoList;
