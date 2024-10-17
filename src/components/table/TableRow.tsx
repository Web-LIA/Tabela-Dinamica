import React from "react"
import { RowData, TableRowMethods, TableRowProps } from "../../types/typesTable"
import themes from '../themes/table.module.scss'
import editarImg from '../../assets/home/Edit.png'
function TableRow(props: TableRowProps) {
    const rowData = props.rowData

    function changeInputRow(id: string) {
        props.methods.setEditRowId(id)
        props.methods.setEditKeyIndex(-1)
    }

    return (
        <tr>
            { props.idVisibility ? (
                props.keys.map( key => <td key={key}>{rowData[key]}</td>)
            ) : (
                props.keys.filter(key => key !== "id").map( key => <td key={key}>{rowData[key]}</td>)
            )}
            { props.editMode && (
                <>
                <td>
                    <button onClick={() => changeInputRow(rowData.id)} className={themes.editar}> <img src={editarImg} alt="Editar" /> </button>
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