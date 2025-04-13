import React, {Component} from "react";
import {Link} from "react-router-dom";
import './styles.css'

export default class CarteleraCard extends Component {
    constructor(props){
        super(props)
        this.state={
            dataCartelera: props.data
            
        }
    }
    render(){
        return(
            <div className='data-pelicula'>
                <Link to={`/detallePelisCartelera/${this.state.dataCartelera.id}`}>
                <div className='carta-contenido'>
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.state.dataCartelera.poster_path}`}
                    alt={this.state.dataCartelera.title}
                    className="moviePoster"
                />
                
                    <h4>{this.state.dataCartelera.title}</h4>
                
                <p>{this.state.dataCartelera.overview}</p>
                </div>
                </Link>
            </div>


        )
    }

}