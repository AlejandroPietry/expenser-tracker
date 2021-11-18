import React, {useEffect, useContext, useState}from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import alertToast from 'react-hot-toast';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest';
import { HubConnectionBuilder } from '@microsoft/signalr';
import Url from '../wwwroot/HttpUtils/Url';
import '../wwwroot/css/App.css'
import { Header } from './Header';

export const ExpenserTrakerMenu = () => {
    const [connection, setConnection] = useState(null);
    const {addTransaction} = useContext(GlobalContext);
    
    useEffect(() => {
        const newConnection = new HubConnectionBuilder().withUrl(Url.WebApi() + 'hubs/notify')
        .withAutomaticReconnect()
        .build();

        setConnection(newConnection);
    },[]);

    useEffect(() => {
        if(connection){
            connection.start()
            .then(result => {
                console.log("Conectado");
                connection.on('receiveNotify', message => {

                    alertToast(message,{
                        icon:'👏',
                    });
                })
            })
        }
    },[connection])

    if(localStorage.getItem('jwt') == null)
        window.location = '/login';

        useEffect(() => {
            async function fetchMyApi(){
              var request = await HttpRequest.httpGet(Url.WebApi() + 'api/Transacao/all-by-user');
              var jsonReponse = await request.json();
              addTransaction(jsonReponse);
            }
            fetchMyApi();
        },[])

    return (
        <>
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </>
    )
}
