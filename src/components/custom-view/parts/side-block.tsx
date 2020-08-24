import React, {
  useState, useEffect, useRef, FC,
} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { CustomViewProps } from '../types';

import SideBlockView from './style';

const SideBlock: FC<CustomViewProps['data']> = ({ header, text }) => {
  const sideBlockRef = useRef(null);
  const textRef = useRef(null);

  const [marginTop, setMarginTop] = useState('');

  const sideBlockStyle = {
    width: window.innerWidth > 640 ? 'auto' : '100%',
    height: 'auto',
    display: 'flex',
  };
  const setMargin = () => {
    const textHeight = textRef.current.scrollHeight;
    const sideBlockHeight = sideBlockRef.current.container.scrollHeight;

    if (textHeight < sideBlockHeight) {
      setMarginTop(`${(sideBlockHeight - textHeight) * 0.5}px`);
    }
  };

  const sideBlock = () => <SideBlockView onClick={(e) => { e.stopPropagation(); }} />;

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

  return (
    <Scrollbars
      style={sideBlockStyle}
      ref={sideBlockRef}
      renderView={sideBlock}
    >
      <div style={{ marginTop }} ref={textRef}>
        <b>{header}</b>
        <p>
          {text}
        </p>
      </div>
    </Scrollbars>
  );
};

export default SideBlock;
