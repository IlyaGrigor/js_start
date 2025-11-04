/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/


const superArray = [1,3,6,45,7,9];
const checkElement = 2;

function includesElement(array, element) {
    // return array.includes(element);
    // return array.indexOf(element) !== -1;
    for (let i = 0; i < array.length; i++) {
        return array.indexOf(element) !== -1;
    }
}

const elementCheck = includesElement(superArray, checkElement);
console.log(elementCheck);

