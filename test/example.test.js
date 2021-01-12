// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { countsAsYes } from '../utils.js';

const test = QUnit.test;

test('when given a word starting with the letter y, it should return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when given a word starting with the letter that is not y, it should return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('nope');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

