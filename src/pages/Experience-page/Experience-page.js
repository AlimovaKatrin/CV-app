import style from './Experience-page.module.scss';
import { experienceContent } from '../../utils/content.json';
import List from '../../components/List/List';

function ExperiencePage ( props ) {
    return (
        <div className={style.experienceList}>
            <List list={experienceContent} experience={true}/>
        </div>
    );
}

export default ExperiencePage;