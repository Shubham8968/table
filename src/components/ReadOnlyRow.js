import React from "react";

const ReadOnlyRow = ({ name, handleEditClick }) => {
  return (
    <tr>
      <td>{name.fullName}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, name)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
