import React, {Component} from "react";
import CarteleraValoradaCard from "../../components/CarteleraValoradaCard/CarteleraValoradaCard";
import Buscador from "../../components/Buscador/Buscador";

class PelisValoradasCartelera extends Component {

    constructor(props){
        super(props)
        this.state={
            carteleraValoradas: [],
            paginaActual : 0
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d354a91a93cd35091af35780dc100a8a')
        .then((response) => response.json())
        .then((data) => this.setState({ 
            carteleraValoradas:data.results,
            paginaActual : 1
        }))
        .catch((error) => console.log(error))
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d354a91a93cd35091af35780dc100a8a&page=${this.state.paginaActual + 1}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                carteleraValoradas: this.state.carteleraValoradas.concat(data.results),
                paginaActual: this.state.paginaActual + 1
            }))
            .catch(err => console.log(err))
    }
    

    render(){
        return(
            <>
                <div className="buscadorContainer">
                    <Buscador history={this.props.history} />
                </div>

            <h1>Peliculas mas Valoradas</h1>
            <div className="peliculas-masValoradas">
                {
                    this.state.carteleraValoradas.map((elm, idx) => <CarteleraValoradaCard data={elm} key={idx + elm.id}/>)
                }
            </div>
            <button onClick={() => this.cargarMas()}>
                Cargar Mas Peliculas
            </button>

            </>
        )
    }

}

export default PelisValoradasCartelera