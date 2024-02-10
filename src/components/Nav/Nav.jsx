import React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";
import style from "./Nav.module.css";
import styled from "styled-components";

const NavLink = styled(BaseNavLink)`
    &.active::after{
        color: black !important;
        width: 120%;
    }
`

const Nav = () => {
    return (

        <nav className={style.nav}>

            <NavLink to='/'>Home</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/library">Library</NavLink>
            <NavLink to="/learn">Learn</NavLink>



        </nav>

    );
}

export default Nav;