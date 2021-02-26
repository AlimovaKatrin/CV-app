import style from '../../components/Nav-bar/Nav-bar.module.scss';

export const navElemTransform = ( location, expRef, projRef, contRef) => {
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
            console.log('no');
    }
};