import { projectsJSON } from '../../utils/projects.json';
import List from '../../components/List/List';
import { useState } from 'react';

const ProjectPage = ( props ) => {
    const [ projects, setProjects ] = useState(projectsJSON);

    return (
        <>
            <List list={projects}/>
        </>
    );
};

export default ProjectPage;
