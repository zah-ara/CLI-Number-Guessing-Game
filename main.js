#! /use/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//1) computer will generate a random number. -DONE
//2) user input for guessing number. -DONE
//3) compare user input with computer gnerated and show result. -DONE
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to the number guessing game");
const answers = await inquirer_1.default.prompt([
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
