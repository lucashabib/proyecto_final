import React, {Component} from "react";
import {Link} from "react-router-dom";
import './styles.css'

export default class CarteleraValoradaCard extends Component {

    constructor(props){
        super(props)
        this.state={
            dataCarteleraValorada: props.data,
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
            let checkID = storageParseado.includes(this.state.dataCarteleraValorada.id)

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
                        src={`https://image.tmdb.org/t/p/w342${this.state.dataCarteleraValorada.poster_path}`}
                        alt={this.state.dataCarteleraValorada.title}
                        className="moviePoster" 
                    />
                    <h4 className ='texto_dataCartelera'>{this.state.dataCarteleraValorada.title}</h4>
                    {
                    this.state.mostrarContenido === true ?
                    <>
                        <p className ='texto_dataCartelera'>{this.state.dataCarteleraValorada.overview}</p>
                    </>
                    :
                    ''
                    }
                    <button className ='botones'>
                    <Link to={`/detallePelisValoradas/${this.state.dataCarteleraValorada.id}`}>Detalle Completo</Link>
                    </button>
                    <button className ='botones'onClick={() => this.ocultar()}>
                    Descripción
                    </button>
                    {
                    this.state.favorito ?
                    <button className ='botones'onClick={() => this.sacarFavoritos(this.state.dataCarteleraValorada.id)}>Sacar de Favoritos</button>
                    :
                    <button className ='botones'onClick={() => this.agregarFavoritos(this.state.dataCarteleraValorada.id)}>
                        Agregar a Favoritos
                    </button>
                }
                </div>
            </div>
        )
    }


}