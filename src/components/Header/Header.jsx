import React from "react";
import logo from "./logo.png";
import { RxAvatar } from "react-icons/rx";
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="flex gap-1 items-center">
        <img src={logo} alt="avr logo" />
        <h1 className="text-xl text-[#FF5E1A] font-bold">VerveAr</h1>
      </div>


      <div className="flex gap-1 items-center">
      <RxAvatar color="#A1A1AA"/>
      <h5 className="text-[#A1A1AA] text-xs font-medium">Destiny Ehiakhamen</h5>
      </div>
    </div>
  );
};

export default Header;
