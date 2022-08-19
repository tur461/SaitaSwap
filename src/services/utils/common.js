const rEqual = (a, b) => {
    return typeof a == 'string' ?
    a.toLowerCase() === b.toLowerCase() :
    typeof a === 'number' ?
    a === b : !1;
}


export {
    rEqual,
}