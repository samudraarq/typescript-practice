const me = {
    name: "Sam",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("you spend ", amount);
        return amount;
    },
};
console.log(me);
me.speak("Hello world");
const greetPerson = (person) => {
    console.log("Hi there", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("Mario", "work on the mario website", 250);
const invTwo = new Invoice("Luigi", "work on the luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
