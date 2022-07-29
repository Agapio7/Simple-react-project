import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component3 extends Component {
  render() {
    return (
      <Spring
      from={{ opacity : 0 }}
      to= {{ opacity: 1 }}
      config= {{ delay: 1000 , duration: 1000 }}
    >
        { props => (
          <div style={props}>
            <div style={c3Style}>
              <h1>Imagen: Text-to-Image Diffusion Models</h1>
              <p>Imagen is an AI system that creates photorealistic images from input text.
                Imagen builds on the power of large transformer language models in understanding text and hinges on the strength of diffusion models in high-fidelity image generation. </p>
            </div>
          </div>
        )}
       </Spring>
    )
  }
}


const c3Style = {
    background: 'pink',
    color: 'dark',
    padding: '1.5rem'
  }

  
export default Component3
