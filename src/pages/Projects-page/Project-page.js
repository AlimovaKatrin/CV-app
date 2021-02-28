import { projectsJSON } from '../../utils/projects.json';
import List from '../../components/List/List';

const ProjectPage = ( props ) => {
    //add sorting by date of projects
    return (
        <>
            <List list={projectsJSON}/>
        </>
    );
};

export default ProjectPage;
