import Hero from "@/components/Hero";
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Главный экран */}
      <Hero />
      
      {/* 
         Здесь мы будем добавлять новые блоки (Block3, Block4 и т.д.) 
      */}

      {/* Пока скрываем Block2, чтобы поставить его позже в конец */}
      {/* <Block2 /> */}
    </main>
  );
}
