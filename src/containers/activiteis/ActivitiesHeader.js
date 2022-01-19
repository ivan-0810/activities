import React from 'react';
import Logo_header from '../../styles/assets/images/logo_header_wide.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg box-shadow-1">
        <div className="container-fluid d-flex justify-content-center align items-center py-2">
           <img src={Logo_header} alt="" width={113}  height={30}/>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
