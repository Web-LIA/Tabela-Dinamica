import React from "react";

type Row = {
    id: number,
    nome: string,
    idade: number
} // ainda é teste. futuramente por os tipos em outro lugar

function TableRow(row : Row) {
    const keys = Object.keys(row);
    return (
        <tr key={row.id}>
            {/* {
                keys.map( key => <td key={key}>{row[key]}</td>)
            } */}
            <td>{row.id}</td>
            <td>{row.nome}</td>
            <td>{row.idade}</td>
        </tr>
    )
}

export default TableRow;