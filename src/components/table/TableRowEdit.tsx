import React from "react"
import { useState } from "react"
import { RowData, TableRowEditMethods, TableRowEditProps } from "../../typesTable"
import themes from '../themes/table.module.scss'
import checkIcon from '../../assets/checkIcon.svg'

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
                <button onClick={() => props.methods.editRow(editedRowData)} className={themes.enviar}> <img src={checkIcon} alt="Enviar" /></button>
            </td>
            <td>
                <button onClick={() => props.methods.removeRow(rowData.id)} className={themes.remover}>X</button>
            </td>
        </tr>
    )
}

export default TableRowEdit