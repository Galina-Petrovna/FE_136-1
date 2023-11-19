document.write('Задание 1' + '<br>');

let str1 = 'aaa@bbb@ccc';

document.write(str1.replace(/@/g, '!') + '<br>');

document.write('<br>');


////////
document.write('Задание 2' + '<br>');

var str2 = '2025-12-31';
var arr = str2.split('-');
var newStr2 = arr[2] + '/' + arr[1] + '/' + arr[0];

document.write((newStr2) + '<br>');


document.write('<br>');

////////////
document.write('Задание 3' + '<br>');

let str3 = 'Я учу javascript!';

document.write(str3.substring(0, 2) + '<br>');
document.write(str3.substr(0, 1) + '<br>');
document.write(str3.slice(0, 2) + '<br>');

document.write('<br>');

/////////////

document.write('Задание 4' + '<br>');

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i = 0; i < arr4.length;i++){
    sum += Math.pow(arr4[i], 3)
}

document.write(Math.sqrt(sum) + '<br>');

document.write('<br>');

////////////
document.write('Задание 5' + '<br>');

let a = 6,
    b = 1,
    c = Math.abs(a - b);

document.write(c + '<br>');

document.write('<br>');

//////////

document.write('Задание 6' + '<br>');

let date = new Date();
let resDate = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
let numbers = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
document.write(numbers + ' ' + resDate + '<br>');

function addZero (num) {
    if (num <=9) {
        return num = '0' + num;
    } else {
        return num;
    }

}

document.write('<br>');

///////////

document.write('Задание 7' + '<br>');

function getStr(str) {
    let regExp = /ab+a/g;
    let rez = str.match(regExp);
    return rez;
}

document.write(getStr('aa aba abba abbba abca abea') + '<br>');

document.write('<br>');

////////////

document.write('Задание 8' + '<br>');

let pfone = '+375291357632';

let regexp = /\+[0-9]{1,4}[0-9]{1,5}[1-9]{6,7}/g;

document.write(regexp.test(pfone) + '<br>');

pfone = '375291357632';

document.write(regexp.test(pfone) + '<br>');

pfone = '37524586233591357632';

document.write(regexp.test(pfone) + '<br>');


document.write('<br>');


///////////

document.write('Задание 9' + '<br>');

/**
 * 
 * @param {string} mail 
 * @returns boolean
 */

const email = (mail) => {
    const regExp = /^[a-z]{1}[a-z0-9_\.\-]{1,}@[a-z]{1}[a-z0-9_\.\-]{1,10}\.[a-z]{2,11}$/gi;
    return regExp.test(mail);
}

document.write(email('ящик@почта.бел') + '<br>');
document.write(email('user_top@mail.com') + '<br>');
document.write(email('1yser1@mail.ru') + '<br>');

document.write('<br>');

/////////////

document.write('Задание 10' + '<br>');

/**
 * 
 * @param {string} url 
 */

const adress = (url) => {
    const regExp = /(https?:\/\/[a-z][a-z0-9]+(?:.[a-z0-9]+)*.[a-z]{2,11})(\/(?:[^#?\s])+)?(\?[^#]+)?(#\w+)?/gi;
    let group = regExp.exec(url) || [];

    return [...group].filter((item, index) => index !== 0 ? item : null);

    /**
     * function(item, index) {
     * if (index !== 0) {
     *  return item;
     * } else {
     *  return null;
     * }
     * }
     */
}

document.write(adress('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
