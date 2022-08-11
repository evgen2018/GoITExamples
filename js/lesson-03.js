// # Модуль 2. Занятие 3. Массивы

// ## Example 1 - Базовые операции с массивом

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggae» в начало массива.

// ```js
// const genres = ['Jazz', 'Blues'];
// const newGenres = genres.concat(['Pок-н-ролл'])
// newGenres.unshift('Country', 'Reggae')
// console.log(newGenres);

// ```

// ## Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// которых хранятся в переменной `values` в виде строки. Значения гарантированно
// разделены пробелом.

// ```js
// const values = '8 11';
// const arr = values.split(' ')
// const height = arr[0]
// const width = Number(arr[1])
// console.log( typeof height);
// console.log(height * width);
// values.

// ```

// ## Example 3 - Перебор массива

// Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// Нумерация элементов должна начинаться с `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(`${index + 1} : ${element}`)
// }
// ```

// ## Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// соответствие. Количество имен и телефонов гарантированно одинаковое.

// ```js
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',')
// const phonesArr = phones.split(',')

// for (let index = 0; index < phonesArr.length; index++) {
//     const tel = phonesArr[index];
//     const name = namesArr[index];
//     console.log(`${name}: ${tel}`);
// }

// ```

// ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// ```js
// const string = 'Welcome to the future';
// const arr = string.split(' ').slice(1, -1).join(' ')

// push
// unshift

// pop
// shift

// console.log(arr);

// ```

// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

// ```js
// const string = 'Welcome to the future';
//1 to array
//2
// ```
// const arr = string.split('')
// let message = ''

// for (let index = arr.length -1; index >= 0; index--) {
//     const element = arr[index];
//     message += element
// }

// console.log(message);

// ## Example 7 - Сортировка массива с циклом

// Напиши скрипт сортировки массива чисел по возрастанию. Не использовать метод sort.

// ```js
// const langs = [1, 0, 4, 3, 6, 100, 23]; // тут может быть любой массив чисел

// результат должен быть console.log(langs) -> [0, 1, 3, 4, 6, 23, 100]

// ```

// ## Example 8 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
// ```






