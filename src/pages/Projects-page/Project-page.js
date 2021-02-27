import { projectsJSON } from '../../utils/projects.json';
import List from '../../components/List/List';

const ProjectPage = ( props ) => {

    return (
        <>
            <List list={projectsJSON}/>
        </>
    );
};

export default ProjectPage;
