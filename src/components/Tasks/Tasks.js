import uuid from "react-uuid";
import Task from "./Task/Task";
import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: uuid(), description: "Small Business: Lab 2", done: true },
    { id: uuid(), description: "JavaScript 4: Lab 2", done: false },
    { id: uuid(), description: "Internship Assignment", done: false },
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h2>These are the tasks:</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={handleStatusChange}
          onTaskRemove={handleRemoveTask}
        ></Task>
      ))}
      <hr />
      <button onClick={() => handleClearTasks()}>Clear Tasks</button>
    </div>
  );
}

export default Tasks;
