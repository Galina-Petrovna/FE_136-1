import React from "react";


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

    return (
        <nav className={style.nav}> 

            <NavLink to='/'>Главная</NavLink>
            <NavLink to="/vet">Ветеринария</NavLink>
            <NavLink to="/learn">Прокат лошадей</NavLink>
            <NavLink to="/photo">Фотогалерея</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>


        </nav>

       

    );
}

export default Nav;