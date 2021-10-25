import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sing = transaction.valor < 0? '-' : '+';

    async function deletarTransacao(id){
        await HttpRequest.Delete('https://localhost:5001/api/Transacao/deletar/', id);
        var request = await HttpRequest.httpGet('https://localhost:5001/api/Transacao/all-by-user/');
        var jsonsResponse = await request.json();
        deleteTransaction(jsonsResponse);
    }
    return (
    <li className={sing == '-' ? 'minus': 'plus'}>
        { transaction.titulo } <span>{sing}R$ {Math.abs(transaction.valor) }</span>
        <button onClick={() => deletarTransacao(transaction.id)} className="delete-btn">x</button>
    </li>
    )
}
