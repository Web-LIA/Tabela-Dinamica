import React from "react"
import { useState } from "react"
import { RowData, TableRowEditMethods, TableRowEditProps } from "../../typesNewTable"
import themes from '../themes/Table.module.css'

function TableRowEdit(props: TableRowEditProps) {
    const rowData = props.rowData
    const [editedRowData, setEditedRowData] = useState<RowData>(rowData)

    function updateEditedRowData(e: React.ChangeEvent<HTMLInputElement>) {
        props.keys.map(key => {
            if(key === e.target.name) {
                setEditedRowData({...editedRowData, [key]: e.target.value})
            }
        })
    }

    return (
        <tr>
            <td key="id">{rowData.id}</td>
            {
                props.keys.filter(key => key !== "id").map( key => (
                    <td key={key}>
                        <input type="text" name={key} placeholder={rowData[key]} onChange={updateEditedRowData}/>
                    </td>
                ))
            }
            <td>
                <button onClick={() => props.methods.editRow(editedRowData)}>Enviar</button>
            </td>
            <td>
                <button onClick={() => props.methods.removeRow(rowData.id)} className={themes.remover}>X</button>
            </td>
        </tr>
    )
}

export default TableRowEdit