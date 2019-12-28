import React from 'react';
import classes from './style.css';

 const Card = (props) => {

    const showImgCard = (event) => {
        event.preventDefault();

        console.log('ok');
    };

    return (
            <a className={classes.Card} href="#" onClick={showImgCard} >
                <img src={require(`../../img/arts_temp_folder/art_${props.link}.jpg`)} alt="art-card-1"/>
            </a>
    )
}

export default Card;