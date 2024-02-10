import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "./../assets/logo.jfif";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img className={style.img} src={Logo} alt="" />
                <Nav />
            </header>
            <Outlet /> 
        </>
    );
}

export default Header;