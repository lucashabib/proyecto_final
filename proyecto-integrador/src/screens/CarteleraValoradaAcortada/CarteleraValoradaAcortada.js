import React, {Component} from "react";
import CarteleraValoradaCard from "../../components/CarteleraValoradaCard/CarteleraValoradaCard";
import { Link } from "react-router-dom";
import './styles.css'

class CarteleraValoradaAcortada extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carteleraValoradas: []
        };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d354a91a93cd35091af35780dc100a8a')
        .then((response) => response.json())
        .then((data) => this.setState({
            carteleraValoradas:data.results.slice(0, 5) // Solo 5
        }))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <React.Fragment>

                <div className="peliculas-masValoradas">
                    {
                        this.state.carteleraValoradas.map((elm, idx) =>
                            <CarteleraValoradaCard data={elm} key={idx + elm.id} />
                        )
                    }
                </div>
                {/* Link a la página de todas las películas */}
                <div className="contenedor-boton">
                    <Link to="/pelisValoradasCartelera" className="btn-ver-todas">Ver todas</Link>
                </div>
            </React.Fragment>
        )
    }


}

export default CarteleraValoradaAcortada
