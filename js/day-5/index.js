import fs from "fs";
import {calculateTotalDistance} from "../day-1/index.js";

const createRule = (input) => {
    return input.split("|").map(item => parseInt(item));
}

const createInputs = (inputs) => {
    return inputs.split("\n").map(input => input.split(",").map(item => parseInt(item)));
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

const total = (input) => {
    let [rulesString, inputString] = input.split("\n\n");
    let rules = createRules(rulesString);
    let inputs = createInputs(inputString);

    return inputs.filter(input => checkRules(input, rules))
        .map(getMiddle)
        .reduce((a,b) => a + b, 0);
}

const main = () => {
    let input = fs.readFileSync("./day-5/input.txt").toString("utf-8");
    console.log("Total: ", total(input));
}


export {createRule, createRules, checkRule, checkRules, getMiddle, total, main};