const toArray = (input) => {
    return input.split(" ")
        .filter(i => !!i)
        .map(i => parseInt(i));
}

const makeColumns = (rows) => {
    let result = [];

    rows.forEach(row => {
        row.forEach((item, index) => {
            result[index] = result[index] ? [...result[index], item] : [item];
        });
    });
    return result;
}

const sortAll = (arrays) => {
    return arrays.map(array => array.sort());
}

export {toArray, makeColumns, sortAll};