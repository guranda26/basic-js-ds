const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
//THE FIRST TASK
function getUserNames() {
  let youngest = user[0];
  for (const index of user) {
    if (index.age < youngest.age) {
      youngest = index;
    }
  }
  return youngest.name;
}
console.log(getUserNames());

//THE SECOND TASK
function userFunc() {
  const newUser = user.map((obj) => {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  });
  return newUser;
}

console.log(userFunc());

//THE THIRD TASK
function rollingDice() {
  let num1;
  let num2;

  do {
    num1 = Math.floor(Math.random() * 6) + 1;
    num2 = Math.floor(Math.random() * 6) + 1;
    console.log(num1, num2);

    if (num1 === 3 && num2 === 3) {
      console.log(`Score: ${(num1, num2)}. Match`);
      break;
    } else if (num2 === 3) {
      console.log(`Score: ${num2}. Second user won`);
      break;
    } else if (num1 === 3) {
      console.log(`Score: ${num1}. First user won`);
      break;
    }
  } while (true);
}
rollingDice();
