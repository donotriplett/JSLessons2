let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

let first = 1050 + 100;
let second = "1050" + "100";

console.log(first, second);

let third = 1050 + "100";

console.log(third);
console.log(typeof third);


//Object
let firstObject = {
    integer: 50,
    stringOne: "hello world",
    isRemote: true
};

console.log(firstObject);
console.log(typeof firstObject);

//Array

let firstArray = ["Spanish", "English", "Dutch", "French"];

let alternateForm = {
    0: "Spanish",
    1: "English",
    2: "Dutch",
    3: "French"
}

console.log(firstArray[0]);