const countByGroups = (list) => {
    return list.reduce((result, item) => {
        result[item] = result[item] ? result[item] + 1 : 1;
        return result;
    }, {});
}

export {countByGroups};