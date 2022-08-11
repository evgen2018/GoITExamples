// # Модуль 3. Занятие 1. Объекты

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy'

// const hobbyName = 'hobby'
// user[hobbyName] = 'skydiving'

// user.premium = false

// const keys = Object.keys(user)
// const values = Object.values(user)

// console.log(keys);
// console.log(values);

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// console.log(keys);

// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const arrSalaries = Object.values(salaries)

// let total = 0
// for (const salaryValue of arrSalaries) {
//     total += salaryValue
// }
// console.log(total);

// const arr = [1,2,3,4]

// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (allStones, stoneName) {
//   let finedStone = null;
//   for (const stone of allStones) {
//     if (stoneName === stone.name) {
//       finedStone = stone.price * stone.quantity;
//     }
//   }

//   return finedStone ? finedStone : 'Не найден';
// };

// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  lastIdTransaction: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
        amount,
        type,
        id: this.lastIdTransaction++,
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT)

    this.transactions.push(transaction)

    this.balance += amount
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  // создать тарнзакцию
  // поместить транзакцию в историю
  // обновить баланс
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW)

    this.transactions.push(transaction)

    this.balance -= amount
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
// ```

account.deposit(100)
account.deposit(300)
account.deposit(100)

account.withdraw(200)
account.withdraw(50)
account.withdraw(50)
account.withdraw(50)
console.log(account.getBalance());


// console.log(account.createTransaction(100, 'deposit'))

// account.deposit(1000).withdraw(30).deposit(100).withdraw(100)
// const user = {age: null}
// user.age = 12
// console.log(user)