// arrays in js
//An array is a special variable, which can hold more than one value:

//let array = [ 1, "one", 2, "two", 3, "three"];

//array.splice(3, 4, "TWO", "THREE"); //The splice() method adds new items to an array.

 //let newarray = array.slice(3);  //The slice() method slices out a piece of an array.
// array.push(4, "four") //it adds given value in the end
//  array.shift() //it removed the first element from an array
//  array.unshift(5, "five"); //adds new element in an array at first place

// console.log(array.length);
// console.log(array.pop()); //it removes the last element fron an array
 //console.log(newarray);



// let emptyarray = [];
//  emptyarray[0] = 6, "six";
//  emptyarray[1] = 7, "seven";

//  let concatArray = array.concat(emptyarray); //merge 2 array and create  a new array

//  console.log(concatArray);

//let sortarray = [ 4,3,2,1, "b", "d", "c", "a"];

//sortarray.sort(); //sorts array alphabetically/numercally

//sortarray.reverse(); //The reverse() method reverses the elements in an array

//console.log(sortarray);

//****************************


// This KeyWord  refers to an object.

// var employee =  {
//     Name: "Hardik",
//     DOJ: 10-12-2022,

//     employeedetails: function() {
//         return this.Name + this.DOJ;
//    }
// };

// console.log(employee.employeedetails());

//*************
 
/*strict In a function, in strict mode, this is undefined. Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

 
// AJAX is a developer's dream, because you can: 
// Update a web page without reloading the page
// Request data from a server - after the page has loaded
// Receive data from a server - after the page has loaded
// Send data to a server - in the background
 
// Jquery $ sign is just a valid javascript identifier which is used as an alias for jQuery.

// Https request in ajax  - The XMLHttpRequest object is used to exchange data with a server.To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
//Status in ajax HTML -  The onreadystatechange Property
The readyState property holds the status of the XMLHttpRequest.
The onreadystatechange property defines a function to be executed when the readyState changes.
The status property and the statusText property holds the status of the XMLHttpRequest object.

http status- HTTP response status codes indicate whether a specific HTTP request has been successfully completed.

// Testing in Javascript 
// Functions 
// Understanding of Asycnhronous behaviour 
// 
// 
// async and await
// if else

// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions.

//objcets


//pure and impure functions


//constructor  In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

// eventloop avaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

//iterators and generators

//arrow function It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
//let myFunction = (a, b) => a * b;

//window.onload function Execute a JavaScript immediately after a page has been loaded:

//differnce between map and for each

//api fetch
let p = fetch("https://api.chucknorris.io/jokes/random%22)
p.then((response) => {
  return response.json()
}).then((value2) => {
  // console.log(value2)
  const jokeData = value2.value;
  console.log(jokeData);
})





// Create a function that accepts an array called ‘myarray’ as an argument, iterates through ‘myarray’, and returns a new array which contains all the even numbers in ‘myarray’.
// Sample input: [1,2,3,4,5,6,7,8]
// Sample output: [2,4,6,8]


 

function findevennumbers() {
    let myarray = [1,2,3,4,5,6,7,8];
    for(let i = 1; i < arguments.length; i++) 
        
        

    return myarray;
}

findevennumbers();
console.log(findevennumbers());

//async and await ... async and await make promises easier to write" async makes a function return a Promise await makes a function wait for a Promise

const getData = async() => {
  var y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);


promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
A Promise has four states: 
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has fulfilled or rejected

Benefits of Promises 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling

var promise = new Promise(function(resolve, reject){
     //do something
});