import style from './InfoBlock.module.scss';
import Bubble from '../Bubble/Bubble';
import Circle from '../Circle/Circle';
import numDict from '../../utils/dictionaries/numbers.json';

function InfoBlock ( { scrollPosition, position, content } ) {
    return (
        <>
            {scrollPosition > (position * 500) ?
                <div className={style[numDict[position]]}>
                    <Bubble content={content}/>
                    <Circle position={numDict[position]}/>
                </div> : null}
        </>
    );
}

export default InfoBlock;