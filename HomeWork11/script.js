const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);

console.log(removeElement(array, 5 ));

function removeElement (arr, value){
    return arr.filter((item => item !== value));
}
