const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = [];

for (let index = 0; index < teachers.length; index++) {
  const element = teachers[index];
  reversedTeachers.unshift(element);
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for (let index = 0; index < teachers.length; index++) {
  const element = teachers[index];
  if (element.length >= 5 ) {
    longNames.push(element);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

for (let index = 0; index < teachers.length; index++) {
  const element = teachers[index];
  if(element === 'Ed'){
    teachers.splice(index, 1);
  }
}

console.log(teachers);