import style from './Circle.module.scss';
import Loader from '../../ui-kit/Loader';
import { useState } from 'react';

function Circle ( { position, imgPath } ) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={style[position]}>
            { isLoading && <Loader/>}
            <img
                 onLoad = {()=>{setIsLoading(false)}}
                 src={`/imgs/${imgPath}`}
                 alt={`${imgPath} inside the circle`}/>
        </div>
    );
}

export default Circle;
