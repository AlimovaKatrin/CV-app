import style from './Experience-page.module.scss';
import experience from '../../utils/experience.json';

function ExperiencePage ( props ) {
    return (
        <ul className={style.experienceList}>
            {experience.map(( el, i ) => <li key={i}>
                <div className={style.companyCard}>
                    <h1>Company: {el.name}</h1>
                    <div>
                        Date start: {el.dateStart}
                        Date end: {el.dateEnd}
                    </div>
                    <div>
                        {el.position}
                    </div>
                    <div>
                        {el.description}
                    </div>
                </div>
            </li>)}
        </ul>
    );
}

export default ExperiencePage;