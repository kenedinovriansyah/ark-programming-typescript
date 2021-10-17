export type Coordinate = [y: number, x: number, z: number];

export function arrCoordinate(initial: Coordinate): Coordinate {
  return initial;
}

console.log(arrCoordinate([10, 20, 30]));

export function arr2Coordinate(
  initial: Coordinate,
  initial1: Coordinate
): Coordinate {
  return [
    initial[0] * initial1[0],
    initial[1] * initial1[1],
    initial[2] * initial1[2],
  ];
}

console.log(arr2Coordinate([10, 20, 30], [23, 42, 48]));

export function arr3coordinate(initial: string): Coordinate {
  let coords: Coordinate = [1, 2, 3];
  initial.split(",").filter((x) => coords.push(parseInt(x)));
  return coords;
}

console.log(arr3coordinate("20,30,40"));
