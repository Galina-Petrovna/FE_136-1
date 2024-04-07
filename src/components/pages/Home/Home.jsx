import React from "react";
import style from "./Home.module.css";
import Home1 from "../../../assets/img/Home1.avif";
import Home2 from "../../../assets/img/fone-main.jpg";
import Slider from "../../Slider/Slider";
import {useTranslation} from 'react-i18next';

const Home = () => {

    const {t}=useTranslation();
    return (
        <div className={style.container}>
            <h3 className={style.h3}>{t("header.hello")}</h3>
            
            <Slider/>

            <h5>{t("home1")}</h5>

            <div className={style.main}>

                <div className={style.main1}>
                    <img className={style.img} src={Home1} alt="" />
                    <p className={style.p}>{t("home2")}</p>
                </div>

                <div className={style.main1}>
                    <img className={style.img}  src={Home2} alt="" />
                    <p className={style.p}>{t("home3")} </p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;