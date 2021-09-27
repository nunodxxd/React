import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
    <input type="text" name="cidade" placeholder="Cidade.."/>
    <input type="text" name="pais" placeholder="Pais.."/>
    <button>Pesquisar</button>
</form>
);

/*
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
*/

export default Form;