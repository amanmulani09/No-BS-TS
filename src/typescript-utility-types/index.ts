export default function index() {
  //utility types;

  interface IMyUser {
    name: string;
    id: string;
    email?: string;
  }

  //1. Required ::  it takes the type and make everything in it as optional
  type IMyUserOptions = Partial<IMyUser>;

  // 2. Required :: it takes a interface and makes all the field required and remove optionals;
  type IMyUserRequired = Required<IMyUser>;

  // 3. Pick :: it takes an interface and some keys of it and generat a new type of them;
  // hint:: use | or to add multiple keys
  type IMyUserWithNameAndID = Pick<IMyUser, "id" | "name">;

  //4. Record : it takes two params <ID, data>; this can be used when returning an object
  const mapById = (
    users: IMyUserWithNameAndID[]
  ): Record<string, IMyUserWithNameAndID> => {
    return users.reduce((acc, val: IMyUserWithNameAndID) => {
      return {
        ...acc,
        [val.id]: val,
      };
    }, {});
  };

  console.log(
    mapById([
      {
        id: "foo",
        name: "mr.foo",
      },
      {
        id: "bar",
        name: "mrs.bar",
      },
    ])
  );

  //5. Omit:: this works exact opposite of Pick, it created a type from existing type and omit the passed keys

  type IMyUserWithoutID = Omit<IMyUser, "id">;

  const merge = (user: IMyUser, overrides: IMyUserRequired): IMyUser => {
    return {
      ...user,
      ...overrides,
    };
  };

  //   console.log(
  //     merge({ name: "avi", id: "420", email: "avimail" }, { email: "ravimail" })
  //   );
}
