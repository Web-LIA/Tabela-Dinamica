import React from "react"

type RowData = {
    id: string
    [key: string]: string
}

type FormAddRowProps = {
    keys: string[]
    data: RowData[]
    updateNewRowData: (e: React.ChangeEvent<HTMLInputElement>) => void
    addRow: (e: React.FormEvent<HTMLFormElement>) => void
}

function FormAddRow(props: FormAddRowProps) {
    //adcionar tratamento de erros futuramente
    const keys = props.keys.filter(key => (key !== "id"))

    return(
        <form onSubmit={props.addRow}>
            {
                keys.map(key => <input type="text" placeholder={key} id={key} onChange={props.updateNewRowData}/>)
            }
            <button type="submit">Adicionar Linha</button>
        </form>
    )
}

export default FormAddRow