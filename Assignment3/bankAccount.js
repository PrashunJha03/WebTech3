/* Assignment(3): Check Bank Account Balance
---------------------------------------------------------
Question: Write a Promise that checks whether a customer has sufficient balance to withdraw money.
- If the balance is greater than or equal to the withdrawal amount, resolve the Promise with "Withdrawal Successful".
- Otherwise, reject the Promise with "Insufficient Balance".
Complete this program:
function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {

        // Write your logic here

    });
}*/

function transaction(balance, amt)
{
    let checkBal =  new Promise((resolve, reject)=>{
        if(balance >= amt)
        {
            resolve("WithDraw Successfull !!")
        }
        else
        {
            reject("Insufficient Balance")
        }
    })

    return checkBal;
}


transaction(20000,5000).then((success)=> console.log(success)).catch((fail)=> console.log(fail))

transaction(45000, 50000).then((success)=> console.log(success)).catch((fail)=> console.log(fail))

transaction(55000, 60000).then((success)=> console.log(success)).catch((fail)=> console.log(fail))