const convertToMatrix = (input) => {
    return input.split("\n")
        .map(line => line.split(""));
}

const findGuard = (matrix) => {
    let location = [];
    matrix.forEach((row, index) => {
        let found = row.indexOf("^");
        if(found !== -1) {
            location = [index, found];
        }
    });

    return location;
}

const moveGuardTo = (givenMatrix, [x, y]) => {
    let matrix  = structuredClone(givenMatrix);
    let [oldX, oldY] = findGuard(matrix);
    matrix[oldX][oldY] = "X";
    matrix[x][y] = "^";
    return matrix;
};

const getTopLocation = ([x, y]) => {
    return [x-1, y];
}

const turnGuard = (givenMatrix) => {
    let matrix  = structuredClone(givenMatrix);
    let [x, y] = findGuard(matrix);
    matrix[x][y] = ">";
    return matrix;
}

export {convertToMatrix, findGuard, getTopLocation, moveGuardTo, turnGuard};