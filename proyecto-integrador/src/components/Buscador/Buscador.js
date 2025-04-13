import React, {Component, component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',
        }

    }
    manejarSubmit(e){
        e.preventDefault();
        
    }
    controlarInput(e){
        console.log(e)
        this.setState({valorInput: e.target.value}, () => this.props.filtro(this.state.valorInput)   )

    }
    render(){
        return(
            <form onSubmit={(e)=> this.manejarSubmit(e)}>
                <input onChange={(e)=> this.controlarInput(e)} value={this.state.valorInput}/>
             
            </form>
        )
    }


}

export default Buscador