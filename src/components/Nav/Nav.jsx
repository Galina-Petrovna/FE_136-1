import React, {useState} from "react";
import Menu from './../../assets/img/Menu.png';

// import { NavLink as BaseNavLink } from "react-router-dom";


import { NavLink  } from "react-router-dom";
import style from "./Nav.module.css";


// import styled from "styled-components";

// const NavLink = styled(BaseNavLink)`
//     &.active::after{
//         color: black !important;
//         width: 120%;
//     }
// `

const Nav = () => {
    // const [isOpen, setOpen] = useState();

    return (
        
        // <nav className={`{style.nav} ${isOpen ? "active" : ""}`}>

        <nav className={style.nav}> 

            <NavLink to='/'>Главная</NavLink>
            <NavLink to="/vet">Ветеринария</NavLink>
            <NavLink to="/learn">Прокат лошадей</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>


        </nav>

       

    );
}

export default Nav;