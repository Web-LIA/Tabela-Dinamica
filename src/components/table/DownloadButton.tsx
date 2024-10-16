import React from "react"
import { RowData } from "../../typesTable"

type DownloadButtonProps = {
    tableData: RowData[],
    fileName: string
}

function DownloadButton(props: DownloadButtonProps) {
    function convertToCSV(tableData: RowData[]) {
        let tableKeys = Object.keys(tableData[0])
        let rows = tableData.map(row =>
          tableKeys.map(key => {
            let value = row[key]
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value
          }).join(',')
        )
        return `${tableKeys.join(',')}\n${rows.join('\n')}`
    }
    function downloadCSV (tableData: RowData[], filename: string) {
        const csv = convertToCSV(tableData)
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url)
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
      
    return (
        <button onClick={() => downloadCSV(props.tableData, props.fileName)}>Baixar CSV</button>
    )
}

export default DownloadButton