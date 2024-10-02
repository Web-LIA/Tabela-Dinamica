import React from 'react';
import './Tabela.css';
import TableRow from './TableRow';

type Row = {
    id: number,
    nome: string,
    idade: number
} // ainda é teste. futuramente por os tipos em outro lugar

function Tabela() {
    const data:Row[] = [
        {id: 1, nome: 'Ryan', idade: 20},
        {id: 2, nome: 'Ariel', idade: 19},
        {id: 3, nome: 'Dede', idade: 19}
    ];

    const keys = Object.keys(data[0]);

    return (
        <table>
            <thead>
                <tr>
                    {
                        keys.map(key => <th key={key}>{key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(row =>
                        <TableRow id={row.id} nome={row.nome} idade={row.idade} />
                    )
                }
            </tbody>
        </table>
    )    
}

export default Tabela;