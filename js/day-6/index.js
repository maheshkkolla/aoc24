import fs from "fs";

const convertToMatrix = (input) => {
    return input.split("\n")
        .map(line => line.split(""));
}

const hasAny = (row, arrayToFind) => {
    for (let i = 0; i < arrayToFind.length; i++) {
        const item = arrayToFind[i];
        let found = row.indexOf(item);
        if (found !== -1) {
            return found;
        }
    }
    return -1;
}

const findGuard = (matrix) => {
    for (let index = 0; index < matrix.length; index++) {
        const row = matrix[index];
        let found = hasAny(row, ["^", ">", "v", "<"]);
        if (found !== -1) {
            return [index, found];
        }
    }

    return [];
}

const moveGuardTo = (matrix, [oldX, oldY], [x, y]) => {
    // let matrix = deepClone(givenMatrix);
    matrix[x][y] = matrix[oldX][oldY];
    matrix[oldX][oldY] = "X";
    return matrix;
};

const getNextLocation = ([x, y], direction) => {

    if (direction === "^") {
        return [x - 1, y];
    }

    if (direction === ">") {
        return [x, y + 1];
    }

    if (direction === "v") {
        return [x + 1, y];
    }

    if (direction === "<") {
        return [x, y - 1];
    }
}

const turnGuard = (matrix, [x, y]) => {
    // let matrix = deepClone(givenMatrix);
    let direction = matrix[x][y];
    let newDirection;
    if (direction === "^") {
        newDirection = ">";
    }

    if (direction === ">") {
        newDirection = "v";
    }

    if (direction === "v") {
        newDirection = "<";
    }

    if (direction === "<") {
        newDirection = "^";
    }

    matrix[x][y] = newDirection;
    return matrix;
}

const isOutOfMatrix = (matrix, [x, y]) => {
    if (x >= matrix.length || x < 0 || y >= matrix[0].length || y < 0) {
        return true;
    }

    return false;
}


const countVisitedLocations = (matrix) => {
    return matrix.reduce((total, row) => {
        return total + row.reduce((total, item) => {
            if (item === "X") {
                return total + 1;
            }
            return total;
        }, 0);
    }, 0);
}

const totalLocations = (input) => {
    let matrix = convertToMatrix(input);
    let currentLocation = findGuard(matrix);
    while (!isOutOfMatrix(matrix, currentLocation)) {
        let nextLocation = getNextLocation(currentLocation, matrix[currentLocation[0]][currentLocation[1]]);

        if (isOutOfMatrix(matrix, nextLocation)) {
            matrix[currentLocation[0]][currentLocation[1]] = "X";
            break;
        }

        if (matrix[nextLocation[0]][nextLocation[1]] === "#") {
            matrix = turnGuard(matrix, currentLocation);
            continue;
        }

        matrix = moveGuardTo(matrix, currentLocation, nextLocation);
        currentLocation = nextLocation;
    }

    return countVisitedLocations(matrix);
}

const isInLoop = (givenMatrix) => {
    let matrix = deepClone(givenMatrix);
    let currentLocation = findGuard(matrix);
    let traversed = {};
    while (!isOutOfMatrix(matrix, currentLocation)) {
        let currentDirection = matrix[currentLocation[0]][currentLocation[1]];
        let nextLocation = getNextLocation(currentLocation, currentDirection);

        let key = `${currentLocation}-${currentDirection}`;
        if (traversed[key]) {
            return true;
        }
        traversed[key] = true;


        if (isOutOfMatrix(matrix, nextLocation)) {
            matrix[currentLocation[0]][currentLocation[1]] = "X";
            break;
        }

        if (matrix[nextLocation[0]][nextLocation[1]] === "#" || matrix[nextLocation[0]][nextLocation[1]] === "0") {
            matrix = turnGuard(matrix, currentLocation);
            continue;
        }

        matrix = moveGuardTo(matrix, currentLocation, nextLocation);
        currentLocation = nextLocation;
    }

    return false;
}

const totalPart2 = (input) => {
    let matrix = convertToMatrix(input);
    let total = 0;

    matrix.forEach((row, x) => {
        row.forEach((item, y) => {
            if (item === '.') {
                matrix[x][y] = "0";

                if (isInLoop(matrix)) {
                    total = total + 1;
                }

                matrix[x][y] = "."
            }
        });
    });

    return total;
}

function deepClone(o) {
    if(typeof o === 'string') { return o; }

    let newO = [];
    for (var i = 0; i < o.length; i++) {
        newO[i] = deepClone(o[i]);
    }
    return newO;
}


const main = () => {
    let input = fs.readFileSync("./day-6/input.txt").toString("utf-8");
    // console.log("Total: ", totalLocations(input));
    console.log("Total Part 2: ", totalPart2(input));
}

export {
    convertToMatrix,
    findGuard,
    getNextLocation,
    moveGuardTo,
    turnGuard,
    hasAny,
    isOutOfMatrix,
    totalLocations,
    main,
    isInLoop,
    totalPart2
};