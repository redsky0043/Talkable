import {FC} from "react"
import {ITableHead, ITableRow} from "../../types"
import {TableCell} from "../TableCell"
import styles from './Table.module.scss'

interface ITableRowProps {
    columns: ITableHead[],
    rowData: ITableRow,
}

export const TableRow: FC<ITableRowProps> = ({ columns, rowData }) => {
    return (
        <div className={styles.TableRow}>
            {columns.map(({ id, key, width }) => (
                <TableCell
                    key={id}
                    mapKey={key}
                    width={width}
                    data={rowData}
                />
            ))}
        </div>
    )
}
