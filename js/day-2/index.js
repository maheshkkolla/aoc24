import {calculateTotalDistance, makeColumns, toArray} from "../day-1/index.js";
import fs from "fs";


const getOrDefault = (item, defaultValue) => {
    return item ? item : defaultValue;
}

const countByGroups = (list) => {
    return list.reduce((result, item) => {
        result[item] = result[item] ? result[item] + 1 : 1;
        return result;
    }, {});
}

const calculateTotalSimilarityScore = (input) => {
    let inputInArray = input.split("\n")
        .map(line => toArray(line));
    let columns = makeColumns(inputInArray);
    let groups = countByGroups(columns[1]);
    return columns[0].map(item => {
        let countOnRightColumn = getOrDefault(groups[item], 0);
        return item * countOnRightColumn;
    }).reduce((a,b) => a+b, 0);

}

const main = () => {
    let input = fs.readFileSync("./day-1/input.txt").toString("utf-8");
    console.log("Result: ", calculateTotalSimilarityScore(input));
}

export {countByGroups, calculateTotalSimilarityScore, main};