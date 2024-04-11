import React, {useState, useEffect} from "react";
import style from "./Photo.module.css";
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const Photo = () => {

    const [loading, setLoading] = useState(true);
    const [photos, setPhoto] = useState([]);

    const {t}=useTranslation();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const resp = await axios.get(
                    'https://api.slingacademy.com/v1/sample-data/photos'
                );
                const data = await resp.data;
                setPhoto(data.photos)
    
            } catch(error)  {
                console.log(error.message);
            }
            
            setLoading(false);

        })();
        
    }, []);

    return (
        <div className={style.container}>
            {loading && <h2>Loading...</h2>}
            {loading || (
                <>
                    <h2>{t("photo")}</h2>
                    <div className={style.images}>
                        {photos.map(photo => (
                            <div  key={photo.id}>
                                <img className={style.img}  src={photo.url} alt={photo.title} />
                                <p>{photo.title}</p>
                            </div>
                        ))}
                    </div>
                </>
            )

            }
        </div>
    );
}

export default Photo;