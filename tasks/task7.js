function arrayFill(value,number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(value);
    }
    return arr;
}
    
    console.log(arrayFill('x', 5)); 