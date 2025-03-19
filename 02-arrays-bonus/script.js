const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// stampare indice della i  e il nome che contiene 
for(let i=0; i < teachers.length; i++){
  console.log( i, teachers[i] ); 
}

// 1. Inverti l'ordine degli insegnanti nell'array teachers 
// console.log(teachers.reverse());
for(let i=6; i >= 0; i-- ); {
  console.log( i, teachers[i] );

}





// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers;

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [teachers[1],teachers[3],teachers[6]];
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
const isFabioPresent = teachers.includes("Fabio");

// e salva il risultato nella variabile isFabioPresent
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
console.log(teachers.join());