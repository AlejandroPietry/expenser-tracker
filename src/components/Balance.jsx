import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map( transaction => transaction.valor);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <h4>Seu saldo</h4>
        <h1>R$ {total}</h1>
        </>
    )
}
