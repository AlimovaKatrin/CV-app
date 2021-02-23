import {projects} from '../../utils/projects.json';
import List from '../../components/List/List';

const ProjectPage = ( props ) => {
    return (
      <>
          <List list={projects}/>
      </>
    );
};

export default ProjectPage;
