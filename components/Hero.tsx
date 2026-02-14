import React from 'react';
import { Sparkles, Zap, Eye, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-20 lg:pb-32">
      {/* Мягкий фон */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:gap-16">
          
          {/* ТЕКСТОВЫЙ БЛОК */}
          <div className="w-full lg:w-3/5 z-10">
            
            {/* Розовая плашка (возвращаем как в 1-м варианте) */}
            <div className="inline-block mb-6">
              <span className="bg-accent px-5 py-2 rounded-full text-sm md:text-base font-bold text-black shadow-sm uppercase tracking-wide">
                Эпиляция в Мурино всего от 420 руб*
              </span>
            </div>

            {/* Заголовок (оптимизирован размер для мобильных) */}
            <h1 className="text-[1.85rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden md:block" />
              <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* Подзаголовок (Новый текст) */}
            <p className="text-base md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Видимый результат уже после 1 сеанса. <br className="md:hidden" />
              Гарантируем безболезненную процедуру — или вернем деньги.
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <button className="w-full sm:w-64 bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-5 px-8 rounded-full transition-all shadow-lg active:scale-95">
                Записаться
              </button>
              <button className="w-full sm:w-64 bg-white border-2 border-gray-100 hover:border-accent text-gray-800 text-lg font-bold py-5 px-8 rounded-full transition-all active:scale-95">
                Выбрать услугу
              </button>
            </div>

            {/* Список преимуществ (Текст одинаковый, без курсива) */}
            <div className="flex flex-col gap-5 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-700 leading-snug pt-1">
                  Гладкая кожа без раздражений, порезов и вросших волос
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Eye className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-700 leading-snug pt-1">
                  Массаж для глаз от <span className="font-bold text-black">Yamaguchi</span> во время сеанса
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Zap className="text-accent w-5 h-5 flex-shrink-0" />
                </div>
                <p className="text-[15px] md:text-base text-gray-700 leading-snug pt-1">
                  Эпиляция диодным лазером с гибридным излучателем <span className="font-bold text-black">Coherent (USA)</span>
                </p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (МЕСТО ПОД ФОТО) */}
          <div className="w-full lg:w-2/5 mt-16 lg:mt-0">
             <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 font-medium italic">Место для фото</p>
                
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
