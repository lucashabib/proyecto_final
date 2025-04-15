import React, {Component} from "react";
import CarteleraValoradaCard from "../../components/CarteleraValoradaCard/CarteleraValoradaCard";
import Buscador from "../../components/Buscador/Buscador";
import FiltroCartelra from "../../components/Filtro/FiltroCartelera";

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
            backupPeliculas: data.results,
            paginaActual : 1
        }))
        .catch((error) => console.log(error))
    }


    filtrarPeliculas(busquedaUsuario){
        const PeliculasFiltrados = this.state.backupPeliculas.filter(
            (elm) => elm.title.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({carteleraValoradas: PeliculasFiltrados})
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
            
            <h1>Peliculas mas Valoradas</h1>

            <div className="buscadorContainer">
                <FiltroCartelra filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
            </div>

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