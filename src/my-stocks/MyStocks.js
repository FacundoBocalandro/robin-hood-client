import React, {useEffect, useState} from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import {get} from "../utils/http";

const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
};

const MyStocks = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        get('get-all')
            .then(res => setData(res));
        // eslint-disable-next-line
    }, [])

    const columns = [
        { title: 'Name', field: 'companyName' },
        { title: 'Ticker', field: 'tickerName' },
        { title: 'Shares', field: 'amount' },
        { title: 'Purchase Price', field: 'purchasePrice', render: data => `$${data.purchasePrice}` },
        { title: 'Actual Price', field: 'actualPrice', render: data => `$${data.actualPrice}` },
        { title: 'Actual Value', field: 'actualTotal', render: data => `$${data.actualTotal}` },
        { title: 'Result', field: 'result', render: data => `%${data.result}` },
    ];

    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                title="My Stocks"
                columns={columns}
                data={data}
                options={{
                    grouping: true
                }}
            />
        </div>
    )
};

export default MyStocks;
