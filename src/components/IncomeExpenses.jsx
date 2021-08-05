import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed();
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
     
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Renda</h4>
                <p className="money plus">R$ {income}</p>
            </div>
            <div>
                <h4>Despesa</h4>
                <p className="money minus">R$ {expense}</p>
            </div>
        </div>
    )
}
