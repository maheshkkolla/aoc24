import fs from "fs";

const getCombinations = (x, y) => {
    return [
        [[x, y], [x, y+1], [x, y+2], [x, y+3]],
        [[x, y], [x, y-1], [x, y-2], [x, y-3]],
        [[x, y], [x+1, y], [x+2, y], [x+3, y]],
        [[x, y], [x-1, y], [x-2, y], [x-3, y]],
        [[x, y], [x+1, y+1], [x+2, y+2], [x+3, y+3]],
        [[x, y], [x-1, y-1], [x-2, y-2], [x-3, y-3]],
        [[x, y], [x+1, y-1], [x+2, y-2], [x+3, y-3]],
        [[x, y], [x-1, y+1], [x-2, y+2], [x-3, y+3]],
    ];
};


const getCombinationsForX = (x, y) => {
    return [
        [[x-1, y-1], [x, y], [x+1, y+1]],
        [[x-1, y+1], [x,y], [x+1, y-1]],
        [[x+1,y-1], [x,y], [x-1, y+1]],
        [[x+1, y+1], [x, y], [x-1, y-1]],


    ];
};

const getWordFrom = (input, array) => {
    return input.map(([x, y]) => {
        return array[x] ? array[x][y] : "";
    }).join("");
}

const countWord = (input) => {
    let matrix = toMatrix(input);
    let allCombinations = [];

    matrix.forEach((row, x) => {
       row.forEach((item, y) => {
           if(item === "X") {
               let combinations = getCombinations(x, y);
               allCombinations = [...allCombinations, ...combinations];
           }
       });
    });

    let counter = 0;
    allCombinations.forEach(combination => {
       let word = getWordFrom(combination, matrix);
       if(word === "XMAS") {
           counter = counter + 1;
       }
    });
    return counter;
}

const toMatrix = (input) => {
    return input.split("\n").map(line => line.split(""));
}

const main = () => {
    let input = fs.readFileSync("./day-4/input.txt").toString("utf-8");
    console.log("Count ", countWord(input));
}

export {getCombinations, getWordFrom, toMatrix, countWord, main, getCombinationsForX};