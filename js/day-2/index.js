const isReportSafe = (array) => {
    let differences = calculateNeighboursDifference(array);

    console.log(differences);

    return areAllPositive(differences) || areAllNegative(differences);
}

const areAllPositive = (array) => {
    return array.reduce((result, item) => result && item > 0, true);
}

const areAllNegative = (array) => {
    return array.reduce((result, item) => result && item < 0, true);
}

const calculateNeighboursDifference = (array) => {
    return array.slice(0, -1).map((value, index) => value - array[index + 1]);
}

export {isReportSafe, calculateNeighboursDifference}