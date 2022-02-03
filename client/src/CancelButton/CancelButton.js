import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CancelButton.css";

const CancelButton = ({ taskId, onDeleteTask }) => {
  const deleteTaskHandler = (event) => {
    onDeleteTask(taskId);
    event.preventDefault();
  };
  return (
    <button className="cancel-btn" onClick={deleteTaskHandler}>
      <FontAwesomeIcon icon={faTimes} style={{ color: "black" }} />
    </button>
  );
};

export default CancelButton;
