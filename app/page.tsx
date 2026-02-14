import Hero from "@/components/Hero";
import Block3 from "@/components/Block3"; // Импортируем новый блок
import Block2 from "@/components/Block2"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* Теперь Block3 идет сразу вторым */}
      <Block3 />

      {/* Block2 пока скрыт или будет в самом конце */}
      {/* <Block2 /> */}
    </main>
  );
}
