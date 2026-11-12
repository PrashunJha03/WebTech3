/* Assignment(4): Display Three Student Names(Promise All)
Question: Create three Promises that resolve with three student names. Use Promise.all() to display all three names together.
Complete this program:

let p1 = Promise.resolve("Ravi");
let p2 = Promise.resolve("Priya");
let p3 = Promise.resolve("Amit");

Promise.all([p1, p2, p3])
    .then(result => {
        // Display all names here
    }); */

let p1  =Promise.resolve("Ravi");
let p2 = Promise.resolve("Priya");
let p3 = Promise.resolve("Amit");

Promise.all([p1, p2, p3]).then((res)=> console.log(res)).catch((error) => console.log(error));

