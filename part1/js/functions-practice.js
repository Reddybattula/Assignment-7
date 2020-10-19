/*eslint-env browser*/
var division;
var sq;
var percent;
var modu;
var nlist;
var total;
 
//STEP 1
function halfNumber(num) {
    "use strict";
    
    division = num/2;
    return division;
}

//STEP 2

function squareNumber(num) {
    "use strict";
    
    sq = num * num;
    return sq;
}
//STEP 3
function percentOf(num1, num2) {
    "use strict";
    
    percent = (num1/num2) * 100;
    return percent;
}
//STEP 4
function findModulus(num1, num2) {
    "use strict";
    
    modu = num2%num1;
    return modu;
}
//STEP 5
function sum(numbers) {
    "use strict";
    var i;
    
    for(i=0; i<numbers.length; i++) {
        total = total + numbers[i];
        window.console.log(numbers[i]);
    }
    return total;
  
}

function main() {
    "use strict";
    var i;
    var divRes = halfNumber(5);
    window.console.log("half of 5 is " + divRes + ".");
    var sqRes = squareNumber(3);
    window.console.log("The result of squaring the number 3 is " + sqRes + ".");
    var percentRes = percentOf(2,4);
    window.console.log("2 is " + percentRes + "% of 4.");
    var moduRes = findModulus(4,10);
    window.console.log(moduRes + " is the modulus of 4 and 10.");
    var str = window.prompt("Enter the numbers separated by commas to add");
    var numbers = str.split(",");
    for (i=0; i<numbers.length; i++) {
    numbers[i] = parseInt(numbers[i], 10);
    }
    window.console.log(numbers);
    
    var sumRes = sum(numbers);
    window.console.log(sumRes + " is the sum of all numbers");
    
    
}

main();