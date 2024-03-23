import React from "react";
import{useTranslation} from 'react-i18next';
import i18next from "i18next";

import style from "./LanguageSwitcher.module.css";


const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const changeLanguage = () => {
        const targetLanguage = i18n.language === 'en'?'ru':'en';
        i18next.changeLanguage(targetLanguage);
    }

    return(
        <div>
            <button className={style.button} onClick={changeLanguage}>En/Ru</button>
        </div>
    )
}

export default LanguageSwitcher;