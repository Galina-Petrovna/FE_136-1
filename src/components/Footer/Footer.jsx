import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Footer.module.css";
import Map1 from "../Map/Map";
 

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
                    <div className={style.foot1}>
                        <time itemProp="openingHours" dateTime="Mo-Su, 8:00 - 22:00" content="С понедельника по воскресеньеб 8: - 22:00 ">
                            <h3>Режим работы (ежедневно):</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={style.textLeft}>Комплекс:</td>
                                        <td> с 8:00 до 22:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>Конный клуб:</td>
                                        <td>с 9:00 до 18:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>Манеж:</td>
                                        <td>с 8:00 до 21:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>Бочка:</td>
                                        <td>с 8:00 до 21:30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </time>
                    </div>
                </div>

                <div className={style.foot2}>
                    <Map1/>
                </div>
            </div>


            <Outlet/>
        </>

    );
}

export default Footer;