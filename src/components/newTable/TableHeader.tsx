import React from "react"

type TableHeaderProps = {
    keys: string[]
    editMode: boolean
    removeColumn: (removeKey: string) => void
}

function TableHeader(props: TableHeaderProps) {
    return (
        <thead>
            { props.editMode && (
                <tr>
                    {
                        props.keys.map(key => <th><button onClick={() => props.removeColumn(key)}>X</button></th>)
                    }
                </tr>  
            )}
            <tr>
                {
                    props.keys.map(key => <th key={key}>{key}</th>)
                }
            </tr>
        </thead>
    )
}

export default TableHeader