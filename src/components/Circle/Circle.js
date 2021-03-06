import style from './Circle.module.scss';

function Circle ( { position, imgPath } ) {
    return (
        <div className={style[position]}>
            <img src={`/imgs/${imgPath}`}/>
        </div>
    );
}

export default Circle;