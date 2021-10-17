export interface Coordinate {
  y: number;
  x: number;
}

export function parsecoordinate(objstr: string): Coordinate;
export function parsecoordinate(obj: Coordinate): Coordinate;
export function parsecoordinate(y: number, x: number): Coordinate;
export function parsecoordinate(args: unknown, args1?: unknown): Coordinate {
  let coords: Coordinate = {
    y: 0,
    x: 0,
  };
  if (typeof args === "object") {
    coords = {
      ...(args as Coordinate),
    };
  } else if (typeof args === "string") {
    args.split(",").map((data) => {
      const [key, val] = data.split(":");
      coords[key as "y" | "x"] = parseInt(val);
    });
  } else {
    coords = {
      y: args as number,
      x: args1 as number,
    };
  }
  return {
    ...coords,
  };
}

console.log(parsecoordinate(40, 90));
console.log(parsecoordinate({ y: 90, x: 180 }));
console.log(parsecoordinate("y:99,x:188"));
