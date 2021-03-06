import style from './Bubble.module.scss';

function Bubble ( { content } ) {
    return (
        <div className={style.bubbleContainer}>
            <img src={'/imgs/bubble_small.svg'}
                 alt={`speech bubble with text:${content}`}/>
            <div>{content}</div>
        </div>
    );
}

export default Bubble;