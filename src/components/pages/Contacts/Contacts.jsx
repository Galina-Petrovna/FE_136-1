import React from "react";
import { useState } from "react";
import style from "./Contacts.module.css";


const Contacts = () => {
   const [feedback, setFeedback] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Feedback submitted: ${feedback}`);
   }

    return (
        <>

        <div className={style.form} >
            <h1 className={style.h1}>Закажите обратный звонок</h1>

        
            <form className={style.form2}  onSubmit={handleSubmit}>
                <label>Закажите обратный звонок</label>
                <input
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
       </>

    );
}

export default Contacts;