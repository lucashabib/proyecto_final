import React, { Component } from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";
import FiltroCartelra from "../../components/Filtro/FiltroCartelera";
class PeliculaCartela extends Component {

    constructor(props){
        super(props);
        this.state = {
            cartelera: [],
            paginaActual: 0
        };
    }



    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9048894fcc8f2fd1f6b3222edfe3840a')
            .then((response) => response.json())
            .then((data) => this.setState({
                cartelera: data.results,
                backupPeliculas: data.results,
                paginaActual: 1
            }))
            .catch((error) => console.log(error));
    }


    filtrarPeliculas(busquedaUsuario){
        const PeliculasFiltrados = this.state.backupPeliculas.filter(
            (elm) => elm.title.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({cartelera: PeliculasFiltrados})
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9048894fcc8f2fd1f6b3222edfe3840a&page=${this.state.paginaActual + 1}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                cartelera: this.state.cartelera.concat(data.results),
                paginaActual: this.state.paginaActual + 1
            }))
            .catch(err => console.log(err));
    }

    render(){
        return (
            <>
                <div className="buscadorContainer">
                <FiltroCartelra filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
                </div>

                <div className="peliculas-populares">
                    {
                        this.state.cartelera.map((elm, idx) =>
                            <CarteleraCard data={elm} key={idx + elm.id} />
                        )
                    }
                </div>
                <button onClick={() => this.cargarMas()}>
                    Cargar Más Películas
                </button>
            </>
        );
    }
}

export default PeliculaCartela;
