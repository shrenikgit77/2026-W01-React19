//choosing between var, let and const

/*
outlines

1) var
    -> var is function scope
    -> variable declared inside if, else, switch, for, while remain
       accessible outside the block scopre. But, variable declared
       inside function remain local to function body. accessible only
       within the function scope

    -> redeclaration and reassignment will overright value

2) let 
    -> let is block scope variables
    -> Redeclaration is not allowed

3) const
    -> const scope is also block scope

*/


//list / linear array
let users = ["smith", "james", "john", "peter"];

// object
let bankaccount = {
    "accountnumber":4056783426,
    "profile":{
        "firstname":"smith",
        "lastname":"devid"
    }
}

//Array of Objects
let products = [
    {code:101, title:"mouse", cost:"INR 900"},
    {code:102, title:"keyboard", cost:"INR 1500"},
    {code:873, title:"speaker", cost:"INR 1800"},
    {code:453, title:"RAM", cost:"INR 900"},
    {code:415, title:"processor", cost:"INR 4500"},
]