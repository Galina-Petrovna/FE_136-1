import React, { useState } from 'react';
import Logo from './../../assets/img/Logo1.png';

import Menu from './../../assets/img/Menu.png';

import style from "./Header.module.css";
import Nav from '../Nav/Nav';
import NavMob from '../NavMob/NavMob';
import { Outlet } from 'react-router-dom';

const Header = () => {

    const [isOpen, setOpen] = useState(false);
   
    return (
        <>
            <header className={style.header}>
                
                <img  className={style.img} src={Logo} alt="" />
                <p className={style.p}>конно-спортивный клуб "Звездный"</p>
                <Nav />
                

                <button  onClick= {() =>setOpen(!isOpen)}><img className={style.button}  src={Menu} alt="" /></button>


                {isOpen &&  <NavMob/>}  



            </header>

            <Outlet />
        </>
    )
}

export default Header;