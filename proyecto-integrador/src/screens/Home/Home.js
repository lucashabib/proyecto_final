import React from "react"
import CarteleraAcortada from "../CarteleraAcordata/CarteleraAcortada";
import './styles.css'

function Home(){
    return(
    <React.Fragment>

      <h className="Titulo">Bienvenidos a Cine Score</h1>

    <main>
    <h2>Peliculas En Cartelera</h2>
    <CarteleraAcortada/>

    </main>
    </React.Fragment>
    )
}

export default Home;

