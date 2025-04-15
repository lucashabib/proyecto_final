import React, {Component} from "react";


class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',
        }

    }
    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultados/'+ this.state.valorInput)
    }


    controlarInput(evento){
        this.setState({valorInput: evento.target.value})
    }
render(){
    return(
        <form onSubmit ={(evento) => this.controlarForm(evento)}>

            <input placeholder ='Buscador' value={this.state.valorInput} 
            onChange={(evento)=> this.controlarInput(evento)} />

            <button type='submit'>Buscar</button>

        </form>

    )
}

}

export default Buscador