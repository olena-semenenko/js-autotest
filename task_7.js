// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Alex'],
  },
]; //Not found

const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Not found

const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
]; // Jhon

//SOLUTION!!!

function findNarcissist(array) {
  for (const friend of array) {
    if (!friend.know.length) {
      const commonFriend = array.filter(user => array.indexOf(user) !== array.indexOf(friend));

      if (commonFriend.every(follower => follower.know.includes(friend.name))) {
        return friend.name;
      } else continue;
    }
  }
  return `No Narcissist!`;
}

//TESTS
console.log(findNarcissist(people1));
console.log(findNarcissist(people2));
console.log(findNarcissist(people3));
