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

    render(){
        return(
            <div className='data-pelicula'>
                <div className='carta-contenido'>
                    <img
                        src={`https://image.tmdb.org/t/p/w342${this.state.dataCarteleraValorada.poster_path}`}
                        alt={this.state.dataCarteleraValorada.title}
                        className="moviePoster" 
                    />
                    <Link to={`/detallePelisValoradas/${this.state.dataCarteleraValorada.id}`}>
                        <h4>{this.state.dataCarteleraValorada.title}</h4>
                    </Link>
                    <p>{this.state.dataCarteleraValorada.overview}</p>
                </div>
            </div>
        )
    }


}