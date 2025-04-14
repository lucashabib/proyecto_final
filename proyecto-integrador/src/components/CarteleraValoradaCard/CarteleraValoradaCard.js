import React, {Component} from "react";
import {Link} from "react-router-dom";
import './styles.css'

export default class CarteleraValoradaCard extends Component {

    constructor(props){
        super(props)
        this.state={
            dataCarteleraValorada: props.data
        }
    }

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }

    render(){
        return(
            <div className='data-pelicula'>
                <div className='carta-contenido'>
                    <img
                        src={`https://image.tmdb.org/t/p/w342${this.state.dataCarteleraValorada.poster_path}`}
                        alt={this.state.dataCarteleraValorada.title}
                        className="moviePoster" 
                    />
                    <h4>{this.state.dataCarteleraValorada.title}</h4>
                    {
                    this.state.mostrarContenido === true ?
                    <>
                        <p>{this.state.dataCarteleraValorada.overview}</p>
                    </>
                    :
                    ''
                    }
                    <button>
                    <Link to={`/detallePelisValoradas/${this.state.dataCarteleraValorada.id}`}>Detalle Completo</Link>
                    </button>
                    <button onClick={() => this.ocultar()}>
                    Descripción
                    </button>
                </div>
            </div>
        )
    }


}