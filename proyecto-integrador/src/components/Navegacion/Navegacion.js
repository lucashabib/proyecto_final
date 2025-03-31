import React from "react"
import OpcionesMenu from "../Header/OpcionesMenu";
import './styles.css'

function Navegacion () {
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
    return(
        


        <nav className= "Navegacion">

            <OpcionesMenu opciones = {opciones}/>
            
         </nav>
      
    );
}


export default Navegacion;

