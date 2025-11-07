/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
const stringForOutput = 'str'
function doubleEachCharacter(string) {
    const stringArray = string.split('');
    const doubleStringArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i] + stringArray[i];
        doubleStringArray.push(stringArray[i]);
    }
    return doubleStringArray.join('') ;
}

const output = doubleEachCharacter(stringForOutput);
console.log(output);