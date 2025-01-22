export default function index() {
    const useState<T> = (initialValue: T): [getter:()=> T, setter:(str:T)=> void] => {
        let value = initialValue;
    
        const getter = () => value;
    
        const setter = (str: T) => (value = str);
    
        return [getter, setter];
      };
}

const [st1Getter,st2Getter] = useState<string>('hello')
