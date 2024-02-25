import { useState } from "react";
import "./Form.scss";
import { IoMdAddCircleOutline } from "react-icons/io";

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
    <form className="form" onSubmit={processForm}>
      <h1>Add a new task:</h1>
      <div className="formContainer">
        <label>
          Description:
          <input
            type="text"
            maxLength={150}
            value={description}
            onChange={handleDescription}
          ></input>
        </label>
        {isDescEmpty && <p className="errorMessage">Enter a description</p>}

        <label>
          Status:
          <select className="dropdown" value={status} onChange={handleStatus}>
            <option className="option" value="Open">
              Open
            </option>
            <option className="option" value="Completed">
              Completed
            </option>
          </select>
        </label>
        <button type="submit">
          <IoMdAddCircleOutline
            size={20}
            style={{ marginBottom: -3, marginRight: 5 }}
          />
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
