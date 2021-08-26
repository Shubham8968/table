import React from 'react'

const EditableRow = () => {
    return (
        <tr>
        <td>
            <input
            type="text"
            required="required"
            placeholder="Enter a name "
            name="fullName"
            >
            </input>
        
        </td>
      </tr>
    );
};

export default EditableRow;
