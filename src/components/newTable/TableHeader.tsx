import React from "react"
import { useState } from "react"
import { TableHeaderProps } from "../../typesNewTable"
import themes from '../themes/Table.module.css'
import editarImg from '../../assets/home/Edit.png'

function TableHeader(props: TableHeaderProps) {
    const [editedKey, setEditedKey] = useState<string>("")

    function sendEditedKeys() {
        let aux = [...props.keys]
        if(editedKey !== "") aux[props.editKeyIndex] = editedKey
        props.methods.editColumnKey(aux)
        setEditedKey("")
    }
    function changeInputColumn(index: number) {
        props.methods.setEditKeyIndex(index)
        props.methods.setEditRowId("")
    }

    return (
        <thead>
            { props.editMode ? (
                <tr>    
                    <th key="id">id</th> 
                    {props.keys.filter(key => key !== "id").map((key, index) => (
                        <>
                        { (props.editKeyIndex === index + 1) ? (
                            <th key={key}>
                                <input type="text" placeholder={key} onChange={(e) => setEditedKey(e.target.value)}/>
                                <div>
                                    <button onClick={sendEditedKeys}>Enviar</button>
                                    <button onClick={() => props.methods.removeColumn(key)} className={themes.remover}>
                                        X
                                    </button>
                                </div>
                            </th>
                        ) : (
                            <th key={key}>
                                {key}
                                <div>
                                    <button onClick={() => changeInputColumn(index + 1)} className={themes.editar}><img src={editarImg} alt="Editar" /> </button>
                                    <button onClick={() => props.methods.removeColumn(key)} className={themes.remover}>
                                        X
                                    </button>
                                </div>
                            </th>
                        )}
                        </>
                    ))}
                    <th colSpan={2}><button onClick={props.methods.discardChanges}>Descartar Mudanças</button></th>
                </tr>
            ) : (
                <tr>
                    {
                        props.keys.map(key => <th key={key}>{key}</th>)
                    }
                </tr>
            )}
        </thead>
    )
}

export default TableHeader