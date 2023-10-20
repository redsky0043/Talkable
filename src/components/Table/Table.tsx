import {FC} from "react"
import {TableHeadline} from "../TableHeadline"
import {ITableData} from "../../types"
import {TableHead} from "../TableHead"
import {TableBody} from "../TableBody"
import styles from './Table.module.scss'

interface ITableProps {
    data: ITableData,
}

export const Table: FC<ITableProps> = ({ data }) => {
    const { type, thead, tbody } = data

    return (
        <>
            <div className={styles.TableHeader}>
                <TableHeadline
                    type={type}
                    value={tbody.length}
                />
                <TableHead columns={thead}/>
            </div>
            <TableBody
                columns={thead}
                rowsData={tbody}
            />
        </>
    )
}
