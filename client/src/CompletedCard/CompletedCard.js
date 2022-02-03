import Card from "../Card/Card.js";
import CompletedTask from "../CompletedTask/CompletedTask.js";
import DeleteButton from "../DeleteButton/DeleteButton.js";

const CompletedCard = ({
  completedTasks,
  deleteTaskHandler,
  deleteAllCompletedTasksHandler,
  uncompleteTaskHandler,
}) => {
  return (
    <Card>
      <div className="title-container">
        <h2 className="title">Completed</h2>
      </div>
      <CompletedTask
        completedTasks={completedTasks}
        onDeleteTask={deleteTaskHandler}
        onUncompleteTask={uncompleteTaskHandler}
      />
      <DeleteButton
        onDeleteAllCompletedTasks={deleteAllCompletedTasksHandler}
      />
    </Card>
  );
};

export default CompletedCard;
