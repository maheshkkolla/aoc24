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

const filterApplicableRules = (rules, input) => {
    return rules.filter(([a, b]) => input.includes(a) && input.includes(b));
}

const getUpstreams = (input, rules) => {
    return rules.filter(rule => rule[1] === input).map(([a, b]) => a);
}

const hasAllUpstreams = (array, upstreams) => {
    return upstreams.reduce((result, item) => {
        return result && array.includes(item);
    }, true);
}

const fixSequenceWithFilteredRules = (input, rules, givenResult) => {
    let result = [...givenResult];
    let remaining = [];
    input.forEach(item => {
        let upstreams  = getUpstreams(item, rules);
        if(hasAllUpstreams(result, upstreams)) {
            result.push(item);
        } else {
            remaining.push(item);
        }
    });

    if(remaining.length > 0) {
        return fixSequenceWithFilteredRules(remaining, rules, result);
    }
    return result;
}

const fixSequence = (input, allRules) => {
    let rules = filterApplicableRules(allRules, input);
    return fixSequenceWithFilteredRules(input, rules, []);
}

const total = (input) => {
    let [rulesString, inputString] = input.split("\n\n");
    let rules = createRules(rulesString);
    let inputs = createInputs(inputString);

    return inputs.filter(input => checkRules(input, rules))
        .map(getMiddle)
        .reduce((a,b) => a + b, 0);
}

const totalAfterFixing = (input) => {
    let [rulesString, inputString] = input.split("\n\n");
    let rules = createRules(rulesString);
    let inputs = createInputs(inputString);

    return inputs.filter(input => !checkRules(input, rules))
        .map(input => fixSequence(input, rules))
        .map(getMiddle)
        .reduce((a,b) => a + b, 0);
}


const main = () => {
    let input = fs.readFileSync("./day-5/input.txt").toString("utf-8");
    console.log("Total: ", total(input));
    console.log("Total part 2:", totalAfterFixing(input));
}


export {createRule, createRules, checkRule, checkRules, getMiddle, total, main, filterApplicableRules, getUpstreams, fixSequence, totalAfterFixing};






