import React from 'react'
import { useState } from 'react'
//import themes from '../components/themes/Table.module.css'
import TableRow from '../components/newTable/TableRow'
import FormAddRow from '../components/newTable/FormAddRow'

type RowData = {
    id: string
    [key: string]: string
}

function NewTable() {
    const [data, setData] = useState<RowData[]>([
        {id: "00000", nome: "Ryan", idade: "20"},
        {id: "00001", nome: "Ariel", idade: "19"},
        {id: "00002", nome: "Dede", idade: "19"}
    ])
    const [keys, setKeys] = useState<string[]>(Object.keys(data[0]))
    const [newRowData, setNewRowData] = useState<RowData>({id: "", nome: "", idade: ""})

    function addColumn(newKey: string) {
        setKeys([...keys, newKey])
        setNewRowData({...newRowData, [newKey]: ""})
        const newData: RowData[] = data.map(rowData => (
            {...rowData, [newKey]: ""}
        ))
        setData(newData)
    }
    function removeColumn(removeKey: string) {
        setKeys(keys.filter(key => (key !== removeKey)))
        let aux: RowData = newRowData
        delete aux[removeKey]
        setNewRowData(aux)
        let newData: RowData[] = data
        newData.forEach(rowData => {
            delete rowData[removeKey]
        })
        setData(newData)
    }
    function updateNewRowData(e: React.ChangeEvent<HTMLInputElement>) {
        keys.map(key => {
            if(key === e.target.id) {
                setNewRowData({...newRowData, [key]: e.target.value})
            }
        })
    }
    function generateId() {
        let id = ""
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let index = 0
        do {
            id = ""
            for (let i = 0; i < 5; i++) {
                index = Math.floor(Math.random() * characters.length);
                id += characters[index];
            }
        } while(data.find(rowData => {return (rowData.id === id)}))
        return id
    }
    function addRow(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setData([...data, {...newRowData, id: generateId()}])
    }

    return (
        <>
        <button onClick={() => addColumn("teste")}>Adicionar Campo</button>
        <button onClick={() => removeColumn("teste")}>Remover Campo</button>
        <FormAddRow keys={keys} data={data} updateNewRowData={updateNewRowData} addRow={addRow}/>
        <table border={1}>
            <thead>
                <tr>
                    {
                        keys.map(key => <th key={key}>{key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        data.map(rowData => <TableRow rowData={rowData} keys={keys}/>)
                    }
            </tbody>
        </table>
        </>
    )
}

export default NewTable