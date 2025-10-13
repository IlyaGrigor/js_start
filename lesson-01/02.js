/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code

const SERIAL_NUMBER = 1
const BREAKPOINT_NUMBER = 10
let counter = SERIAL_NUMBER
let factorial = 1

while (counter <= BREAKPOINT_NUMBER) {
    factorial = factorial * counter
    counter++
}
console.log(factorial)


//
// const SERIAL_NUMBER = 1      // Начальное число
// const BREAK_NUMBER = 20      // Конечное число
// let counter = SERIAL_NUMBER  // Счётчик начинается с 1
// let sum = 0                  // Начальная сумма — 0
//
// while (counter <= BREAK_NUMBER) {  // Пока счётчик <= 20
//     sum += counter                 // Прибавляем текущее число к sum
//     counter++                      // Увеличиваем счётчик на 1
// }
//
// console.log(sum)