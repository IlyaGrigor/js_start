/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

const string = "learning JavaScript";

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return (str.slice(0, maxLength) + "...");
    } else if (str.length === maxLength) {
        return str;
    }
}

const result = truncate(string, 10);
console.log(result);