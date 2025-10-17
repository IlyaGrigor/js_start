/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * 6) + 1;

let dice2 = Math.floor(Math.random() * 6) + 1;

let isWinningDouble;


// if ((dice1 === dice2) && ((dice1 + dice2) > 6)) {
if ((dice1 === dice2) && (dice1 > 3 && dice2 > 3)) {
    isWinningDouble = true;
    console.log(isWinningDouble + " Winning Double!")
} else if ((dice1 === dice2) && (dice1 < 3 && dice2 < 3)) {
    isWinningDouble = false;
    console.log(isWinningDouble + " Loosing Double :(")
} else {
    isWinningDouble = false;
    console.log(isWinningDouble + " You Loose:(")
}

console.log("random dice 1: ", dice1);
console.log("random dice 2: ", dice2);


