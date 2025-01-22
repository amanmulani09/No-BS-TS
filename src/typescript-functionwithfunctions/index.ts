export default function () {
  const printToFile = function (
    id: number,
    callback: (item: number) => void
  ): void {
    console.log(id);

    callback(10);
  };

  //   printToFile(1, () => console.log("works"));

  const arrayMutate = function (
    array: number[],
    mutate: (number: number) => number
  ): number[] {
    return array.map(mutate);
  };

  //   console.log(arrayMutate([1, 2, 3, 4, 5], (i: number) => i * 2));

  //   functions as type

  type mutationFn = (item: number) => number;

  //funttion return type;

  type addReturnFn = (val2: number) => number;

  const adder = (val: number): addReturnFn => {
    return function (val2: number) {
      return val + val2;
    };
  };

  const addTen = adder(10);
  console.log(addTen(20));
}
