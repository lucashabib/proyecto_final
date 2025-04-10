import React from "react"
import CarteleraAcortada from "../CarteleraAcordata/CarteleraAcortada";


function Home(){
    return(
    <React.Fragment>

      <h1>Bienvenidos a Cine Score</h1>

    <main>
    <h2>Peliculas En Cartelera</h2>
    <CarteleraAcortada/>

    </main>
    </React.Fragment>
    )
}

export default Home;


