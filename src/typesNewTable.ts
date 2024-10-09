export type RowData = {
    id: string
    [key: string]: string
}

export type TableRowMethods = {
    removeRow: (id: string) => void
    setEditRowId: React.Dispatch<React.SetStateAction<string>>
}

export type TableRowProps = {
    rowData: RowData
    keys: string[]
    editMode: boolean
    methods: TableRowMethods
}

export type TableRowEditMethods = {
    removeRow: (id: string) => void
    editRow: (editedRowData: RowData) => void
}

export type TableRowEditProps = {
    rowData: RowData
    keys: string[]
    methods: TableRowEditMethods
}

export type FormAddColumnProps = {
    keys: string[]
    setNewKey: React.Dispatch<React.SetStateAction<string>>
    addColumn: (e: React.FormEvent<HTMLFormElement>) => void
}

export type FormAddRowProps = {
    keys: string[]
    data: RowData[]
    updateNewRowData: (e: React.ChangeEvent<HTMLInputElement>) => void
    addRow: (e: React.FormEvent<HTMLFormElement>) => void
}

export type TableHeaderProps = {
    keys: string[]
    editMode: boolean
    removeColumn: (removeKey: string) => void
    discardChanges: () => void
}