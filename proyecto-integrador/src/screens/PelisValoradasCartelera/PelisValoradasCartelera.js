import React, {Component} from "react";
import CarteleraValoradaCard from "../../components/CarteleraValoradaCard/CarteleraValoradaCard";

class PelisValoradasCartelera extends Component {

    constructor(props){
        super(props)
        this.state={
            carteleraValoradas: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d354a91a93cd35091af35780dc100a8a')
        .then((response) => response.json())
        .then((data) => this.setState({
            carteleraValoradas:data.results
        }))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <>

            <h1>Peliculas mas Valoradas</h1>
            <div className="peliculas-masValoradas">
                {
                    this.state.carteleraValoradas.map((elm, idx) => <CarteleraValoradaCard data={elm} key={idx + elm.id}/>)
                }
            </div>

            </>
        )
    }

}

export default PelisValoradasCartelera