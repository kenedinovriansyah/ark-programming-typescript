export function optionals(
  args: string,
  kwargs: number,
  context: unknown,
  extra: any,
  fields?: string
) {
  return `${args} , ${kwargs} , ${context} , ${extra} , ${fields}`;
}

console.log(optionals("Kenedy Nopriansyah", 20, "Jakarta", "Pusat"));
console.log(optionals("Cikini", 200, "Jalan", "Kwitang", "Senen"));

export interface Optinal {
  id: 0;
  user: {
    email: string;
    password: string;
  };
}

export function options_(obj: Optinal): Optinal {
  return obj;
}

console.log(
  options_({
    id: 0,
    user: {
      email: "kenedinovriansyah@gmail.com",
      password: "freepasword",
    },
  })
);
