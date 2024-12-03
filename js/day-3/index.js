const getMatchedInstructions = (input) => {
    var regex = new RegExp(/mul\(\d+,\d+\)/g);
    return input.match(regex);
}

export {getMatchedInstructions};