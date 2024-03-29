import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';

const Home = (props) => {
    const [state, setState] = useState(true);
    // const [data, setData] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(data) {
    //         registerUser(data)
    //         .then(result => {
    //             props.sendUser(result);
    //             navigate('/tasks');
    //         })
    //         .catch(err => {
    //             setError(err);
    //         })
    //     }
    // }, [data])

    const buttonHandler = () => {
        setState(state => !state);
    }

    const getData = ({callback, values}) => {
        //setData(userData);
        callback(values)
            .then(result => {
                props.sendUser(result.data);
                // token -> localStorage
                localStorage.setItem('token', result.tokens.token);
                navigate('/tasks');
            })
            .catch(err => {
                setError(err);
            })
    }

    const textButton = state ? "SignIn" : "SignUp";

    return (
        <div className={styles.container}>
        <header>
            <button onClick={buttonHandler}>{textButton}</button>
        </header>

        <main className={styles['form-wrapper']}>
            {state ? <SignUp sendData={getData} /> : <SignIn sendData={getData} />}
            {error && <div className={styles['error-container']}>{error.err}</div>}
        </main>
        </div>
    );
}

export default Home;
