import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from './images/logo.png'

// import './Navbar.css'

const HeaderPage = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="fixed top-24 h-[90px] w-11/12 z-10 transition ease-in overflow-hidden ">
      <nav className="flex">
        {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> */}
        {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> */}
        <ul className={click ? " active:border-black" : " flex space-x-7"}>
          <li className={click ? " bg-red-900 " : ""}>
            <a
              className={click ? " bg-red-900 " : ""}
              href="#"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className=" hover:border-b-2" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className=" hover:border-b-2"
              href="#testimonials"
              onClick={closeMenu}
            >
              Testimonials
            </a>
          </li>
          <li className={click && " bg-red-900 "}>
            <a
              className={click && " bg-red-900 "}
              href="#demo"
              onClick={closeMenu}
            >
              Demo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderPage;
