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

                <Route path="/">
                    <ExpenserTrakerMenu />
                </Route>           
            </Switch>
        </BrowserRouter>  
        </>
    )
}
