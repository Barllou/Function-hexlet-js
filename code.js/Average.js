// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)

const average = (...number) => {
  if (number.length === 0) {
    return null;
  }
  return _.sum(number) / number.length;
};

export default average;

// END

/* Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.

Примеры
average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
Подсказки
Используйте функцию sum из библиотеки lodash. */
