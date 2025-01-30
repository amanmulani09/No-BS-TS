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
  usul.breed = "aj";
}
