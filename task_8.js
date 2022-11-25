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

  for (const unique of array) {
    if (
      !array
        .flatMap(item => item.id)
        .filter((item, index, array) => array.indexOf(item) !== index) == []
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
