import React, {useState, useEffect} from "react";
import style from "./Photo.module.css";
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const Photo = () => {

    const [loading, setLoading] = useState(true);
    const [photos, setPhoto] = useState([]);
    const {t}=useTranslation();

    useEffect(() => {
        
            axios.get(
                'https://freetestapi.com/api/v1/dogs?limit=5/${prodId}'
            )

            .then(response => {
                setPhoto(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            setLoading(false);
        
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
                                <img className={style.img} src={photo.image} alt={photo.name} />
                                <p>{photo.name}</p>
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