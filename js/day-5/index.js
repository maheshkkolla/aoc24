const createRule = (input) => {
    return input.split("|").map(item => parseInt(item));
}

export {createRule};