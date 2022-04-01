export const getHumanReadableTimestamp = (millisOrDateStr) => {
    const date = new Date(millisOrDateStr)
    return date.toLocaleString()
}

export const getTimeToDate = (millisOrDateStr) => {
    const date = new Date(millisOrDateStr)
    const today = new Date()

    console.log(date)
    console.log(today)

    // get total seconds between the times
    var delta = Math.abs(date.getTime() - today.getTime()) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
}

export const getDummyAvatar = () => {
    let randomNum = parseInt(Math.random() * 100)
    if (randomNum === 0) {
        randomNum = 1
    }
    return `https://boredhumans.b-cdn.net/faces2/${randomNum}.jpg`
}