import React, { Component } from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            color: this.props.value
        }
    }

    colorChange = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render(){
        return (
            <div className="cell" onClick={this.colorChange} style={{ backgroundColor: this.state.color }}>{this.state.color} </div>
            
        )
    }
}

export default Cell