import { FC } from "react"
import styles from './TableHeadline.module.scss'

interface ITableHeadlineProps {
    type: string,
    value: number
}

export const TableHeadline: FC<ITableHeadlineProps> = ({ type, value }) => {
    return (
        <div className={styles.TableHeadline}>
            {type} - {value}
        </div>
    )
}
