import React, { Component } from 'react';
// import logo from './logo.png';
import './contact.css';
import {Helmet} from 'react-helmet'
class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>
            {'body{background-color:#f3f7f8;}'}
          </style>
        </Helmet>
	  
	  <div className="div1">
       <p className="contact-us"> Contact Us </p>

       <p className="style2"><span className="txtstyle3">If You Are Already A MyPustak User Then</span> <a className="linkstyle" href="">Log In </a><span className="txtstyle3">Before Contacting Us.</span></p>
       <div className="div2">
       <p className="style3"> Call Us <span className="txtstyle1">:+91-9007022851</span> <br/>
       Email Us: <span className="txtstyle2"> support@mypustak.com </span>  </p> </div><br/>
       <span className="align1">Your Name</span><br/><br/> <input className="tbox1" type="text" placeholder="Enter Your Name"></input>
      <span className="align2"> Your Email ID/Mobile Number</span><br/><br/><input className="tbox1" type="text" 
       placeholder="Enter Your Email ID/Mobile Number"></input>
      <br/><br/>
     <span className="align3"> Your Message</span><input className="tbox3" type="text" placeholder="Subject(Optional)"></input>
      <input className="tbox2" type="text"></input>
      <input className="box3" type="submit"  value="Send"></input>
       </div>
  
      </div>
    );
  }
}

export default Contact;
