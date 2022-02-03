import "./DoneButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DoneButton = ({ onUncompleteTask, taskId }) => {
  const onClickHandler = (event) => {
    onUncompleteTask(taskId);
    event.preventDefault();
  };
  return (
    <button className="done-btn" onClick={onClickHandler}>
      <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
    </button>
  );
};

export default DoneButton;
