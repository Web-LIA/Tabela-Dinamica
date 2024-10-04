import React from 'react';
import { useState } from 'react';
import './Table.css';
import TableRow from './TableRow';

type Row = {
    id: number,
    nome: string,
    idade: number
} // ainda é teste. futuramente por os tipos em outro lugar

function Table() {
    const [data, setData]  = useState<Row[]>([
        {id: 1, nome:'Ryan', idade:20},
        {id: 2, nome: 'Ariel', idade: 19},
        {id: 3, nome: 'Dede', idade: 19}

    ])
    const [newData, setNewData] = useState<Row>({id: 0, nome: '', idade: 0})
    const keys: string[] = Object.keys(data[0]);

    function updateNewData(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.id === 'id'){
            setNewData({...newData, id: parseInt(e.target.value)})
        }
        if (e.target.id === 'nome'){
            setNewData({...newData, nome: e.target.value})
        }
        if (e.target.id === 'idade'){
            setNewData({...newData, idade: parseInt(e.target.value)})
        }
    }

    function addRow(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setData([...data, {id: newData.id, nome: newData.nome, idade:newData.idade}])
    }
    function removeRow(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let auxData = [...data]
        auxData = auxData.filter(row => row.id !== parseInt(e.currentTarget.id))
        // ta quebrando quando apaga todo o array
        setData(auxData)
    }
    
    return (
        <>
        <form onSubmit={addRow}>
            <input id='id' type='number' placeholder='id' onChange={updateNewData}/>
            <input id='nome' type='text' placeholder='nome' onChange={updateNewData}/>
            <input id='idade' type='number' placeholder='idade' onChange={updateNewData}/>
            <button type='submit'>Adicionar</button>
        </form>
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
                        <TableRow row={row} rowMethods={{removeRow: removeRow}}/>
                    )
                }
            </tbody>
        </table>
        </>
    )    
}

export default Table;