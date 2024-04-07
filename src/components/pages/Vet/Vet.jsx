import style from "./Vet.module.css";
import Gallery from "../../Gallery/Gallery";
import {useTranslation} from 'react-i18next';

const Vet = () => {
    const {t}=useTranslation();
    
    return (

        <div className={style.container}>

            <p className={style.p}>{t("vet1")}  <br /><br />
            {t("vet2")}  <br /><br />
            {t("vet3")} <br /><br />
            {t("vet4")} <br /><br />
            {t("vet5")}<br /><br />
            {t("vet6")}
            </p>

            <Gallery/>
      
       </div>

    );
}

export default Vet;