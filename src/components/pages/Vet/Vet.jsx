import React, { useState } from "react";
import style from "./Vet.module.css";
import V1 from "./../../../assets/img/V1.jpg";
import V2 from "./../../../assets/img/V2.jpg";
import V3 from "./../../../assets/img/V3.jpg";
import V4 from "./../../../assets/img/V4.jpg";
import V5 from "./../../../assets/img/V5.jpg";
import V6 from "./../../../assets/img/V6.jpg";


const Vet = () => {
    const [zoomed, setZoomed] = useState(null);

    // const images = [
    //     {id:V1, src: 'V1.jpg'},
    //     {id:V2, src: 'V2.jpg'},
    //     {id:V3, src: 'V3.jpg'},
    //     {id:V4, src: 'V4.jpg'},
    //     {id:V5, src: 'V5.jpg'},
    //     {id:V6, src: 'V6.jpg'},

    // ]

    const toogleZoom = (index) => {
        setZoomed(index);
    }
    

    return (

        <div className={style.container}>

            <p className={style.p}>Мы являемся первой клиникой, которая стала проводить черезпросветную эндоскопию (гастроскопию, трахеоскопию, отоскопию, риноскопию, колоноскопию, вагиноскопию, цист-уретроскопию), что позволило нам диагностировать патологии и помогать животным, которых ранее отправляли в Россию или Литву. Уже с 2013 года мы безоперационно эндоскопически извлекаем инородные предметы из пищевода, желудка и трахеи у собак и кошек. С 2014 года мы проводим стентирование трахеи при коллапсе у миниатюрных собак и до сих пор остаемся единственными. <br /><br />
            В первые годы работы клиники мы открыли свою лабораторию, которая позволяет выполнять анализы крови за сорок минут и проводить многие другие исследования, стали выполнять УЗИ органов брюшной и грудной клетки собакам и кошкам, открыли рентген-кабинет с цифровым аппаратом, что позволяет нам получать снимки высокого качества за 2 минуты. <br /><br />
            Уже длительное время мы занимаемся ветеринарной травматологией и ортопедией. В клинике есть все необходимое оборудование, расходные материалы (пластины любого размера) для того, чтобы составить перелом как маленькому тойчику или котенку, так и огромному догу. <br /><br />
            С начала 2017 года мы начали выполнять лапароскопические операции – это операция без разрезов, когда все хирургические маневры выполняются под контролем камеры в брюшной полости. Это качественно новый этап в проведении операционных вмешательств у животных, за счет отсутствия разрезов значительно уменьшается травматизм операции, и животное легче восстанавливается.<br /><br />
            УЗИ сердца собакам и кошкам (ЭХОКГ) и электрокардиограмму мы проводим каждому пациенту перед наркозом, так как грамотная работа сердца – это необходимое условие безопасного наркоза. Кроме того, кардиолог сможет назначить дальнейшее лечение Вашему любимцу.<br /><br />
            В нашей клинике вы найдете ВСЕ ВИДЫ ВЕТЕРИНАРНЫХ УСЛУГ: от комплексной ветеринарной диагностики до эффективного лечения.
            </p>

            <div className={style.images} >

            {/* {images.map((V, index) => (
                <img 
                key={V.id}
                src={V.src}
                className={zoomed === index ? 'V active' : 'V'}
                onClick={()=> toogleZoom(index)} />
            ))} */}

                <img className={style.img} src={V1} alt="" 
                style={{zIndex:6, transform: zoomed === 'V1' ? 'scale(2) ' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null  : 'V1')} />
                <img className={style.img} src={V2} alt="" 
                style={{zIndex:5, transform: zoomed === 'V2' ? 'scale(2)' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null : 'V2')} />
                <img className={style.img} src={V3} alt=""  
                style={{zIndex:3, transform: zoomed === 'V3' ? 'scale(2)' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null : 'V3')} />
                <img className={style.img} src={V4} alt=""
                style={{zIndex:2, transform: zoomed === 'V4' ? 'scale(2)' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null : 'V4')} />
                <img className={style.img} src={V5} alt="" 
                style={{ zIndex:2, transform: zoomed === 'V5' ? 'scale(2)' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null : 'V5')}/>
                <img className={style.img} src={V6} alt=""
                style={{zIndex:2, transform: zoomed === 'V6' ? 'scale(2)' : 'scale(1)'}} 
                onClick={() => toogleZoom(zoomed ? null : 'V6')} />
            </div>

       {/* {zoomed && (
        <img src={`${zoomed}`} alt="" 
        style={{position:'absolute', width:'500px', height:'500px', top: '50%', left:'50%', transform: 'translate(-50%, -50%)', zIndex:999}}/>
       )} */}
       </div>

    );
}

export default Vet;