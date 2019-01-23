import React, { Component } from "react";
import "./App.scss";
import Person from "./Person/Person";
import UserInput from "./Person/UserInput";
import UserOutput from "./Person/UserOutput";

class App extends Component {
  state = {
    persons: [
      { name: "Chris", age: 28 },
      { name: "Max", age: 25 },
      { name: "Iza", age: 21 }
    ],
    username: "Krzysiek",
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = () => {
    console.log("was clicked!");
    this.setState({
      persons: [
        { name: "Christopher", age: 28 },
        { name: "Maximilian", age: 45 },
        { name: "Agata", age: 23 }
      ]
    });
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1 className="Title">Hello react</h1>
        <h2>Krztsztof Tomecki</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
