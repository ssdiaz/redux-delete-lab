import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state, 'state in input')
    this.props.addBand(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Enter a Band:
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}
            />
        </form>
      </div>
    )
  }
}

export default BandInput;
