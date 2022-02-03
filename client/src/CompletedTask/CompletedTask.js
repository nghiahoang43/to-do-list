import "./CompletedTask.css";
import DoneButton from "../DoneButton/DoneButton.js";
import CancelButton from "../CancelButton/CancelButton.js";

const CompletedTask = ({ completedTasks, onDeleteTask, onUncompleteTask }) => {
  return (
    <div className="tasks">
      {completedTasks.map((element, index) => {
        return (
          <div className="task-btn-container">
            <div className="completed-task-container">
              <DoneButton
                taskId={element._id}
                onUncompleteTask={onUncompleteTask}
              />
              <p className="completed-task-p">{element.content}</p>
            </div>
            <CancelButton onDeleteTask={onDeleteTask} taskId={element._id} />
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTask;
