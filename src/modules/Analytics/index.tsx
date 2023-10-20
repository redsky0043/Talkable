import { FC } from 'react'
import {Table} from "../../components/Table"
import {mockData} from '../../store/mockData'


const Analytics: FC = () => {
    return (
        <Table data={mockData}/>
    )
}

export default Analytics
