import React, {useState, useEffect, useRef} from 'react'
import classes from './ImgProfile.css';

const ImgProfile = (props) => {

    const imgProfileWrap = useRef();
    
    const [winHeight, setWinHeight] = useState(document.documentElement.clientHeight);

    function handleResize(height) {
        
        console.log(document.documentElement.clientHeight, height)
      
    }

    useEffect(() => {

        const imgWrapHeight = imgProfileWrap.current.clientHeight;
        window.addEventListener('resize', function(){handleResize(imgWrapHeight)})
        // window.addEventListener('resize', console.log(document.documentElement.clientHeight));
        // setWinHeight(document.documentElement.clientHeight);
        // console.log(winHeight);
    }, []);
    
    return (
        <div className={classes.ImgProfile} style={{padding: '20px'}} >
            <div className={classes.ImgProfileWrap} ref={imgProfileWrap} >
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
