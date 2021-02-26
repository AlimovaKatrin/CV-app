import style from './Nav-bar.module.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function NavBar ( props ) {
    const location = useLocation();
    const history = useHistory();

    const expRef = useRef(null);
    const projRef = useRef(null);
    const contRef = useRef(null);

    useEffect(() => {
        switch ( location.pathname ) {
            case '/exp':
                contRef.current.className = style.navElement;
                projRef.current.className = style.navElement;
                expRef.current.className = style.navActive;
                break;
            case '/proj':
                contRef.current.className = style.navElement;
                projRef.current.className = style.navActive;
                expRef.current.className = style.navElement;
                break;
            case '/cont':
                contRef.current.className = style.navActive;
                projRef.current.className = style.navElement;
                expRef.current.className = style.navElement;
                break;
            default:
                console.log('no')
        }
    }, [ location ])

    const navHandler = ( { target } ) => {
        const { link } = target.dataset;
        history.push(link)
    }

    return (
        <div className={style.navContainer}>
            <div ref={expRef} className={style.navElement} data-link={'/exp'} onClick={navHandler}>
                <strong>EXPERIENCE</strong>
            </div>
            <div ref={projRef} className={style.navElement} data-link={'/proj'} onClick={navHandler}>
                <strong>PROJECTS</strong>
            </div>
            <div ref={contRef} className={style.navElement} data-link={'/cont'} onClick={navHandler}>
                <strong>CONTACTS</strong>
            </div>
        </div>
    );
}

export default NavBar;
