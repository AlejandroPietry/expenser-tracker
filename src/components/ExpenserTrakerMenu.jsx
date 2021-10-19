import React, {useEffect, useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest';
import '../wwwroot/css/App.css'

export const ExpenserTrakerMenu = () => {
    const {addTransaction} = useContext(GlobalContext);
    
    if(localStorage.getItem('jwt') == null)
        window.location = '/login';

        useEffect(() => {
            async function fetchMyApi(){
              var request = await HttpRequest.httpGet('https://localhost:5001/api/Transacao/all-by-user');
              var jsonReponse = await request.json();
              addTransaction(jsonReponse);
            }
            fetchMyApi();
        },[])

    return (
        <>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </>
    )
}
