import React ,{useState, useEffect}from 'react'
import HttpRequest from '../../wwwroot/HttpUtils/HttpRequest';
import { HubConnectionBuilder } from '@microsoft/signalr';
import Url from '../../wwwroot/HttpUtils/Url';
import alertToast from 'react-hot-toast';
import './DfeTeste.css';

export const DfeTeste = () => {
  const [connection, setConnection] = useState(null);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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
              connection.on('12345', message => {

                  AdcionarNota(message);
              })

              connection.on('acabou', message => {
                alertToast.success(message)
              })
          })
      }
  },[connection])

  function AdcionarNota(nota){
    console.log('adc nota',nota);

    var cart = document.getElementsByClassName('cart');
    var li = document.createElement('li');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    h3.className = 'name';
    h3.innerText = nota.titulo;

    p.className = 'price';
    p.innerText = 'R$ ' + nota.valor;

    li.appendChild(h3);
    li.appendChild(p);
    cart.item(0).firstElementChild.appendChild(li);

    MudarDados(nota.valor);
  }

  function MudarDados(valor){
    setTotalItems(totalItems + 1);
    setTotal(total + valor);
  }

  function SincronizarDfe(){
    console.log('fazendo a requisicao');
    var url = Url.WebApi() + 'api/transacao/sincronizar-dfe'
    HttpRequest.httpGet(url);
  }

return(
  <>
    <body id="cart">
    <header>
      header
    </header>
  
  <main>
    
    <section class="summary">
      <div class="items">🛒 {totalItems} notas</div>
      <div class="total">${total} 💲</div>
    </section>
    
    <section class="actions">
      <button onClick={SincronizarDfe}>Sincronizar</button>
    </section>
    
    <section class="cart">
      <ul>
      </ul>
    </section>
    
    <section class="promo">
      <div>🌟 Offer Ends Soon! 🌟</div>
    </section>
    
    <section class="help">
      ❓ Need Help
    </section>
    
  </main>
  
  <footer>
    footer
  </footer>
  
</body>
</>
)
}