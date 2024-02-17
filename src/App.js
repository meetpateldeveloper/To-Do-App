import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
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

  const handleAddTask = (description, status) => {
    const updatedArray = [
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status === "Completed",
      },
    ];
    setTasks(updatedArray);
  };

  return (
    <div>
      <Header />
      <Tasks
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onTaskRemove={handleRemoveTask}
        onClearTasks={handleClearTasks}
      />
      <Form OnAddTask={handleAddTask} />
    </div>
  );
}

export default App;
