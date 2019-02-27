import React, { Component } from 'react';
// import logo from './logo.png';
 import './qualityassurance.css';
 import donar from './Donorassurance.png';
import group from'./Qualitycontrolteam.png';
import shipment from './Qualitybeforeshipment.png';
import packing from './Qualitypacking.png';
class Qualityassurance extends Component {
  render() {
    return (
        <div id="div1">
        <p id="layer1">MyPustak Quality Assurance Test</p>
        <hr/>
   
        <img src={donar} id="donarimg" alt="Profile image"></img>
         <p id="layer2">Donor Assurence</p>
         <p id="donar">Donors insure quality books before
         sending books to us using User 
         Book Condition Guideline.</p>

         <img src={group} id="groupimg" alt="Profile image"></img>
         <label id="quality">Our Quality Control Team</label>
         <p id="group">We check every single book thrice
(By Our Quality Control Team) to 
ensure  that our book meets user’s
expectation.</p>

                 <p id="shipment" >Quality Before Shipment</p>
                 <img src={shipment} id="shipmentimg" alt="Profile image"></img>
                 <p id="ship">Before we ship your books our 
packing team verify quality.</p>

<p id="packing" >Quality Packing</p>
<img src={packing} id="packingimg" alt="Profile image"></img>
<p id="pack">We use best methods of 
packings to ensure that no 
books should damage during
transit.</p>
<div id="vidpos">
<iframe  src='https://www.youtube.com/watch?v=fjEX1uK_fAE'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>

</div>
          </div>
    );
        
  }
}


 export default Qualityassurance;
