import React, {Component}  from 'react';

export default class Cell extends Component{

    constructor(props){
    super(props)
    console.log(props)
    this.state={
        color: this.props.value

    }
    }

    onClick=()=>{

        this.setState({
            color: '#333'  
        })
    }

    render(){
        return(
            <div onClick={this.onClick} className='cell' style={{ backgroundColor: this.state.color }}></div>
        )
    }
}