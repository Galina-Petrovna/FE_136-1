let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let max = -Infinity;
let min = Infinity;
let bufer = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        bufer += str[i];
    } else {
        bufer = Number(bufer);
        if (max < bufer) max = bufer;
        if (min > bufer) min = bufer;
        bufer = "";
    }
}

console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

// let num = prompt('Введите число');
// let summ = 0;
// let count = 0;
// let reverce = "";

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
//     summ += +num[i];
//     count += 1;
//     reverce = num[i] + reverce; // 123 -> 1 + '' (1) -> 2 + 1 (21) -> 3 + 21 (321)
// }

// console.log(`
//     вводится число ${num}; 
//     цифр в числе = ${count}; 
//     сумма = ${summ}; 
//     обратный порядок ${reverce}.
// `);

/**
 * Есть некоторое в диапазоне от 0 до 100.
 * Задача угадать это число за 7 попыток.
 * Пользователю выводить сообщение больше или меньше заданного числа
 */

let testNum = Math.floor(Math.random() * 100);
let counter = 0;

// while (true) {
//     if (counter >= 7) {
//         alert(`Количество попыток израсходовано, заданное число = ${testNum}`);
//         break;
//     }

//     let num = +prompt("Введите число от 0 до 100");

//     if (num === testNum) {
//         alert(
//             `вы выйграли! Число попыток: ${counter}, Заданное число = ${testNum}`
//         );
//         break;
//     }

//     if (num > testNum) {
//         alert(`Заданное число меньше ${num}`);
//     } else {
//         alert(`Заданное число больше ${num}`);
//     }

//     counter++;
// }

document.write('<div style="display: flex; gap: 40px; flex-wrap: wrap;">');
for (let i = 1; i < 11; i++){
    document.write('<div>');
    for (let j = 1; j < 11; j++){
        document.write(`${i} * ${j} = ${i * j} <br/>`);
    }
    document.write('</div>');
}
document.write('</div>');

let arr = [1, 2, 3];

// console.log(arr.length);
// arr[100] = 'lol';
// console.log(arr);
// console.log(arr.length);

/**
 * push - позволяет добавить элемент в конец массива
 * pop - извлечение элемента с конца массива
 * shift - извлечь элемент из начала массива
 * unshift - добавить в начало массива
 * reverse - разворачивает массив
 * join - объединяет массив в строку, при этом в качестве параметра можно передать разделитель
 * 
 * split - но это не метод массивов
 * 
 * sort - сортировка
 * slice - позволяет нам получить под массив, в параметрах индекс начала и индекс конца
 * splice - не безопасен, два параметра индекс начала и количество
 */

let arr2 = [234, 2, 1, 111, 123, 65, 9, 11, 34];

arr2.sort(function (a, b) {
    return b - a;
});

console.log(arr2);