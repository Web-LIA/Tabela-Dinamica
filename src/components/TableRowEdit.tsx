import React from "react";
import { useState } from "react";

type Row = {
    id: number,
    nome: string,
    idade: number,
} // ainda é teste. futuramente por os tipos em outro lugar

type RowMethods = {
    removeRow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    editRow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    sendEditRow?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type TableRowProps = {
    row: Row,
    rowMethods: RowMethods
}

function TableRowEdit(props: TableRowProps) {
    const row = props.row
    type tableCell = keyof typeof row
    const keys: tableCell[] = Object.keys(row).filter((key): key is keyof Row => key in row && key != "id")
    const [newRow, setNewRow] = useState<Row>(row)

    function updateRow(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.placeholder == 'nome') {
            setNewRow({...newRow, nome: e.target.value})
        }
        if(e.target.placeholder == 'idade') {
            setNewRow({...newRow, idade: parseInt(e.target.value)})
        }
    }

    return (
        <tr key={row.id}>
            <td key={'id'}>{row['id']}</td>
            {
                keys.map( key => <td key={key}><input type="text" placeholder={key} onChange={updateRow}/></td>)
            }
            <td>
                <button id={row.id+""} onClick={props.rowMethods.sendEditRow}>Enviar</button>
                <button id={row.id+""} onClick={props.rowMethods.removeRow}>X</button>
            </td>
        </tr>
    )
}

export default TableRowEdit;