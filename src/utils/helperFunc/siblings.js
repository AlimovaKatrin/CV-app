export function getAllSiblings ( element, parentRef ) {
    return [ ...parentRef.children ].filter(child => child !== element);
}