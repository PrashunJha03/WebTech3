// Assignment 1(Promise)
// --------------------------------
// Write a function named orderPizza that returns a new Promise.

// Inside the promise:

// Use a setTimeout of 2 seconds (2000 ms) to simulate waiting time.

// Create a variable (e.g., isAvailable = true).

// If isAvailable is true, call resolve with the message: "Here is your hot pizza

// If isAvailable is false, call reject with the message: "Sorry, we ran out of cheese

function orderPizza()
{
    const pizza = new Promise((resolve,reject)=>
    {
        let  isAvaialble = true
    if(isAvaialble)
    {
        resolve(setTimeout(() => {
            console.log("Here is your hot Pizza !!")},2000))
    }
    else
    {
        reject("We are out of cheese !!!")
    }

    })
}

orderPizza()
     



