import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sing = transaction.amount < 0? '-' : '+';

    return (
    <li className={sing == '-' ? 'minus': 'plus'}>
        { transaction.text } <span>{sing}R$ {Math.abs(transaction.amount) }</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
    )
}
