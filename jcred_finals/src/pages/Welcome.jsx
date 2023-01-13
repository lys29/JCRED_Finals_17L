import styles from './Welcome.module.css';
import Button from './Button.jsx';
import Arrow from '../images/Vector 23.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.left1}>
                            <h1>Motion Detection</h1>
                            <div className={styles.inside}>
                                <ul className={styles.scroll}>
                                </ul>
                            </div>

                            <div className={styles.but}><Link to='/'><Button>Logout</Button></Link></div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Welcome;