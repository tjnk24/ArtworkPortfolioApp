import React from 'react';
import classes from './Home.css';
import Card from '../../components/Card/Card';

const imgLinks = [
    '../../img/arts_temp_folder/art_1.jpg',
    '../../img/arts_temp_folder/art_2.jpg',
    '../../img/arts_temp_folder/art_3.jpg',
    '../../img/arts_temp_folder/art_4.jpg',
];

const Home = () => {
    return (
        <div className={classes.Home}>
            <Card links={imgLinks} />
            <Card links={imgLinks} />
            <Card links={imgLinks} />
            <Card links={imgLinks} />
            <Card links={imgLinks} />
            <Card links={imgLinks} />
        </div>
    );
};

export default Home;
