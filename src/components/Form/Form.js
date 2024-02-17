import { useState } from "react";

function Form({ OnAddTask }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");
  const [isDescEmpty, setDescEmpty] = useState(false);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const processForm = (event) => {
    event.preventDefault();
    description === "" ? setDescEmpty(true) : setDescEmpty(false);
    if (description != "") {
      OnAddTask(description, status);
      setStatus("open");
      setDescription("");
    }
  };
  return (
    <form onSubmit={processForm}>
      <h2>Add a new task:</h2>
      <label>
        Description:
        <input
          type="text"
          maxLength={150}
          value={description}
          onChange={handleDescription}
        ></input>
      </label>

      <label>
        Status:
        <select value={status} onChange={handleStatus}>
          <option value="Open">Open</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <button type="submit">Add</button>
      {isDescEmpty && <h2>Enter a description</h2>}
    </form>
  );
}

export default Form;
