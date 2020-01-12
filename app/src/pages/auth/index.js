import React from 'react';
import classes from './style.css';

export default function Auth() {
    return (
        <div className={classes.AuthWrap}>
            <div className={classes.Auth}>
                <h1>Залогиньтесь, пжлст</h1>
                <input type="text" placeholder="Логин"/>
                <input type="text" placeholder="Пароль"/>
            </div>
        </div>
    )
}