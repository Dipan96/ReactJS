import React, { Component } from 'react';
import './wishlist.css';
import {Helmet} from 'react-helmet';
import book from './book.jfif';
import del from './del.png';

class Wishlist extends Component {

render(){
return (
<div>
  <Helmet>
<style>{'body{background-color:#f3f7f8;}'}</style></Helmet>
<p id="My-Wishlist">My Wishlist(1)</p>
<hr style={{width:'96%',marginTop:'-1%' }}/>
<div id="div3">
<img src={book} style={{width:'5%',paddingBottom:'1%',marginLeft:'4%',marginTop:'0.7%'}}></img>
<label style={{position:'absolute',marginLeft:'2%',marginTop:'2%'}}> How To Prepare For Logical Reasoning in CAT By Arun Sharma</label>
<label style={{position:'absolute',marginLeft:'2%',marginTop:'3.5%',fontSize:'92%'}}><span style={{color: 'lightgrey'}}>Publication:</span> McGraw Hill Education </label>
<label style={{position:'absolute',marginLeft:'2%',marginTop:'4.8%',fontSize:'92%'}}>ISBN: 9789339205584</label>
<img src={del} style={{width:'1%',position:'absolute',marginLeft:'77%',marginTop:'48px'}}></img>
</div>
</div>

);
}
}

export default Wishlist;


