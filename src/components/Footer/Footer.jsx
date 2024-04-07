import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Footer.module.css";
import Map1 from "../Map/Map";
import {useTranslation} from 'react-i18next';

const Footer = () => {
    const {t}=useTranslation();
    return (
        <>
            <div className={style.row}>
                <div className={style.foot1}>
                    <table className={style.table}>
                        <tbody>
                            <tr>
                                <td className={style.textLeft}>{t("footer")}</td>
                                <td>{t("footer1")}</td>
                            </tr>
                            <tr>
                                <td className={style.textLeft}>{t("footer2")}</td>
                                <td>
                                    <a href="tel:89160397575">+7(916) 039-7575</a>
                                </td>
                            </tr>
                            <tr>
                                <td className={style.textLeft}>{t("footer3")}</td>
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
                            <h3>{t("footer4")}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={style.textLeft}>{t("footer5")}</td>
                                        <td> с 8:00 до 22:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>{t("footer6")}</td>
                                        <td>с 9:00 до 18:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>{t("footer7")}</td>
                                        <td>с 8:00 до 21:00</td>
                                    </tr>
                                    <tr>
                                        <td className={style.textLeft}>{t("footer8")}</td>
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