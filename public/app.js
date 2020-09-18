import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Mario", "work on the mario website", 250);
// docTwo = new Payment("Luigi", "work on the luigi website", 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice("Mario", "work on the mario website", 250);
// const invTwo = new Invoice("Luigi", "work on the luigi website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "Sam",
//   age: 27,
//   speak(text: string) {
//     console.log(text);
//   },
//   spend(amount: number) {
//     console.log("you spend ", amount);
//     return amount;
//   },
// };
// console.log(me);
// me.speak("Hello world");
// const greetPerson = (person: IsPerson): void => {
//   console.log("Hi there", person.name);
// };
// greetPerson(me);
