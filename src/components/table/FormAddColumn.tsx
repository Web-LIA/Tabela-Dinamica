import React from "react"
import { FormAddColumnProps } from "../../types/typesTable"

function FormAddColumn(props: FormAddColumnProps) {
    //adcionar tratamento de erros futuramente

    function updateNewKey(newKey: string) {
        props.setNewKey(newKey)
        props.inputRef.current?.setCustomValidity('')
    }

    return(
        <form onSubmit={props.addColumn}>
            <input 
                type="text" 
                placeholder="novo campo" 
                onChange={(e) => updateNewKey(e.target.value)} 
                required 
                ref={props.inputRef}
            />
            <button type="submit">Adicionar Coluna</button>
        </form>
    )
}

export default FormAddColumn