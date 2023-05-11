
function quick_sort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quick_sort(left).concat(pivot, quick_sort(right));
}

const arr = [2, 5, 25, -3, 9];

console.log(quick_sort(arr));
