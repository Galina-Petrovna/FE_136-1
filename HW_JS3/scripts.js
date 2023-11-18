console.log('Задание 1');

let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}


for (let r = 35; r >= 8; r--) {
    console.log(r);
}

document.write('Задание 2' + '<br>');

let a = 89;
while (a >= 11) {
    document.write(a + '<br>');
    a--;
}

document.write('Задание 3' + '<br>');

let sum = 0;

for (let b = 1; b <= 100; b++) {
    sum += b;
}

document.write(sum + '<br>');

console.log('Задание 4');

let z = 5;
let sum1 = 0;

for (let x = 1; x <= z; x++) {
    sum1 = 0;

    for (let j = 1; j <= x; j++) {
        sum1 += j;
    }

    console.log('Sum' + x + '=' + sum1);
}

for (let m = 8; m <= 56; m++) {
    if (m % 2 !== 0) continue;

    console.log(m);
}

let c = 8;
while (c <= 56) {
    if (c % 2 === 0) {
        console.log(c);
    }
    c++;
}


for (let e = 1; e <= 10; e++) {

    for (let h = 1; h <= 10; h++) {

        document.write(
            `<table>
            <tr>
                <td>${h} * ${e} = ${(e * h)}</td>
            </tr>
            </table>`
        );
    }

    document.write('--------' + '<br>');
}

let d = 1000;
let num = 0;
while (d >= 50) {
    d /= 2;
    num++;
}

document.write('Задание 7' + '<br>');

document.write(d + '<br>');
document.write(num + '<br>');

document.write('Задание 8' + '<br>');

let l = 0,
    s = 0,
    rez = 0;

while (1){
    let num = +prompt()
    if (!num){
        break;
    }

    if (num < 0){
        continue;
    }

    s += num;
    l++;
}

document.write('Чисел введено: ' + l + ' ' + 'Сумма чисел: ' + s + ' '
    + 'Среднее арифметическое: ' + (s / l));


// Задание 9 
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let max = -Infinity;
let min = Infinity;
let bufer = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        bufer += str[i];
    } else {
        bufer = +bufer;
        if (max < bufer) max = bufer;
        if (min > bufer) min = bufer;
        bufer = '';
    }

}

console.log(`Max: ${max}`);
console.log(`Min: ${min}`);


//Задание 10

let num1 = prompt ('Введите число');
let summ = 0;
let count = 0;
let reverce = ''

for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
    summ += +num1[i];
    count += 1;
    reverce = num1[i] + reverce; 
}

console.log(`
    вводится число ${num1};
    цифр в числе = ${count};
    сумма = ${summ};
    обратный порядок = ${reverce}.
`);
