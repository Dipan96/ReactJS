import React, { Component } from 'react';
import './order.css';
import img from'./img.jpg';
import loc from './loc.png';

class Order extends Component {
  renderRedirect  (e) {
  window.location.href = "/donate/DonationReq/";
  }
   renderRedirect1  (e) {
  window.location.href = "/order/";
  }
render(){
return (
      <div style={{backgroundColor:'#F8F8FF'}} >
      <p id="Your-Account">Your Account>Your Orders & Book Donations</p><br/>
    <label id="Your-Orders-Books-Donations">Your Orders & Books Donations
    <input type="text" placeholder="Search All Orders & Books Donations" name="search" id="Layer-3"></input>
  <button type="submit" id="Layer-4"> Search</button></label>
<br/><br/><br/>
  <table id="table" >
      <tr>
        <th id="Orders">  <button type="submit" id="Layer-6" onClick={()=>this.renderRedirect1()}>Orders</button></th>
        <th id="Open-Orders">  <button type="submit" id="Layer-4" onClick={()=>this.renderRedirect2()}>Open Orders</button></th>
        <th id="Cancelled-Orders"> <button type="submit" id="Layer-7" onClick={()=>this.renderRedirect3()}>Cancelled Orders</button></th>
        <th id="Book-Donations"> <button type="submit" id="Layer-8" onClick={()=>this.renderRedirect()}>Book Donations</button></th>
      </tr>
  </table>
  <hr id="hr"/>

   <label id="Orders-Placed-In"> Orders Placed In </label>


<select id="select">
  <option value="" id="op">Last 30 Days</option>
  <option value="" id="op">Last 6 Months</option>
  <option value="" id="op">Last 1 Year</option>
</select>
 <label id="Payment-Method"> Payment Method </label> 
    
<select id="select">
  <option value="" id="op">Cash On Delivery</option>
  <option value="" id="op">Debit/Credit Card</option>
  <option value="" id="op"></option>
</select>
<label id="Order-Status"> Order Status </label>
<select id="select">
  <option value="" id="op">Delivered</option>
  <option value="" id="op">Yet To Deliver</option>
  <option value="" id="op"></option>
</select>

<div id="div1">
    <br/>
    <label id="Order-Placed"> Order Placed :</label>
     <label id="Shipped-To"> Shipped To </label>
      <label id="Shipped-To"> Placed By </label>
       <label id="Shipped-To"> Order Total </label>
        <label id="Shipped-To"> Order ID: #<b>519368</b></label>
        <br/>
         <label id="Order-Placed"><b> 26th January,19</b></label>
         <label id="dt"> Mukul Agarwal </label> 
          <label id="dt1"> Mukul Agarwal </label> 
           <label id="dt2">&#8377;293</label> 
            <label id="dt3"> View Order Details </label> 
                <hr id="hr1"/>
            <p style={{marginLeft:'1%'}}><b>Total No Of Books Follows =2</b></p>
            <img src={img} alt="Add" style={{width:'10%',marginTop:'2px'}}></img>
            <label style={{marginTop:'1%',position:'absolute',width:'20%'}}>THE WINNING WAY:LEARNINGS FROM
SPORT MANAGERS:Learning</label>
<label style={{marginTop:'0.8%',position:'absolute',marginLeft:'30%'}}> Delivery Expected By 5th feb,19</label>
<label style={{marginTop:'3.8%',position:'absolute'}}> &#8377;<strike>60</strike></label>
<label style={{marginTop:'3.8%',position:'absolute',marginLeft:'3%',color:'red'}}><b> Free</b></label>
<button type="submit" id="Layer-9"><img src={loc} alt="location" style={{width:'10%',marginTop:'2px'}}></img> Track Package</button>
<button type="submit" id="Layer-10"> Thanks To Donar</button>
<button type="submit" id="Layer-11"> Convert To Prepaid</button>
<button type="submit" id="Layer-12"> Write Delivery Feedback</button>
<select id="select1">
  <option value="" id="op">View More</option>
  <option value="" id="op"></option>
  <option value="" id="op"></option>
</select>
</div>

<div id="div1">
    <br/>
    <label id="Order-Placed"> Order Placed :</label>
     <label id="Shipped-To"> Shipped To </label>
      <label id="Shipped-To"> Placed By </label>
       <label id="Shipped-To"> Order Total </label>
        <label id="Shipped-To"> Order ID: #<b>519368</b></label>
        <br/>
         <label id="Order-Placed"><b> 26th January,19</b></label>
         <label id="dt"> Mukul Agarwal </label> 
          <label id="dt1"> Mukul Agarwal </label> 
           <label id="dt2">&#8377;293</label> 
            <label id="dt3"> View Order Details </label> 
                <hr id="hr1"/>
            <p style={{marginLeft:'1%'}}><b>Total No Of Books Follows =2</b></p>
            <img src={img} alt="Add" style={{width:'10%',marginTop:'2px'}}></img>
            <label style={{marginTop:'1%',position:'absolute',width:'20%'}}>THE WINNING WAY:LEARNINGS FROM
SPORT MANAGERS:Learning</label>
<label style={{marginTop:'0.8%',position:'absolute',marginLeft:'30%'}}> Delivery Expected By 5th feb,19</label>
<label style={{marginTop:'3.8%',position:'absolute'}}> &#8377;<strike>60</strike></label>
<label style={{marginTop:'3.8%',position:'absolute',marginLeft:'3%',color:'red'}}><b> Free</b></label>
<button type="submit" id="Layer-9"><img src={loc} alt="location" style={{width:'10%',marginTop:'2px'}}></img> Track Package</button>
<button type="submit" id="Layer-10"> Thanks To Donar</button>
<button type="submit" id="Layer-11"> Convert To Prepaid</button>
<button type="submit" id="Layer-12"> Write Delivery Feedback</button>
<select id="select1">
  <option value="" id="op">View More</option>
  <option value="" id="op"></option>
  <option value="" id="op"></option>
</select>

</div>
</div>
);
}
}

export default Order;


