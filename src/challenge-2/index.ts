export default function index() {
  const myForEach = <T>(array: T[], callback: (value: T) => void): void => {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  };

  let myForEachArray = [1, 2, 3, 4, 5, 6, 7];
  let myForchArrayDoublePrint = <T>(item: T) => {
    if (typeof item === "number") console.log(item * 2);
  };

  let myForEachArray2 = ["amar", "akbar", "anthony"];
  let greetPeople = <T>(name: T) => {
    console.log("hello " + name);
  };

  //   myForEach(myForEachArray, myForchArrayDoublePrint);
  //   myForEach(myForEachArray2, greetPeople);

  const myFilter = <T>(array: T[], callback: (value: T) => boolean): T[] => {
    let Result: T[] = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        Result.push(array[i]);
      }
    }
    return Result;
  };

  //   console.log(myFilter([1, 2, 3, 4, 5], (value) => value % 2 === 0));

  const myMap = <T, K>(array: T[], callback: (value: T) => K): K[] => {
    let Result: K[] = [];
    for (let i = 0; i < array.length; i++) {
      let val = callback(array[i]);
      Result.push(val);
    }
    return Result;
  };

  console.log(myMap([1, 2, 3, 4, 5], (value) => value.toString().slice(0, 1)));
}
