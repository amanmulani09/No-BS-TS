export default function index() {
  const plug = <DataType, KeyType extends keyof DataType>(
    data: DataType[],
    key: KeyType
  ): DataType[KeyType][] => {
    const result = data.map((item) => item[key]);
    return result;
  };

  const dogs = [
    {
      name: "aa",
      age: 12,
    },
    {
      name: "bb",
      age: 13,
    },
  ];

  console.log(plug(dogs, "name"));
  console.log(plug(dogs, "age"));
}
