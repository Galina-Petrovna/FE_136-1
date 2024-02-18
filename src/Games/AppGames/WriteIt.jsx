import React from "react";
import style from "./AppGames.module.css";
// import Left from "./../../components/assets/left.svg";

import { NavLink } from "react-router-dom";

const WriteIt = () => {

    

    return (
        <>
            
            <nav className={style.gameNav}>
                <NavLink className={style.btnBack} to={'/games'}>
                   
                </NavLink>

                <ul className={style.results}>
                    <li>Errors:</li>
                    <li>Correct:</li>
                    <li>Points:</li>
                </ul>
            </nav>
            <section className={style.gameContainer}>
                WriteIt
            </section>
        </>
    )
}

export default WriteIt;