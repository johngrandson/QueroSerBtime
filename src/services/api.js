const request = require('request');
const util = require('util');
const calculateYears = require('../functions/calculateYear');

const url = "http://numbersapi.com/random/year";

const consume = util.promisify(request);

consume(url).then(data => {
    data = data.body.match(/\d+/)[0];

    return calculateYears(data);

}).catch(err => console.log('error: ', err))

module.exports = consume;