// BEGIN (write your solution here)

const groupBy = (stud, key) => {
  if(stud === []){
    return {};
  }
  const cb = (acc, user) => {
    if (!_.has(acc, user[key])) {
      acc[user[key]] = [];
    }
    acc[user[key]].push(user);
    return acc;
  };
  return stud.reduce(cb, {});
};

export default groupBy;

// END

/* Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству. Функция принимает аргументами массив объектов и название свойству для группировки. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.

import groupBy from './groupBy.js';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// } */
