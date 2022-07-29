const prompt = require("prompt-sync")({ sigint: true }); 

let num1 = 2;
let num2 = 2;
const result = num1 + num2;


function quizzer() 
{
    let resultp = prompt("The result of "+ num1 +" + "+ num2 + " = ");

    if (parseInt(resultp) === result)
    {
        console.log("Congratulations that is the answer")
    } else 
    {
        console.log("That is not the answer, try again");
        quizzer();
    }
}

quizzer();