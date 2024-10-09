import React from 'react'
import { useState } from 'react'
import themes from '../components/themes/Table.module.css'
import TableRow from '../components/newTable/TableRow'
import FormAddRow from '../components/newTable/FormAddRow'
import FormAddColumn from '../components/newTable/FormAddColumn'
import TableHeader from '../components/newTable/TableHeader'
import TableRowEdit from '../components/newTable/TableRowEdit'
import { RowData, TableRowMethods, TableRowEditMethods } from '../typesNewTable'

function NewTable() {
    const [data, setData] = useState<RowData[]>([
        {id: "00000", nome: "Ryan", idade: "20"},
        {id: "00001", nome: "Ariel", idade: "19"},
        {id: "00002", nome: "Dede", idade: "19"}
    ])
    const [newRowData, setNewRowData] = useState<RowData>({id: "", nome: "", idade: ""})
    const [keys, setKeys] = useState<string[]>(Object.keys(data[0]))
    const [newKey, setNewKey] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editRowId, setEditRowId] = useState<string>("")

    function changeEditMode() {
        setEditRowId("")
        setEditMode(!editMode)
    }
    function addColumn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
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
    function removeRow(id: string) {
        let auxData = [...data]
        auxData = auxData.filter(rowData => rowData.id !== id)
        if (auxData.length > 0) setData(auxData)
        // programa quebra se apagar todo o array
    }
    function editRow(editedRowData: RowData) {
        let auxData = [...data]
        const id = editedRowData.id
        auxData.forEach((rowData, index) => {
            if(rowData['id'] === id) {
                auxData[index] = editedRowData
            }
        })
        setData(auxData)
        setEditRowId("")
    }

    const tableRowMethods: TableRowMethods = {removeRow: removeRow, setEditRowId: setEditRowId}
    const tableRowEditMethods: TableRowEditMethods = {removeRow: removeRow, editRow: editRow}

    return (
        <>
        <button onClick={changeEditMode}>Editar</button>
        { editMode && (
            <>
            <FormAddColumn keys={keys} setNewKey={setNewKey} addColumn={addColumn}/>
            <FormAddRow keys={keys} data={data} updateNewRowData={updateNewRowData} addRow={addRow}/>
            </>
        )}
        <div className={themes.tabela}>
        <table border={1}>
            <TableHeader keys={keys} editMode={editMode} removeColumn={removeColumn}/>
            <tbody>
                {
                    data.map(rowData =>
                        <>
                        { rowData.id !== editRowId ? (
                            <TableRow rowData={rowData} editMode={editMode} keys={keys} methods={tableRowMethods}/>
                        ) : (
                            <TableRowEdit rowData={rowData} keys={keys} methods={tableRowEditMethods}/>
                        )}
                        </>
                    )
                }
            </tbody>
        </table>
        </div>
        </>
    )
}

export default NewTable