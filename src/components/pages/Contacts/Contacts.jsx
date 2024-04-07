import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import style from "./Contacts.module.css";
import {useTranslation} from 'react-i18next';
import { updateField } from "../../../store/reducers/userReducer";
const Contacts = () => {
	const dispatch = useDispatch();
	const { submitting, submitted, error} = useSelector((state) => state.feedback);
	const [name, setName] = useState ('');
	const [email, setEmail] = useState ('');
	const [tel, setTel] = useState ('');
	const [message, setMessage] = useState ('');
	const {t}=useTranslation();

   const handleSubmit = (e) => {
    e.preventDefault();
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
				<input placeholder={t("contact3")} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
			</div>

			<p className={style.p}>{t("contact4")}</p>
			
			<div className={style.info}>
				
				<input placeholder="email" type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
				<input placeholder={t("contact5")} type="text" name="tel" pattern="[0-9]*"  value={tel} onChange={(e) => setTel(e.target.value)} required/>
			</div>
			
			<textarea placeholder={t("contact6")} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
			<button className={style.button} type="submit" disabled={submitting}>{t("contact7")}</button>
			{submitted && <p>Thank you</p>}
			{error && <p>{error}</p>}

        </form>
    </div>
   </>
		
	);
}

export default Contacts;