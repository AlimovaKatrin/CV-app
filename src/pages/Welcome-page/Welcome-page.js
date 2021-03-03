import style from './Welcome.module.scss';
import { useEffect, useState } from 'react';

function WelcomePage ( props ) {
    const [ scrollPosition, setScrollPosition ] = useState(window.pageYOffset);

    const scrollHandler = () => {
        console.log(window.pageYOffset);
        setScrollPosition(() => window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.welcomeContainer}>

            {scrollPosition > 0 ? <div className={style.blockOne}>
                <div className={style.bubbleContainer}>
                    <div>talkbuble</div>
                </div>
                <div className={style.one}>photo</div>
            </div> : null}
            {scrollPosition > 1000 ?
                <div className={style.blockTwo}>
                    <div className={style.two}>
                        my name is katrin
                    </div>
                    <div className={style.bubbleContainer}>
                        <div>talkbuble</div>
                    </div>
                </div> : null}
            {scrollPosition > 2000 ? <div className={style.blockThree}>
                <div className={style.bubbleContainer}>
                    <div>talkbuble</div>
                </div>
                <div className={style.three}>
                    this is my page
                </div>
            </div> : null}
        </div>
    );
}

export default WelcomePage;