interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Sam",
  age: 27,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log("you spend ", amount);
    return amount;
  },
};

console.log(me);
me.speak("Hello world");

const greetPerson = (person: IsPerson): void => {
  console.log("Hi there", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("Mario", "work on the mario website", 250);
const invTwo = new Invoice("Luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
