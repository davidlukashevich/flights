import s from './About.module.css';
import travellers from '../../assets/travellers.jpg';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }

    return (
        <section className={s.about}>
            <div className={s.about_body}>
                <h1 className={s.about_title}>Our Company</h1>
                <p className={s.about_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repudiandae reprehenderit quibusdam, porro itaque fuga. Aliquam in perspiciatis praesentium, quis eligendi sunt, quibusdam corrupti doloribus commodi, consequatur perferendis libero quidem!</p>
            </div>
            <img className={s.about_img} src={travellers} alt='About us' />
            <div className={s.about_information}>
                <div className={s.about_information_body}>
                    <h2 className={s.about_information_title}>How we work with our Clinets</h2>
                    <button onClick={handleClick} className={s.about_information_btn}>Contact us</button>
                </div>
                <div className={s.about_information_company}>
                    <div className={s.about_item}><IoMdCheckmarkCircleOutline className={s.about_icon} /><p className={s.about_information_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p></div>
                    <div className={s.about_item}><IoMdCheckmarkCircleOutline className={s.about_icon} /><p className={s.about_information_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p></div>
                    <div className={s.about_item}><IoMdCheckmarkCircleOutline className={s.about_icon} /><p className={s.about_information_text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p></div>
                </div>
            </div>
        </section>
    )
}

export default About;