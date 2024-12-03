const isReportSafe = (array) => {
    return false;
}

const calculateNeighboursDifference = (array) => {
    return array.slice(0, -1).map((value, index) => value - array[index + 1]);
}

export {isReportSafe, calculateNeighboursDifference}