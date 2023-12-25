import React from "react";
import Icon1 from "./../images/Icon1.svg";
import Delete from "./../images/delete.svg";
import { useState } from "react";
import TableRows from "../addtable/addtable.tsx";

function Strok() {
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
        <table className="table_item_1">
            <thead>
                <td className="table_svg_add">
                    <button className="table_button"
                        onClick={addTableRows}
                    >
                        <img src={Icon1} alt="" />
                    </button>
                    <button className="table_svg_delete"
                        onClick={deleteTableRows}
                    >
                        <img src={Delete} alt="" />
                    </button>
                </td>

                <td className="table_item_work">Фундаментальные работы</td>
                <td className="table_item">20 348</td>
                <td className="table_item">1 750</td>
                <td className="table_item">108,07</td>
                <td className="table_item">1 209 122,5</td>
            </thead>
            <tbody>
                <TableRows
                    rowsData={rowsData}
                    deleteTableRows={deleteTableRows}
                    handleChange={handleChange}
                />
            </tbody>
        </table>
    );
}
export default Strok;
