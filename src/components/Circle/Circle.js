import style from './Circle.module.scss';

function Circle ( { position, imgPath } ) {
    return (
        <div className={style[position]}>
            <img src={`/imgs/${imgPath}`}
                 alt={`${imgPath} inside the circle`}/>
        </div>
    );
}

export default Circle;