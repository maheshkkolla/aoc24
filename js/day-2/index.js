const isReportSafe = (array) => {
    let differences = calculateNeighboursDifference(array);

    return areAllPositive(differences);
}

const areAllPositive = (array) => {
    return array.reduce((item) => item > 0, true);
}

const calculateNeighboursDifference = (array) => {
    return array.slice(0, -1).map((value, index) => value - array[index + 1]);
}

export {isReportSafe, calculateNeighboursDifference}