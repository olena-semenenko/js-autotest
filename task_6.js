// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

const bankSystem = {
  privat: 1000,
  mono: 1500,

  getBalance() {
    const bank = prompt(`Enter your bank!`);
    if (Object.keys(this).includes(bank)) {
      return this[bank];
    }
    return `You don't have card in ${bank}`;
  },

  addCard() {
    const newCard = prompt(`Enter new card!`);
    if (Object.keys(this).includes(newCard)) {
      return `You already have ${newCard}`;
    } else if (newCard) {
      this[newCard] = 0;
    } else return `ERROR! Input the bank's name`;
  },

  withdraw() {
    const bankName = prompt(`Enter your bank`);
    if (bankName) {
      if (Object.keys(this).includes(bankName)) {
        const sum = prompt(`Enter sum`);
        if (sum > 0 && sum < this[bankName]) {
          this[bankName] -= sum;
        } else return `The ${bankName} does not have enough funds`;
      } else return `You don't have card in ${bankName}`;
    } else return `ERROR! Input the bank's name`;
  },
  deposit() {
    const bankName = prompt(`Enter your bank`);
    if (bankName) {
      if (Object.keys(this).includes(bankName)) {
        const sum = prompt(`Enter sum`);
        if (sum > 0) {
          this[bankName] += sum;
        } else return `ERROR! Enter a positive number`;
      } else return `You don't have card in ${bankName}`;
    } else return `ERROR! Input the bank's name`;
  },
};

// TESTS!!!
console.log(bankSystem.getBalance());
console.log(bankSystem.addCard());
console.log(bankSystem.withdraw());
console.log(bankSystem.deposit());
console.log(bankSystem);
