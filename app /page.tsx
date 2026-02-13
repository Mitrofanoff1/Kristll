import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Выгружаем только Hero компонент */}
      <Hero />
      
      {/* 
         Если позже понадобятся другие части сайта, 
         просто добавишь их сюда ниже 
      */}
    </main>
  );
}
