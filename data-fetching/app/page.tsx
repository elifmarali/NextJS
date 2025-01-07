export default async function Home() {
  async function getData1() {
    return await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
  }

  async function getData2() {
    return await fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => res.json())
  }

  async function getData3() {
    return await fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => res.json())
  }
 
  /*   const data1 = await getData1();
    const data2 = await getData2();
    const data3 = await getData3(); */
  const res1 = getData1();
  const res2 = getData2();
  const res3 = getData3();

  const [data1, data2, data3]: [IData, IData, IData] = await Promise.all([res1, res2, res3]);

  console.log("data 1 : ", data1, " data 2 : ", data2, " data3 : ", data3);


  return (
    <div>
      {data1?.title}
    </div>
  );
}

interface IData {
  userId: number,
  id:number,
  title:string,
  body:string
}