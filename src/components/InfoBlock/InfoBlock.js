import style from './InfoBlock.module.scss';
import Bubble from '../Bubble/Bubble';
import Circle from '../Circle/Circle';
import numDict from '../../utils/dictionaries/numbers.json';

function InfoBlock ( { scrollPosition, position, content, imgPath } ) {
    console.log(window.screen.height > 600);
    return (
        <>
            {scrollPosition > (position * 500) &&
                <div className={style[numDict[position]]}>
                    <Bubble content={content}/>
                    <div className={style.wraper}>
                        <div className={style.fakeElem}></div>
                        <Circle imgPath={imgPath} position={numDict[position]}/>
                    </div>
                </div>}
        </>
    );
};

export default InfoBlock;