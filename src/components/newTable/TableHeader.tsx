import React from "react"
import { TableHeaderProps } from "../../typesNewTable"
import themes from '../themes/Table.module.css'

function TableHeader(props: TableHeaderProps) {
    return (
        <thead>
            { props.editMode ? (
                <tr>
                    {
                        <>
                       <th key="id">id</th> 
                        {props.keys.filter(key => key !== "id").map(key => (
                            <th key={key}>{key} <button onClick={() => props.removeColumn(key)} className={themes.remover}>X</button></th>
                        ))}
                        <th colSpan={2}><button onClick={props.discardChanges}>Descartar Mudanças</button></th>
                        </>
                    }
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