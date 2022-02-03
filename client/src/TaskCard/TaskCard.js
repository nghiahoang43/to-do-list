import Input from "../Input/Input.js";
import Card from "../Card/Card.js";
import Task from "../Task/Task.js";

const TaskCard = ({
  tasksList,
  deleteTaskHandler,
  saveTaskHandler,
  completeTaskHandler,
}) => {
  return (
    <Card className="task-card">
      <div className="title-container">
        <h2 className="title">To Do</h2>
      </div>
      <Task
        tasks={tasksList}
        onDeleteTask={deleteTaskHandler}
        onCompleteTask={completeTaskHandler}
      />
      <Input onSaveTask={saveTaskHandler} />
    </Card>
  );
};

export default TaskCard;
