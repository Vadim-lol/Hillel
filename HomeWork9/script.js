let num = Number(prompt('Enter the size of the array')),
    arrA = [], arrB = [];
if (num) {
    for (let i = 1; i <= num; i++){
        arrA.push(Math.round( Math.random() * 100 ));
    }
} else {
    alert('You entered an invalid value');
}

console.log(arrA);

for (let i = 0; i < arrA.length; i++) {
    if(arrA[i] === 0)
        continue;

    let flag= 1;

    for (let j = 2; (j <= arrA[i]/2) && (flag === 1); j++) {
        if (arrA[i] % j === 0)
            flag=0
    }
    if (flag === 1) arrB.push(arrA[i]);
}

console.log(arrB);

console.log(Math.max.apply(null, arrB));

console.log(Math.min.apply(null, arrB));
