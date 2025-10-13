// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code

const SERIAL_NUMBER = 1      // Начальное число
const BREAK_NUMBER = 20      // Конечное число
let counter = SERIAL_NUMBER  // Счётчик начинается с 1
let sum = 0                  // Начальная сумма — 0

while (counter <= BREAK_NUMBER) {  // Пока счётчик <= 20
    sum += counter                 // Прибавляем текущее число к sum
    counter++                      // Увеличиваем счётчик на 1
}

console.log(sum) // Выводим результат
