import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    componentDidUpdate(prevProps,prevState){
        if(prevProps.counter.valeu !== this.props.counter.valeu){
            //exemplo executar um novo pedido ajax
        }
    }
    render() { 
        const {onReset, onDelete, onIncrement , counters} = this.props
        return ( 
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                    >
                    Reset
                </button>
               {counters.map(counter => (
                <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        counter={counter}/>
            ))}
            </div>
         );
    }
}
 
export default Counters;