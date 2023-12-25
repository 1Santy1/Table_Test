import React from "react";
import Icon1 from "./../images/Icon1.svg";
import Delete from "./../images/delete.svg";
import { useState } from "react";
import TableRows from "../addtable/addtable.tsx";
import Strok from "../strok/strok.tsx";

function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState<any>([]);
  const addTableRows = () => {
    const rowsInput = {
      name: "",
      main: "",
      equipment: "",
      invoices: "",
      profit: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <div className="container">
      <div className="row">
        <table className="table">
          <thead>
            <tr className="table_item_123">
              <td className="table_item_lvl">Уровень</td>     
              <td className="table_work_item">Наименование работ</td>
              <td className="table_item_cash">Основная з/п</td>
              <td className="table_item_equipment">Оборудование</td>
              <td className="table_item_expenses">Накладные расходы</td>
              <td className="table_item_profit">Сметная прибыль</td>
            </tr>

            <td className="svg_item">
              <button className="table_add_svg"
                onClick={addTableRows}
              >
                <img src={Icon1} alt="" />
              </button>
              <button className="table_delete_svg"
                onClick={deleteTableRows}
              >
                <img src={Delete} alt="" />
              </button>
            </td>
            <td className="table_numbers_item_glav">Южная строительная площадка</td>
            <td className="table_numbers_item">20 348</td>
            <td className="table_numbers_item">1 750</td>
            <td className="table_numbers_item">108,07</td>
            <td className="table_numbers_item">1 209 122,5</td>
          </thead>
          <tbody>
            <TableRows
              rowsData={rowsData}
              deleteTableRows={deleteTableRows}
              handleChange={handleChange}
            />
          </tbody>
        </table>
        <Strok />
      </div>
    </div>
  );
}
export default AddDeleteTableRows;
