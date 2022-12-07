export function getWeek(day = new Date()) {
    day.setHours(0);
    day.setMinutes(0);
    day.setSeconds(0);
    const weekArray = []
    for (let i = 0; i < 7; i++) {
        weekArray.push(new Date(day.getTime() + i * 1000 * 60 * 60 * 24));
    }
    return weekArray;
}