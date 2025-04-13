import react, {Component} from "react";
import CarteleraCard from "../../components/CarteleraCard/CarteleraCard";
import Buscador from "../../components/Buscador/Buscador";

class PeliTodas extends Component {

    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            backupPeliculas: []

        }
       
        }

        componentDidMount(){
            const params = new URLSearchParams(window.location.search);
            const busqueda = params.get("busqueda");

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=9048894fcc8f2fd1f6b3222edfe3840a&query=${busqueda}`)
            .then((response) => response.json())
            .then(( data ) => this.setState({
                peliculas:data.results, 
                backupPeliculas: data.results
            }))
            
            .catch((error) => console.log(error) )
            
        }

        filtrarPelis(busquedaUsuario){
            const peliculasFiltradas = this.state.backupPeliculas.filter((elm) => elm.title.toLowerCase().includes(busquedaUsuario.toLowerCase()))
            this.setState(
                {peliculas: peliculasFiltradas}
                         
            
            )

        }

        render ()
        {
            return(
                <>

                <Buscador filtro = {(busqueda)=> this.filtrarPelis(busqueda)}/>

                <div className="peliculas-populares">


                                    {
                                        this.state.peliculas.map((elm, idx) =>
                                            <CarteleraCard data={elm} key={idx + elm.id} />
                                        )
                                    }
                </div>

            
                </>                 
            )
        }
       
}

export default PeliTodas