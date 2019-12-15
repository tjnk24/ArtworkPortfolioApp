import React from 'react'
import classes from './ImgProfile.css';

const ImgProfile = (props) => {
    return (
        <div className={classes.ImgProfile}>
            <div className={classes.ImgProfileWrap}>
                <div className={classes.ImgWrap}>
                    <img src={require('../../img/arts_hd_folder/1.jpg')} alt="artwork"/>
                </div>
                <div className={classes.VerticalLine}></div>
                <div className={classes.SideBlock}>
                    <h1>GO WEIRD, NOBODY’S WATCHIN’</h1>
                    <p>Это описание для картинки. Я здесь что-нибудь напишу, какое-нибудь крутое описание, чтобы все прочитали и сказали «уай какой харощий картинка хачу хачу хачу себе такой художник».</p>
                </div>
            </div>
        </div>
    )
}

export default ImgProfile;
