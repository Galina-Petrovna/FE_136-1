import React, { useState } from 'react';
import Logo from './../../assets/img/Logo1.png';

import Menu from './../../assets/img/Menu.png';

import style from "./Header.module.css";
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
// import Header from 'react-header-responsive';
// import {Link} from 'react-router-dom'

const Header = () => {

    const [isOpen, setOpen] = useState(false);

    // const toggleMenu = () => {
    //     setOpen(true);
    // }
    return (
        <>
            <header className={style.header}>
                
                <img  className={style.img} src={Logo} alt="" />
                <p className={style.p}>конно-спортивный клуб "Звездный"</p>
                <Nav />
                {/* <button>Log in</button> */}
                {/* <img  className={style.img} src={Logo} alt="" /> */}

                <button  onClick= {() =>setOpen(!isOpen)}><img className={style.button}  src={Menu} alt="" /></button>

                {isOpen ??  <Nav/>}



            </header>

            <Outlet />
        </>
    )
}

export default Header;