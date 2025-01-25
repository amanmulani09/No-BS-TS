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

  //   console.log(plug(dogs, "name"));
  //   console.log(plug(dogs, "age"));

  interface IBaseEvent {
    time: string;
    user: string;
  }

  interface IBaseEventMap {
    addToCart: IBaseEvent & { productId: string; quantity: number };
    checkout: IBaseEvent;
  }

  const sendEvent = <EventType extends keyof IBaseEventMap>(
    event: EventType,
    eventData: IBaseEventMap[EventType]
  ): void => {
    console.log([event, eventData]);
  };

  //   sendEvent("addToCart", {
  //     productId: "1",
  //     quantity: 10,
  //     user: "1",
  //     time: "1",
  //   });

  sendEvent("checkout", {
    time: "11-12-2033",
    user: "random",
  });
}
