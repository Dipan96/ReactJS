import React, { Component } from 'react';
import {Redirect} from'react-router-dom';
import './DonarAccDonarReq.css';
import './DonarAccDonarBooks.css';

class DonarAccDonarReq extends Component {
   constructor(props) {
    super(props);
  this.state={
    isdata:false,
   
 }

this.handleClick = this.handleClick.bind(this);
}
   

   renderRedirect  (e) {
  
   window.location.href = "";
  }
   renderRedirect1  (e) {
  
   window.location.href = "/order/";
  }
   renderRedirect2  (e) {
  
   window.location.href = "";
  }
   renderRedirect  (e) {
  
   window.location.href = "/donate/DonationReq/";
  }
   handleClick(e) {
    e.preventDefault();
    this.setState(prevstate => {
return{
      isdata: !prevstate.isdata}
    });
  }
  render() {
   if(this.state.isdata===false){
return (
      <div style={{backgroundColor:'#F8F8FF'}} >
      <p className="Your-Account">Your Account>Your Orders & Book Donations</p><br/>
    <label className="Your-Orders-Books-Donations">Your Orders & Books Donations
    <input type="text" placeholder="Search All Orders & Books Donations" name="search" className="Layer-3"></input>
  <button type="submit" className="Layer-4"> Search</button></label>
<br/><br/><br/>
  <table className="table" >
      <tr>
        <th className="Orders">  <button type="submit" className="Layer-4" onClick={()=>this.renderRedirect1()}>Orders</button></th>
        <th className="Open-Orders">  <button type="submit" className="Layer-4" onClick={()=>this.renderRedirect2()}>Open Orders</button></th>
        <th className="Cancelled-Orders"> <button type="submit" className="Layer-7" onClick={()=>this.renderRedirect3()}>Cancelled Orders</button></th>
        
        <th className="Book-Donations"> <button type="submit" className="Layer-6" onClick={()=>this.renderRedirect()}>Book Donations</button></th>
      </tr>
  </table>
  <hr className="hr"/>

      
 


<div style={{ border: '1px white',
  marginLeft: '2%',
  marginRight: '2%',
  paddingBottom: '7%',
  height:'100%',
  backgroundColor:'white' ,
  marginTop:'-0.6%'
  }}>  
<ul id="ul">
  <li><a class="active" href="" >Donation Request</a></li>
  
  <li><a href="" onClick={this.handleClick} >Donated Books</a></li>
</ul>
      <table className="table1">

 <th className="All-Donation-Requests">All Donation Request</th>
</table>
<hr className="hr1"/>

<table className="table1">
<tr>

<th id="heading">Id<br/><br/></th>
<th id="heading">Book Pick Up Date And Time<br/><br/></th>
<th id="heading">Books Donated<br/><br/></th>
<th id="heading">Date<br/><br/></th>
<th id="heading">Book Weight<br/><br/></th>
<th id="heading">Status<br/><br/></th>
</tr>
<br/>
<tbody>
<tr>
<td>6451</td>
<td>20-12-2018 12:12AM</td>
<td>12</td>
<td>11-12-2018</td>
<td>12KG</td>
<td><button type="submit" className="Layer-5"> Pending</button></td>
</tr>
<br/>
<tr>
<td>5552</td>
<td>24-09-2018 12:09AM</td>
<td>20</td>
<td>07-09-2018</td>
<td>1KG</td>
<td><button type="submit" className="Layer-5"> Dispatched</button></td>
</tr>
</tbody>
</table>
   </div>
</div>
);
}
else{
  return(
  <div style={{backgroundColor:'#F8F8FF'}}>
      <p className="Your-Account1">Your Account>Your Orders & Book Donations</p><br/>
    <label className="Your-Orders-Books-Donations1">Your Orders & Books Donations
    <input type="text" placeholder="Search All Orders & Books Donations1" name="search" id="Layer-3"></input>
  <button type="submit" id="Layer-4"> Search</button></label>
<br/><br/><br/>
  <table className="table" >
      <tr>
        <th className="Orders1">  <button type="submit" id="Layer-4">Orders</button></th>
        <th className="Open-Orders1">  <button type="submit" id="Layer-4">Open Orders</button></th>
        <th className="Cancelled-Orders1"> <button type="submit" id="Layer-7" >Cancelled Orders</button></th>
        <th className="Book-Donations1"> <button type="submit" id="Layer-6">Book Donations</button></th>
      </tr>
  </table>
  <hr className="hr"/>

      
 


    <div style={{ border: '1px white',
  marginLeft: '2%',
  marginRight: '2%',
  paddingBottom: '7%',
  height:'100%',
  backgroundColor:'white' ,
  marginTop:'-0.6%'
  }} >
<ul id="ul">

  <li><a href="" onClick={this.handleClick}>Donation Request</a></li>

  <li><a class="active" href="/">Donated Books</a></li>
 
</ul>

<table className="table2">
<tr id="heading">
<th>Book Cover<br/><br/></th>
<th>Books Title<br/><br/></th>
<th>Category<br/><br/></th>
<th>Status<br/><br/></th>
<th>Reading<br/><br/></th>
</tr>
<br/>

</table>
</div>
</div>
);
}
}
}
export default DonarAccDonarReq;


