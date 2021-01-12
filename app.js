// import functions and grab DOM elements
import { countsAsYes } from "./utils.js";
const quizButton = document.getElementById('initiate-quiz');
const secretBox = document.getElementById('result-box');


// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    //Ask name
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    //declare counter variable
    let correctCounter = 0;

    //confirm they want take the quiz
    if (!confirm('Are you sure you would like to take this quiz?')) return;

    //quiz questions
    const firstAnswer = prompt('Is the average lifespan of a Great Pyranese 10-11 years?');
    const secondAnswer = prompt('The Great Pyrenees is the same as a Pyrenean Mastiff');
    const thirdAnswer = prompt('Can Great Pyrenese can be stubborn and hard to train?');

    //alert them to the results
    alert('Look for your quiz results below, fingers crossed!');

    //calculate how many correct answers were given
    if (countsAsYes(firstAnswer)) correctCounter++;
    if (!countsAsYes(secondAnswer)) correctCounter++;
    if (countsAsYes(thirdAnswer)) correctCounter++;

    //convert counter into a rounded percentage
    const correctPercentage = (correctCounter / 3) * 100;
    const roundedPercent = correctPercentage.toFixed(0);

    //array of possible result messages
    const results = [
        `Come on ${firstName} ${lastName}, you gotta learn more about Great Pyrenese, you got ${roundedPercent}% right! `,
        `You can do better than that ${firstName} ${lastName}, you only got ${roundedPercent}% right!`,
        `That was pretty good ${firstName} ${lastName}, but I think you can do better than ${roundedPercent}% correct!`,
        `Excellent work ${firstName} ${lastName}, you got ${roundedPercent}% right! You are an expert! `
    ];

    //inject corresponding result message into DOM element
    for (let i = 0; i <= 3; i++){
        if (correctCounter === i){
            secretBox.textContent = results[i];
        }
    }
    // change style depending on how many correct
    switch (correctCounter){
        case 0:
            secretBox.style.color = 'black';
            secretBox.style.fontWeight = '500';
            break;
        case 1:
            secretBox.style.color = '#003F91';
            secretBox.style.fontWeight = '600';
            break;
        case 2:
            secretBox.style.color = 'orange';
            secretBox.style.fontWeight = '600';
            break;
        case 3:
            secretBox.style.color = '#5DA9E9';
            secretBox.style.fontWeight = '600';
            secretBox.style.fontSize = '1.8rem';
            break;

            

    }

})