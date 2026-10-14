import Image from "next/image";
import Card from "@/components/Card"
import DynamicCard from "@/components/DynamicCard";

export default function Home() {
  return (
    <div>
    <h1>Hello world</h1>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <DynamicCard title={"Card 1"} description={"This is first card"}/>
    <DynamicCard title={"Card 2"} description={"This is Second card"}/>


    </div>
  );
}
