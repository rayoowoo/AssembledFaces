export const arrayEqual = (arr1, arr2) => {
    if (arr1.length === 0 || arr2 === 0) {
        return false
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

export const arrayOverlap = (arr1, arr2) => {
    const memo = {};
    arr1.forEach( el => {
        memo[el] = null;
    })
    arr2.forEach (el => {
        if (memo[el] === null) {
            memo[el] = true;
        } else {
            memo[el] = null;
        }
    })

    let sum = 0;
    for (let key in memo) {
        if (memo[key] === true) sum++
    }
    return sum;
}