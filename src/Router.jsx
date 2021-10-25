import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Login } from './components/Login';
import { ExpenserTrakerMenu } from './components/ExpenserTrakerMenu';

export const Router = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/menu">
                    <ExpenserTrakerMenu />
                </Route>
                <Route path="/">
                    <h3>Finge que aqui tem uma home linda kkkkkk</h3>
                    <button><a href="/login">Fazer Login</a></button>
                </Route>           
            </Switch>
        </BrowserRouter>  
        </>
    )
}
