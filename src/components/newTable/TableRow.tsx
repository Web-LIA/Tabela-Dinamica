import React from "react"

type RowData = {
    id: string
    [key: string]: string
}

type TableRowProps = {
    rowData: RowData
    keys: string[]
    editMode: boolean
    methods?: any
}

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
                    <button name={rowData.id+""}>Editar</button>
                </td>
                <td>
                    <button name={rowData.id+""}>X</button>
                </td>
                </>
            )}
        </tr>
    )
}

export default TableRow