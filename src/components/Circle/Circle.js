import style from './Circle.module.scss';

function Circle ( { position } ) {
    return (
        <div className={style[position]}>
        </div>
    );
}

export default Circle;