let personInfo = {}, email, yearBirth, name, surname;

name = prompt('Enter your name:').trim();
surname = prompt('Enter your surname:').trim();
email =  prompt('Enter your email:').replaceAll(' ', '').toLowerCase();
yearBirth = Number(prompt('Enter the year of birth:').replaceAll(' ', ''));

personInfo.fullName = name && surname ? name + ' ' + surname : name && !surname ? name : !name && surname ? surname : 'Nameless';
if (!email.includes('@'))
    personInfo.email = `not valid email <b>${email}</b> (symbol @ not exist)`;
else if (email.indexOf('@') == 0)
    personInfo.email = `not valid email <b>${email}</b> (symbol @ find in first place`;
else if (email.slice(-1) == '@')
    personInfo.email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
personInfo.age = yearBirth ? new Date().getFullYear() - yearBirth : 'Information not provided';

for (let key in personInfo) {
    let el = document.createElement('li');
    switch (key) {
        case 'fullName':
            el.innerHTML = `Full name: ${personInfo[key]}`;
            break;
        case 'email':
            el.innerHTML = `Email: ${personInfo[key]}`;
            break;
        case 'age':
            el.innerHTML = `Age: ${personInfo[key]}`;
            break;
        default:
            el.innerHTML = `No information found.`;
            break;
    }
    document.body.appendChild(el);
}