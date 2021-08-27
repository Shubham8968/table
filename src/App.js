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

  const [editFormData, setEditFormData] = useState({
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

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedName = {
      id: editNameId,
      fullName: editFormData.fullName,
    };
    const newNames = [...names];
    const index = names.findIndex((name) => name.id === editNameId);
    newNames[index] = editedName;

    setNames(newNames);
    setEditNameId(null);
  };

  const handleEditClick = (event, name) => {
    event.preventDefault();
    setEditNameId(name.id);

    const formValues = {
      fullName: name.fullName,
    };
    setEditFormData(formValues);
  };

  const handleCancleClick =() =>{
    setEditNameId(null);
  }

  const handleDeleteClick = (nameId) =>{
    const newNames = [...names]

    const index = names.findIndex((name) => name.id === nameId);

    newNames.splice(index,1);

    setNames(newNames);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
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
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancleClick={handleCancleClick}
                  />
                ) : (
                  <ReadOnlyRow name={name}
                   handleEditClick={handleEditClick}
                   handleDeleteClick={handleDeleteClick}
                   />
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
