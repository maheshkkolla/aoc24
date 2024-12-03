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

const main = () => {
    let input = fs.readFileSync("./day-1/input.txt").toString("utf-8");
    console.log("Result: ", calculateTotalDistance(input));
}

export default { main };
export {toArray, makeColumns, sortAll, calculateDifferences, calculateTotalDistance, main};