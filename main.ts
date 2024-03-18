//Day 17 
//Task 1 (functions parameters)
//define a function thst accepts multiple hobbies as arguments

function loghobbies (...hobbies:string[]){
    //loops through each hobby in the array
    hobbies.forEach(hobby => {
        //log a statement for each hobby
        console.log(`I love to do ${hobby}.`);
    });
}

//calls the functions with three hobbies
loghobbies("Coding","Travelling","Sleeping");

//TASK 2 (Multiple template literals )
//using template literals to define a multiple string 

let myidealDay = `My ideal day involves:
1. Waking up for offer Dawn Salah.
2.Spending most of the time in coding.
3.Ending the day with night prayer.`

//logging multiline string to the console.
console.log(myidealDay);

//Task 3 (Refactionary to Arrow functions)
//original function for calculating the area of a rectangle 

function calculateArea (width: number, height:number): number {
    return width * height;
} 

//refactored into an arrow function
let calculateAreaArrow = (width:number, height:number): number =>
width * height;

//example usage of the arrow dfunction
console.log(calculateAreaArrow(7,10)); 