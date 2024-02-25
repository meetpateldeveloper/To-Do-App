import Task from "./Task/Task";
import { GrClearOption } from "react-icons/gr";
import "./Tasks.scss";

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
  return (
    <div className="tasksWrapper">
      <div className="Tasks">
        <h1>These are the tasks:</h1>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onStatusChange={onStatusChange}
            onTaskRemove={onTaskRemove}
          ></Task>
        ))}
        <a
          className="clearTask"
          href="javascript:void(0);"
          onClick={() => onClearTasks()}
        >
          <GrClearOption />
          Clear Tasks
        </a>
      </div>
    </div>
  );
}

export default Tasks;
