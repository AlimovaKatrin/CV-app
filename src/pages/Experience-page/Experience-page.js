import style from './Experience-page.module.scss';
import experience from '../../utils/experience.json';

function ExperiencePage ( props ) {
    return (
        <ul className={style.experienceList}>
            {experience.map(( el, i ) => <li key={i}>
                <div className={style.companyCard}>
                    <h1>Company: {el.name}</h1>
                    <div className={style.dates}>
                        <span>
                            <strong>Date start:</strong> {el.dateStart}
                        </span>
                        <span>
                            <strong>Date end:</strong> {el.dateEnd}
                        </span>
                    </div>
                    <div>
                       <strong>Position:</strong> {el.position}
                    </div>
                    <div className={style.jobDescription}>
                        {el.description}
                    </div>
                </div>
            </li>)}
        </ul>
    );
}

export default ExperiencePage;