import style from './Card.module.scss';

const Card = ( { elem } ) => {
    return (
        <>
            <div className={style.cardBox}>
                <h1>
                    Project name : {elem.name}
                </h1>
                <img src='/img/zoombieland.png'/>
                <article>
                    <p>Accusamus, consequatur delectus dolorum ex non nostrum officia, quae
                        ratione sapiente soluta suscipit totam vero? Ad dolorem minima
                        necessitatibus, qui saepe tempora tempore velit! Accusamus iste minus
                        officia tenetur voluptatum.</p>;
                    {elem.description}
                </article>
            </div>
        </>
    );
}

export default Card;
