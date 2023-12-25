import React from "react";
import basket from "./../images/basket.svg";

function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { level, name, main,  equipment, invoices, profit} = data;
    return (
      <tr key={index}>
        <td></td>
        <td>
          <input
            type="text"
            value={name}
            onChange={(evnt) => handleChange(index, evnt)}
            name="name"
            className="form-control2"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={main}
            onChange={(evnt) => handleChange(index, evnt)}
            name="main"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={equipment}
            onChange={(evnt) => handleChange(index, evnt)}
            name="equipment"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={invoices}
            onChange={(evnt) => handleChange(index, evnt)}
            name="invoices"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={profit}
            onChange={(evnt) => handleChange(index, evnt)}
            name="emailAddress"
            className="form-control"
          />{" "}
        </td>

      </tr>
    );
  });
}
export default TableRows;
