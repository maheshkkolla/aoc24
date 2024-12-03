import fs from "fs";

const toArray = (input) => {
    return input.split(" ")
        .filter(i => !!i)
        .map(i => parseInt(i));
}

const makeColumns = (rows) => {
    let result = [];

    rows.forEach(row => {
        row.forEach((item, index) => {
            result[index] = result[index] ? [...result[index], item] : [item];
        });
    });
    return result;
}

const sortAll = (arrays) => {
    return arrays.map(array => array.sort());
}
const calculateDifferences = (arrays) => {
    return arrays[0].map((first, index) => {
       return Math.abs(first - arrays[1][index]);
    });
}

const calculateTotalDistance = (input) => {
    let inputInArray = input.split("\n")
        .map(line => toArray(line));
    let columns = makeColumns(inputInArray);
    let sortedColumns = sortAll(columns);
    let differences = calculateDifferences(sortedColumns);
    return differences.reduce((a,b) => a+b, 0);
}

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
    console.log("Total Differences: ", calculateTotalDistance(input));
    console.log("Total Similarity Score: ", calculateTotalSimilarityScore(input));
}

export {toArray, makeColumns, sortAll, calculateDifferences, calculateTotalDistance, main, calculateTotalSimilarityScore, countByGroups};