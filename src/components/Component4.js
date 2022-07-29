import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component4 extends Component {
  render() {
    return (
      <Spring
      from={{ opacity : 0 }}
      to= {{ opacity: 1 }}
      config= {{ delay: 1000 , duration: 1000 }}
    >
        { props => (
          <div style={props}>
            <div style={c4Style}>
              <h1> NUWA INFINITY</h1>
              <p>NUWA-Infinity is a multimodal generative model that is designed to generate high-quality images and videos from given text, image or video input</p>
            </div>
          </div>
        )}
       </Spring>
    )
  }
}


const c4Style = {
    background: 'yellow',
    color: 'blue',
    padding: '1.5rem'
  }

  
export default Component4
