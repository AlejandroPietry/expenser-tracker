import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    const {deleteAllTransactions} = useContext(GlobalContext)
    return (
        <>
          <h3>Histórico <button className="minus" onClick={() => deleteAllTransactions()}>Limpar</button></h3>
          <ul className="list">
             {transactions.map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/> ))}
          </ul>
        </>
    )
}