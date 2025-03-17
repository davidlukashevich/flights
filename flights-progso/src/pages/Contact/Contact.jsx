import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import s from './Contact.module.css';

const Contact = () => {
    return (
        <section className={s.contact}>
            <div className={s.contact_body}>
                <div className={s.contact_info}>
                    <p className={s.contact_text}>Contact us</p>
                    <h1 className={s.contact_title}>Get in Touch: We're Here to Answer Your Questions</h1>
                </div>
                <div className={s.contact_data}>
                    <div className={s.data}><MdOutlineEmail className={s.data_icon} /><p>support@lorrem.com</p></div>
                    <div className={s.data}><MdOutlinePhoneInTalk className={s.data_icon} /><p>+48 123 456 789</p></div>
                </div>
            </div>
            <div className={s.contact_form}>
                <h2 className={s.form_title}>Get in Touch</h2>
                <form className={s.form}>
                    <input className={s.form_name} placeholder='First Name' />
                    <input className={s.form_lastname} placeholder='Last Name' />
                    <input className={s.form_email} placeholder='Email' />
                    <input className={s.form_phone} placeholder='Phone Number' />
                    <textarea className={s.form_textarea} placeholder='Your Message'></textarea>
                    <button className={s.form_btn}>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;