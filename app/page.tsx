import Hero from "@/components/Hero";
import Block3 from "@/components/Block3";
import Price from "@/components/Price"; // Импортируем прайс
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Block3 />
      <Price /> {/* Ставим прайс третьим блоком */}
      
      {/* <Block2 /> */}
    </main>
  );
}
