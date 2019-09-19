import React, { Component } from 'react';
//import Data from "./data.js";
import Cell from "./Cell.js"

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map((val)=>{ <Cell value={val} />}) 
  )
  
  genMatrix = () => (
    this.props.values.map((rowValue) =>{ 
		<div className = "row">
			{this.genRow(rowValue)}
		</div>
	})
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

} // END RENDER

Matrix.defaultProps = {
	values: (() => {
		const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
		return (new Array(10).fill(defRow))
  })
}