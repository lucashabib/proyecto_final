import React, {Component} from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";
import { Link } from "react-router-dom";

export default class Resultados extends Component{
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=9048894fcc8f2fd1f6b3222edfe3840a`)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(err => console.log(err))
    }
    render(){
        return(

        <React.Fragment>

            <div>Resultados de: {this.state.busqueda}</div>

            <section>
            <div className="peliculas-populares">
                        {
                            this.state.resultados.map((elm, idx) =>
                                <CarteleraCard data={elm} key={idx + elm.id} />
                            )
                        }
                    </div>
                    {/* Link a la página de todas las películas */}
                    
          </section>

    
             
        </React.Fragment>
       


        )
    }
}