import React from "react"
import { RowData, TableRowMethods, TableRowProps } from "../../typesNewTable"
import themes from '../themes/Table.module.css'

function TableRow(props: TableRowProps) {
    const rowData = props.rowData
    return (
        <tr>
            {
                props.keys.map( key => <td key={key}>{rowData[key]}</td>)
            }
            { props.editMode && (
                <>
                <td>
                    <button onClick={() => props.methods.setEditRowId(rowData.id)}>Editar</button>
                </td>
                <td>
                    <button onClick={() => props.methods.removeRow(rowData.id)} className={themes.remover}>X</button>
                </td>
                </>
            )}
        </tr>
    )
}

export default TableRow