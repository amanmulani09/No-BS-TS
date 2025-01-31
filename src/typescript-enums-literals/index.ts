export default function index() {
  enum loadingStage {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
  }

  const isLoading = (state: loadingStage): boolean =>
    state === loadingStage.loading;

  //   console.log(isLoading(loadingStage.beforeLoad));

  //literal types;

  const rollDice = (dice: 1 | 2 | 3 ):number {
    let pip = 0;

    for(let i=0; i<dice; i++){
        pip =  Math.floor(Math.random() * 5) + 1;
    }
    return pip
  }

//   console.log(rollDice(2))

function sendEvent(event:'addToKart',product:{id:string,product:string}):void;
function sendEvent(event:'addToCheckout',product:{id:string,price:number}):void;
function sendEvent(event:string,product:unknown):void{
    console.log(`${event} ${JSON.stringify(product)}`)
};

sendEvent("addToKart",{id:'1',product:'beer'})
}
