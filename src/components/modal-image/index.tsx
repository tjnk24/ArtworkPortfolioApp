import React, { FC } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import CustomView from '@components/custom-view';

import { ModalImageProps } from './types';

const ModalImage: FC<ModalImageProps> = ({
  profileOpened,
  closeLightbox,
  currentImage,
  photos,
}) => (
  <ModalGateway>
    {profileOpened && (
      <Modal closeOnBackdropClick onClose={closeLightbox}>
        <Carousel
          currentIndex={currentImage}
          views={photos}
          components={{ View: CustomView }}
        />
      </Modal>
    )}
  </ModalGateway>
);

export default ModalImage;
