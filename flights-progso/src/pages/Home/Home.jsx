import circle from '../../assets/circle.png';
import man from '../../assets/man.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import youtube from '../../assets/youtube.png';
import s from './Home.module.css';
import compas from '../../assets/compas.png'
import line1 from '../../assets/line1.png'
import line2 from '../../assets/line2.png'
import map from '../../assets/map.png'
import plane1 from '../../assets/plane1.png'
import plane2 from '../../assets/plane2.png'

const Home = () => {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <div className={s.home_content}>
                    <div className={s.home_body}>
                        <h1 className={s.home_title}>Are you ready <br /> <span>to travel</span></h1>
                        <button className={s.home_btn}>I want to travel!</button>
                    </div>
                    <div className={s.home_imgs}>
                        <img className={s.img_man} src={man} alt='Man' />
                        <img className={s.img_circle} src={circle} alt='Circle' />
                    </div>
                    <div className={s.home_decorations}>
                        <img className={s.icon_plane1} src={plane1} />
                        <img className={s.icon_map} src={map} />
                        <img className={s.icon_compas} src={compas} />
                        <img className={s.icon_plane2} src={plane2} />
                        <img className={s.icon_line1} src={line1} />
                        <img className={s.icon_line2} src={line2} />
                    </div>
                </div>
                <footer className={s.home_footer}>
                    <div className={s.footer_social}>
                        <img className={s.icon_youtube} src={youtube} />
                        <img className={s.icon_twitter} src={twitter} />
                        <img className={s.icon_whatsapp} src={whatsapp} />
                    </div>
                    <div className={s.footer_body}>
                        <h2 className={s.footer_title}>Tips for traveling</h2>
                        <p className={s.footer_text}>Lorem ipsum dolor sit amet, consectetur nec arcu condimentum lamcorper quis.</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Home;