function myPow (num, degree) {
    return degree !== 1 ? num * myPow(num, degree - 1) : num;
}

console.log(myPow(2,3));