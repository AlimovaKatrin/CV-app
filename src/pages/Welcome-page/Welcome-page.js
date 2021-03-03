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
                    <div>
                        <p>
                            Hello and welcome,my name is Katrin
                        </p>
                    </div>
                </div>
                <div className={style.one}></div>
            </div> : null}
            {scrollPosition > 1000 ?
                <div className={style.blockTwo}>
                    <div className={style.two}>
                    </div>
                    <div className={style.bubbleContainer}>
                        <div>I am fullstack developer with frontend preferences</div>
                    </div>
                </div> : null}
            {scrollPosition > 2000 ? <div className={style.blockThree}>
                <div className={style.bubbleContainer}>
                    <div>
                        <p>
                            This is my CV page with information about my:
                            <li> experience</li>
                            <li> projects</li>
                            <li> contacts</li>
                        </p>
                    </div>
                </div>
                <div className={style.three}>
                </div>
            </div> : null}
        </div>
    );
};

export default WelcomePage;