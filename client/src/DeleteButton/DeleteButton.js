import "./DeleteButton.css";

const DeleteButton = ({ onDeleteAllCompletedTasks }) => {
  const onClickHandler = (event) => {
    onDeleteAllCompletedTasks();
    event.preventDefault();
  };
  return (
    <button className="delete-btn" onClick={onClickHandler}>
      Clear
    </button>
  );
};

export default DeleteButton;
