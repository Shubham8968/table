import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [names, setNames] = useState(data);
  const [addFormdata, setAddFromData] = useState({
    fullName: "",
  });

  const [editNameId, setEditNameId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormdata };
    newFormData[fieldName] = fieldValue;

    setAddFromData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newName = {
      id: nanoid(),
      fullName: addFormdata.fullName,
    };
    const newNames = [...names, newName];
    setNames(newNames);
  };

  const handleEditClick = (event, name) => {
    event.preventDefault();
    setEditNameId(name.id);
  };

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Names</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name) => (
              <Fragment>
                {editNameId === name.id ? (
                  <EditableRow />
                ) : (
                  <ReadOnlyRow name={name} handleEditClick={handleEditClick}/>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a New name</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name "
          onChange={handleAddFormChange}
        />
        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default App;
