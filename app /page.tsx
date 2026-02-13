// Импортируем компоненты из папки components
// (Символ @ настроен в tsconfig.json как путь к корню проекта)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Используем импортированные компоненты */}
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-10">
        <Hero />
        
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Добро пожаловать!</h2>
          <p className="text-lg">
            Это пример страницы, где используется твой акцентный цвет: 
            <span className="bg-accent px-2 py-1 rounded ml-1 font-medium">
              #FFCBCB
            </span>
          </p>
          
          <button className="mt-8 bg-accent hover:opacity-80 transition-opacity text-black font-bold py-3 px-8 rounded-full">
            Нажми на меня
          </button>
        </section>
      </div>

      <Footer />
    </main>
  );
}
