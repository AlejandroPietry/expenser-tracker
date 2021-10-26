import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Url from '../wwwroot/HttpUtils/Url';
import HttpRequest from '../wwwroot/HttpUtils/HttpRequest.js'

export const AddTransaction = () => {

    const [titulo, setText] = useState('');
    const [valor, setAmout] = useState(0);

    const {addTransaction} = useContext(GlobalContext);
    
    async function enviar(e){
        e.preventDefault();
        
        var tipoTransacao = valor < 0 ? 0 : 1;
        
        const newTransaction = {
            titulo,
            valor: +valor,
            tipoTransacao
        }
        await HttpRequest.httpPost(Url.WebApi() + 'api/Transacao/criar', newTransaction);
        var request = await HttpRequest.httpGet(Url.WebApi() + 'api/Transacao/all-by-user');
        var jsonsResponse = await request.json();
        addTransaction(jsonsResponse);

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
