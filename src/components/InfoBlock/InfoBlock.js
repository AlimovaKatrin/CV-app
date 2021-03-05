import style from './InfoBlock.module.scss';
import
function InfoBlock ( props ) {
    return (
        <div className={style.blockOne}>
            <Bubble scrollPosition={scrollPosition} text={content.text}/>
            <Circle scrollPosition={scrollPosition} position={i}/>
        </div>
    );
}

export default InfoBlock;