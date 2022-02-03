import "./Task.css";
import TickButton from "../TickButton/TickButton.js";
import CancelButton from "../CancelButton/CancelButton.js";

const Task = ({ tasks, onDeleteTask, onCompleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((element, index) => {
        return (
          <div className="task-btn-container">
            <div className="task-container">
              <TickButton taskId={element._id} onCompleteTask={onCompleteTask}/>
              <p>{element.content}</p>
            </div>
            <CancelButton taskId={element._id} onDeleteTask={onDeleteTask} />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
