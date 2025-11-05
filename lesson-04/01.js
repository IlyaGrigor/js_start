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
// const superArray2 = [2,6,77,8,90,3,2,4];
const checkElement = 3;

// function includesElement(array, element) {
//     // return array.includes(element);
//     for (let i = 0; i < array.length; i++) {
//         return array.indexOf(element) !== -1;
//     }
// }

function includesElement(array, element) {
    // return array.includes(element);
    let result;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return result = true;
        }
    }
    return result = false;
}

const elementCheck = includesElement(superArray, checkElement);
console.log(elementCheck);

