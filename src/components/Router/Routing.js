import { Switch, Route, Redirect } from 'react-router-dom';
import ProjectPage from '../../pages/Projects-page/Project-page';

function Routing ( props ) {
    return (
        <>
            <Switch>
                <Route exact path={'/'}>
                    <Redirect
                        to={{
                            pathname: '/exp'
                        }}/>
                </Route>
                <Route path={'/exp'}>
                    <p>
                        nothing yet
                    </p>
                </Route>
                <Route path={'/proj'} component={ProjectPage}/>
                <Route path={'/cont'}>
                    <p>
                        nothing too
                    </p>
                </Route>
            </Switch>
        </>
    );
}

export default Routing;