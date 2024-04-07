import React, { useState } from 'react';
import Logo from './../../assets/img/Logo1.png';
import Menu from './../../assets/img/Menu.png';
import style from "./Header.module.css";
import Nav from '../Nav/Nav';
import NavMob from '../NavMob/NavMob';
import { Outlet } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import {useTranslation} from 'react-i18next';

const Header = () => {

    const {t}=useTranslation();
    const [isOpen, setOpen] = useState(false);
   
    return (
        <>
            <header className={style.header}>
                
                <img  className={style.img} src={Logo} alt="" />
                <p className={style.p}>{t("header.hello")}</p>
                <Nav />
                <LanguageSwitcher/>
                <button  onClick= {() =>setOpen(!isOpen)}><img className={style.button}  src={Menu} alt="" /></button>

                {isOpen &&  <NavMob/>}  

            </header>

            <Outlet />
        </>
    )
}

export default Header;