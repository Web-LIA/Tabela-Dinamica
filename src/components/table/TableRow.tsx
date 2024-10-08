import React from "react";
import { Row, TableRowProps } from "../../types";

function TableRow(props: TableRowProps) {
    const row = props.row
    type tableCell = keyof typeof row; 
    const keys: tableCell[] = Object.keys(row).filter((key): key is keyof Row => key in row);
    
    return (
        <tr key={row.id}>
            {
                keys.map( key => <td key={key}>{row[key]}</td>)
            }
            <td>
                <button name={row.id+""} onClick={props.rowMethods.editRow}>Editar</button>
            </td>
            <td>
                <button name={row.id+""} onClick={props.rowMethods.removeRow}>X</button>
            </td>
        </tr>
    )
}

export default TableRow;