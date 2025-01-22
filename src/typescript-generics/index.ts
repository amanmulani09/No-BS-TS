export default function index() {
  const useState = <T>(
    initialValue: T
  ): [getter: () => T, setter: (str: T) => void] => {
    let value = initialValue;

    const getter = () => value;

    const setter = (str: T) => (value = str);

    return [getter, setter];
  };

  const [st1Getter, st1Setter] = useState<string>("str1");
  const [st2Getter, st2Setter] = useState<number>(1);

  // console.log(st1Getter());
  // st1Setter("str2");
  // console.log(st1Getter());

  // console.log(st2Getter());
  // st2Setter(2);
  // console.log(st2Getter());
}
