import { useEffect, useState } from 'react';
import style from './Welcome.module.scss';
import { welcomeContent } from '../../utils/content.json';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

function WelcomePage ( props ) {
    const circleImages = [ 'avatar.svg', 'javascript-logo.svg', 'welcome.svg' ];
    const [ scrollPosition, setScrollPosition ] = useState(window.pageYOffset);
    const [ hint, setHint ] = useState(true);

    const scrollHandler = () => {
        setScrollPosition(() => window.pageYOffset);
        console.log(window.pageYOffset);
        setHint(() => false);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            setHint(() => true);
        };
    }, []);

    return (
        <div className={style.welcomeContainer}>
            {hint && <h1 className={style.hint}>SCROLL <img src='/imgs/down.png'/></h1>}
            {welcomeContent && welcomeContent.map(( content, i ) => <InfoBlock
                key={i}
                content={content.text}
                position={i + 1}
                scrollPosition={scrollPosition}
                imgPath={circleImages[i]}
            />)}
        </div>
    );
};

export default WelcomePage;