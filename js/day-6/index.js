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

export {convertToMatrix, findGuard};