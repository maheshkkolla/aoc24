const isReportSafe = (array) => {
    let differences = calculateNeighboursDifference(array);

    return (areAllPositive(differences) || areAllNegative(differences)) && areAllBetweenAbsOneAndThree(differences);
}

const areAllPositive = (array) => {
    return array.reduce((result, item) => result && item > 0, true);
}

const areAllNegative = (array) => {
    return array.reduce((result, item) => result && item < 0, true);
}

const areAllBetweenAbsOneAndThree = (array) => {
    return array.reduce((result, item) => {
        let absNumber = Math.abs(item);
        return result && (absNumber > 0 && absNumber < 4);
    }, true);
}

const calculateNeighboursDifference = (array) => {
    return array.slice(0, -1).map((value, index) => value - array[index + 1]);
}

export {isReportSafe, calculateNeighboursDifference}