import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component2 extends Component {
  render() {
    return (
      <Spring
      from={{ opacity : 0 }}
      to= {{ opacity: 1 }}
      config= {{ delay: 1000 , duration: 1000 }}
    >
        { props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Parti: Text to Image Pathway Model</h1>
              <p>an autoregressive text-to-image generation model that achieves high-fidelity photorealistic image generation and supports content-rich synthesis involving complex compositions and world knowledge.</p>
            </div>
          </div>
        )}
       </Spring>
    )
  }
}


const c2Style = {
    background: 'green',
    color: 'white',
    padding: '1.5rem'
  }

  
export default Component2
