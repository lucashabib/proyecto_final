import React,{Component} from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";
import { Link } from "react-router-dom";
import './styles.css'

class CarteleraAcortada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carteleraHome: []
        };
        
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9048894fcc8f2fd1f6b3222edfe3840a')
            .then((response) => response.json())
            .then((data) => this.setState({
                carteleraHome: data.results.slice(0, 5) // Solo 5
            }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <React.Fragment>

                    <div className="peliculas-populares">
                        {
                            this.state.carteleraHome.map((elm, idx) =>
                                <CarteleraCard data={elm} key={idx + elm.id} />
                            )
                        }
                    </div>
                    {/* Link a la página de todas las películas */}
                    <div className="contenedor-boton">
                        <Link to="/PeliculasCartelera" className="btn-ver-todas">Ver todas</Link>
                    </div>
            </React.Fragment>
        );
    }
}

export default CarteleraAcortada ;


