import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Chris', age: 28 },
      { name: 'Max', age: 25 },
      { name: 'Iza', age: 21 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked!');
    this.setState( {
      persons: [
        { name: 'Christopher', age: 28 },
        { name: 'Maximilian', age: 45 },
        { name: 'Agata', age: 23 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="Title">Hello react</h1>
        <h2>Krztsztof Tomecki</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={this.state.persons[0].age} />
        <Person name={ this.state.persons[1].name } age={this.state.persons[1].age} />
        <Person name={ this.state.persons[2].name } age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
