import style from '../../components/Nav-bar/Nav-bar.module.scss';

export const navElemTransform = ( { pathname }, parentNode ) => {
    parentNode.childNodes.forEach(el => {
        if ( el.dataset.link === pathname ) {
            el.className = style.navActive;
        } else {
            el.className = style.navElement;
        }
    });
};