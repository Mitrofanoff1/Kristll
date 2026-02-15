import Hero from "@/components/Hero";
import Block3 from "@/components/Block3";
import Price from "@/components/Price";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews"; // 1. Импортируем
import LaserInfo from "@/components/LaserInfo";
import Preparation from "@/components/Preparation";
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Block3 />
      <Price />
      <Results />
      <Reviews /> {/* 2. Ставим сюда */}
      <LaserInfo />
      <Preparation />
      
      {/* <Block2 /> */}
    </main>
  );
}
