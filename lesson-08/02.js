/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    let string = str.trim()
    if (string === "") {
        return false;
    }
    const num = Number(string);
    return !Number.isNaN(num);
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("1g3")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false


