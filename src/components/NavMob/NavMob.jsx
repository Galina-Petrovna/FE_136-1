import React from "react";



import { NavLink  } from "react-router-dom";
import style from "./NavMob.module.css";


const Navmob = () => {



    return (
        <nav className={style.nav}> 

            <NavLink to='/'>Главная</NavLink>
            <NavLink to="/vet">Ветеринария</NavLink>
            <NavLink to="/learn">Прокат лошадей</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>


        </nav>

       

    );
}

export default Navmob;