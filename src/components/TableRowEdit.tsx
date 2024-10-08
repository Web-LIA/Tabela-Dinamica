import React from "react";
import { useState } from "react";
import { Row, TableRowEditProps } from "../types";

function TableRowEdit(props: TableRowEditProps) {
    const row = props.row
    const data = props.data
    type tableCell = keyof typeof row
    const keys: tableCell[] = Object.keys(row).filter((key): key is keyof Row => key in row && key != "id")
    const [editedData, setEditedData] = useState<Row>(row)

    function updateEditedData(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.placeholder == 'nome') {
            setEditedData({...editedData, nome: e.target.value})
        }
        if(e.target.placeholder == 'idade') {
            setEditedData({...editedData, idade: parseInt(e.target.value)})
        }
    }
    function sendEditRow(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let auxData = [...data]
        const id = parseInt(e.currentTarget.id)
        auxData.map((row, index) => {
            if(row['id'] == id) {
                auxData[index] = editedData
            }
        })
        props.rowMethods.setData(auxData)
        props.rowMethods.setEditDataId(0)
    }

    return (
        <tr key={row.id}>
            <td key={'id'}>{row['id']}</td>
            {
                keys.map( key => <td key={key}><input type="text" placeholder={key} onChange={updateEditedData}/></td>)
            }
            <td>
                <button id={row.id+""} onClick={sendEditRow}>Enviar</button>
            </td>
            <td>
                <button id={row.id+""} onClick={props.rowMethods.removeRow}>X</button>
            </td>
        </tr>
    )
}

export default TableRowEdit;