import style from './Card.module.scss';

function Card ( { job } ) {
    return (
        <div className={style.companyCard}>
            <h1>Company: {job.name}</h1>
            <div className={style.dates}>
                        <span>
                            <strong>Date start:</strong> {job.dateStart}
                        </span>
                <span>
                            <strong>Date end:</strong> {job.dateEnd}
                        </span>
            </div>
            <div>
                <strong>Position:</strong> {job.position}
            </div>
            <div className={style.jobDescription}>
                {job.description}
            </div>
        </div>
    );
}

export default Card;