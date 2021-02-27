
function NavElement ( { style, route, navHandler } ) {
    return (
        <div className={style} data-link={route.url} onClick={navHandler}>
            <strong>{route.name}</strong>
        </div>
    );
}

export default NavElement;