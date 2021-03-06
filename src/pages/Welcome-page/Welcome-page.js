import { useEffect, useState } from 'react';
import style from './Welcome.module.scss';
import { welcomePage } from '../../utils/content.json';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

function WelcomePage ( props ) {
    const circleImages = [ 'avatar.svg', 'javascript-logo.svg', 'welcome.svg' ];
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
            {welcomePage && welcomePage.map(( content, i ) => <InfoBlock
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