const request = require('request');
const util = require('util');
const functions = require('../functions');

const url = "http://numbersapi.com/random/year";

const consume = util.promisify(request);

module.exports = async (data) => {
    try {        
        // consume the API data.
        data = await consume(url);
        //  then extract the first number in the string
        data = data.body.match(/\d+/)[0];

        // returns true or false as value
        const result = await functions.calculateYear(data);
        
        // logs the result based on it's condition
        if (result) console.log(`the year ${data} is bisexth`);
        else console.log(`the year ${data} is not bisexth`);

        return result;

    } catch (error) {
        console.log(`error: ${error}`)
    }
}


