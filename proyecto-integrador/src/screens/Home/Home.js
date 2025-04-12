import React from "react"
import CarteleraAcortada from "../CarteleraAcordata/CarteleraAcortada";
import CarteleraValoradaAcortada from "../CarteleraValoradaAcortada/CarteleraValoradaAcortada";
import './styles.css'

function Home(){
  return(
    <React.Fragment>

      <h1 className="Titulo">Bienvenidos a Cine Score</h1>

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

