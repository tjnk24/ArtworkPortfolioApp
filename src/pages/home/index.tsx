import React, {
  FC,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PhotoGallery from 'react-photo-gallery';

import CustomView from '@components/custom-view';
import getPhotos from '@helpers/api';

import HomeWrap from './style';

const Home: FC = () => {
  const [profileOpened, setProfileOpened] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const columns = (containerWidth: number) => {
    let columnsCount = 1;

    if (containerWidth >= 400) columnsCount = 2;
    if (containerWidth >= 560) columnsCount = 3;
    if (containerWidth >= 720) columnsCount = 4;

    return columnsCount;
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setProfileOpened(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setProfileOpened(false);
  };

  useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <HomeWrap>
        {!isLoading && (
        <PhotoGallery
          photos={photos}
          direction="column"
          columns={columns}
          onClick={openLightbox}
        />
        )}
      </HomeWrap>
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
    </div>
  );
};

export default Home;
