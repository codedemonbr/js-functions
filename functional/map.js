const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map((el) => el * 2);

const students = [
    { name: "Jake", score: 6.4 },
    { name: "Susan", score: 8.6 },
    { name: "Emma", score: 9.4 },
    { name: "Peter", score: 9.1 },
];

const studentsScore = students.map((el) => el.score);
const studentsNames = students.map((el) => el.name);

const ceilingScore = students.map((el) => el.score).map(Math.ceil);

console.log(numbers);
console.log(numbersV2);

console.log(students);
console.log(studentsScore);
console.log(studentsNames);
console.log(ceilingScore);
