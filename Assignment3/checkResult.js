/* 
Assignment2 : Check Exam Result Using a Promise
-----------------------------------------------------------------
Question: Write a Promise that checks whether a student has passed or failed.
- If marks are 35 or above, resolve the Promise with "Pass".
- If marks are below 35, reject the Promise with "Fail".
Complete this program:
function checkResult(marks) {
    return new Promise((resolve, reject) => {

        // Write your logic here

    });
}

checkResult(75)
    .then(result => console.log(result))
    .catch(error => console.log(error));*/

function checkMarks(marks)
{
    let res = new Promise((resolve, reject)=>{
        if(marks>35)
            {
                resolve("Pass")
            }
        else{
               reject("Fail")
        }
    })

    return res;
}

checkMarks(85).then((result)=> console.log(result))
.catch((error)=> console.log(error))

checkMarks(22).then((result)=> console.log(result))
.catch((error)=> console.log(error))
