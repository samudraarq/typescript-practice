let greet: Function;

greet = () => {
  console.log("Hello");
};

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
