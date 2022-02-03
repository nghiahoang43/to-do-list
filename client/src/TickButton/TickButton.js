import "./TickButton.css";

const TickButton = ({taskId, onCompleteTask}) => {
  const completeTaskHandler = (event) => {
    onCompleteTask(taskId);
  }
  return <button className="tick-btn" onClick={completeTaskHandler}></button>;
};

export default TickButton;
