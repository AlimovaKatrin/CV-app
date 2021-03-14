import ProjectCard from '../cards/ProjectCard/Card';
import style from './List.module.scss';
import CompanyCard from '../cards/CompanyCard/Card';

const List = ( props ) => {
    return (
        <>
            <div className={style.container}>
                {props.experience && props.list.map(( el, i ) => <CompanyCard job={el}/>)}
                {props.projects && props.list.map(( el, i ) => <ProjectCard key={i} elem={el}/>)}
            </div>
        </>
    );
};

export default List;
