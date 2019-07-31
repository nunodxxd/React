import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            titulo: '',
            responsavel: '',
            descricao: '',
            prioridade: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e){
        const{ value , name }= e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e){
       e.preventDefault();
       this.props.onAddTodo(this.state);
       console.log('enviar dados');
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                         type="text"
                         name="title"
                         className="form-control"
                         placeholder="Titulo"
                         onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                         type="text"
                         name="responsavel"
                         className="form-control"
                         placeholder="Responsavel"
                         onChange={this.handleInput}
                         />
                    </div>
                    <div className="form-group">
                        <input
                         type="text"
                         name="descricao"
                         className="form-control"
                         placeholder="Descricao"
                         onChange={this.handleInput}
                         />
                    </div>
                    <div className="form-group">
                        <select
                         name="prioridade"
                         className="form-control"
                         onChange={this.handleInput}
                        >
                         <option>low</option>
                         <option>medium</option>
                         <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }

}

export default TodoForm;