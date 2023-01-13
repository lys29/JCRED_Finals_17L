import styles from './Forgot.module.css';
import Button from './Button.jsx';
import Arrow from '../images/Vector 23.png';
import { Link } from 'react-router-dom';

const Forgot = () => {
    return (
        <div>
            <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.left1}>
                            <h1>Forgot Password?</h1>
                            <h4><center>Enter the email address <br></br> associated with your account</center></h4>
                            <h5><center>We will send you a link to reset your password</center></h5>
                            <div className={styles.spread}>
                                <input type='Email' placeholder='Enter Email Address'></input>
                            </div>
                            <div className={styles.last}>
                            <Link to='/'><Button><h2>Send</h2><img src={Arrow}/></Button></Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Forgot;