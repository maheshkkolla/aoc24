const getMatchedInstructions = (input) => {
    var regex = new RegExp(/mul\(\d+,\d+\)/g);
    return input.match(regex);
}

const sum = (a, b) => a+b;
const mul = (a, b) => a*b;

const executeInstruction = (instruction) => {
    return eval(instruction);
}

const executeAll = (input) => {
    return getMatchedInstructions(input)
        .map(executeInstruction)
        .reduce(sum, 0);
}

export {getMatchedInstructions, executeInstruction, executeAll};