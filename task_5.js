// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
  {
    name: 'Oleksii',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
    age: 26,
  },
];
//SOLUTION!!!
function finReader(array, bookName) {
  return array
    .filter(friend => friend.books.includes(bookName))
    .map(friend => friend.name)
    .join(', ');
}
function totalAges(array) {
  return array.reduce((total, friend) => {
    if (friend.age) {
      total += friend.age;
    }
    return total;
  }, 0);
}

// //TEST
// console.log(finReader(friends, 'Harry Potter'));
// console.log(finReader(friends, 'War and peace'));
// console.log(totalAges(friends));
