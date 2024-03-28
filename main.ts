#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 - 1 );
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! yoy guessed right number.");  
} else {
    console.log("you guessed wrong number");
}