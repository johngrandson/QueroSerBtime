module.exports = async (data) => {
        if (data % 4 === 0) {
                if (data % 100 !== 0) return true
                else return false
        } else if(data % 400 === 0) return true
        else return false
}