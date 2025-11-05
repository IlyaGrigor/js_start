/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


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

const arrayWithSomeCopiedElements = [2,5,3,8,5,6,7,9]
const arrayOfUniqueElements = [];

function findUniqueElements(array) {
    const arrayOfUniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        if (includesElement(arrayOfUniqueElements, array[i]) === false) {
            arrayOfUniqueElements.push(array[i]);
        }
    }
    return arrayOfUniqueElements;
}
const newArray = findUniqueElements(arrayWithSomeCopiedElements);
console.log(newArray);