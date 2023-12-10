//1. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას
//(წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

const stringFunc = (string) => {
  return string.toUpperCase();
};

//აქ არვიცი ყველა სიტყვა უნდა ყოფილიყო დიდი ასოთი თუ ყოველი სიტყვის პირველი ასო, ამიტომ ორივეზე გავაკეთე

const capitalize = (string) => {
  let word = string.split(" ");
  let capitalized = [];
  for (elem of word) {
    elem = elem[0].toUpperCase().concat(elem.slice(1));
    capitalized.push(elem);
  }

  let joined = capitalized.join(" ");
  return joined;
};

const sentence = "hello there";
const capitalized = stringFunc(sentence);
console.log(capitalized);
console.log(stringFunc("Hello world"));

console.log(capitalize("this is us"));

//2. დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace,
//valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith"
//მნიშვნელობით და დააბრუნებს ახალ stringს
//● არ გამოიყენო string.replace() ფუნქცია

const replaceArg = (string, valueToReplace, valueToReplaceWith) => {
  const index = string.indexOf(valueToReplace);
  if (index !== -1) {
    let newString = string.slice(0, index) + valueToReplaceWith;
    return newString;
  } else {
    return string;
  }
};

//3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და
//დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით

console.log(replaceArg("age: 23", 23, 24));

function sortObj(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

let users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

const sortedArr2 = sortObj(users);
console.log(sortedArr2);
