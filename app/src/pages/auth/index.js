import React, { useState } from 'react';
import classes from './style';

export default function Auth() {

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const submitHandler = event => {
        console.log(loginValue, passwordValue);

        event.preventDefault();
    };

    return (
        <div className={classes.AuthWrap}>
            <div className={classes.Auth}>
                <h1>Залогиньтесь, пжлст</h1>
                <form className={classes.AuthForm} onSubmit={submitHandler} >
                    <input
                        type="login"
                        value={loginValue}
                        placeholder="Логин"
                        onChange={e => {setLoginValue(e.target.value)}}
                    />
                    <input
                        type="password"
                        value={passwordValue}
                        placeholder="Пароль"
                        onChange={e => {setPasswordValue(e.target.value)}}
                    />
                    <button className={classes.Button}>GO!</button>
                </form>
            </div>
        </div>
    )
}