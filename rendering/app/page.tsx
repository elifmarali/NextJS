import Image from "next/image";
import Hakkimizda from "./hakkimizda/page"
export default function Home() {
  console.log("Home");
  
  return (
    <div>Home Page
      <Hakkimizda/>
    </div>
  );
}
