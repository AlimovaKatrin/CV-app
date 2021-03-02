import style from './Welcome.module.scss';
import { useEffect, useState } from 'react';

function WelcomePage ( props ) {
    let counter = 0;
    const [ scrollPosition, setScrollPosition ] = useState(window.pageYOffset);
    const scrollHandler = () => {
        console.log(window.pageYOffset);
        setScrollPosition(() => window.pageYOffset);
        console.log('scroll');
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.welcomeContainer}>
            {scrollPosition > 0 ? <div className={style.circleOne}>
                My photo
            </div> : null}
            {scrollPosition > 1000 ? <div className={style.circleTwo}>
                my name is katrin
            </div> : null}
            {scrollPosition > 2000 ? <div className={style.circleThree}>
                this is my page
            </div> : null}
        </div>
    );
}

export default WelcomePage;