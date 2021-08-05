import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmout] = useState(0);

    const {addTransaction} = useContext(GlobalContext);
    const enviar = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Adicionar nova transação</h3>
            <form onSubmit={enviar}>
                <div className="form-control">
                <label htmlFor="text">Titulo</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Digite o titulo..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Valor <br />
                    (negativo - despesa, positivo - renda)</label>
                <input type="number" value={amount} onChange={(e) => setAmout(e.target.value)} id="amount" placeholder="Coloque um valor..." />
                </div>
                <button className="btn">Add transação</button>
            </form>
        </>
    )
}
