import style from './Circle.module.scss';

const { one, two, three } = style;

function Circle ( {n} ) {
    return (
        <div className={style[n]}></div>
    );
}

export default Circle;