import React, { useState } from "react";

import {useDispatch, useSelector} from 'react-redux';
import style from "./Contacts.module.css";


import { updateField } from "../../../store/reducers/userReducer";



const Contacts = () => {
	const dispatch = useDispatch();
	const { submitting, submitted, error} = useSelector((state) => state.feedback);

	const [name, setName] = useState ('');
	const [email, setEmail] = useState ('');
	const [tel, setTel] = useState ('');
	const [message, setMessage] = useState ('');

	// const handleChange = (e) => {
	// 	dispatch(updateField({name, email, tel}));
	// }
  
	


   const handleSubmit = (e) => {
    e.preventDefault();
	dispatch(updateField(`${name},${email},${tel}, ${message}`));
	// dispatch(updateField({user}));

    console.log(`name: ${name} , email: ${email}, tel: ${tel}, message: ${message}`);
	setName ('');
	setEmail ('');
	setTel ('');
	setMessage ('');
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
			<input placeholder="Ваше имя" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
			<input placeholder="email" type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
			<input placeholder="Номер телефона" type="text" name="tel" pattern="[0-9]*"  value={tel} onChange={(e) => setTel(e.target.value)} required/>
			<textarea placeholder="Текст сообщения" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
			<button className={style.button} type="submit" disabled={submitting}>Отправить</button>
			{submitted && <p>Thank you</p>}
			{error && <p>{error}</p>}

           
        </form>
    </div>
   </>

		
	);
}

export default Contacts;