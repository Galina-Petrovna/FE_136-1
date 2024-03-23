import React from "react";
import style from "./Learn.module.css";
import {useTranslation} from 'react-i18next';

const Learn = () => {
    const {t}=useTranslation();

    return (

        <div className={style.container}>
           <p className={style.p1}>{t("learn1")}</p>

           <p className={style.p2}>{t("learn2")}
           <br />
           {t("learn3")}<br />
           {t("learn4")} <br />
           {t("learn5")} <br />
           {t("learn6")} <br />
           </p>

           <h3 className={style.h3}>{t("learn7")}</h3>

           <ul>
            <li>{t("learn8")}</li>
            <li>{t("learn9")}</li>
            <li>{t("learn10")}</li>
            <li>{t("learn11")}</li>
            <li>{t("learn12")}</li>
            <li>{t("learn13")}</li>
            <li>{t("learn14")}</li>
           </ul>
           
           <h5>{t("learn15")}</h5>
      

      
       </div>

    );
}

export default Learn;