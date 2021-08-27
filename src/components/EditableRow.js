import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancleClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name "
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancleClick}>
          Cancle
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
