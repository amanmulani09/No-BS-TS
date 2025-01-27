export default function index() {
  //utility types;

  interface IMyUser {
    name: string;
    id: string;
    email?: string;
  }

  //1. partial it takes the type and make everything in it as optional
  type IMyUserOptions = Partial<IMyUser>;

  // 2. required

  const merge = (user: IMyUser, overrides: IMyUserOptions): IMyUser => {
    return {
      ...user,
      ...overrides,
    };
  };

  console.log(
    merge({ name: "avi", id: "420", email: "avimail" }, { email: "ravimail" })
  );
}
