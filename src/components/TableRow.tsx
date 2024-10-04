import React from "react";

type Row = {
    id: number,
    nome: string,
    idade: number
} // ainda é teste. futuramente por os tipos em outro lugar

function TableRow(row : Row) {
    type tableCell = keyof typeof row; 
    const keys: tableCell[] = Object.keys(row).filter((key): key is keyof Row => key in row);
    
    return (
        <tr key={row.id}>
            {
                keys.map( key => <td key={key}>{row[key]}</td>)
            }
        </tr>
    )
}

export default TableRow;