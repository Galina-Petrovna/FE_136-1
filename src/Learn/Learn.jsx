import React from "react";
import style from "./Learn.module.css";
import { useState } from "react";



const Learn = ({library}) => {

    const [wordIndex, setWordIndex] = useState(0)
    const progressBarWidth = {
      width: `${(100 / library.slice(-10).length) * wordIndex}vw`
    }

    return (
        <>
            <div className={style.progressBarContainer}>
                <div className={style.progressBar} style={progressBarWidth}></div>
            </div>
            <div onClick={() => {
                setWordIndex(wordIndex + 1)
            }} className={style.btnNext}>

            </div>
            <section>

            </section>
        </>
    )
}

export default Learn;