import style from './Welcome.module.scss';
import { useEffect, useState } from 'react';

function WelcomePage ( props ) {
    const [ scrollPosition, setScrollPosition ] = useState(window.pageYOffset);

    const scrollHandler = () => {
        setScrollPosition(() => window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={style.welcomeContainer}>
            {scrollPosition > 0 ? <div className={style.one}>
                My photo
            </div> : null}
            {scrollPosition > 1000 ? <div className={style.two}>
                my name is katrin
            </div> : null}
            {scrollPosition > 2000 ? <div className={style.three}>
                this is my page
            </div> : null}
        </div>
    );
}

export default WelcomePage;