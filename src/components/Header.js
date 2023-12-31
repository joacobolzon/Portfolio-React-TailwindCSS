import React from "react";
//images
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img className="flex w-40 h-20 object-cover" src={logo} alt="logo"></img>
        </a>
        {/* button */}
        <a href={"mailto:joacobolzon3@gmail.com"}>
          <button className="btn btn-sm">Work with me</button>
        </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
