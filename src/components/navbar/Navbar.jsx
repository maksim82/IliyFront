import log from '../../utils/log.png';
import styles from './navbar.module.scss';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <h2 className={styles.title}>Открытая экспертиза <span>студенческих стартапов</span></h2>
                <div className={styles.log_btn} onClick={() => navigate("/")}>
                    <span>Войти</span>
                    <div className={styles.wrapper_img} >
                        <img src={log} alt="Вход"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;