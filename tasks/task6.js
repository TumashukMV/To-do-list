var arr = [];
for (var i = 1; i <= 5; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);