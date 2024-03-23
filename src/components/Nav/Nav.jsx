import React from "react";

import { NavLink  } from "react-router-dom";
import style from "./Nav.module.css";

import {useTranslation} from 'react-i18next';




const Nav = () => {

    const {t}=useTranslation();

    return (
        <nav className={style.nav}> 

            <NavLink to='/'>{t("home")}</NavLink>
            <NavLink to="/vet">{t("vet")}</NavLink>
            <NavLink to="/learn">{t("learn")}</NavLink>
            <NavLink to="/photo">{t("photo")}</NavLink>
            <NavLink to="/contacts">{t("contacts")}</NavLink>

        </nav>

       

    );
}

export default Nav;