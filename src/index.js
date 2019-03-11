const api = require('./services/api');

// IIFE to initialize the application
(async () => {
    try {
        api()
    } catch (error) {
        console.log(error)
    }
})()

module.exports = api;