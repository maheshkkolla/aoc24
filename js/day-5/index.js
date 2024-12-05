const createRule = (input) => {
    return input.split("|").map(item => parseInt(item));
}

const createRules = (input) => {
    return input.split("\n").map(createRule);
}

const checkRule = (input, rule) => {
    let firstIndex = input.indexOf(rule[0]);
    let secondIndex = input.indexOf(rule[1]);

    if(firstIndex === -1 || secondIndex === -1) {
        return true;
    }

    return firstIndex < secondIndex;
}

const checkRules = (input, rules) => {
    return rules.reduce((result, rule) => {
        return result && checkRule(input, rule);
    } , true);
}

const getMiddle = (array) => {
    return array[Math.floor(array.length/2)];
}


export {createRule, createRules, checkRule, checkRules, getMiddle};