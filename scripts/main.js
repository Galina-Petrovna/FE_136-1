// let str = prompt();

// let rez = str
//     ? +str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]
//         ? "Суммы равны"
//         : "Суммы не равны"
//     : "Ничего не введено";

// if (str?.length > 0 || str) {
//     if (+str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]) {
//         console.log("Суммы равны");
//     } else {
//         console.log("Суммы не равны");
//     }
// } else {
//     console.log("Ничего не введено");
// }

// document.write(rez);

// let day = Number(prompt()); // prompt() -> значение -> Number(значение) -> day

// if (!isNaN(day)) {
//     let year = day > 365 ? parseInt(day / 365) : "Меньше года";
//     day %= 365; // day = day % 365
//     let mont = day > 31 ? parseInt(day / 31) : "Меньше месяца";
//     day %= 31;
//     let week = day > 7 ? parseInt(day / 7) : "Меньше недели";
//     day %= 7;

//     let d = null;

//     switch (mont) {
//         case 12:
//         case 1:
//         case 2:
//             d = "зима";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             d = "весна";
//             break;
//         case 6:
//         case 7:
//         case 8:
//             d = "лето";
//             break;
//         case 9:
//         case 10:
//         case 11:
//             d = "осень";
//         default:
//             d = 'зима';
//     }

//     document.write(`
//         <table>
//             <tr>
//                 <td>Количество лет:</td>
//                 <td>${year}</td>
//             </tr>
//             <tr>
//                 <td>Количество месяцев:</td>
//                 <td>${mont}</td>
//             </tr>
//             <tr>
//                 <td>Количество недель:</td>
//                 <td>${week}</td>
//             </tr>
//             <tr>
//                 <td>Количество дней:</td>
//                 <td>${day}</td>
//             </tr>
//             <tr>
//                 <td>Пора года:</td>
//                 <td>${d}</td>
//             </tr>
//         </table>
//     `)
// } else {
//     console.log("Введено не число");
// }


//----
/**
 * for
 * while
 * do..while
 */

// for (let i = 0; i < 10; i++){
//     if (i % 2 !== 0) continue;
//     console.log(i);
//     if (i === 8){
//         break;
//     }
// }

// let i = +prompt();
// while (i){
//     let num = i % 10; // 234 -> 230 4 -> 23
//     i = parseInt(i / 10);
//     console.log(num);
// }

// let rez = 0;

// while (1) {
//     let str = prompt();
//     if (isNaN(str) || +str === 0){
//         break;
//     }
//     rez += +str;
// }

// console.log(rez);

while (0){
    console.log('While');
}

do {
    console.log('Do..while');
} while (0);