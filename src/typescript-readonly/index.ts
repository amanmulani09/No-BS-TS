export default function index() {
  interface Cat {
    name: string;
    breed: string;
  }

  type ReadonlyCat = Readonly<Cat>;

  const makeCat = (name: string, breed: string): Readonly<Cat> => {
    return {
      name,
      breed,
    };
  };
  const usul = makeCat("Usul", "Tabby");
  //   usul.breed = "aj";

  const makeCords = (
    x: number,
    y: number,
    z: number
  ): readonly [number, number, number] => {
    return [x, y, z];
  };

  const c1 = makeCords(10, 20, 30);
  //   c1[1] = 100;

  const reallyConst = [1, 2, 3] as const;
  reallyConst[0] = 10;
}
