import React from "react";

function Header() {
  return (
    <header id='myHeader'>
      <div className='container'>
        <img src='logo.png' alt='logo' className='logo-bottom' />

        <div className='nav'>
          <ul>
            <li className='active'>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Discover</a>
            </li>
            <li>
              <a href='/'>Profile</a>
            </li>
            <li>
              <a href='/'>About us</a>
            </li>
          </ul>
        </div>
        {/* <i className='fa fa-bars mob-menu'></i> */}
      </div>
    </header>
  );
}

export default Header;
