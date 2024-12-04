const getCombinations = (x, y) => {
    return [
        [[x, y], [x, y+1], [x, y+2], [x, y+3]],
        [[x, y], [x, y-1], [x, y-2], [x, y-3]],
        [[x, y], [x+1, y], [x+2, y], [x+3, y]],
        [[x, y], [x-1, y], [x-2, y], [x-3, y]]
    ];
};

export {getCombinations}