var str = 'my string 1';
console.log(str.substr(0,1).toUpperCase() + str.substr(1));

// второй способ 
var str = 'my string 2';
str = str.split('');
str[0] = str[0].toUpperCase();
console.log(str.join(''));