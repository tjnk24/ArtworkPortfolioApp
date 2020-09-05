import React, { FC } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { ModalImageProps } from './types';

const ModalImage: FC<ModalImageProps> = ({
  profileOpened,
  closeLightbox,
  currentImage,
  setCurrentImage,
  photos,
}) => {
  const moveToPrevious = () => setCurrentImage((currentImage + photos.length - 1) % photos.length);

  const moveToNext = () => setCurrentImage((currentImage + 1) % photos.length);

  return (profileOpened && (
  <Lightbox
    mainSrc={photos[currentImage].src}
    nextSrc={photos[(currentImage + 1) % photos.length].src}
    prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
    onCloseRequest={closeLightbox}
    onMovePrevRequest={moveToPrevious}
    onMoveNextRequest={moveToNext}
    imageTitle={photos[currentImage].header}
    imageCaption={photos[currentImage].text}
  />
  ));
};

export default ModalImage;
