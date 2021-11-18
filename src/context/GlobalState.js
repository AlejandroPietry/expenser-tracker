 import React, {createContext, useReducer} from 'react';
 import AppReducer from './AppReducer';

 const initialState = {transactions:[], identity:{isAuthenticated:false, jwtToken:"", nomeUsuario:""}};
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
    function setIdentity(jwtToken, nome){
        state.identity.isAuthenticated = true;
        state.identity.nomeUsuario = nome;
        state.identity.jwtToken = jwtToken;
        console.log("state in setIdentity", state);
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        identity: state.identity,
        deleteTransaction,
        addTransaction,
        deleteAllTransactions,
        setIdentity
    }}>
        {children}
    </GlobalContext.Provider>

    )
}