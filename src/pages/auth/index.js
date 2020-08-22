import React, { useState } from 'react';

import AuthButton from './parts/auth-button';
import classes from './style';

const Auth = () => {

    const [valid, setValid] = useState(false);

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const validateForms = (login, pass) => {

    }

    const loginHandler = (event) => {
        event.preventDefault();

        console.log(loginValue, passwordValue);
    }

    return (
        <div className={classes.AuthWrap}>
            <div className={classes.Auth}>
                <h1>Залогиньтесь, пжлст</h1>
                <form className={classes.AuthForm} onSubmit={loginHandler} >
                    <input
                        type="login"
                        value={loginValue}
                        placeholder="Логин"
                        onChange={e => setLoginValue(e.target.value)}
                    />
                    <input
                        type="password"
                        value={passwordValue}
                        placeholder="Пароль"
                        onChange={e => setPasswordValue(e.target.value)}
                    />
                    {valid ?
                    <p>
                        Нет такой буквы в этом слове.
                        <br/>
                        Ваше очко переходит в зрительный зал.
                    </p>
                    : null}
                    <AuthButton
                        loginHandler={loginHandler}
                    />
                </form>
            </div>
        </div>
    )
}

export default Auth;
