const convertToMatrix = (input) => {
    return input.split("\n")
        .map(line => line.split(""));
}

const hasAny = (row, arrayToFind) => {
    for (let i = 0; i < arrayToFind.length; i++){
        const item = arrayToFind[i];
        let found = row.indexOf(item);
        if(found !== -1) {
            return found;
        }
    }
    return -1;
}

const findGuard = (matrix) => {
    for (let index = 0; index < matrix.length; index++){
        const row = matrix[index];
        let found = hasAny(row, ["^", ">", "v", "<"]);
        if(found !== -1) {
            return [index, found];
        }
    }

    return [];
}

const moveGuardTo = (givenMatrix, [oldX, oldY], [x, y]) => {
    let matrix  = structuredClone(givenMatrix);
    matrix[oldX][oldY] = "X";
    matrix[x][y] = "^";
    return matrix;
};

const getTopLocation = ([x, y]) => {
    return [x-1, y];
}

const turnGuard = (givenMatrix, [x, y]) => {
    let matrix  = structuredClone(givenMatrix);
    let direction = matrix[x][y];
    let newDirection;
    if(direction === "^") {
        newDirection = ">";
    }

    if(direction === ">") {
        newDirection = "v";
    }

    if(direction === "v") {
        newDirection = "<";
    }

    if(direction === "<") {
        newDirection = "^";
    }

    matrix[x][y] = newDirection;
    return matrix;
}

export {convertToMatrix, findGuard, getTopLocation, moveGuardTo, turnGuard, hasAny};