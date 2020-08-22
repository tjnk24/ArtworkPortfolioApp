import React from 'react';
import classes from './style';

const AuthButton = props => {
    return (
        <button
            className={classes.AuthButton}
            disabled={true}
            onClick={props.loginHandler}
        >
        GO!
        </button>
    )
}

export default AuthButton;