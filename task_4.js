// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

const workers = [
  {
    name: 'Alex',
    salary: 3500,
    month: 12,
  },
  {
    name: 'Dima',
    salary: 2500,
    month: 9,
  },
  {
    name: 'Oleg',
    salary: 1500,
    month: 36,
  },
];

//SOLUTIONS!!!
function salaryEmployer(array, employer) {
  return array
    .filter(worker => worker.name === employer)
    .reduce((total, worker) => {
      total = worker.salary * worker.month;
      return total;
    }, 0);
}
function totalSalary(array) {
  return array.reduce((totalSalary, employer) => {
    totalSalary += employer.salary * employer.month;
    return totalSalary;
  }, 0);
}

// TESTS!!!
console.log(salaryEmployer(workers, 'Alex'));
console.log(salaryEmployer(workers, 'Oleg'));
console.log(totalSalary(workers));
