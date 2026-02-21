// calculator app

let addition = (a, b) =>
{
    return a + b; 
}


let subtraction = (a, b) =>
{
    return a - b;
}

let multiplication = (a, b) =>
{
    return a * b;
}

let division = (a, b) =>
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
