let first = "kenedy";
let last = "nopriansyah";
let bool: any = true;

bool += first;

const options = {
  first: "kenedy",
  last: "nopriansyah",
  bool: true,
};

const group = options.first + options.last;

console.log(options, group);

let data = "Hello";

const func = (val: string) => {
  data += "Worlds";
  return val + data;
};

console.log(func("Kenedy Nopriansyah"), data);

const array = Array<any>();

array.push("hello", "wolrds", "cat", "fish", 1);

console.log(array, array[0], array[1], array[2]);
