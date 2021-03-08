import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../utils/routes.json';
import ProjectPage from '../../pages/Projects-page/Project-page';
import WelcomePage from '../../pages/Welcome-page/Welcome-page';
import ExperiencePage from '../../pages/Experience-page/Experience-page';
import ContactPage from '../../pages/Contact-page/Contact-page';

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
                <Route exact path={routes.welcome.url} component={WelcomePage}/>
                <Route path={routes.experience.url}>
                   <ExperiencePage/>
                </Route>
                <Route path={routes.projects.url} component={ProjectPage}/>
                <Route path={routes.contacts.url}>
                    <ContactPage/>
                </Route>
            </Switch>
        </>
    );
}

export default Routing;