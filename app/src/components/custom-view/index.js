import React, { useState, useEffect, useCallback } from 'react';
import classes from './style.css';

const CustomView = (props) => props.isModal ? (
    // <div className={classes.View}>
    //   <img src={props.data.src} alt={`${props.currentIndex}`}/>
    // </div>
    <div className={classes.View} >
        <div className={classes.ViewWrap}>
            <img
            src={props.data.src}
            alt={`${props.currentIndex}`}
            />
            <div className={classes.VerticalLine}></div>
            <div className={classes.SideBlock}>
                <h1>{props.data.header}</h1>
                <p>{props.data.text}</p>
            </div>
        </div>
    </div>
  ) : null;

export default CustomView;