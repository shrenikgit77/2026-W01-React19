// calculator app

let addition = function(a, b)
{
    return a + b; 
}


let subtraction = function(a, b)
{
    return a - b;
}

let multiplication = function(a, b)
{
    return a * b;
}

let division = function(a, b)
{
    return a/b;
}


var addn = addition(10, 3);
var subt = subtraction(10, 3);
var mult = multiplication(10, 3);
var divn = division(10, 3);

console.log(`
        Addition = ${addn}
        Subtraction = ${subt}
        Multiplication = ${mult}
        Division = ${divn}
    `);
