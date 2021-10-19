import HttpRequest from "../wwwroot/HttpUtils/HttpRequest";

export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            
            return{
                ...state,
                transactions: action.payload
            }
        case 'ADD_TRANSACTION':

            return{
                ...state,
                transactions: action.payload
            } 
            //vai que eu preciso
            //const b = [action.payload, ...state.transactions];
        case 'DELETE_ALL_TRANSACTIONS':
            return{
                ...state,
                transactions : []
            }
        default:
            return state;
    }
}