import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getBook} from '../../actions/booksActions'
import {AddToCart} from '../../actions/cartAction'
import axios from 'axios'
import './newProduct.css'
// import '../Home/footer.css';

// import Popup from 'reactjs-popup' 
// import { connect } from 'react-redux';
// import UserLogin from './UserLogin'
// import UserSignup from './UserSignup';
import Popup from 'reactjs-popup' 
import { Link,Redirect,browserHistory } from 'react-router-dom'
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
// import './product.css'
class Product extends Component {
  state={
    instock:false,
    productData:true,
    SelectCond:'',
    GotoCart:false,
    bookName:'',
    bookSlug:'',
    bookPrice:'',
    bookShippingCost:'',
    bookCondition:'',
    bookDonner:'',
  }
  slug=this.props.match.params.slug

  componentDidMount(){
    this.props.getBook(this.slug)
  //   const {compExamBooks} = this.props
  console.log(this.slug);
  
  };

  changeDataBottom=()=>{
    alert("ch")
    this.setState({productData:!this.state.productData})
  }
  // SetShipping(bookShippingCost){
    
  //   this.setState({bookShippingCost:bookShippingCost})
  // }
  onChanged = e => {this.setState({[e.target.name]:e.target.value})}
  render() {
    // this.componentDidMount(){}
    const {book,bookCondition} = this.props
    console.log(bookCondition);
    
    const toCart=()=>{
      this.setState({bookName:book.title})
      this.setState({bookSlug:book.slug})
      this.setState({bookPrice:book.price})
      this.setState({bookShippingCost:book.title})
      this.setState({bookCondition:this.state.SelectCond})
      this.setState({bookDonner:book.title})
      alert("clci")
      const MyCart ={

      }
      AddToCart(MyCart);
      this.setState({GotoCart:true})
     
    }
    const GetPoductData =book.book_desc
    // const aa = bookCondition.VeryGood
    // console.log(aa[donor_name]);
    // for (var a in bookCondition){
    //   console.log(bookCondition[a]);    
    // }
    // var {VeryGood} = bookCondition
    // let Vg = VeryGood
    // console.log(VeryGood);
    // VeryGood.map((child)=>{
    //   console.log(child);
    // })
    let VeryGood =[]
    let AlmostNew=[]
    let AverageButInReadableCondition=[]
    let BrandNew=[]
    let SHIPPINGCOST=''
    // var rack_no =''
    Object.keys(bookCondition).map((val)=>{

      // this.setState({SelectCond:val})
      const Vg =bookCondition[val];
      if(val === 'VeryGood'){
        VeryGood.push(Vg);
        console.log(VeryGood[0].shipping)
        if(this.state.SelectCond === ''){
          this.setState({SelectCond:'VeryGood'})
        } 
      }
      if(val === 'AlmostNew'){
        AlmostNew.push(Vg)
        if(this.state.SelectCond === ''){
          this.setState({SelectCond:'AlmostNew'})
        } 
      }
      if(val === 'AverageButInReadableCondition'){
        AverageButInReadableCondition.push(Vg) 
        if(this.state.SelectCond === ''){
          this.setState({SelectCond:'AverageButInReadableCondition'})
        } 
        // this.setState({SelectCond:'AverageButInReadableCondition'})

      }
      if(val === 'BrandNew'){
        BrandNew.push(Vg)

      }
      console.log(VeryGood,AlmostNew,AverageButInReadableCondition,BrandNew);
      


      Object.keys(Vg).map(function(child){
        // console.log(`${child} => ${Vg[child]}`);
        
        const chil = Vg[child]
        // console.log(chil,child);

      })
      
    })
    // const allCond = VeryGood.map((cond)=>
    // <p>{cond.VeryGood}</p>
    // );
    const publication_date = book.publication_date
    // console.log(`${publication_date.toString()} oo`);
    if(publication_date)
    {
      console.log(`${publication_date.toString().length} oo`);
      var PubliDateLength = publication_date.toString().length
    }
    // const PubliDateLength = publication_date
    var GetPoductReview =`REE`
    var bottomDatta = GetPoductData
    if(this.state.productData === true){
      var bottomDatta = GetPoductData
    }else{
      var bottomDatta = GetPoductReview
    }
    // console.log(this.props.book["title"])
    
    console.log(book);
    const thumb=(book.thumb)
    // const src=`https://s3.ap-south-1.amazonaws.com/mypustak-3/uploads/books/medium/${thumb}`
    // const src=`https://s3.ap-south-1.amazonaws.com/mypustak-3/uploads/books/medium/gate-2010-electronic-communication-engineering`
    const src=`https://s3.ap-south-1.amazonaws.com/mypustak-3/uploads/books/thumbs/${thumb}`
    var RACKNO = ''
    if(this.state.SelectCond === 'VeryGood'){
      RACKNO=  VeryGood.map(child=><span>{child.rack_no}</span>)}
    else if(this.state.SelectCond === 'BrandNew'){
      RACKNO=  BrandNew.map(child=><span>{child.rack_no}</span>)}
    else if(this.state.SelectCond === 'AverageButInReadableCondition'){
      RACKNO=  AverageButInReadableCondition.map(child=><span>{child.rack_no}</span>)}
    else if(this.state.SelectCond === 'AlmostNew'){
      RACKNO=  AlmostNew.map(child=><span>{child.rack_no}</span>)}
    else{
     RACKNO = ''
    }

    var SHIPPING = ''
    if(this.state.SelectCond === 'VeryGood'){
      
      SHIPPING=  VeryGood.map(child=><span id="productShippingCost">&#8377;{child.shipping}</span>)
      SHIPPINGCOST=VeryGood.map(child=>{return child.shipping})}

    else if(this.state.SelectCond === 'BrandNew'){
      SHIPPING=  BrandNew.map(child=><span id="productShippingCost">&#8377;{child.shipping}</span>)}
    else if(this.state.SelectCond === 'AverageButInReadableCondition'){
      SHIPPING=  AverageButInReadableCondition.map(child=><span id="productShippingCost">&#8377;{child.shipping}</span>)}
    else if(this.state.SelectCond === 'AlmostNew'){
      SHIPPING=  AlmostNew.map(child=><span id="productShippingCost">&#8377;{child.shipping}</span>)}
    else{
     SHIPPING = ''
    }
    if (this.state.GotoCart !== false){
      return <Redirect to='/view-cart'/>;
    }
    // while(this.state.SelectCond === 'VeryGood'){
    //   this.setState({bookShippingCost:VeryGood.shipping});
    //   break
    // }
    // if(this.state.SelectCond === "VeryGood"){
    //   console.log(VeryGood[0].shipping);
      
    // }
    // // function 
    return (
    <div> 
      <MainHeader/>  
      <div id="productBody">
        <div id="productLeft">
              <div id="productImg">
                <img src={src}/>
              </div>

              <div id="productDetails">
                <p id="productTitle"> {book.title}</p>
                <hr/>
                <p id="productAuthor">Author : <span id="productAuthorName">{book.author}</span></p>
                <p id="productPublic">Publication :  
                <span id="productPublicName">{book.publication}<span id={(PubliDateLength !== 4?"NopublicationDate":"")} >({book.publication_date})</span></span>
                 <span id={(book.no_of_pages !== null?"productPages":"NoproductPages")}> &nbsp;
                {book.no_of_pages} pages</span></p>
                <hr/>
                <p id="ProductisbnFormat">
                  <span id="language">Language:{book.language}</span>
                  <span id="format">Format:{book.binding}</span></p>
                  <p id="ProducteditionLanguage">
                  <span id="weight">Weight:{book.weight} </span> 
                  <span id={(bookCondition.is_soldout === 'Y')?"NOrack_no":"rack_no"}>Rack No:
                  {RACKNO}
                </span> </p>
                <p id="ProducteditionLanguage">
                  <span id={(book.isbn !== ""?"":"Noisbn") }>ISBN:{book.isbn} </span> 
                  <span id={( book.edition !== '' ?( book.edition !== null ?"edition":"Noedition"):"Noedition")} >Edition :{book.edition}</span> </p>
              </div>
            <form id="PincodeChecker">
              <input type="text" name="PincodeCheck" 
              placeholder="Enter Pincode to Check Cash On Delevery Service"
              id="InputPincodeChecker"
              />
              <button type="submit" id="checkButton">Check</button></form>
          <div id={(GetPoductData !== ''?"productleftBottom":"NoproductleftBottom")}>
          {/* <p><span id="Productdescription" onClick={this.changeDataBottom}>Description</span><span id="Productreviews" onClick={this.changeDataBottom}>Reviews</span></p> */}
          <p><span id="Productdescription">Description</span></p>
          <div id="productleftBottomData">
          {bottomDatta}
          </div>
          </div>
        </div>

          <div id="productRight">
          <div id="productRightFirstPart">
            <p id="productRightBook">Book</p>
            {(bookCondition.is_soldout === 'Y')?
              <div id="productRightdetailsSoldOut">
              <p id="SoldOut">SOLD OUT<button id="NotifyMeBtn">NOTIFY ME</button></p>
              <p id="productMRP">MRP : &#8377;<span id="productPrice">{book.price}</span> 
              <span id="productFREE">(FREE)</span></p>
              </div>
              :<div id="productRightdetails">
              <p id="productMRP">MRP : &#8377;<span id="productPrice">{book.price}</span> 
              <span id="productFREE">(FREE)</span></p>
              <div id="productShipping"><span>Pay Only<br/> Shipping & Handling</span>
              {/* {VeryGood.map(child=><span id="productShippingCost">&#8377;{child.shipping}</span>)} */}
              {SHIPPING}
              </div>
              <hr style={{ marginTop:'0px',marginBottom:'0px' }}/>
              <div id="productRightCond">
                  <p>Select Book Condition</p>
                  <div id="productRightCondSelect">
                  {(VeryGood.length !== 0)?
                    <div><input type="radio" name="SelectCond" value="VeryGood" checked={this.state.SelectCond ==="VeryGood"}
                    onChange={this.onChanged}/><span id={(this.state.SelectCond ==="VeryGood")?"slectedColor":"null"}>Very Good</span><br/></div>:null}

                  {(BrandNew.length !== 0)?
                    <div><input type="radio" name="SelectCond" value="BrandNew" checked={this.state.SelectCond ==="BrandNew"}
                  onChange={this.onChanged}/><span id={(this.state.SelectCond ==="BrandNew")?"slectedColor":"null"}>Brand New</span><br/></div>:null}

                  {(AlmostNew.length !== 0)?
                    <div><input type="radio" name="SelectCond" value="AlmostNew" checked={this.state.SelectCond ==="AlmostNew"}
                    onChange={this.onChanged}/><span id={(this.state.SelectCond ==="AlmostNew")?"slectedColor":"null"}>As Good As New</span><br/></div>:null}



                    {(AverageButInReadableCondition.length !== 0)?
                    <div><input type="radio" name="SelectCond" value="AverageButInReadableCondition" checked={this.state.SelectCond ==="AverageButInReadableCondition"}
                    onChange={this.onChanged}/><span id={(this.state.SelectCond ==="AverageButInReadableCondition")?"slectedColor":"null"}>Good And Readable</span><br/></div>:null}
                  </div>
              </div>
              <hr/>
              <div id="productRightDelivered">
                <p>Delivered in 4-7 days</p>
              <button id="AddToCartBtn" onClick={toCart}>Add to Cart</button>
              </div>
              </div>}
          </div>
            </div>
      </div>   
      <MainFooter/>
    </div>
          
        
        
        
    
    )
  }
}
const mapStateToProps = state => ({
  book:state.compExam.book,
  bookCondition:state.compExam.bookCondition,
})

export default connect(mapStateToProps,{getBook,AddToCart})(Product);


