import React from "react"
import CarteleraAcortada from "../CarteleraAcordata/CarteleraAcortada";
import CarteleraValoradaAcortada from "../CarteleraValoradaAcortada/CarteleraValoradaAcortada";
import Buscador from "../../components/Buscador/Buscador";
import './styles.css'


function Home(props){
  return(
    <React.Fragment>
      <h1 className="Titulo">Bienvenidos a Cine Score</h1>
      <div className="BuascadorContainer">
          <Buscador history={props.history}/>
                 
                  
        
         </div>
      <main>
        <h2>Peliculas En Cartelera</h2>
        <CarteleraAcortada/>

        <h2>Peliculas Mas Valoradas</h2>
        <CarteleraValoradaAcortada/>

      </main>
    </React.Fragment>
  )
}

export default Home;

