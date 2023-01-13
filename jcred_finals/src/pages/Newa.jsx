import styles from './Newa.module.css';
import Button from './Button.jsx';
import Arrow from '../images/Vector 23.png';
import { Link } from 'react-router-dom';

const Newa = () => {
    return (
        <div>
            <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.left1}>
                            <h1>Create Account</h1>
                            <div className={styles.spread}>
                                <input type='Email' placeholder='Full name'></input>
                                <div className={styles.p}>
                                    <input type='Email' placeholder='Email'></input>
                                </div>
                                <div className={styles.p}>
                                    <input type='Email' placeholder='Password'></input>
                                </div>
                                <div className={styles.p}>
                                    <input type='Pass' placeholder='Confirm Password'></input>
                                </div>
                            </div>
                            <div className={styles.prior}><Link to='/Welcome'><Button><h2>Sign Up</h2><img src={Arrow}/></Button></Link></div>
                            <div className={styles.last}><p>Already have an account?</p><Link to='/'><Button>Sign in</Button></Link></div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Newa;