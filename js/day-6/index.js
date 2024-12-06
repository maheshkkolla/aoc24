const convertToMatrix = (input) => {
    return input.split("\n")
        .map(line => line.split(""));
}

export {convertToMatrix};