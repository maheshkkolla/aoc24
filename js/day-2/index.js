const countByGroups = (list) => {
    let result = {};

    list.forEach(item => {
        result[item] = result[item] ? result[item] + 1 : 1;
    });

    return result;
}

export {countByGroups};