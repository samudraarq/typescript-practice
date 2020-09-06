//explicit types
let characters: string;
let age: number;
let isLoggedIn: boolean;

// age = "Luigi";
age = 30;

//arrays
let ninjas: string[];
// let ninjas: string[] = [];

// ninjas = [10, 23];
ninjas = ["Yoshi", "Mario"];

//union types
let mixed: (string | number)[] = [];

mixed.push("hello");
mixed.push(20);
// mixed.push(false);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = {
  name: "Yoshi",
  age: 30,
};

let ninjaTwo: {
  name: string;
  age: number;
};

ninjaTwo = {
  name: "Mario",
  age: 30,
};
