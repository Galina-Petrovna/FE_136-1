import React, { useContext, useRef } from "react";
// import axios from "axios";
// import Play from "./../assets/button_play.png";
import style from "./Library.module.css";
import { LibraryContext } from "../../App";

const Library = (props) => {
    const { setLibrary, library } = useContext(LibraryContext);
    const inputValue = useRef();
    const deleteWord = (id) => {
        const updateLibrary = library.filter((word, index) => index!== id);
        setLibrary(updateLibrary);
        localStorage.setItem('library', JSON.stringify(updateLibrary));
    }


    const addNewWord = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://ftapi.pythonanywhere.com/translate?sl=ru&dl=en&text=${inputValue.current.value}`);
        const translation = await response.json();
        const updateLibrary = [...library, { origin: inputValue.current.value, translate: translation['destination-text'], learn: 0 }]
        setLibrary(updateLibrary);
        localStorage.setItem('library', JSON.stringify(updateLibrary));
        inputValue.current.value = '';
    }




    return (
        <section className={style.libraryBlock}>


            <span>Add new <b>Word</b></span>


            <form onSubmit={addNewWord} className={style.addWordBlock}>
                <input ref={inputValue} type="text" />
                <button type="submit">Add</button>

            </form>
            <div className={style.wordsTable}>
                <ul>
                    <li><h3>Word</h3></li>
                    <li><h3>Translarion</h3></li>
                    <li><h3>Learn</h3></li>
                </ul>

                {library.map((word, index) => (
                    <ul key={index}>
                        <li>{word.origin}</li>
                        <li>{word.translate}</li>
                        <li>{word.learn}</li>

                        <div className={style.settings}>
                            <button onClick={() => deleteWord(index)}>Удалить</button>
                        </div>
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default Library;