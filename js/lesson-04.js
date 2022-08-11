// console.log('hi');
// # Модуль 2. Занятие 4. Функции

// ## Example 1 - Индекс массы тела

// Напиши функцию `calcBMI(weight, height)` которая рассчитывает и возвращает
// индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на
// квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть
// заданы в виде `24.7` или `24,7`, то есть в качестве разделителя дробной части
// может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// ```js
// const calcBMI = function (weight, height){
//     const formattedWeigh = weight.replace(',', '.')
//     const formattedHeight = height.replace(',', '.')

//     const result = formattedWeigh / (formattedHeight * formattedHeight)
//     console.log(result.toFixed(1))
// }

// calcBMI('123', '23')
// console.log();
// console.log(bmi); // 28.8
// преобразование в валидные данные
// получение ИМТ
// Округлить

// ```

// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// ```js

// const min = function(){
//   let minValue = arguments[0];

//   for (let element of arguments) {
//     console.log(element)
//     // if (minValue > element) {
//     //   minValue = element;
//     // }
//   }
//   return minValue
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ```

// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// // ```js
// function isNan(value){
//     return value === value
// }

// function getRectArea(dimensions) {
//     const arrDimensions = dimensions.split(' ')

//     const width = Number(arrDimensions[0])
//     const height = Number(arrDimensions[1])

//     if (isNaN(height) || isNaN(width) ){
//         return "NE VALIDNO"
//     }
//     return width * height
// }

// console.log(getRectArea('8d 11'));
// ```

// ## Example 4 - Логирование элементов

// Напиши функцию `logItems(items)`, которая получает массив и использует цикл
// `for`, который для каждого элемента массива будет выводить в консоль сообщение в
// формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна
// начинаться с `1`.

// Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0`
// будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

// ```js
// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 5 - Логирование контактов

// Напиши функцию `printContactsInfo(names, phones)` которая выводит в консоль имя
// и телефонный номер пользователя. В параметры `names` и `phones` будут переданы
// строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и
// телефонов в строках указывают на соответствие. Количество имен и телефонов
// гарантированно одинаковое.

// ```js
// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
// ```

// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

// ```js
// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

// ```js
// function calAverage() {
//   let total = 0;
//   let count = arguments.length;

//   for (let elem of arguments) {
//     total += elem;
//   }

//   return total / count;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Найти сумму
// Найти кол-во
// Разделить сумму на ко-во

// ```

// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое

// ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = function (course) {
  courses.push(course);
};

addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'
const updateCourse = function (oldElement, newElement) {
  const index = courses.indexOf(oldElement);
  if (index === -1){
    console.log('Курс с таким имененем не найден')
  } else {
    courses.splice(index, 1, newElement);
  }
};


// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// Найти индекс елемента
// Удаление

// removeCourse('React');
console.log(courses); // 

// removeCourse('Vue'); // 'Курс с таким имененем не найден'

updateCourse('Express', 'NestJS', 'NestJS2', 'NestJS3');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```