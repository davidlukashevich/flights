import loader from '../../assets/loading.gif';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.loader_block}>
            <img src={loader} alt='Loading...' />
        </div>
    )
}

export default Loader;