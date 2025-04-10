import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import './styles.css'
import { Link } from 'react-router-dom';

function Header(){
    const opciones = [
        {
            nombre: 'HOME',
            path: '/'
        },
        {
            nombre: 'ACCIÓN',
            path: '/category'

        },
        {
            nombre: 'DRAMA',
            path: '/category'

        },
        {
            nombre: 'COMEDIA',
            path: '/category'

        },

       
    ]


    return (
        <header className="Header">
             <div className="LogoContainer">
            <img src="/Logo-png.png" alt="Logo Swift Cart" className="Logo" />
            </div>


            <div className="OpcionesMenu">
            <OpcionesMenu opciones={opciones}/>
            </div>

            <div className="FavoritosContainer">
                <Link to="/favoritos">
                    <button className="FavoritosBtn">Ver Favoritos</button>
                </Link>
            </div>
            
        </header>
    )
}

export default Header