import React from 'react';
import classes from './style';

const CustomView = (props) => props.isModal ? (
    // <div className={classes.View}>
    //   <img src={props.data.src} alt={`${props.currentIndex}`}/>
    // </div>
    <div className={classes.ViewWrap} >
        <div className={classes.View}>
            <img
            src={props.data.src}
            alt={`${props.currentIndex}`}
            />
            <div className={classes.SideBlock}>
                <h1>{props.data.header}</h1>
                <p>{props.data.text}</p>
            </div>
        </div>
    </div>
  ) : null;

export default CustomView;