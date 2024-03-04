import React from "react";
import style from "./Home.module.css";
import Home1 from "../../../assets/img/Home1.avif";
import Home2 from "../../../assets/img/fone-main.jpg";
import Slider from "../../Slider/Slider";


const Home = () => {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>Конно-спортивный клуб "Звездный"</h3>
            
            <Slider/>

            
            <h5>Конно-спортивный комплекс «Звёздный» – это новый центр притяжения спортсменов-профессионалов, любителей лошадей, а также всех, кому не безразличны эти прекрасные и грациозные животные.</h5>

            <div className={style.main}>

                <div className={style.main1}>
                    <img className={style.img} src={Home1} alt="" />
                    <p className={style.p}>Всего в 20 км от Москвы, в Щелковском районе, на окраине Озерного лесопарка, в окружении хвойного леса, малых речек и просторных лугов, прилегающих к территории, расположился наш современный комплекс.</p>
                </div>

                <div className={style.main1}>
                    <img className={style.img}  src={Home2} alt="" />
                    <p className={style.p}> Территория комплекса находится в экологически чистом районе Подмосковья. Комплекс «Звёздный» занимает 10 гектар и обладает всей необходимой инфраструктурой для комфортного пребывания Вас и Ваших любимцев, дорогие любители мира лошадей!</p>
                </div>
            </div>
            
           
           
            
        </div>
    );
}

export default Home;