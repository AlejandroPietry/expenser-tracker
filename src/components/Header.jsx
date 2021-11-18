import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Header = () => {
    const {identity} = useContext(GlobalContext)
    console.log("header",identity)
    return (
        <h2>
            Olá {identity.nomeUsuario}
        </h2>
    )
}
