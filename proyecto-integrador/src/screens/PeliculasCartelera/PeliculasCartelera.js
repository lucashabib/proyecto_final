import React, { Component } from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";
import Buscador from "../../components/Buscador/Buscador";

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
                paginaActual: 1
            }))
            .catch((error) => console.log(error));
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
                    <Buscador history={this.props.history} />
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
