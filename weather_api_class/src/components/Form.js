import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="cidade" placeholder="Cidade.."/>
                <input type="text" name="pais" placeholder="Pais.."/>
                <button>Pesquisar</button>
            </form>
        );
    }
};

export default Form;