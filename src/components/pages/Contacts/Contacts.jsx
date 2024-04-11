import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import style from "./Contacts.module.css";
import {useTranslation} from 'react-i18next';
import { updateField } from "../../../store/reducers/userReducer";

const Contacts = () => {
	const dispatch = useDispatch();
	const { submitting, submitted, error} = useSelector((state) => state.feedback);

	const [name, setName] = useState ('');
	const [isValid, setIsValid] = useState(true);

	const [email, setEmail] = useState ('');
	
	const [tel, setTel] = useState ('');
	const [message, setMessage] = useState ('');
	const [isValidMes, setIsValidMes] = useState(true);


	const {t}=useTranslation();

   const handleSubmit = (e) => {
    e.preventDefault();

	   const validateName = /^[a-zA-Zа-яёА-ЯЁ\s\n]{3,40}$/g;
	   const validateMessage = /^[a-zA-Zа-яёА-ЯЁ\s\n]{10,300}$/g;

	   if (!validateName.test(name)){
		setIsValid(false);

		return;
	}

	if ( !validateMessage.test(message)){
		setIsValidMes(false);

		return;
	}

	setIsValid(true);
	setIsValidMes(true);

	dispatch(updateField(`${name},${email},${tel}, ${message}`));

    console.log(`name: ${name} , email: ${email}, tel: ${tel}, message: ${message}`);
	setName ('');
	setEmail ('');
	setTel ('');
	setMessage ('');

   }

	return (
    <>

    <div className={style.form} >
        <h1 className={style.h1}>{t("contact1")}</h1>

        <form className={style.form2}  onSubmit={handleSubmit}>
			<div className={style.name}>
				<p className={style.p}>{t("contact2")}</p>
				<input placeholder={t("contact3")} 
					type="text" 
					name="name" 
					value={name} onChange={(e) => setName(e.target.value)} 
				/>
			</div>
			{!isValid && <div style={{color:'red', fontSize: '12px'}}>Введите ФИО в формате {t("contact3")} </div>}


			<p className={style.p}>{t("contact4")}</p>
			
			<div className={style.info}>
				
				<input placeholder="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input placeholder={t("contact5")} type="text" name="tel" pattern="[0-9]*"  value={tel} onChange={(e) => setTel(e.target.value)} required/>
			</div>
			
			
			<textarea placeholder={t("contact6")} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
			{!isValidMes && <div style={{color:'red', fontSize: '12px'}}>min 10 max 300 символов </div>}

			<button className={style.button} type="submit" disabled={submitting}>{t("contact7")}</button>
			{submitted && <p>Thank you</p>}
			{error && <p>{error}</p>}

        </form>
    </div>
   </>
		
	);
}

export default Contacts;