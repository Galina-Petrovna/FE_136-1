import React from "react";
import "./Header.css";
import Logo from "./../assets/logo.jfif";
import Nav from "../Nav/Nav";

function Header  () {
    return (
        <header className="header">
            <img className="img" src={Logo} alt="" />
            <Nav />
        </header>
    );
}

export default Header;