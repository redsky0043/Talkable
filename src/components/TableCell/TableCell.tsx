import {FC, Fragment} from 'react'
import styles from './TableCell.module.scss'
import {ITableRow} from "../../types"
import {stringCut} from "../../common/stringCut"

interface ITableCellProps {
    data: ITableRow,
    mapKey: string,
    width: string,
}

type KeysToDisplay = {
    [key: string]: string[];
}

const keysToDisplay: KeysToDisplay = {
    event: ['name', 'date', 'total'],
    advocate: ['advocate_mail', 'advocate'],
    friend: ['friend_mail', 'friend'],
    status: ['status', 'status_massage']
}

export const TableCell: FC<ITableCellProps> = ({ data, width, mapKey }) => {
    return (
        <div className={styles.TableCell} style={{ width }}>
            {keysToDisplay[mapKey].map(key => (
                <Fragment key={key}>
                    {key === 'name' || key === 'status' ? (
                        <p className={styles.TableCellCapitalize}>
                            {data[key]}
                        </p>
                    ) : key === 'advocate_mail' || key === 'friend_mail' ? (
                        <p className={styles.TableCellMail}>
                            {stringCut(data[key], 23)}
                        </p>
                    ) : key === 'date' ? (
                        <time className={styles.TableCellDate}>
                            {data[key]}
                        </time>
                    ) : key === 'advocate' || key === 'friend' ? (
                        <p className={styles.TableCellPosition}>
                            {data[key]}
                        </p>
                    ) : key === 'total' ? (
                        <p className={styles.TableCellTotal}>
                            {data[key]}
                        </p>
                    ) : key === 'status_massage' ? (
                        <p className={data[key].includes('marked as fraud') ? styles.TableCellMessageError : styles.TableCellMessage}>
                            {data[key]}
                        </p>
                    ) : (
                        <p>{data[key]}</p>
                    )}
                </Fragment>
            ))}
        </div>
    )
}

