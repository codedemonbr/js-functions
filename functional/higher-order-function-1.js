/**
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returnung them, are called higher-order functions.
 */

function run(fn) {
    return `Result is ${fn()}`;
}
function sayHello() {
    console.log("Hello!");
}

run(sayHello);

run(function () {
    console.log("Run, Forest. Run!");
});

const result = run(Math.random);

console.log(result);
