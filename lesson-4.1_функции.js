function getTempPrediction(firstDay, secondDay) {
    const nextDay = 0.5 * firstDay + 0.5 * secondDay;
    return nextDay;
}

const temp1 = getTempPrediction(40, 20);
const temp2 = getTempPrediction(30, 10);
console.log(temp1);
console.log(temp2);
