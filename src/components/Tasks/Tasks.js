import Task from "./Task/Task";

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
  return (
    <div>
      <h2>These are the tasks:</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        ></Task>
      ))}
      <hr />
      <button onClick={() => onClearTasks()}>Clear Tasks</button>
    </div>
  );
}

export default Tasks;
