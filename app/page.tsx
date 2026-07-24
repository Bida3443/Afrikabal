import Hero from "@/components/home/hero";
import Nav from "./nav";
import Sectionone from "@/components/home/sectionone";
import Sectiontwo from "@/components/home/sectiontwo";



export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Sectionone/>
      <Sectiontwo/>
    </div>
  );
}
