 import React, {createContext, useReducer} from 'react';
 import HttpRequest from '../wwwroot/HttpUtils/HttpRequest';
 import AppReducer from './AppReducer';

 const initialState = {transactions:[]};
 //Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(transactionList){        
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: transactionList
        });       
    }

    function addTransaction(transactionList){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transactionList
        })
    }

    function deleteAllTransactions(){
        dispatch({
            type: 'DELETE_ALL_TRANSACTIONS',
            payload : []
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        deleteAllTransactions
    }}>
        {children}
    </GlobalContext.Provider>

    )
}