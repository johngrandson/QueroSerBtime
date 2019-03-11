module.exports = async (data) => {
        // data returned inside of consume method
        if (data % 4 === 0) {
                if (data % 100 !== 0) return true
                else return false
        } else if(data % 400 === 0) return true
        else return false
        // will return true or false based on it's value
}