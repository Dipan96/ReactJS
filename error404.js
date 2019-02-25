import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
 import boy from './BOY404.png';
 import girl from './GIRL404.png';
 import man from './MAN404.png';
 import error from './error.png';
 import './error404.css';

class Error404 extends Component {
  render() {
    return (
        <div>
          <Helmet>
                <style>{'body { background-color: #b0e1ff;}'}</style>
            </Helmet>
        <img src={boy} id="boy" alt="Profile image"></img>
        <img src={girl} id="girl" alt="Profile image"></img>
        <img src={man} id="man" alt="Profile image"></img>
        <img src={error} id="error" alt="Profile image"></img>
        <p id="layer1">You Are Lost In Space</p>
        <p id="layer2">Please Go Back To Your <a id="linkstyle" href=""> Homepage</a></p>
        
        </div>
    );
  }
}

export default Error404;