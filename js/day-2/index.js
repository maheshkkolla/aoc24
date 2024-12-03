import {toArray} from "../day-1/index.js";
import fs from "fs";

const isReportSafe = (array) => {
    let differences = calculateNeighboursDifference(array);
    return isReportDifferencesSafe(differences);
}

function isReportDifferencesSafe(differences) {
    return (areAllPositive(differences) || areAllNegative(differences)) && areAllBetweenAbsOneAndThree(differences);
}

const createOneExceptionCombinations = (array) => {
    return array.map((item, index) => {
        let copiedArray = Array.from(array);
        copiedArray.splice(index, 1);
        return copiedArray;
    });
}

const isReportSafeWithOneException = (array) => {
    if(isReportSafe(array)) {
        return true;
    }

    let combinations = createOneExceptionCombinations(array);
    return combinations.reduce((result, combination) => {
        return result || isReportSafe(combination);
    }, false);
}

const areAllPositive = (array) => {
    return array.reduce((result, item) => result && item > 0, true);
}

const areAllNegative = (array) => {
    return array.reduce((result, item) => result && item < 0, true);
}

const areAllBetweenAbsOneAndThree = (array) => {
    return array.reduce((result, item) => {
        let absNumber = Math.abs(item);
        return result && (absNumber > 0 && absNumber < 4);
    }, true);
}

const calculateNeighboursDifference = (array) => {
    return array.slice(0, -1).map((value, index) => value - array[index + 1]);
}

const howManyAreSafe = (input) => {
    let inputInArray = input.split("\n")
        .map(line => toArray(line));

    return inputInArray.filter(report => isReportSafe(report)).length;

}

const howManyAreSafeWithOneException = (input) => {
    let inputInArray = input.split("\n")
        .map(line => toArray(line));

    return inputInArray.filter(report => isReportSafeWithOneException(report)).length;
}

const main = () => {
    let input = fs.readFileSync("./day-2/input.txt").toString("utf-8");
    console.log("How many are safe?: ", howManyAreSafe(input));
    console.log("How many are safe with one exception?: ", howManyAreSafeWithOneException(input));
}

export {isReportSafe, calculateNeighboursDifference, howManyAreSafe, main, howManyAreSafeWithOneException}