import style from './Welcome.module.scss';
import { useEffect } from 'react';

function WelcomePage ( props ) {
    let counter = 0;

    const scrollHandler = () => {
        console.log(window.screen.height);
        console.dir(window.pageYOffset);
        console.log('scroll');
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.welcomeContainer}>
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