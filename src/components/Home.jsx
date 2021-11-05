import React, {useState, useEffect}from "react";
import Url from "../wwwroot/HttpUtils/Url";
import { HubConnectionBuilder } from "@microsoft/signalr";
export const Home = () =>{

    const [ connection, setConnection ] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(Url.WebApi() + 'hubs/notify')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if(connection){
            connection.start()
            .then(result => {

            })
        }
    },[connection])

    const sendMessage = async () => {

        if (connection.connectionStarted) {
            try {
                await connection.send('SendNotify', document.getElementById('mensagemNotificacao').value);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }
    return(
        <>
            <h3>Finge que aqui tem uma home linda kkkkkk</h3>
            <button><a href="/login">Fazer Login</a></button>
            <button onClick={sendMessage}>Enviar mensagem</button>
            <input type="text" id="mensagemNotificacao"></input>
        </>
    )
}