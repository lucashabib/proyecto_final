import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import './styles.css'

function Header(){
    const opciones = [
        {
            nombre: 'Home',
            path: '/'
        },
        {
            nombre: 'Electronica',
            path: '/category'

        },
        {
            nombre: 'Accesorios',
            path: '/category'

        }
    ]
    return (
        <header className="Header">
            <OpcionesMenu opciones={opciones}/>
        </header>
    )
}

export default Header