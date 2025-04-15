import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import './styles.css'
import { Link } from 'react-router-dom';
import Buscador from "../Buscador/Buscador";


function Header(props){
    const opciones = [
        {
            nombre: 'HOME',
            path: '/'
        },
        {
            nombre: 'VER FAVORITOS',
            path: '/favoritos'
        }       
    ]


    return (
        <header className="Header">
            <>
             <div className="LogoContainer">
             <Link to="/">
            <img src="/Logo-png.png" alt="Logo Swift Cart" className="Logo" />
            </Link>
             </div>

          

            <div className="OpcionesMenu">
            <OpcionesMenu opciones={opciones}/>
            </div>
            </>
        </header>
    )
}

export default Header