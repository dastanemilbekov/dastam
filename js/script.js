"use strict";
//  alert('Hello');

//  const result = confirm("Are you here?");
//  console.log(result);
//  const answer = +prompt("Вам есть 18?", "18")
//  console.log(answer + 5);
// const answers = [];

// // answers[0] = prompt("КАК ваше имя", '');
// // answers[3] = prompt("КАК ваше фамилия",  '');
// // answers[2] = prompt("Сколько вам лет?",  '');

// // document.write(answers);

// // document.write(answers);
// console.log(typeof(null));
// const category = 'toys';
// console.log(`https:someurl/${category}`);

// const user = 'Ivan';

// alert(`Привет ${user}`);
// console.log('arr' + " - object");
// console.log(4 + "- object");
// console.log(4 + 5);

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 + 2 != '8');

const isChecked = true,
      isClose = true,
      isOpen = true;

console.log(!isChecked || isClose && !isOpen);
let het = {
      hello : 50,
      heu : "2-"
};
console.log(het(hello));