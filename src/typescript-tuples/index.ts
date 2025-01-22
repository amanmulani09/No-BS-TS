export default function index() {
  //tuple is a basically typed array;

  type threeDCords = [x: number, y: number, z: number];

  const getThreeDCords = (c1: threeDCords, c2: threeDCords): threeDCords => {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
  };

  //   console.log(getThreeDCords([1, 2, 3], [5, 6, 7]));

  type useStringStateType = [
    value: () => string,
    setter: (str: string) => void
  ];

  const useStringState = (initialValue: string): useStringStateType => {
    let value = initialValue;

    const getter = () => value;

    const setter = (str: string) => (value = str);

    return [getter, setter];
  };

  const [name, setName] = useStringState("hello");

  console.log(name());
  setName("another name");
  console.log(name());
}
