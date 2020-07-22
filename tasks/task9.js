var arr = [1, 2, 3, 4, 5];
function reverse(arr) {
    var arr_reverse = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr_reverse.push(arr[i]);
    }
    return arr_reverse;
}
console.log(reverse(arr));