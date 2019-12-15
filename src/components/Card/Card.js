import React from 'react';
import classes from './Card.css';

 const Card = (props) => {

    const showImgCard = (event) => {
        event.preventDefault();

        console.log('ok');
    };

    return (
            <a className={classes.Card} href="#" onClick={showImgCard} >
                <img src={require('../../img/arts_temp_folder/art_1.jpg')} alt="art-card-1"/>
            </a>
    )
}

export default Card;