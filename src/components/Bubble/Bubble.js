import style from './Bubble.module.scss';

function Bubble ( { content } ) {
    return (
        <div className={style.bubbleContainer}>
            <div>{content}</div>
        </div>
    );
}

export default Bubble;