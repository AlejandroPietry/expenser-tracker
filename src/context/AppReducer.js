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
            localStorage.removeItem('json');
            const b = [action.payload, ...state.transactions];
            localStorage.setItem('json', JSON.stringify(b));
            return{
                ...state,
                transactions: b
            }
        case 'DELETE_ALL_TRANSACTIONS':
            localStorage.removeItem('json')
            return{
                ...state,
                transactions : []
            }
        default:
            return state;
    }
}