import {FC} from "react"
import {ITableHead, ITableRow} from "../../types"
import {TableRow} from "../TableRow";

interface ITableBodyProps {
    columns: ITableHead[],
    rowsData: ITableRow[],
}

export const TableBody: FC<ITableBodyProps> = ({ columns, rowsData }) => {
    return (
        <div>
            {rowsData.map(rowData => (
                <TableRow
                    key={rowData.id}
                    rowData={rowData}
                    columns={columns}
                />
            ))}
        </div>
    )
}

