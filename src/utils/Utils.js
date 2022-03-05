export const getHumanReadableTimestamp = (millisOrDateStr) => {
    const date = new Date(millisOrDateStr)
    return date.toLocaleString()
}

export const getDummyAvatar = () => {
    let randomNum = parseInt(Math.random() * 100)
    if (randomNum === 0) {
        randomNum = 1
    }
    return `https://boredhumans.b-cdn.net/faces2/${randomNum}.jpg`
}