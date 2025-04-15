import React, { Component } from "react";
import './styles.css'

export default class DetallePelisCartelera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataPeliculaDetalle: null,
            loading: true,
            error: null,
            favorito: false,
        };
    }

    esFavorito(id) {
        let storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            return storageParseado.includes(id);
        }
        return false;
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d354a91a93cd35091af35780dc100a8a`)
            .then((response) => response.json())
            .then((data) => {
                const esFavorita = this.esFavorito(data.id);
                this.setState({
                    dataPeliculaDetalle: data,
                    loading: false,
                    favorito: esFavorita
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: "Error al cargar la información",
                    loading: false
                });
            });
    }

    agregarFavoritos(id) {
        let storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            let arrParseado = JSON.parse(storage);
            arrParseado.push(id);
            let arrStringificado = JSON.stringify(arrParseado);
            localStorage.setItem('favoritos', arrStringificado);
        } else {
            let primerID = [id];
            let arrStringificado = JSON.stringify(primerID);
            localStorage.setItem('favoritos', arrStringificado);
        }

        this.setState({
            favorito: true
        });
    }

    sacarFavoritos(id) {
        const storage = localStorage.getItem('favoritos');
        const storageParseado = JSON.parse(storage);
        const filtrarStorage = storageParseado.filter((elm) => elm !== id);
        const storageStringificado = JSON.stringify(filtrarStorage);
        localStorage.setItem('favoritos', storageStringificado);

        this.setState({
            favorito: false
        });
    }

    render() {
        const { loading, error, dataPeliculaDetalle, favorito } = this.state;

        if (loading) return <div>Cargando...</div>;
        if (error) return <div>{error}</div>;

        return (
            <div className="detalle-peliculaCartelera">

                <div className="detalle-poster">
                    <h1 className="detalle-title">{dataPeliculaDetalle.title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/w342${dataPeliculaDetalle.poster_path}`}
                        alt={dataPeliculaDetalle.title}
                        className="moviePosterDetalle"
                    />
                </div>

                <div className="detalle-info">
                    <p className="texto-PelisCartelera">Sinópsis: {dataPeliculaDetalle.overview}</p>
                    <p className="texto-PelisCartelera">Fecha de estreno: {dataPeliculaDetalle.release_date}</p>
                    <p className="texto-PelisCartelera">Calificación: {dataPeliculaDetalle.vote_average}</p>
                    <p className="texto-PelisCartelera">Duración: {dataPeliculaDetalle.runtime} minutos</p>

                    <div className="texto-PelisCartelera">
                        Género(s):
                        {dataPeliculaDetalle.genres && dataPeliculaDetalle.genres.length > 0 ? (
                            <ul>
                                {dataPeliculaDetalle.genres.map(genre => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No disponible</p>
                        )}
                    </div>

                    {favorito ? (
                        <button className='botones'onClick={() => this.sacarFavoritos(dataPeliculaDetalle.id)}>
                            Sacar de Favoritos
                        </button>
                    ) : (
                        <button className='botones'onClick={() => this.agregarFavoritos(dataPeliculaDetalle.id)}>
                            Agregar a Favoritos
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
