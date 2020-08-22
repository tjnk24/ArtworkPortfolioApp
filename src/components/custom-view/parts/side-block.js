import React, {useState, useEffect, useRef} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import classes from './style';

const SideBlock = props => {
    const sideBlockRef = useRef(null);
    const textRef = useRef(null);

    const [marginTop, setMarginTop] = useState('');

    const sideBlockStyle = {
        width: window.innerWidth > 640 ? 'auto' : '100%',
        height: 'auto',
        display: 'flex'
    }

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
        const sideBlockHeight = sideBlockRef.current.container.scrollHeight;

        if (textHeight < sideBlockHeight) {
            setMarginTop(`${ (sideBlockHeight - textHeight) * 0.5 }px`);
        }
    }

    const sideBlock = () => <div className={classes.SideBlock} onClick={(e) => {e.stopPropagation()}}/>

    return (
        <Scrollbars
            style={sideBlockStyle}
            ref={sideBlockRef}
            renderView={sideBlock}
        >
            <div style={{ marginTop }} ref={textRef}>
                    <b>{props.data.header}</b>
                    <p>
                        {props.data.text}
                    </p>
            </div>
        </Scrollbars>
    )
}

export default SideBlock;