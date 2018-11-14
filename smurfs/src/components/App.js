import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      age: '',
    }
  }

  addSmurf() {
    if (this.state.name === '') { return }
    
    let SmurfArr = this.state.name;
    SmurfArr.push(this.state.name);
    this.setState({ name: '' });
    this.textInput.focus();
  }



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input type="text"
          placeholder="Enter Smurf Name..."
        />
        <input type="text"
          placeholder=" Enter Smurf Height..."
        />
        <input type="text"
          placeholder=" Enter Smurf Age..."
        />
        <button onClick={this.addSmurf.bind(this)}>Add Smurf</button>
        </div>
    );
  }
}

export default App;
