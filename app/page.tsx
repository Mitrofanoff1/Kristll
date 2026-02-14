import Hero from "@/components/Hero";
import Block2 from "@/components/Block2"; // Добавь эту строку

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Block2 /> {/* И эту строку */}
    </main>
  );
}
