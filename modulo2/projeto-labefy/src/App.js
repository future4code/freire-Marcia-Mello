import React, { Component } from 'react'

class App extends Component {
  state = {
    playList: "criar playList"

  };

  handleInput = (event) => {
    this.setState({playList: event.target.value});
  };
  
  
  render() {
    return (
      <div>
         <h1>Labefy</h1>
         <input value={this.state.playList} onChange={this.handleInput} />
      </div>

    );
  }
}

export default App
