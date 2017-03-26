import React, { Component } from 'react';
import Markdown from './components/markdown';
import Render from './components/render'
import marked from 'marked';
import "./assets/App.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

class App extends Component {
   constructor(props) {
      super(props);
		
      this.state = {
      }

      this.handleChange = this.handleChange.bind(this);
   }

  handleChange(e) {
    this.setState({
      value: marked(e.target.value)
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Markdown handleChange={e => this.handleChange(e)} />
        <Render value={this.state.value}/>
      </div>
    );
  }
}

export default App;