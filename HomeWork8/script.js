let taskNum = Number(prompt('Enter task number:'));
switch (taskNum){
    case 1:{
        let p = document.createElement('p'), text = '';
        for (let i = 10; i <= 20; i++){
            if (text)
                text += ', ';
            text += i;
        }
        p.innerHTML = text;
        document.body.appendChild(p);
        break;
    }
    case 2:{
        let p2 = document.createElement('p'), text2 = '';
        for (let i = 10; i <= 20; i++){
            if (text2)
                text2 += ', ';
            text2 += (i * i);
        }
        p2.innerHTML = text2;
        document.body.appendChild(p2);
        break;
    }
    case 3:{
        let p3 = document.createElement('p'), text3 = 0;
        for (let i = 1; i <= 10; i++){
            if (text3)
                text3 += '<br>';
            text3 += `7 * ${i} = ${7 * i}`;
        }
        p3.innerHTML = text3;
        document.body.appendChild(p3);
        break;
    }
    case 4:{
        let p4 = document.createElement('p'), text4 = 0;
        for (let i = 1; i <= 15; i++){
            text4 += i;
        }
        p4.innerHTML = text4;
        document.body.appendChild(p4);
        break;
    }
    case 5:{
        let p5 = document.createElement('p'), text5 = 1;
        for (let i = 1; i <= 5; i++){
            text5 *= i;
        }
        p5.innerHTML = text5;
        document.body.appendChild(p5);
        break;
    }
    case 6:{
        let p6 = document.createElement('p'), text6 = 0;
        for (let i = 1; i <= 500; i++){
            text6 += i;
        }
        text6 = text6 / 500;
        p6.innerHTML = text6;
        document.body.appendChild(p6);
        break;
    }
    case 7:{
        let p7 = document.createElement('p'), text7 = 0;
        for (let i = 30; i <= 80; i++){
            if (i % 2 == 0)
                text7 += i;
        }
        p7.innerHTML = text7;
        document.body.appendChild(p7);
        break;
    }
    case 8:{
        let p8 = document.createElement('p'), text8 = '';
        for (let i = 100; i <= 200; i++){
            if (i % 3 == 0) {
                if (text8)
                    text8 += ', ';
                text8 += i;
            }
        }
        p8.innerHTML = text8;
        document.body.appendChild(p8);
        break;
    }
    case 9:{
        let p9 = document.createElement('p'), text9 = '',
            num = Number(prompt('Enter a positive number:'));
        if (num > 0) {
            for (let i = 1; i <= num; i++) {
                if (num % i == 0) {
                    if (text9)
                        text9 += ', ';
                    text9 += i;
                }
            }
        } else {
            text9 = 'Enter is not a positive number.'
        }
        p9.innerHTML = text9;
        document.body.appendChild(p9);
        break;
    }
    case 10:{
        let p10 = document.createElement('p'), text10 = 0,
            num = Number(prompt('Enter a positive number:'));
        if (num > 0) {
            for (let i = 1; i <= num; i++) {
                if (num % i == 0)
                    if (i % 2 == 0)
                        text10++;
            }
        } else {
            text10 = 'Enter is not a positive number.'
        }
        p10.innerHTML = text10;
        document.body.appendChild(p10);
        break;
    }
    case 11:{
        let p11 = document.createElement('p'), text11 = 0,
            num = Number(prompt('Enter a positive number:'));
        if (num > 0) {
            for (let i = 1; i <= num; i++) {
                if (num % i == 0)
                    if (i % 2 == 0)
                        text11 += i;
            }
        } else {
            text11 = 'Enter is not a positive number.'
        }
        p11.innerHTML = text11;
        document.body.appendChild(p11);
        break;
    }
    case 12:{
        let p12 = document.createElement('p'), text12 = '';
        for (let i = 1; i <= 10; i++){
            for (let j = 1; j <= 10; j++){
                if (text12)
                    text12 += '<br>';
                text12 += `${i} * ${j} = ${i * j}`;
            }
            if (text12)
                    text12 += '<br>';
        }
        p12.innerHTML = text12;
        document.body.appendChild(p12);
        break;
    }
    default :{
        alert('There is no such task');
    }
}