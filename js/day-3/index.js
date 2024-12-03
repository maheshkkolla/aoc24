import fs from "fs";

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

const getTheFirstOne = (input) => {
    var regex = new RegExp(/mul\(\d+,\d+\)/);
    return input.match(regex);
}

const part2 = (input) => {
    let result = [];

    let seperated = input.split("don't()");
    seperated.forEach((each, index) => {
       let separatedByDos =  each.split("do()");

       if(index > 0) {
           separatedByDos.splice(0, 1);
       }

       result = [...result, ...separatedByDos];
    });

    return result.map(inp => executeAll(inp)).reduce(sum, 0);
}



const main = () => {
    let input = fs.readFileSync("./day-3/input.txt").toString("utf-8");
    let result = executeAll(input);
    console.log("Sum of all:", result);

    console.log("Part 2", part2(input))
}

export {getMatchedInstructions, executeInstruction, executeAll, main, part2};