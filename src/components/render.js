import React, { Component } from 'react';
import '../assets/App.css';

class Render extends Component {
    render() {
        return (
            <div>
                <div className="rendu" dangerouslySetInnerHTML={{__html: this.props.value}} />
            </div>
        );
    }
}

export default Render;