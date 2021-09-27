import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest.js'

export const AddTransaction = () => {

    const [titulo, setText] = useState('');
    const [valor, setAmout] = useState(0);

    const {addTransaction} = useContext(GlobalContext);
    async function enviar(e){
        e.preventDefault();
        
        var tipoTransacao = valor.includes('-') ? 0 : 1;
        
        const newTransaction = {
            titulo,
            valor: +valor,
            tipoTransacao
        }
        console.log('addTransaction', newTransaction);
        let response = await HttpRequest.httpPost("https://localhost:5001/api/Transacao/criar", newTransaction);

        const newTransactionForLocalStorage = {
            id : Math.floor(Math.random() * 10000000),
            titulo,
            valor: +valor,
            tipoTransacao
        }
        console.log('transaction for localstorage', newTransactionForLocalStorage);
        addTransaction(newTransactionForLocalStorage);

        LimparCampos();
    }

    function LimparCampos(){
        setText('');
        setAmout(0);
    }

    return (
        <>
            <h3>Adicionar nova transação</h3>
            <form onSubmit={enviar}>
                <div className="form-control">
                <label htmlFor="text">Titulo</label>
                <input type="text" value={titulo} onChange={(e) => setText(e.target.value)} id="text" placeholder="Digite o titulo..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Valor <br />
                    (negativo - despesa, positivo - renda)</label>
                <input type="number" value={valor} onChange={(e) => setAmout(e.target.value)} id="amount" placeholder="Coloque um valor..." />
                </div>
                <button className="btn">Add transação</button>
            </form>
        </>
    )
}
