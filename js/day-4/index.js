const getCombinations = (x, y) => {
    return [
        [[x, y], [x, y+1], [x, y+2], [x, y+3]]
    ];
};

export {getCombinations}