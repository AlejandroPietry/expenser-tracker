export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            localStorage.clear();
            const t = state.transactions.filter(transaction => transaction.id !== action.payload)
            localStorage.setItem('json', JSON.stringify(t));
            return{
                ...state,
                transactions: t
            }
        case 'ADD_TRANSACTION':
            localStorage.clear();
            const b = [action.payload, ...state.transactions];
            localStorage.setItem('json', JSON.stringify(b));
            return{
                ...state,
                transactions: b
            }
        default:
            return state;
    }
}