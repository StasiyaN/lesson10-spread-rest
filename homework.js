//1
const numbers = [1, 5, 8, 10]

function getAverage(...numbers) {
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    return(sum / numbers.length);
}

const averageNumbers = getAverage(...numbers);
console.log(averageNumbers);
