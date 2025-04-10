import react, {Component} from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";


class PeliculaCartela extends Component {

    constructor(props){
        super(props)
        this.state={
            cartelera: []

        }


       
        }

        componentDidMount(){
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9048894fcc8f2fd1f6b3222edfe3840a')
            .then((response) => response.json())
            .then(( data ) => this.setState({
                cartelera:data.results
            

            }))
            .catch((error) => console.log(error) )
            
        }
        render ()
        {
            return(
                <>

            

                 <div className="peliculas-populares">
                    {
                        this.state.cartelera.map((elm, idx) =>
                            <CarteleraCard data={elm} key={idx + elm.id} />
                        )
                    }
                </div>

                </>                 
            )
        }
       
}

export default PeliculaCartela