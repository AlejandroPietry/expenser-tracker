export default class{

    static WebApi(){
        if(window.location.host.includes('localhost')){
            return 'https://localhost:5001/';
        }
        else{
            return 'urlDaApiEmProd';
        }
    }
}