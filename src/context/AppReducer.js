import HttpRequest from "../wwwroot/HttpUtils/HttpRequest";

export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            localStorage.removeItem('json');
            const t = state.transactions.filter(transaction => transaction.id !== action.payload)
            localStorage.setItem('json', JSON.stringify(t));
            return{
                ...state,
                transactions: t
            }
        case 'ADD_TRANSACTION':
            HttpRequest.httpPost('psotRouter', {});

            HttpRequest.httpGet('');
            localStorage.removeItem('json');
            const b = [action.payload, ...state.transactions];
            localStorage.setItem('json', JSON.stringify(b));
            return{
                ...state,
                transactions: b
            }
        case 'DELETE_ALL_TRANSACTIONS':
            localStorage.removeItem('json')

            HttpRequest.httpGet('deleteRoute');
            return{
                ...state,
                transactions : []
            }
        default:
            return state;
    }
}