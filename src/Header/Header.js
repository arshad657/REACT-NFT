import React from 'react';
import './Header.css';

function Header() {
  return (
   <div className='header'>
     <div>
     <img src='./assets/header/cryptopunk-logo.png' className='logo'/>
     </div> 

     <div className="searchBar">
       <div className="searchIcon">
        <img src="./assets/header/search.png" alt="" />
       </div>
       <input type="search" name="" id="" placeholder='Search Here'/>
       </div>

       <div className="headerItems">
        <p>Drops</p> 
        <p>Marketplace</p> 
        <p>Create</p> 
        
        <div className="themeIcon">
          <img src="./assets/header/theme-switch.png" className='theme-pic' alt="" />
        </div>
        
        <div className="login-btn">
          Get In
        </div>
         </div> 

    
  </div>
  );
}

export default Header;
