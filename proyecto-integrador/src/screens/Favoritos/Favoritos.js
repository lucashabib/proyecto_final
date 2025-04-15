import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default class Favorito extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculasFav : [],
        }
    }

    ocultar(id){
        this.setState({
            [`mostrarContenido-${id}`]: !this.state[`mostrarContenido-${id}`]
        })
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
            [`favorito-${id}`]: true
        })
    }

    sacarFavoritos(id){
        const storage = localStorage.getItem('favoritos')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id)
        const storageStringificado = JSON.stringify(filtrarStorage)
        localStorage.setItem('favoritos', storageStringificado)

        const nuevasPeliculas = this.state.peliculasFav.filter(peli => peli.id !== id)

        this.setState({
            peliculasFav: nuevasPeliculas,
            [`favorito-${id}`]: false
        })
    }

    componentDidMount(){
        const storageFavoritos = localStorage.getItem('favoritos')
        if(storageFavoritos !== null) {
            let arrayParseado = JSON.parse(storageFavoritos)
            if (arrayParseado.length > 0){
                Promise.all(
                    arrayParseado.map((elm) =>
                        fetch('https://api.themoviedb.org/3/movie/'+ elm +'?api_key=d354a91a93cd35091af35780dc100a8a')
                            .then((resp) => resp.json())
                            .catch(e => {
                                console.log('Error con ID:', elm, e)
                                return undefined
                            })
                    )
                )
                .then((data) => {
                    const peliculasValidas = data.filter(pelicula => pelicula !== undefined)
                    let nuevoEstado = { peliculasFav: peliculasValidas }
                    peliculasValidas.forEach(peli => {
                        nuevoEstado[`favorito-${peli.id}`] = true
                        nuevoEstado[`mostrarContenido-${peli.id}`] = false
                    })
                    this.setState(nuevoEstado)
                })                
                .catch(e => console.log(e))
            }           
        }
    }

    render() {
        return (
            <div>
                <h2>Mis Favoritos</h2>

                {
                    this.state.peliculasFav.length === 0 ?
                    <h3>No tienes películas favoritas seleccionadas</h3>
                    :
                    <div className="peliculas-populares">
                        {
                            this.state.peliculasFav.map((pelicula, idx) => (
                                <div className='data-pelicula' key={idx + pelicula.id}>
                                    <div className='carta-contenido'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                                            alt={pelicula.title}
                                            className="moviePoster"
                                        />
                                        
                                        <h4>{pelicula.title}</h4>

                                        {
                                            this.state[`mostrarContenido-${pelicula.id}`] === true ?
                                            <>
                                                <p>{pelicula.overview}</p>
                                            </>
                                            :
                                            ''
                                        }

                                        <button className='botones'>
                                            <Link to={`/detallePelisCartelera/${pelicula.id}`}>Detalle Completo</Link>
                                        </button>

                                        <button className='botones' onClick={() => this.ocultar(pelicula.id)}>
                                            Descripción
                                        </button>

                                        {
                                            this.state[`favorito-${pelicula.id}`] ?
                                            <button className='botones' onClick={() => this.sacarFavoritos(pelicula.id)}>Sacar de Favoritos</button>
                                            :
                                            <button className='botones' onClick={() => this.agregarFavoritos(pelicula.id)}>
                                                Agregar a Favoritos
                                            </button>
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}
