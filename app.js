// import functions and grab DOM elements
import { countsAsYes } from "./utils.js";
const quizButton = document.getElementById('initiate-quiz');
const secretBox = document.getElementById('result-box');

// console.log('quizButton');
// console.log('secretBox');


// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    // console.log('button clicked!');
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    let correctCounter = 0;
    // console.log(firstName);
    // console.log(lastName);

    if (!confirm('Are you sure you would like to take this quiz?')) return;

    const firstAnswer = prompt('Is the average lifespan of a Great Pyranese 10-11 years?');
    const secondAnswer = prompt('The Great Pyrenees is the same as a Pyrenean Mastiff');
    const thirdAnswer = prompt('Can Great Pyrenese can be stubborn and hard to train?');

    if (countsAsYes(firstAnswer)) correctCounter++;
    // console.log(correctCounter);
    if (!countsAsYes(secondAnswer)) correctCounter++;
    // console.log(correctCounter);
    if (countsAsYes(thirdAnswer)) correctCounter++;
    // console.log(correctCounter);

    const correctPercentage = (correctCounter / 3) * 100;
    const roundedPercent = correctPercentage.toFixed(0);
    console.log(roundedPercent);
    const results = [
        `Come on ${firstName} ${lastName}, you gotta learn more about Great Pyrenese, you got ${roundedPercent}% right! `,
        `You can do better than that ${firstName} ${lastName}, you only got ${roundedPercent}% right!`,
        `That was pretty good ${firstName} ${lastName}, but I think you can do better than ${roundedPercent}% correct!`,
        `Excellent work ${firstName} ${lastName}, you got ${roundedPercent}% right! You are an expert! `
    ];

    for (let i = 0; i < 3; i++){
        if (correctCounter === i){
            console.log(results[i]);
            secretBox.textContent = results[i];
        }
    }

    




})