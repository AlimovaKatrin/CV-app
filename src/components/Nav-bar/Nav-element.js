
function NavElement ( { route, navHandler } ) {
    return (
        <div data-link={route.url} onClick={navHandler}>
            <strong>{route.name}</strong>
        </div>
    );
}

export default NavElement;