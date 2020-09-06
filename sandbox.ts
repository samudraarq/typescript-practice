// arrays
let names = ["mario", "luigi", "ken"];

names.push("ryu");
// names.push(20);
// names[0] = 20;

let numbers = [20, 30, 50, 60];

numbers.push(80);
// numbers.push("mario");
// numbers[1] = "mario";

let mixed = ["mario", 2, "luigi", 4, 6];

mixed.push("ken");
mixed.push(10);
// mixed.push(true);
mixed[1] = "ken";

// objects
let ninja = {
  name: "Mario",
  belt: "black",
  age: 30,
};

ninja.name = "Luigi";
ninja.age = 25;
// ninja.belt = 25;
// ninja.skills = ["fighting", "sneaking"];

ninja = {
  name: "Yoshi",
  belt: "orange",
  age: 25,
  //   skills: [],
};
