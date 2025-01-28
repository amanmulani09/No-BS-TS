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
