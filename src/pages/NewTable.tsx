import React from 'react'
import { useState, useRef } from 'react'
import themes from '../components/themes/Table.module.css'
import TableRow from '../components/newTable/TableRow'
import FormAddRow from '../components/newTable/FormAddRow'
import FormAddColumn from '../components/newTable/FormAddColumn'
import TableHeader from '../components/newTable/TableHeader'
import TableRowEdit from '../components/newTable/TableRowEdit'
import { RowData, TableRowMethods, TableRowEditMethods, TableHeaderMethods } from '../typesNewTable'
import DownloadButton from '../components/newTable/DownloadButton'

import editIcon from '../assets/editIcon.svg'
import checkIcon from '../assets/checkIcon.svg'
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
    const [editKeyIndex, setEditKeyIndex] = useState<number>(-1)
    const [backupData, setBackupData] = useState<RowData[]>(data)
    const inputRef = useRef<HTMLInputElement | null>(null);

    function changeEditMode() {
        setBackupData(data)
        setEditRowId("")
        setEditKeyIndex(-1)
        setEditMode(!editMode)
    }
    function discardChanges() {
        const backupKeys = Object.keys(backupData[0])
        setData(backupData)
        setKeys(backupKeys)
        const backupNewRowData: RowData = {id: ""}
        backupKeys.forEach(key => {backupNewRowData[key] = ""})
        setNewRowData(backupNewRowData)
        setEditRowId("")
        setEditKeyIndex(-1)
    }
    function addColumn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const upperKeys = keys.map(key => key.toUpperCase())
        const upperNewKey = newKey.toUpperCase()
        if(upperKeys.includes(upperNewKey)){
            inputRef.current?.setCustomValidity('Esse nome já existe!')
            inputRef.current?.reportValidity()
        } else {
            inputRef.current?.setCustomValidity('')
            setKeys([...keys, newKey])
            setNewRowData({...newRowData, [newKey]: ""})
            const newData: RowData[] = data.map(rowData => (
                {...rowData, [newKey]: ""}
            ))
            setData(newData)
        }
    }
    function removeColumn(removeKey: string) {
        let newKeys = keys.filter(key => (key !== removeKey))
        setKeys(newKeys)
        let aux: RowData = {id: newRowData.id}
        newKeys.forEach(key => aux[key] = newRowData[key])
        // let aux: RowData = newRowData
        // delete aux[removeKey]
        setNewRowData(aux)
        let newData: RowData[] = data
        newData.forEach((rowData, index) => {
            // delete rowData[removeKey]
            let {removeKey, ...aux} = rowData
            newData[index] = aux
        })
        setData(newData)
        // o delete tava bugando o backup, resolvi na gambiarra
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
                keys.forEach(key => {
                    if(editedRowData[key] === "") {
                        editedRowData[key] = auxData[index][key]
                    }
                })
                auxData[index] = editedRowData
            }
        })
        setData(auxData)
        setEditRowId("")
    }
    function editColumnKey(editedKeys: string[]) {
        const oldKey = keys[editKeyIndex]
        const editedKey = editedKeys[editKeyIndex]
        let editedNewRowData: RowData = {id: newRowData['id']}
        editedKeys.filter(key => key != "id").forEach(key => {
            if(key === editedKey) editedNewRowData[key] = newRowData[oldKey]
            else editedNewRowData[key] = newRowData[key]
        })
        let editedData: RowData[] = [...data]
        editedData.forEach((rowData, dataIndex) => {
            let editedRowData: RowData = {id: rowData['id']}
            editedKeys.filter(key => key!="id").forEach(key => {
                if (key === editedKey) {
                    editedRowData[key] = data[dataIndex][oldKey]
                } else {
                    editedRowData[key] = data[dataIndex][key]
                }
                editedData[dataIndex] = editedRowData
            })
        })
        setNewRowData(editedNewRowData)
        setData(editedData)
        setKeys(editedKeys)
        setEditKeyIndex(-1)
    }

    const tableRowMethods: TableRowMethods = {
        removeRow: removeRow,
        setEditRowId: setEditRowId,
        setEditKeyIndex: setEditKeyIndex
    }
    const tableRowEditMethods: TableRowEditMethods = {
        removeRow: removeRow,
        editRow: editRow
    }
    const tableHeaderMethods: TableHeaderMethods = {
        removeColumn: removeColumn,
        discardChanges: discardChanges,
        setEditKeyIndex: setEditKeyIndex,
        editColumnKey: editColumnKey,
        setEditRowId: setEditRowId
    }

    return (
        <>
        {editMode ? (
            <>
            <button onClick={changeEditMode} className={themes.editarButton}><img src={checkIcon} alt="Salvar Mudanças" /><div></div></button>
            <div className={themes.formulario}>
                <FormAddColumn keys={keys} setNewKey={setNewKey} addColumn={addColumn} inputRef={inputRef}/>
                <FormAddRow keys={keys} data={data} updateNewRowData={updateNewRowData} addRow={addRow}/>
            </div>
            </>
        ): (
            <button onClick={changeEditMode} className={themes.editarButton}><img src={editIcon} alt="Modo Editar" /><div></div></button>
        )}
        <div className={themes.tabela}>
        <table border={1}>
            <TableHeader keys={keys} editMode={editMode} editKeyIndex={editKeyIndex} methods={tableHeaderMethods}/>
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
        <DownloadButton tableData={data} fileName="tabela.csv"/>
        </>
    )
}

export default NewTable