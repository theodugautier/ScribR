import React, { Component } from 'react';

class WordCount extends Component {
    render() {
        return (
            <div className="word">
                <p>{this.props.caractere} characters | {this.props.words} Words</p>
            </div>
        );
    }
}

export default WordCount;