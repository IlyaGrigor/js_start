/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

const SERIAL_NUMBER = 1
const BREAKPOINT_NUMBER = 20
const CONTROL_NUMBER = 2

let counter = SERIAL_NUMBER
let sum = 0

 while (counter <= BREAKPOINT_NUMBER) {
    if (counter % CONTROL_NUMBER !== 0) {
        sum = sum + counter
    }
    counter++
 }

console.log(sum)


