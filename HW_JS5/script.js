document.write('Задание 1' + '<br>');

function rez1(a, b, c) {
    return (a - b) / c;
}

document.write(rez1(10, 2, 4));

document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 2' + '<br>');

/**
 * 
 * @param {number} num 
 */

function mult (num){
    let a = num ** 2;
    let b = num ** 3;

    return [a, b];
}

let [num1, num2] = mult (5);

document.write(num1);
document.write('<br>');
document.write(num2);


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 3' + '<br>');

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

document.write(min(5, 8) + '<br>');
document.write(max(5, 8));

document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 4' + '<br>');

function getNum() {

    var num = prompt (' Введите число');

    document.write (num);
}

getNum();



document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 5' + '<br>');

function isEven(num) {
    return num % 2 === 0;
}

document.write(isEven(8));


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 6' + '<br>');

function createArray(array) {
    var rez = [];
    for (var i = 0; i < array.length; i++) {
        if (isEven(array[i])){
            rez.push(array[i])
        }
    }
    return rez;
}

document.write(createArray([3, 4, 1, 3, 2, 1, 45, 123, 7, 34]));

document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 7' + '<br>');


//Вариант 1

// let symbol = [];

// function rez7(n) {
//     for (let i = 1; i <= n; i++) {
//         let m = '';
//         for (let j = 0; j < i; j++) {
//             m += symbol == undefined || symbol.length - 1 || symbol == ' ' ? i : symbol;
//         };
//         document.write(m + '\n' + '<br>');
//     }
// }

// rez7(5);


// Вариант 2

/**
 * 
 * @param {number} h 
 */

function func7 (h){
    for (let i = 1; i <=h; i++){
        let s = '';
        for (let j = 0; j < i; j++){
            // if (arguments [1]){
            //     s += arguments[1];
            // } else {
            //     s += i;
            // }

            s += (arguments[1] !== ' ' && arguments.length > 1) ? arguments[1] : i;
        }
        document.write(s + '<br>');
    }
}

func7(7, ' ');


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 8' + '<br>');

function func8(h){
    for (let i = 1; i <= h; i++){
        document.write(`<pre>${(' ').repeat(h - i) + ('*').repeat(i * 2 - 1)}`);
    }  
}

func8(3);

function func8_1(h){
    for (let i = 0; i < h; i++){
        document.write(`<pre>${(' ').repeat(i) + ('*').repeat(h - i * 2 + h - 1)}`);
    }  
}

func8_1(7);


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 9' + '<br>');

function fib (num) {
    if (num <=1) return num;
    return fib (num - 1) + fib (num - 2);
}

let num = 0;
let arr = [];
while (1) {
    let buff = fib (num);
    num++;
    if (buff >= 1000) break;
    arr.push(buff);
}

document.write(arr);

document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 10' + '<br>');

/**
 * 
 * @param {number} num 
 */
function func10 (num) {
    if (num <= 9) return num;
    let rez = 0;
    for (let n of num.toString()) {
        rez += +n; // rez = rez + Number(n)
    }
    if (rez > 9) {
        return func10 (rez);
    } else {
        return rez;
    }
}

document.write(func10(15));


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 11' + '<br>');


function f11(arr) {
    document.write(arr[i] + '<br>');
    i++;

    if (i < arr.length) f11(arr);
}
	
var i = 0;
f11([5, 8, 6, 11,15]);

document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 12' + '<br>');

function f4(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}

function f12(name, suraname, lastName, groupNum){
    let title = 'Домашняя работа: «Функции»';
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${suraname}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;  

    title = f4(title, maxStr);
    subTitle = f4(subTitle, maxStr);
    nameText = f4(nameText, maxStr);

    
    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log(`${ramka}\n${title}\n${subTitle}\n${nameText}\n${ramka}`);
}


document.write('<br>');
document.write('<br>');

////////////////

document.write('Задание 13' + '<br>');

function mail(str){
    let point = str.lastIndexOf('.');
    if (point === str.length - 1 || point === -1 || point === 0) return 'Не почтовый адресс';
    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Не почтовый адресс';
    if (dog === str.length - 1 || dog === -1 || dog === 0 || dog < 3) return 'Не почтовый адресс';
    let defis = str.lastIndexOf('-');
    if (defis === str.length - 1 || defis === 0) return 'Не почтовый адресс';
    let n = str.lastIndexOf('_');
    if (n === str.length - 1 || n === 0) return 'Не почтовый адресс';

    let symbols = `абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ ` ;
    let nameSymbols = '!"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < str.length - 1; i++){
        if(str[i] === '.' && str[i + 1] === '.' || 
            str[i] === '@' && str[i + 1] === '.' ||
            str[i] === '.' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '@' ||
            str[i] === '_' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '-' ||
            str[i] === '-' && str[i + 1] === '-' ||
            str[i] === '_' && str[i + 1] === '_' ) return 'Не почтовый адресс';
        if(symbols.includes(str[i])) return 'Не почтовый адресс';
    }

    let name = str.slice(0, dog);

    if(nums.includes(name[0])) return 'Не почтовый адресс';
    for (let i = 0; i < name.length; i++){
        if (nameSymbols.includes(name[i])) return 'Не почтовый адресс';
    }

    let dom = str.slice(point);
    let domName = str.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return 'Не почтовый адресс';
    if(domName.length < 2 || domName.length > 11) return 'Не почтовый адресс';
    
    return 'Почтовый адресс верен';
}

