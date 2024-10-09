import React from "react"
import { useState } from "react"

type RowData = {
    id: string
    [key: string]: string
}

type TableRowEditMethods = {
    removeRow: (id: string) => void
    editRow: (editedRowData: RowData) => void
}

type TableRowEditProps = {
    rowData: RowData
    keys: string[]
    methods: TableRowEditMethods
}

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
                <button onClick={() => props.methods.removeRow(rowData.id)}>X</button>
            </td>
        </tr>
    )
}

export default TableRowEdit