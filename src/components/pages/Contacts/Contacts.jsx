import React from "react";
// import { useState, useEffect } from "react";

import {useDispatch, useSelector} from 'react-redux';
import style from "./Contacts.module.css";

// import { useActions } from "././../../../hooks/useActions";

import { updateField, submitFeedbackStart } from "../../../store/reducers/userReducer";



const Contacts = () => {
	const dispatch = useDispatch();
	const {name, email,tel, message, submitting, submitted, error} = useSelector((state) => state.feedback);

	const handleChange = (e) => {
		dispatch(updateField({name:e.target.name, value:e.target.value}));
	}
  
	

//   const [user, setFeedback] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
	dispatch(submitFeedbackStart());
    console.log(`name: ${name} , email: ${email}, tel: ${tel}, message: ${message}`);
   }


	// const { users, loading, error } = useSelector((state) => state.user);
	// const dispatch = useDispatch();
	// const { addUserAction, removeUserAction, addAsyncUsers } = useActions();



	// const addUser = (name) => {
	// 	const user = {
	// 		name: {
	// 			firstname: name,
	// 		},
	// 		id: Date.now(),
	// 	};
	// 	addUserAction([user]);
	// };

	// const removeUser = (id) => {
	// 	removeUser(id);
	// };


	return (

    <>

    <div className={style.form} >
        <h1 className={style.h1}>Закажите обратный звонок</h1>

    
        <form className={style.form2}  onSubmit={handleSubmit}>

			<input placeholder="Ваше имя" type="text" name="name" value={name} onChange={handleChange} required />
			<input placeholder="Ваш email" type="email" name="email" value={email} onChange={handleChange} />
			<input placeholder="Ваш телефон" type="tel" name="tel" value={tel} onChange={handleChange} required/>
			<textarea placeholder="Ваше сообщение" name="message" value={message} onChange={handleChange} required/>
			<button className={style.button} type="submit" disabled={submitting}>Отправить</button>
			{submitted && <p>Thank you</p>}
			{error && <p>{error}</p>}

            {/* <label>Закажите обратный звонок</label>
            <input
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter"
            />
            <button className={style.button} type="submit">Submit</button> */}
        </form>
    </div>
   </>

		
	);
}

export default Contacts;