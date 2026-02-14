import React from 'react';
import { Sparkles, Zap, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-20 lg:pb-32">
      {/* Декоративные мягкие круги на фоне для объема */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:gap-16">
          
          {/* ТЕКСТОВЫЙ БЛОК */}
          <div className="w-full lg:w-3/5 z-10">
            
            {/* Главный заголовок */}
            <h1 className="text-[2.6rem] leading-[1.05] md:text-5xl lg:text-6xl font-black mb-6 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden md:block" />
              <span className="text-accent drop-shadow-sm">лазерной эпиляции</span>
            </h1>

            {/* Гарантия (Подзаголовок) */}
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Гарантируем безболезненную процедуру — или вернем деньги.
            </p>

            {/* Кнопки действия */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <button className="w-full sm:w-64 bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-5 px-8 rounded-full transition-all shadow-lg shadow-accent/20 active:scale-95">
                Записаться
              </button>
              <button className="w-full sm:w-64 bg-white border-2 border-gray-100 hover:border-accent text-gray-800 text-lg font-bold py-5 px-8 rounded-full transition-all active:scale-95">
                Выбрать услугу
              </button>
            </div>

            {/* Список преимуществ */}
            <div className="inline-flex flex-col gap-5 text-left max-w-md lg:max-w-none">
              <div className="flex items-start gap-4 group">
                <div className="bg-accent/20 p-2 rounded-xl">
                  <Sparkles className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-600 leading-snug pt-1">
                  Видимый результат уже <span className="font-bold text-black italic">после первого сеанса</span>
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-accent/20 p-2 rounded-xl">
                  <Eye className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-600 leading-snug pt-1">
                  Используем массаж для глаз от <span className="font-bold text-black">Yamaguchi</span> во время процедуры
                </p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-accent/20 p-2 rounded-xl">
                  <Zap className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-600 leading-snug pt-1">
                  Современный диодный лазер с гибридным излучателем <span className="font-bold text-black uppercase tracking-tight text-sm">Coherent (USA)</span>
                </p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (ФОТО) */}
          <div className="w-full lg:w-2/5 mt-16 lg:mt-0">
             <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 font-medium italic">Место для фото Кристины</p>
                
                {/* Бейдж Кристины */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-[30px] shadow-2xl border border-accent/10">
                    <p className="text-xl font-bold text-gray-900 mb-1 leading-none">Кристина Горячева</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">
                      ВЛАДЕЛИЦА СТУДИИ ЛАЗЕРНОЙ ЭПИЛЯЦИИ
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
