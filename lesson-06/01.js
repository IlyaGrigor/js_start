/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const groceriesList = ["beans", "pork", "wholegrain bread", "milk", "eggs"];

// const filter = (array, callback) => {
//     const shoppingList = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i)) {
//             shoppingList.push(array[i]);
//         }
//     }
//     return shoppingList;
// }
//
// const callbackHowManyLetters = (element, index) => {
//    return index >=2 && element.length > 4;
// }
//
//
// const result = filter(groceriesList, callbackHowManyLetters);
// console.log(result);

function filterGroc (array) {
    return array.filter((item, index) => item.length === 4 );
}

const result = filterGroc(groceriesList);
console.log(result);