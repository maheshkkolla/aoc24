import {makeColumns, toArray} from "../day-1/index.js";


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

export {countByGroups, calculateTotalSimilarityScore};