import "./Task.scss";
import { MdAutoDelete } from "react-icons/md";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

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
    <div className="taskCard">
      <h2 className={props.task.done ? "line-through" : ""}>
        {props.task.description}
      </h2>
      <div>id: {props.task.id}</div>
      <div>
        Status:
        <span className={props.task.done ? "Completed" : "Open"}>
          {"  "}
          {props.task.done ? <FaCircleCheck /> : ""}
          {props.task.done ? " Completed" : "Open"}
        </span>
      </div>
      <div className="cardActions">
        <a
          className="changeStatus"
          href="javascript:void(0);"
          onClick={handleStatusClick}
        >
          {props.task.done || (
            <FaToggleOff
              size={30}
              style={{ marginBottom: -9, marginRight: 5 }}
            />
          )}
          {props.task.done && (
            <FaToggleOn
              size={30}
              style={{ marginBottom: -9, marginRight: 5 }}
            />
          )}
          Change Status
        </a>
        <a
          className="deleteTask"
          href="javascript:void(0);"
          onClick={handleRemoveClick}
        >
          <MdAutoDelete
            size={24}
            style={{ marginBottom: -7, marginRight: 5 }}
          />
          Remove Task
        </a>
      </div>
    </div>
  );
}

export default Task;
