function generateKey(length, str){
    let min = 0, max = str.length - 1, key = '';
    for (let i = 0; i < length; i++){
        let rand = min + Math.random() * (max + 1 - min);
        rand =  Math.floor(rand);
        key += str[rand];
    }
    return key;
}

console.log(generateKey(15, 'give_me_a_key_123456789'));
