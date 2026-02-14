import Hero from "@/components/Hero";
import Block3 from "@/components/Block3";
import Price from "@/components/Price";
import Results from "@/components/Results";
import LaserInfo from "@/components/LaserInfo"; // Добавь этот импорт
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Block3 />
      <Price />
      <Results />
      <LaserInfo /> {/* Информация о лазере */}
      
      {/* <Block2 /> */}
    </main>
  );
}
