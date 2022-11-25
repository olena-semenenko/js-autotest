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
class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items) {
    this.items = items;
  }

  addNote(note) {
    const { text, priority } = note;
    for (const item of this.items) {
      if (item.text === text) {
        return `ERROR! This ${note} has already included`;
      }
    }

    this.items.push(note);
  }

  removeNote(text) {
    for (const item of this.items) {
      if (item.text === text) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    }
    return `ERROR! This ${text} not find!`;
  }

  updatePriority(text, newPriority) {
    for (const item of this.items) {
      if (item.text === text) {
        item.priority = newPriority;
      }
    }
    return `ERROR! This ${text} not find!`;
  }
}

//TESTS
const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя друга замітка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя перша замітка');
console.log(myNotes.items);

myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
console.log(myNotes.items);
