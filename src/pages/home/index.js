import React, { useState } from 'react';
import classes from './style.css';
import Card from '../../components/card';
import ImgProfile from '../../pages/img-profile';

const imgLinks = [1,2,3,4];

const Home = () => {
    const [profileOpened, setProfileOpened] = useState(false)

    const renderLinks = (links) => {
        return links.map((link, i) => {
            return <Card key={i} link={link} />
        })
    }

    const profileOpenHandler = () => {
        setProfileOpened(!profileOpened);
    }

    return (
        <div>
             <div className={classes.Home}>
                {renderLinks(imgLinks)}
            </div>
            {profileOpened ? <ImgProfile onClick={profileOpenHandler}/> : null}
        </div>
       
    );
};

export default Home;
