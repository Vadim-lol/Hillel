function main (a = 2, b = 3, c) {
    let sum = this.sum(a, b);

    if (c && typeof c === 'function')
        return c(sum);

    return sum;
}

function sum (a, b) {
    return a + b;
}
function outputSum (sum) {
    return sum;
}

console.log(main(1, 5, 5));
console.log(main(1, 5, outputSum));
