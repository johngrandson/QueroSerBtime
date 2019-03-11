const api = require('./services/api');

(async () => {
    try {
        api()
    } catch (error) {
        console.log(error)
    }
})()

module.exports = api;