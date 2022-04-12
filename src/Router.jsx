import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Login } from './components/Login';
import { ExpenserTrakerMenu } from './components/ExpenserTrakerMenu';
import { Home } from "./components/Home";
import { DfeTeste } from './components/DfeMenu/DfeTeste';

export const Router = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dfe-menu">
                    <DfeTeste />
                </Route>
                <Route path="/menu">
                    <ExpenserTrakerMenu />
                </Route>
                <Route path="/">
                    <Home />
                </Route>           
            </Switch>
        </BrowserRouter>  
        </>
    )
}
