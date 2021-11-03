import React, { Component, createContext } from "react"
import { Spinner } from "./Spinner";

export const LoadingContext = createContext();

export default class Preloader extends Component {
    constructor(props) {
		super(props);
		this.state = {
			estaEscondido: true,
			handler: this.handler,
		};
	}
    //true para ativar e false para desativar
    handler = (ativar) =>
        this.setState({ estaEscondido : ativar })
    

    render(){
        console.log(this.state)
        return (
            <LoadingContext.Provider value={this.state}>
                <Spinner estaEscondido={this.state.estaEscondido}></Spinner>
            </LoadingContext.Provider>
        )
    }
}