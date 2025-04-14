import React, {Component} from "react";
import {Link} from "react-router-dom";
import './styles.css'

export default class CarteleraCard extends Component {
    constructor(props){
        super(props)
        this.state={
            dataCartelera: props.data,
            mostrarContenido: false,
            favorito: false,
        }
    }

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if (storage !== null){
            let storageParseado = JSON.parse(storage)
            let checkID = storageParseado.includes(this.state.dataCartelera.id)

            if(checkID){
                this.setState({favorito: true})
            }
        }
    }

    agregarFavoritos(id){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let arrParseado = JSON.parse(storage)
            arrParseado.push(id)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('favoritos', arrStringificado)
        } else {
            let primerID = [id]
            let arrStringificado = JSON.stringify(primerID)
            localStorage.setItem('favoritos', arrStringificado)
        }

        this.setState({
            favorito: true
        })
    }

    sacarFavoritos(id){
        const storage = localStorage.getItem('favoritos')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id)
        const storageStringificado = JSON.stringify(filtrarStorage)
        localStorage.setItem('favoritos', storageStringificado)
        this.setState({
            favorito: false
        })
    }

    render(){
        return(
            <div className='data-pelicula'>
                <div className='carta-contenido'>
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.state.dataCartelera.poster_path}`}
                    alt={this.state.dataCartelera.title}
                    className="moviePoster"
                />
                
                    <h4>{this.state.dataCartelera.title}</h4>
                {
                    this.state.mostrarContenido === true ?
                    <>
                        <p>{this.state.dataCartelera.overview}</p>
                    </>
                    :
                    ''
                }
                <button>
                    <Link to={`/detallePelisCartelera/${this.state.dataCartelera.id}`}>Detalle Completo</Link>
                </button>
                <button onClick={() => this.ocultar()}>
                    Descripción
                </button>
                {
                    this.state.favorito ?
                    <button onClick={() => this.sacarFavoritos(this.state.dataCartelera.id)}>Sacar de Favoritos</button>
                    :
                    <button onClick={() => this.agregarFavoritos(this.state.dataCartelera.id)}>
                        Agregar a Favoritos
                    </button>
                }
                </div>
            </div>


        )
    }

}