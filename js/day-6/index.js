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

const moveGuardTo = (givenMatrix, [oldX, oldY], [x, y]) => {
    let matrix = structuredClone(givenMatrix);
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

const turnGuard = (givenMatrix, [x, y]) => {
    let matrix = structuredClone(givenMatrix);
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
        return total + row.reduce((total, item) =>  {
            if(item === "X") {
                return total + 1;
            }
            return total;
        }, 0);
    }, 0);
}

const totalLocations = (input) => {
    let matrix = convertToMatrix(input);
    let currentLocation = findGuard(matrix);
    while (true) {
        let nextLocation = getNextLocation(currentLocation, matrix[currentLocation[0]][currentLocation[1]]);

        if(isOutOfMatrix(matrix, nextLocation)) {
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

export {convertToMatrix, findGuard, getNextLocation, moveGuardTo, turnGuard, hasAny, isOutOfMatrix, totalLocations};