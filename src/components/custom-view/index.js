import React from 'react';

import SideBlock from './parts/side-block';

import classes from './style';

const CustomView = props => props.isModal ? (
    <div
        className={classes.ViewWrap}
        onClick={props.modalProps.onClose}
    >
        <div className={classes.View}>
            <img
                src={props.data.src}
                alt={`${props.currentIndex}`}
                onClick={(e) => {e.stopPropagation()}}
            />
            <SideBlock {...props} />
        </div>
    </div>
  ) : null;

export default CustomView;