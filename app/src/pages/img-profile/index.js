import React, {useState, useEffect, useRef} from 'react'
import classes from './style';

const ImgProfile = (props) => {

    const imgProfile = useRef();

    const [imgPadding, setImgPadding] = useState(0);

    const countPadding = () => {
        let diff = document.documentElement.clientHeight - imgProfile.current.clientHeight;
        setImgPadding(diff * 0.5 );
        // let a = 0;
    }

    useEffect(() => {
        window.addEventListener('resize', function(){countPadding()})
    }, []);

    return (
        <div className={classes.ImgContainer}>
            <div className={classes.Backdrop} onClick={props.onClick}></div>
            <div style={{paddingTop: imgPadding}} >
                <div className={classes.ImgProfile} ref={imgProfile} >
                    <div className={classes.ImgWrap}>
                        <img
                        src={require('../../img/arts_hd_folder/1.jpg')}
                        onLoad={countPadding.bind(this)}
                        alt="artwork"/>
                    </div>
                    <div className={classes.VerticalLine}></div>
                    <div className={classes.SideBlock}>
                        <h1>GO WEIRD, NOBODY’S WATCHIN’</h1>
                        <p>Это описание для картинки. Я здесь что-нибудь напишу, какое-нибудь крутое описание, чтобы все прочитали и сказали «уай какой харощий картинка хачу хачу хачу себе такой художник».</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImgProfile;
