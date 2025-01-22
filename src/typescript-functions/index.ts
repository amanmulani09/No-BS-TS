export default function index() {
  //union
  const formatString = (str1: string, str2: string | number) => {
    return `${str1} ${str2}`;
  };
  //   console.log(formatString("aman", 20));

  //default type
  const addString = (str1: string, str2: string = "hello") => {
    return `${str1} ${str2}`;
  };
  //   console.log(addString("aman"));

  //promise functions type
  const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`data received from ${url}`);
  //   console.log(fetchData("hey").then((data) => console.log(data)));

  //rest parameters

  const introduce = function (salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
  };
  //   console.log(introduce("welcome", "aman", "nilesh", "avi"));

  //misconception about typescript

  //   when types are enforced with typescrip??

  /*

typescript only enforce types at compile type not at the run time 
*/
}
