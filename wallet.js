import React, { Component } from 'react';
import logo from './logo.png';
import './wallet.css';

class Wallet extends Component {
  render() {
    return (
      <div >
        <div className="div1">
        
        <p className="style1">Rs. 12</p>
        <p className="style2">
          Your wallet balance
        </p>
        <input className="style" type="text" placeholder="Enter Amount To be added in wallet"></input>
       
        <button className="button1">MyPassbook</button>
        <button  className="button2"> Add Money To wallet</button>
        </div>
        
      </div>
    );
  }
}

export default Wallet;
