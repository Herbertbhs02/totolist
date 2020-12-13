module.exports = getDate;

function getDate() {

    const today = new Date();
    const options = {
        weekday:'long',
        day:'numeric',
        month:'long',
        year:'numeric'
    };
    
    var day = today.toLocaleDateString('en-us',options)
    return day
}
