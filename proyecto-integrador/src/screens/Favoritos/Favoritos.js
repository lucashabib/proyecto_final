import React , { Component } from 'react'

export default class Favorito extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculasFav : [],
        }
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
                    this.setState({ peliculasFav: peliculasValidas })
                })                
                .catch(e => console.log(e))
            }           
        }
    }

    render() {
        const { peliculasFav } = this.state;

        return (
            <div>
                <h2>Mis Favoritos</h2>

                {
                    peliculasFav.length === 0 ? (
                        <h3>No tienes películas favoritas seleccionadas</h3>
                    ) : (
                        <div className="peliculas-favoritas">
                            {peliculasFav.map((pelicula, idx) => (
                                <div key={idx + pelicula.id}>
                                    <h3>{pelicula.title}</h3>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                                        alt={pelicula.title}
                                    />
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        )
    }
}
