import React from "react";
import { useState, useEffect } from "react";

import {useDispatch, useSelector} from 'react-redux';
import style from "./Contacts.module.css";

// import { useActions } from "././../../../hooks/useActions";

import { updateField, submitFeedbackStart } from "../../../store/reducers/userReducer";



const Contacts = () => {
	const dispatch = useDispatch();
	const {name, email, message, submitting, submitted, error} = useSelector((state) => state.feedback);

	const handleChange = (e) => {
		dispatch(updateField({name:e.target.user, value:e.target.value}));
	}
  
	

//   const [feedback, setFeedback] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
	dispatch(submitFeedbackStart());
    // console.log(`Feedback submitted: ${feedback}`);
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

			<input type="text" name="name" value={name} onChange={handleChange} />
			<input type="email" name="email" value={email} onChange={handleChange} />
			<textarea name="message" value={message} onChange={handleChange} />
			<button type="submit" disabled={submitting}>Submit</button>
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