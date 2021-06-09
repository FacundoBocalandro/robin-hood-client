import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

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

    const data = [
        { name: 'Company 1', ticker: 'COM1', shares: 10, purchase: 55, price: 63, value: 183000, result: "10%" },
        { name: 'Company 2', ticker: 'COM2', shares: 3, purchase: 10, price: 8, value: 23200, result: "-15%" },
        { name: 'Company 3', ticker: 'COM3', shares: 18, purchase: 98, price: 120, value: 275000, result: "30%" },
    ]

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Ticker', field: 'ticker' },
        { title: 'Shares', field: 'shares' },
        { title: 'Purchase Price', field: 'purchase' },
        { title: 'Actual Price', field: 'price' },
        { title: 'Value', field: 'value' },
        { title: 'Result', field: 'result' },

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
