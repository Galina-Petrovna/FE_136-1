import React, { useState } from "react";
import style from "./Gallery.module.css";
import V1 from "../../assets/img/V1.jpg";
import V2 from "../../assets/img/V2.jpg";
import V3 from "../../assets/img/V3.jpg";
import V4 from "../../assets/img/V4.jpg";
import V5 from "../../assets/img/V5.jpg";
import V6 from "../../assets/img/V6.jpg";


const Gallery = () => {

    const images = [
        V1,
        V2,
        V3,
        V4,
        V5,
        V6

    ];
    const [zoomed, setZoomed] = useState(null);

    const toogleZoom = (index) => {
        setZoomed(images[index]);
    };

    const handleCloseModal = () => {
        setZoomed(null);
    };
    

    return (

        <div className={style.images}>

            {images.map((image,index)=> (
                <img className={style.img}
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => toogleZoom(index)}
                
                />
            ))}

            {zoomed && (
                <div style={{position:'fixed',  top:'50px', left:0, right:0, bottom:0, zIndex:'2',  background: 'rgba(0, 0, 0, 0.7' }}>
                <img src={zoomed} alt="Zoomed" 
                style={{width:'500px', height:'400px', position:'absolute',  top:'50%', left:'50%', cursor: 'pointer', transform:'translate(-50%, -50%)'}}
                onClick={handleCloseModal}
                />
                
                </div>
        )}
       </div>

    );
};

export default Gallery;