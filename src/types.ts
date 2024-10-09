export type Row = {
    id: number,
    nome: string,
    idade: number
}

export type RowMethods = {
    removeRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    editRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type RowEditMethods = {
    removeRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    editRow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    setData: React.Dispatch<React.SetStateAction<Row[]>>
    setEditDataId: React.Dispatch<React.SetStateAction<number>>
}

export type TableRowProps = {
    row: Row,
    rowMethods: RowMethods
}

export type TableRowEditProps = {
    row: Row,
    rowMethods: RowEditMethods
    data: Row[]
}
