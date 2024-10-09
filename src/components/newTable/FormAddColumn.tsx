import React from "react"
import { FormAddColumnProps } from "../../typesNewTable"

function FormAddColumn(props: FormAddColumnProps) {
    //adcionar tratamento de erros futuramente

    return(
        <form onSubmit={props.addColumn}>
            <input type="text" placeholder="novo campo" onChange={(e) => props.setNewKey(e.target.value)}/>
            <button type="submit">Adicionar Coluna</button>
        </form>
    )
}

export default FormAddColumn