/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const superArray02 = [1, 2, 3, 4, 5, 6];
const superArray03 = [11, 9, 1, 10, 66];

const superArray04 = [1, 2, 3, 4, 5, 6];
const superArray05 = [4, 8, 9, 10, 11, 12, 13]

const superArray06 = [33, 44, 55];
const superArray07 = [66, 77, 88];


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


function findCommonElements(array1, array2) {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (includesElement(array1, array2[i]) === true) {
            newArray.push(array2[i]);
        }
    }
    return newArray;
}

const elementsFounded = findCommonElements(superArray02, superArray03);
console.log(elementsFounded)

const elements2Founded = findCommonElements(superArray04, superArray05);
console.log(elements2Founded)

const elements3Founded = findCommonElements(superArray06, superArray07);
console.log(elements3Founded)