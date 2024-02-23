import styles from './NotFoundPage.module.css';
import image404 from './../../static/404_v2.jpg';
import {useLocation} from "react-router-dom";
const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Ой ошибка 404</h2>
            <img src={image404} alt={'404 error'} className={styles.image}/>
            <p className={styles.location}>Not found: {`${location.pathname}`}</p>
        </div>
    )
}

export {NotFoundPage}