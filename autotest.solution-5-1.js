// / Example 4 - Нотатки
// // Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// SOLUTION!!!
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     const { text, priority } = note;
//     for (const item of this.items) {
//       if (item.text === text) {
//         return `ERROR! This ${note} has already included`;
//       }
//     }

//     this.items.push(note);
//   }

//   removeNote(text) {
//     for (const item of this.items) {
//       if (item.text === text) {
//         this.items.splice(this.items.indexOf(item), 1);
//       }
//     }
//     return `ERROR! This ${text} not find!`;
//   }

//   updatePriority(text, newPriority) {
//     for (const item of this.items) {
//       if (item.text === text) {
//         item.priority = newPriority;
//       }
//     }
//     return `ERROR! This ${text} not find!`;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 47,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],
//   getFaculty(faculty) {
//     if (Object.keys(this).includes(faculty)) {
//       let studentList = [];
//       for (const student of this[faculty]) {
//         studentList.push(student.name);
//       }
//       return studentList;
//     }

//     return `ERROR! ${faculty} is not found!`;
//   },

//   facultyTotalScore(faculty) {
//     if (Object.keys(this).includes(faculty)) {
//       const facultyList = this[faculty];
//       //   console.log(this[faculty]);
//       return facultyList.reduce((total, student) => {
//         total += student.points;
//         return total;
//       }, 0);
//     }
//     return `ERROR! ${faculty} is not found!`;
//   },
//   winnerHogvarts() {
//     const totalScoreGriffindor = this.griffindor.reduce((total, faculty) => {
//       total += faculty.points;
//       return total;
//     }, 0);
//     const totalScoreSliserin = this.sliserin.reduce((total, faculty) => {
//       total += faculty.points;
//       return total;
//     }, 0);
//     return totalScoreGriffindor > totalScoreSliserin ? `Winner Griffindor!` : `Winner Sliserin!`;
//   },
// };

// TEST!!!

// console.log(hogvarts.getFaculty('griffindor'));
// console.log(hogvarts.facultyTotalScore('sliserin'));
// console.log(hogvarts.winnerHogvarts());

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// SOLUTION!!!

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// function findStudents(array, language) {
//   return array.filter(student => language === student.language).map(student => student.name);
// }

// TEST
// console.log(findStudents(students, 'html'));
// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

// //SOLUTIONS!!!
// function salaryEmployer(array, employer) {
//   return array
//     .filter(worker => worker.name === employer)
//     .reduce((total, worker) => {
//       total = worker.salary * worker.month;
//       return total;
//     }, 0);
// }
// function totalSalary(array) {
//   return array.reduce((totalSalary, employer) => {
//     totalSalary += employer.salary * employer.month;
//     return totalSalary;
//   }, 0);
// }
//TESTS!!!
// console.log(salaryEmployer(workers, 'Alex'));
// console.log(salaryEmployer(workers, 'Oleg'));
// console.log(totalSalary(workers));

// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];
// //SOLUTION!!!
// function finReader(array, bookName) {
//   return array
//     .filter(friend => friend.books.includes(bookName))
//     .map(friend => friend.name)
//     .join(', ');
// }
// //TEST
// console.log(finReader(friends, 'Harry Potter'));
// console.log(finReader(friends, 'War and peace'));

// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//   privat: 1000,
//   mono: 1500,

//   getBalance() {
//     const bank = prompt(`Enter your bank!`);
//     if (Object.keys(this).includes(bank)) {
//       return this[bank];
//     }
//     return `You don't have card in ${bank}`;
//   },

//   addCard() {
//     const newCard = prompt(`Enter new card!`);
//     if (Object.keys(this).includes(newCard)) {
//       return `You already have ${newCard}`;
//     } else if (newCard) {
//       this[newCard] = 0;
//     } else return `ERROR! Input the bank's name`;
//   },

//   withdraw() {
//     const bankName = prompt(`Enter your bank`);
//     if (bankName) {
//       if (Object.keys(this).includes(bankName)) {
//         const sum = prompt(`Enter sum`);
//         if (sum > 0 && sum < this[bankName]) {
//           this[bankName] -= sum;
//         } else return `The ${bankName} does not have enough funds`;
//       } else return `You don't have card in ${bankName}`;
//     } else return `ERROR! Input the bank's name`;
//   },
//   deposit() {
//     const bankName = prompt(`Enter your bank`);
//     if (bankName) {
//       if (Object.keys(this).includes(bankName)) {
//         const sum = prompt(`Enter sum`);
//         if (sum > 0) {
//           this[bankName] += sum;
//         } else return `ERROR! Enter a positive number`;
//       } else return `You don't have card in ${bankName}`;
//     } else return `ERROR! Input the bank's name`;
//   },
// };

//TESTS!!!
// console.log(bankSystem.getBalance());
// console.log(bankSystem.addCard());
// console.log(bankSystem.withdraw());
// console.log(bankSystem.deposit());
// console.log(bankSystem);

// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Alex'],
//   },
// ]; //Not found

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Jhon

// //SOLUTION!!!

// function findNarcissist(array) {
//   for (const friend of array) {
//     if (!friend.know.length) {
//       const commonFriend = array.filter(user => array.indexOf(user) !== array.indexOf(friend));

//       if (commonFriend.every(follower => follower.know.includes(friend.name))) {
//         return friend.name;
//       } else continue;
//     }
//   }
//   return `No Narcissist!`;
// }

// console.log(findNarcissist(people1));
// console.log(findNarcissist(people2));
// console.log(findNarcissist(people3));
// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: 'sku1',
    qty: 1,
  },
  {
    id: 'sku2',
    qty: 2,
  },
  {
    id: 'sku3',
    qty: 3,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 8,
  },
  {
    id: 'sku2',
    qty: 19,
  },
  {
    id: 'sku4',
    qty: 1,
  },
];

//SOLUTION!!!

function filterBasket(array) {
  array.sort((first, second) => first.id.localeCompare(second.id));
  for (let i = 0, j = 1; i <= array.length - 1, j < array.length; i += 1, j += 1) {
    if (array[i].id === array[j].id) {
      array[i].qty += array[j].qty;
      array.splice(j, 1);
    }
  }
  for (const unique of array) {
    if (
      !array
        .flatMap(item => item.id)
        .filter((item, index, array) => array.indexOf(item) === index) == []
    ) {
      for (let i = 0, j = 1; i <= array.length - 1, j < array.length; i += 1, j += 1) {
        if (array[i].id === array[j].id) {
          array[i].qty += array[j].qty;
          array.splice(j, 1);
        }
      }
    }
  }

  return array;
}

console.log(filterBasket(products));
