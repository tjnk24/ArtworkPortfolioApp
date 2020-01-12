import React, { useState, useEffect, useCallback } from 'react';
import classes from './style.css';
// import Card from '../../components/card';
// import ImgProfile from '../../pages/img-profile';
import Carousel, { Modal, ModalGateway } from "react-images";
import PhotoGallery from 'react-photo-gallery';

import CustomView from '../../components/custom-view';
import { getPhotos } from '../../helpers/api';



const Home = () => {
    const [profileOpened, setProfileOpened] = useState(false)
    const [currentImage, setCurrentImage] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [photos, setPhotos] = useState([]);

    // const renderLinks = (links) => {
    //     return links.map((link, i) => {
    //         return <Card key={i} link={link} />
    //     })
    // }

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
                        columns={4}
                        onClick={openLightbox}
                    />
                )}
            </div>
            <ModalGateway>
                {profileOpened && (
                    <Modal onClose={closeLightbox}>
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
