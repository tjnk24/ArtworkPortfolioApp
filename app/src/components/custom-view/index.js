import React, {useState, useEffect, useRef} from 'react';
import classes from './style';

const CustomView = (props) => {
    const sideBlockRef = useRef(null);
    const textRef = useRef(null);

    const [marginTop, setMarginTop] = useState('');

    useEffect(() => {
        const marginTimeout = setTimeout(() => { // setTimeout для получения актуального scrollHeight
            setMargin();
            window.addEventListener('resize', setMargin);
        }, 0);

        return () => {
            clearTimeout(marginTimeout);
            window.removeEventListener('resize', setMargin);
        };
    }, []);

    const setMargin = () => {
        const textHeight = textRef.current.scrollHeight;
        const sideBlockHeight = sideBlockRef.current.scrollHeight;

        if (textHeight < sideBlockHeight) {
            setMarginTop(`${ (sideBlockHeight - textHeight) * 0.5 }px`);
        }
    }

    return props.isModal ? (

    <div
        className={classes.ViewWrap}
        onClick={props.modalProps.onClose}
    >
        <div
            className={classes.View}
            onClick={(e) => {e.stopPropagation()}}
        >
            <img
                src={props.data.src}
                alt={`${props.currentIndex}`}
            />
            <div className={classes.SideBlock} ref={sideBlockRef}>
                <p style={{ marginTop }} ref={textRef}>
                    <b>{props.data.header}</b>
                    <br/>
                    {props.data.text}
                </p>
            </div>
        </div>
    </div>
  ) : null;
}

export default CustomView;