export const getHumanReadableTimestamp = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString()
}