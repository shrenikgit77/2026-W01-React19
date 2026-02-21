let numbers = [19,45,42,63,64,75,24];

//Q1. count and print how many are even and how many are odd?
let even = 0;
let odd = 0;

//approach #1
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
        even++;
    else
        odd++;
}


//approach #2
even = odd = 0;
for(let item in numbers)
{
    if(item%2==0)
        even++;
    else
        odd++;
}

//approach #3
for(let item in numbers)
{
    item%2==0?even++:odd++;
}


//approach #4
let even_array = numbers.filter(function(item, index){
    if(item%2==0)
        return true;
}).length;