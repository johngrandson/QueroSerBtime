const request = require('request');
const util = require('util');
const calculateYears = require('../functions/calculateYear');

const url = "http://numbersapi.com/random/year";

const consume = util.promisify(request);

// consume the API data.
consume(url).then(data => {
    //  then extract the first number in the string
    data = data.body.match(/\d+/)[0];

    // returns true or false as value
    return calculateYears(data);

}).catch(err => console.log('error: ', err))

module.exports = consume;