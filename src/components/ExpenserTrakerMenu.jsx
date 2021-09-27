import React from 'react'
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import '../wwwroot/css/App.css'

export const ExpenserTrakerMenu = () => {
    if(localStorage.getItem('jwt') == null)
        window.location = '/login';

    return (
        <>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </>
    )
}
