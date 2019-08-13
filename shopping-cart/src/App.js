import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters.jsx';
import NavBar from './components/navbar.jsx';

class App extends Component {
  state = { 
    counters:[
        {id:1, value:3},
        {id:2, value:2},
        {id:3, value:6},
        {id:4, value:2}
    ]
 };

 constructor(){
   super();
   console.log("APP - Construcor")
 }
 componentDidMount(){
   //ajax call
  console.log("APP - Mounted")
 }

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
 };

 handleReset = () =>{
    const counters = this.state.counters.map(c =>{
        c.value = 0;
        return c;
    });
    this.setState({counters});
 };

 handleDelete = (counterId) =>{
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});
    };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
