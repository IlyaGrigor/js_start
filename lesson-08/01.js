/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// const inputPhrase = "hello world from javascript";
//
// function capitalizeWords(string) {
//     const testString = string.split(" ");
//     for (let i = 0; i < testString.length; i++) {
//         testString[i] = testString[i][0].toUpperCase() + testString[i].slice(1);
//     }
//     return testString.join(" ");
// }
//
// console.log(capitalizeWords(inputPhrase));



const inputPhrase = "hello world from javascript";

function capitalizeWords(string) {
    let result = "";
    let toUpperCase = true;
    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        if (toUpperCase === true && character !== " ") {
            result = result + character.toUpperCase();
            toUpperCase = false;
        } else if (character === " ") {
            result += character;
            toUpperCase = true;
        } else {
            result += character;
        }
    }
    return result;
}

console.log(capitalizeWords(inputPhrase));





