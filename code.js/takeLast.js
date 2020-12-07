const run = (text) => {
  // BEGIN (write your solution here)
  
  const takeLast = (text, n) => {
    if (text.length < n) {
      return null;
    }
    const result = text.substr(-n).split('');
    return result.reverse().join('');
  };
  
  // END
  return takeLast(text, 4);
};

export default run;

/* Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

Примеры
run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx */
