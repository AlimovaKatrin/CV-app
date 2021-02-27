import style from './Nav-bar.module.scss';
import routing from '../../utils/routes.json';
import { navElemTransform } from '../../utils/helperFunc/navElem-transform';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import NavElement from './Nav-element';

function NavBar ( props ) {
    const location = useLocation();
    const history = useHistory();
    const routes = Object.keys(routing);

    const navBarRef = useRef(null);

    useEffect(() => {
        navElemTransform(location, navBarRef.current);
    }, [ location ]);

    const navHandler = ( { target } ) => {
        const { link } = target.dataset;
        history.push(link);
    };

    return (
        <div ref={navBarRef} className={style.navContainer}>
            {/*array indexes acceptable if they are stable, in this case i am sure about that*/}
            {routes && routes.map(( routeName, i ) => <NavElement key={i}
                                                                  route={routing[routeName]}
                                                                  navHandler={navHandler}/>)}
        </div>
    );
}

export default NavBar;
