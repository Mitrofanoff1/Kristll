import Hero from "@/components/Hero";
import Block3 from "@/components/Block3";
import Price from "@/components/Price";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import LaserInfo from "@/components/LaserInfo";
import Preparation from "@/components/Preparation";
import FAQ from "@/components/FAQ"; // 1. Импортируем
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Block3 />
      <Price />
      <Results />
      <Reviews />
      <LaserInfo />
      <Preparation />
      <FAQ /> {/* 2. Вставляем FAQ сюда */}
      
      {/* <Block2 /> */}
    </main>
  );
}
