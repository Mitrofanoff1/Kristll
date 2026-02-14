import React from 'react';
import { Sparkles, Zap, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-20 lg:pb-32">
      {/* Мягкие декоративные круги на фоне */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start lg:gap-12">
          
          {/* КОНТЕНТНАЯ ЧАСТЬ */}
          <div className="w-full lg:w-3/5 z-10">
            
            {/* Прайс-бейдж */}
            <div className="inline-block mb-6">
              <span className="bg-accent/40 px-6 py-2 rounded-full text-sm md:text-base font-semibold text-black tracking-wide uppercase">
                Всего от 420 руб.*
              </span>
            </div>

            {/* Главный заголовок */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden md:block" />
              <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* Подзаголовок с гарантией */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Гарантируем безболезненную процедуру — или вернем деньги.
            </p>

            {/* Кнопки в стиле скриншота 4 */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="w-full sm:w-auto bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-accent/30 active:scale-95">
                Записаться
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-accent text-gray-800 text-lg font-bold py-4 px-10 rounded-full transition-all active:scale-95">
                Выбрать услугу
              </button>
            </div>

            {/* Список из 3-х преимуществ */}
            <div className="space-y-5 max-w-3xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Sparkles className="text-accent w-6 h-6 flex-shrink-0 mt-0.5" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Видимый результат уже <span className="font-bold text-black">после первого сеанса</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Eye className="text-accent w-6 h-6 flex-shrink-0 mt-0.5" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Используем массаж для глаз от <span className="font-bold text-black">Yamaguchi</span> во время процедуры
                </p>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <Zap className="text-accent w-6 h-6 flex-shrink-0 mt-0.5" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Современный диодный лазер с гибридным излучателем <span className="font-bold text-black">Coherent (USA)</span>
                </p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: МЕСТО ПОД ФОТО И БЕЙДЖ */}
          <div className="w-full lg:w-2/5 mt-16 lg:mt-0 flex flex-col items-center">
             {/* Главный слот под фото */}
             <div className="relative w-full aspect-[4/5] max-w-[420px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                    <p className="text-gray-400 font-medium italic">Место для фото Кристины</p>
                </div>
                
                {/* Бейдж с именем владелицы */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-accent/20">
                    <p className="text-lg font-bold text-gray-900 leading-none mb-1">Кристина Горячева</p>
                    <p className="text-[11px] text-gray-500 uppercase font-semibold tracking-wider leading-tight">
                      Владелица студии лазерной эпиляции <br/> Kristll Studio
                    </p>
                </div>
             </div>

             {/* Малый слот (например, для интерьера) */}
             <div className="mt-8 w-full max-w-[320px] aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center">
                <p className="text-xs text-gray-400 font-medium">Второй ракурс / Кабинет</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
