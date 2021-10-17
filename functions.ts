export type funcMutate = (num: number) => number;

export function arrayMutate(numbers: number[], mutate: funcMutate): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 1000, 3], (mutateOut) => mutateOut * 100));

const mutate = arrayMutate([1, 1000, 3], (mutateOut) => mutateOut * 100);

console.log(mutate[0] + mutate[2]);
