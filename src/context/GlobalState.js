 import React, {createContext, useReducer} from 'react';
 import AppReducer from './AppReducer';

 const jsonLocalStorage = localStorage.getItem('json')

 const initialState = jsonLocalStorage != null?
  {transactions:JSON.parse(jsonLocalStorage)}:
  {transactions:[]}; 

 //Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){        
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });       
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
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