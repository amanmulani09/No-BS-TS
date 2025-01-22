export default function () {
  //difference between unknown and any keyword;
  // as keyword
  interface coordinate {
    x: number;
    y: number;
  }

  function calculateCoordinate(arg1: coordinate): coordinate;
  function calculateCoordinate(arg1: string): coordinate;
  function calculateCoordinate(arg1: number, arg2: number): coordinate;
  function calculateCoordinate(arg1: unknown, arg2?: unknown): coordinate {
    let coord: coordinate = {
      x: 0,
      y: 0,
    };

    if (typeof arg1 === "string") {
      (arg1 as string).split(",").forEach((str) => {
        let [key, value] = str.split(":");
        coord[key as "x" | "y"] = parseInt(value);
      });
    } else if (typeof arg1 === "object") {
      coord = {
        ...(arg1 as coordinate),
      };
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }
    return coord;
  }

  console.log(calculateCoordinate(10, 20));
  console.log(calculateCoordinate({ x: 52, y: 35 }));
  console.log(calculateCoordinate("x:12,y:22"));
}
