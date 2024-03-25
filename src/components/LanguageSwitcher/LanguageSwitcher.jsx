import style from "./LanguageSwitcher.module.css";
import Ru from './../../assets/flags/ru2.png';
import USA from './../../assets/flags/usa2.png';

// import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from "../../hooks/use-localStorage";
import i18n from "../../i18next";



 const LanguageSwitcher = () => {
   const { t } = useTranslation();

      const [language, setLanguage] = useLocalStorage('language', 'ru')


   const handleLangSwitch = () => {
    if(language === 'en'){
        i18n.changeLanguage('ru');
        setLanguage('ru');
    }else if (language === 'ru') {
        i18n.changeLanguage('en')
        setLanguage('en');
    }
  }

  return (
    <>
    <button 
        className={style.button}
        // data-lang="en"
        onClick={handleLangSwitch}
    >
       {t('')} {language === 'ru' ? (<img className={style.img} src={USA} alt="" />) : (<img className={style.img} src={Ru} alt="" />)}
    </button>

    </>
  );
}

export default LanguageSwitcher;