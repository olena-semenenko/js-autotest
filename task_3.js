// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// SOLUTION!!!

const students = [
  {
    name: `Lika`,
    language: `html`,
  },
  {
    name: `Anton`,
    language: `css`,
  },
  {
    name: `Andriy`,
    language: `js`,
  },
  {
    name: `Vova`,
    language: `html`,
  },
  {
    name: `Alina`,
    language: `css`,
  },
  {
    name: `Egor`,
    language: `js`,
  },
  {
    name: `Aleksandr`,
    langunage: `html`,
  },
  {
    name: `Taras`,
    language: `css`,
  },
  {
    name: `Ivan`,
    language: `js`,
  },
  {
    name: `Make`,
    language: `html`,
  },
];

function findStudents(array, language) {
  return array.filter(student => language === student.language).map(student => student.name);
}

// TEST
console.log(findStudents(students, 'html'));
