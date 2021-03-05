import style from './Bubble.module.scss';

function Bubble ( { text, scrollPosition } ) {
    return (
        <div className={style.bubbleContainer}>
            <div>{text}</div>
        </div>
    );
}

export default Bubble;