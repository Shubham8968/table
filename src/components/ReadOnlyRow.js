import React from "react";

const ReadOnlyRow = ({ name, handleEditClick,handleDeleteClick }) => {
  return (
    <tr>
      <td>{name.fullName}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, name)}>
          Edit
        </button>
        <button type="button" onClick={()=>handleDeleteClick(name.id)}> Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
