function Task(props) {
  const handleStatusClick = () => {
    const id = props.task.id;
    props.onStatusChange(id);
  };
  const handleRemoveClick = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
  };
  return (
    <div>
      <hr />
      <div>id: {props.task.id}</div>
      <h3>{props.task.description}</h3>
      <div>Status: {props.task.done ? "Completed" : "Open"}</div>
      <button onClick={handleStatusClick}>Change Status</button>
      <button onClick={handleRemoveClick}>Remove Task</button>
    </div>
  );
}

export default Task;
