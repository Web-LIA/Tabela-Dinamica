import React from "react";

type Row = {
    id: number,
    nome: string,
    idade: number,
} // ainda é teste. futuramente por os tipos em outro lugar

type RowMethods = {
    removeRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    editRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type TableRowProps = {
    row: Row,
    rowMethods: RowMethods
}

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
                <button id={row.id+""} onClick={props.rowMethods.editRow}>Editar</button>
                <button id={row.id+""} onClick={props.rowMethods.removeRow}>X</button>
            </td>
        </tr>
    )
}

export default TableRow;