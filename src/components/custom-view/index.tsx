/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';
import SideBlock from './parts/side-block';

import { ViewWrap, View } from './style';

import { CustomViewProps } from './types';

const CustomView: FC<CustomViewProps> = ({
  isModal,
  modalProps,
  data,
  currentIndex,
}) => (isModal ? (
  <ViewWrap onClick={modalProps.onClose}>
    <View>
      <img
        src={data.src}
        alt={`${currentIndex}`}
        onClick={(e) => { e.stopPropagation(); }}
        onKeyDown={(e) => { e.stopPropagation(); }}
      />
      <SideBlock {...data} />
    </View>
  </ViewWrap>
) : null);

export default CustomView;
