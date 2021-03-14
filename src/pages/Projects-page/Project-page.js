import { projectsContent } from '../../utils/content.json';
import List from '../../components/List/List';

const ProjectPage = ( props ) => {
    //add sorting by date of projects
    return (
        <>
            <List list={projectsContent} projects={true}/>
        </>
    );
};

export default ProjectPage;
