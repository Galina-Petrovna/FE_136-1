import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Footer.module.css";
 

const Footer = () => {
    return (
        <>
            <div className={style.row}>
                <div className={style.foot1}>
                    <table className={style.table}>
                        <tbody>
                            <tr>
                                <td className={style.textLeft}>Адрес:</td>
                                <td>141143, Московская область, городской округ Щёлково, деревня Шевёлкино</td>
                            </tr>
                            <tr>
                                <td className={style.textLeft}>Телефон для бронирования услуг:</td>
                                <td>
                                    <a href="tel:89160397575">+7(916) 039-7575</a>
                                </td>
                            </tr>
                            <tr>
                                <td className={style.textLeft}>Телефон по общим вопросам:</td>
                                <td>
                                    <a href="tel:+89850168008">+7(985) 016-8008</a>
                                </td>
                            </tr>
                            <tr>
                                <td className={style.textLeft}>e-mail:</td>
                                <td>
                                    <a href="mailto:info@ksk-zvezdniy.ru">info@ksk-zvezdniy.ru</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className={style.openingHours}></div>
                </div>

                <div className={style.foot2}>

                </div>
            </div>

            <Outlet/>
        </>

    );
}

export default Footer;