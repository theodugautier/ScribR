import React, { Component } from 'react';
import '../assets/App.css';

class Markdown extends Component {
 
  render() {
    return (
        <form>
            <textarea placeholder="# type mardown here" onChange={this.props.handleChange}/>
        </form>
    );
  }
}

export default Markdown;
