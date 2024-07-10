#! /usr/bin/env node

import inquirer from 'inquirer'

//1) computer will generate a random number. -DONE

//2) user input for guessing number. -DONE

//3) compare user input with computer gnerated and show result. -DONE

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to the number guessing game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    }
]);
if (answers.userguessednumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("Aww! You guessed the wrong number.");
}
