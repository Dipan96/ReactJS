import React, { Component } from 'react';
import './faq.css';

class Faq extends Component {
  constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }
   
    
  render() {
    return (
      <div className="tabs">
          <p className="Frequently-Asked-Questions">Frequently Asked Questions</p>
              
    <a id="All" href="#basics">All</a>
		<a id="Donate"href="#Donate">Donate Books</a>
		<a id="General" href="#General">General</a>
		<a id="Payments" href="#Payments">Payments</a>
		<a id="Volunteer" href="#Volunteer">Volunteer</a>
		<a id="Delivery-Options" href="#Delivery-Options">Delivery Options</a>
    
    <div  className="dropdown" style = {{background:"white",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> How can I donate books </div>

          { this.state.displayMenu ? (
          <ul>
         <li><p>It’s quite simple you just have to login to our website and fill the information from and we will get back to you with all the details regarding collection of books in 24 working hours.</p></li>
       
          </ul>
        ):
        (
          null
        )
        }
         </div>
       
          
                    </div>
          
        
        
        
    
    );
  }
}
export default Faq;