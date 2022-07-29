import React from 'react';
import { Spring } from 'react-spring';

export default function Component1() {
  return (
    <Spring
      from={{ opacity : 0, marginTop: -500}}
      to= {{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>DALL·E 2</h1>
            <p>DALL·E 2 is a new AI system that can create realistic images and art from a description in natural language.DALL·E 2 has learned the relationship between images and the text used to describe them. It uses a process called “diffusion,” which starts with a pattern of random dots and gradually alters that pattern towards an image when it recognizes specific aspects of that image.</p>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
};


