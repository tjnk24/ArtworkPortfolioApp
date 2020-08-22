import React, { useState, useEffect, useCallback } from 'react';
import classes from './style';
import Carousel, { Modal, ModalGateway } from "react-images";
import PhotoGallery from 'react-photo-gallery';

import CustomView from '../../components/custom-view';
import getPhotos from '../../helpers/api';

const Home = () => {
    const [profileOpened, setProfileOpened] = useState(false)
    const [currentImage, setCurrentImage] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [photos, setPhotos] = useState([]);

    const columns = containerWidth => {
        let columns = 1;
            if (containerWidth >= 400) columns = 2;
            if (containerWidth >= 560) columns = 3;
            if (containerWidth >= 720) columns = 4;
        return columns;
    }

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setProfileOpened(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setProfileOpened(false);
    };

    useEffect(() => {
        getPhotos().then(res => {
            setPhotos(res);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <div className={classes.Home}>
                {!isLoading && (
                    <PhotoGallery
                        photos={photos}
                        direction={'column'}
                        columns={columns}
                        onClick={openLightbox}
                    />
                )}
            </div>
            <ModalGateway>
                {profileOpened && (
                    <Modal closeOnBackdropClick={true} onClose={closeLightbox} >
                        <Carousel
                            style={classes}
                            currentIndex={currentImage}
                            views={photos}
                            components={{ View: CustomView }}
                            showNavigationOnTouchDevice={false}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

export default Home;
