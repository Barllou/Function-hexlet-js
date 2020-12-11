const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const freeEmailDomains = ['gmail.com', 'yandex.ru', 'hotmail.com'];

const getFreeDomainsCount = (emails) => {
  const mp = emails.map((el) => {
    const [, domen] = el.split('@');
    return domen;
  });
  const fl = mp.filter((el) => freeEmailDomains.includes(el));
  const result = fl.reduce((acc, el2) => {
    acc[el2] === undefined ? acc[el2] = 1 : acc[el2] += 1;
    return acc;
  }, {});
  return result;
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.

Примеры
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// }; */
