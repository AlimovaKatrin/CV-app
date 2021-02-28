import style from './Card.module.scss';

const Card = ( { elem } ) => {
    return (
        <>
            <div className={style.cardBox}>
                <div className={style.projectImg}>
                    {elem.img && <img src={`/img${elem.img}`} alt={'project screenshots or logo'}/>}
                </div>
                <h1>
                    Project name : {elem.name}
                </h1>
                <article>
                    <p>{elem.description}</p>
                </article>
                <article>
                    <p>{elem.techInfo}</p>
                </article>
                <span>
                {elem.github && <a href={elem.github}><img src={'/img/github.svg'} alt={'chrome link'}/></a>}
                    {elem.link && <a href={elem.link}><img src={'/img/chrome.svg'} alt={'chrome link'}/></a>}
                </span>
            </div>
        </>
    );
};

export default Card;
