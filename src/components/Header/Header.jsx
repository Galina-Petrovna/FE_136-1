import React, { useState } from 'react';
import Logo from './../../assets/img/Logo1.png';

import Menu from './../../assets/img/Menu.png';

import style from "./Header.module.css";
import Nav from '../Nav/Nav';
import NavMob from '../NavMob/NavMob';
import { Outlet } from 'react-router-dom';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import {useTranslation} from 'react-i18next';


// import {locales} from './../../locales';


const Header = () => {

    const {t}=useTranslation();

    // const toggleLanguage = () => {
    //     const targetLanguage = i18next.language === 'en'?'ru':'en';
    //     i18next.changeLanguage(targetLanguage);
    // };

    const [isOpen, setOpen] = useState(false);
   
    return (
        <>
            <header className={style.header}>
                
                <img  className={style.img} src={Logo} alt="" />
                <p className={style.p}>{t('hello')}</p>
                <Nav />

                <LanguageSwitcher/>
                
                {/* <button className={style.button} onClick={toggleLanguage}>Выбрать язык</button> */}

                

                <button  onClick= {() =>setOpen(!isOpen)}><img className={style.button}  src={Menu} alt="" /></button>


                {isOpen &&  <NavMob/>}  



            </header>

            <Outlet />
        </>
    )
}

export default Header;