import React, { Component } from 'react';
import P5wrapper from 'react-p5-wrapper';
import {wrappedSketch} from './sketch.js'

export default class P5React extends Component {
  constructor(props) {
    super(props);
		this.state = {
      features: {
        eyeSize: 10,
        eyeWidth: 43,
        eyeColour: "#bf8040",
    
        pettalLength: 0,
        pettalWidth: 0,
        pettalColour: "#e6ffff",
        pettalSpacing: 15,
    
        mouth: false,
    
        centerColour: "#ffffcc",
        centerSize: 100
      },
		};
  }

  render(){
    const sketch = wrappedSketch(this.state.features);

    return  (
        <div>
            <P5wrapper sketch={sketch} />
        </div>
      )
  }
}