import React from "react"
import { RowData, FormAddRowProps } from "../../typesNewTable"

function FormAddRow(props: FormAddRowProps) {
    //adcionar tratamento de erros futuramente
    const keys = props.keys.filter(key => (key !== "id"))

    return(
        <form onSubmit={props.addRow}>
            {
                keys.map(key => <input type="text" placeholder={key} id={key} onChange={props.updateNewRowData} required/>)
            }
            <button type="submit">Adicionar Linha</button>
        </form>
    )
}

export default FormAddRow