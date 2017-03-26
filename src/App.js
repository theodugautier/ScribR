import React, { Component } from 'react';
import Markdown from './components/markdown';
import Render from './components/render';
import Word from './components/wordCount';
// import Dlpdf from './components/DlPdf'
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

//je recupere le local storage
var value = JSON.parse(localStorage.getItem('value')) || "# Hello";

class App extends Component {
   constructor(props) {
      super(props);
		
      this.state = {
        value: marked(value),
        caractere: 0,
        words: 0
      }
      this.handleChange = this.handleChange.bind(this);
   }

  handleChange(e) {
    const caractere = e.target.value;
    // je mets la valeur dans le local storage
    localStorage.setItem('value' , JSON.stringify(e.target.value));
    this.setState({
      value: marked(e.target.value),
      caractere: caractere.length,
      words: caractere.split(' ').length
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Markdown defaut={value} handleChange={e => this.handleChange(e)} />
        <Render value={this.state.value} />
        <Word words={this.state.words} caractere={this.state.caractere} />
      </div>
    );
  }
}

export default App;