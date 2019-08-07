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