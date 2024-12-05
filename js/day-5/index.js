const createRule = (input) => {
    return input.split("|").map(item => parseInt(item));
}

const createRules = (input) => {
    return input.split("\n").map(createRule);
}

export {createRule, createRules};