import "./Input.css";
import { useState } from "react";

const Input = ({ onSaveTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTodoList = (event) => {
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSaveTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <form className="input-btn-container" onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Write something..."
          value={enteredTask}
          onChange={addTodoList}
          autoFocus
        />
    </form>
  );
};

export default Input;
