import style from './Welcome.module.scss';
import { useEffect } from 'react';

function WelcomePage ( props ) {
    const scrollHandler = (e) => {
        console.log('scroll',e);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.welcomeContainer}>
            <h1>Hey and Welcome</h1>
            <div className={style.circleOne}>
                My photo
            </div>
            <div className={style.circleTwo}>
                my name is katrin
            </div>
            <div className={style.circleThree}>
                this is my page
            </div>
        </div>
    );
}

export default WelcomePage;