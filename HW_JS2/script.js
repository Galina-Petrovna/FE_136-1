let name1 = prompt('Ваше имя'),
    age = prompt('Возраст'),
    city = prompt('Город проживания'),
    phone = prompt('Номер телефона'),
    email = prompt('email'),
    company = prompt('Компания'),
    text1 = ('Меня зовут'),
    text2 = ('Мне'),
    text3 = ('лет'),
    text4 = ('Я проживаю в городе'),
    text5 = ('и работаю в компании'),
    text6 = ('Мои контактные данные:'),
    text7 = ('.'),
    text8 = (' ');


document.write(text1 + text8 + name1 + text7 + text8);
document.write(text2 + text8 + age + text8 + text3 + text7 + text8);
document.write(text4 + text8 + city + text8 + text5 + text8 + company + text7 + text8);
document.write(text6 + text8 + phone + text8 + email + text7);

document.write('');

let today = 2023;
let year = today - age;
let str1 = ('родился в');
let str2 = ('году');

document.write(text8 + name1 + text8 + str1 + text8 + year + text8 + str2 + text7);

//................

let a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 5,
    f = 6;

(a + b + c) == (d + e + f) ? console.log('Да') : console.log('Нет');

let n = -3;
n > 0 ? console.log('Верно') : console.log('Неверно');

let s = 10,
    t = 2;

console.log(s + t);
console.log(s - t);
console.log(s * t);
console.log(s / t);

(s + t) > 1 ? console.log((s + t) * (s + t)) : console.log('');

(s > 2 && s < 11) || (t < 14 && t >=6) ? console.log('Верно') : console.log('Неверно');


let r0_59 = 28;
if (r0_59 >= 0 && r0_59 < 20){
    console.log('1');
} else if (r0_59 >= 20 && r0_59 < 40){
    console.log('2');
} else if (r0_59 >= 40 && r0_59 < 60){
    console.log('3');
} else {
    console.log('ошибка');
}

let day = 10;
if (day >= 1 && day < 10){
    console.log('1');
} else if (day >=11 && day < 20){
    console.log('2')
} else if (day >= 20 && day <= 31){
    console.log('3');
} else {
    console.log('Неверно');
}

let z = 366;
let years = z / 365;
let months = z / 31;
let week = z / 7;
let hours = z * 24;
let minuts = hours * 60;
let second = minuts * 60;

(years >= 1) ? console.log(years) : console.log('Меньше года');
(months >= 1) ? console.log(months): console.log('Меньше месяца');
(week >= 1) ? console.log(week) : console.log('Меньше недели');
console.log(hours);
console.log(minuts);
console.log(second);

if (day >= 1 && day <= 31){
    console.log(1);
} else if (day >= 32 && day <= 59){
    console.log(2);
} else if (day >= 60 && day <= 90){
    console.log(3);
} else if (day >= 91 && day <= 120){
    console.log(4);
} else if (day >= 121 && day <= 151){
    console.log(5);
} else if (day >= 152 && day <= 181){
    console.log(6);
} else if (day >= 182 && day <= 212){
    console.log(7);
} else if (day >= 213 && day <= 243){
    console.log(8);
} else if (day >= 244 && day <= 273){
    console.log(9);
} else if (day >= 274 && day <= 305){
    console.log(10);
} else if (day >= 306 && day <= 335){
    console.log(11);
} else if (day >= 336 && day <= 366){
    console.log(12);
} else{
    console.log('не год');
}
    
let Mont = 1;

switch (Mont) {
    case 12:
    case 1:
    case 2:
        console.log('зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
    break;
    default:
        console.log('таких значений нет');
}
