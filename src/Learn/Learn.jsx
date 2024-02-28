import React, { useCallback, useContext, useEffect } from "react";
import style from "./Learn.module.css";
import { useState } from "react";
import { LibraryContext } from "../App";



const Learn = () => {
    const { library } = useContext(LibraryContext);
    const [wordIndex, setWordIndex] = useState(0)
    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`
    }
    const speak = (word) => {
        const speakInstance = new SpeechSynthesisUtterance(word)
        speakInstance.voice = speechSynthesis.getVoices()[49]
        speechSynthesis.speak(speakInstance)

    }

    const clickHandler = () => {
        if (wordIndex === library.length - 1) {
            setWordIndex(0);
            speak(library[0].translate)
        } else {
            setWordIndex(wordIndex + 1)
            speak(library[wordIndex + 1].translate)
        }
    }
    const callSpeack = useCallback(speak, [wordIndex])


    useEffect(() => {
        callSpeack(library[wordIndex].translate)
    }, [])

    return (
        <>
            <div className={style.progressBarContainer}>
                <div className={style.progressBar} style={progressBarWidth}></div>
            </div>

            {/* <Learn library={library} /> */}
            <div onClick={clickHandler} className={style.btnNext}>
                text
            </div>
            <section style={{ textAlign: 'center' }}>
                <span>{library[wordIndex].origin}</span>
                <h3>{library[wordIndex].translate}</h3>
            </section>
        </>
    )
}

export default Learn;