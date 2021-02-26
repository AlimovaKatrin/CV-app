export const reorder = ( arr, elem ) => {
    const { startIndex, endIndex } = elem;
    const result = Array.from(arr);
    const [ removed ] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};