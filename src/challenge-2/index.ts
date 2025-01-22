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
}
