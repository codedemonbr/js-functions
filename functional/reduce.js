const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;
const total = numbers.reduce(sum);
const total2 = numbers.reduce(sum, 100);

console.log(total);
console.log(total2);

const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length;
    } else {
        return acc + el;
    }
};

const result = numbers.reduce(avg);
console.log(result);
