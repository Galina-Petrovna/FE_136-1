document.write('Задание 1' + '<br>');

let arr1 = [1, 2, 3, 4, 5];
for ( let i = 0; i < arr1.length; i++){
    document.write(arr1[i] + '<br>');
}

document.write('Задание 2' + '<br>');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (i = 0; i < arr2.length; i++){
    if (arr2[i] > -10 && arr2[i] < -3)
    document.write(arr2[i] + ' ' + ',' + '<br>');
}

document.write('Задание 3' + '<br>');

let arr3 = [];
for (let i = 23; i <= 57; i++){
    arr3.push(i);
}

document.write(arr3);

document.write('<br>');

let arr3_1 = [];
let a = 23;
while (a <= 57) {
    document.write(a + ',' + ' ');
    a++;
}

document.write('<br>');
document.write('<br>');

document.write('Задание 4' + '<br>');

let arr4 = ['10', '20', '30', '50', '235', '3000'];

document.write(arr4.filter(num => ['1', '2', '5'].includes(num.toString()[0])));

document.write('<br>');
document.write('<br>');

document.write('Задание 5' + '<br>');

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВСКР'];

for(let i = 0; i < arr5.length; i++){   

    if(arr5[i] == 'СБ' || arr5[i] == 'ВСКР'){
       document.write('<b>' + arr5[i] + '</b>' + ' ');
    } else {
        document.write(arr5[i] + ' ');
    }  
}

document.write('<br>');
document.write('<br>');

document.write('Задание 6' + '<br>');

let arr6 = ['зима', 'весна', 'лето', 'осень'];

arr6 [arr6.length] = 'пора года';
document.write(arr6[4]);

document.write('<br>');
document.write('<br>');

document.write('Задание 7' + '<br>');

let arr7 = [];
while(true) {
let n = prompt('Введите число');
if(n === '' || n === null || isNaN(n)) break;
arr7.push(+n);
}

document.write(arr7);

document.write('<br>');

arr7.sort(function(a, b) {
    return a -b;
});


document.write(arr7);

document.write('<br>');
document.write('<br>');

document.write('Задание 8' + '<br>');

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let rez = [];

while (arr8.length) {
    let buff = arr8.pop();
    // buff = buff.toString();
    // buff = buff.split('');
    // buff = buff.reverce();
    // buff = buff.join('');


    buff = buff.toString().split('').reverse().join('');
    rez.push(buff);
}

document.write(rez);


document.write('<br>');
document.write('<br>');

document.write('Задание 9' + '<br>');

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let sum = 0;

for ( let i = 0; i < arr9.length; i ++){
   if (arr9[i] === undefined ) {
    sum += 1 ;
   }
   
}

document.write(sum);


document.write('<br>');
document.write('<br>');

document.write('Задание 10' + '<br>');


let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

let findex = arr10.indexOf(0);
let lindex = arr10.lastIndexOf(0);
let rez2 = 0;

if (findex === -1 || lindex === -1) {
    rez2 = 'Нулей нет';
} else if (findex === lindex) {
    rez2 = 'Только один 0';
} else {

    let s = arr10.slice(findex, lindex);
    while (s.length) {
        rez2 += s.pop();
    }
}

document.write(rez2);


  

















// document.write('Задание 11' + '<br>');

// let tree = line = 5, r='.', b='*';
// while(line-->0) console.log(Array(line+1).join(a) +Array(2*(tree-line)).join(b) +Array(line+1).join(a));

    
