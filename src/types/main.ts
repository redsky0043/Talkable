export interface ITableHead {
    id: number,
    name: string,
    width: string,
    key: string,
}

export interface ITableRow {
    id: number,
    name: string;
    date: string;
    total: string;
    advocate_mail: string;
    advocate: string;
    friend_mail: string;
    friend: string;
    status: string;
    status_massage: string;
    [key: string]: string | number;
}

export interface ITableData {
    type: string,
    thead: ITableHead[],
    tbody: ITableRow[],
}
