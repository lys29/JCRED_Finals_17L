import styles from './Title.module.css';
import Button from './Button.jsx'

const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.mid}>
                        <div className={styles.mid1}>
                            <h1>Login</h1>
                            <h5>Please sign in to continue.</h5>
                            <input type='Email' placeholder='Email'></input>
                            <input type='Pass' placeholder='Password'></input>
                            <Button>Forgot Password</Button>
                            <Button>Login</Button>
                            <p>Don't have an account?</p> <Button>Sign up</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Title;