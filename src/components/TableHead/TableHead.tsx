import {FC} from "react"
import {ITableHead} from "../../types"
import styles from './TableHead.module.scss'

interface ITableHeadProps {
    columns: ITableHead[],
}

export const TableHead: FC<ITableHeadProps> = ({ columns }) => {
    return (
        <div className={styles.TableHead}>
            {columns.map(({id, width, name}) => (
                <div
                    key={id}
                    style={{ width }}
                    className={styles.TableHeadCell}
                >
                    {name}
                </div>
            ))}
        </div>
    )
}
