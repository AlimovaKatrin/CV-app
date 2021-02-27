import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../utils/routes.json';
import ProjectPage from '../../pages/Projects-page/Project-page';

function Routing ( props ) {
    return (
        <>
            <Switch>
                <Route exact path={'/'}>
                    <Redirect
                        to={{
                            pathname: routes.welcome.url
                        }}/>
                </Route>
                <Route exact path={routes.welcome.url}>
                    <p>
                        welcome page
                    </p>
                </Route>
                <Route path={routes.experience.url}>
                    <p>
                        nothing yet
                    </p>
                </Route>
                <Route path={routes.projects.url} component={ProjectPage}/>
                <Route path={routes.experience.url}>
                    <p>
                        nothing too
                    </p>
                </Route>
            </Switch>
        </>
    );
}

export default Routing;