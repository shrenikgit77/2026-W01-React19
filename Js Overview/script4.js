// calculator app

function addition(a, b)
{
    return a + b; 
}

function subtraction(a, b)
{
    return a - b;
}

function multiplication(a, b)
{
    return a * b;
}

function division(a, b)
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
