import React from 'react';
import { Zap, Eye, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-20 lg:pb-32">
      {/* Декоративный фон */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Используем flex-col для мобильных и lg:flex-row для десктопа */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          
          {/* ЛЕВАЯ КОЛОНКА (На мобильных тут будет все, кроме фото) */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col text-center lg:text-left">
            
            {/* 1. Плашка (Всегда сверху) */}
            <div className="order-1 inline-block mb-6 lg:self-start">
              <span className="bg-accent px-5 py-2 rounded-full text-sm md:text-base font-bold text-black shadow-sm uppercase tracking-wide">
                Эпиляция в Мурино всего от 420 руб*
              </span>
            </div>

            {/* 2. Заголовок (Оффер) */}
            <h1 className="order-2 text-[1.85rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden md:block" />
              <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* 3. БЛОК С ФОТО ДЛЯ МОБИЛЬНЫХ (order-3 на мобилках, скрыт на десктопе) */}
            <div className="order-3 lg:hidden w-full mb-10">
               <div className="relative w-full aspect-[4/5] max-w-[350px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] flex items-center justify-center overflow-hidden">
                  <p className="text-gray-400 font-medium italic text-sm">Место для фото</p>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-[20px] shadow-xl border border-accent/10">
                      <p className="text-base font-bold text-gray-900 leading-none mb-1">Кристина Горячева</p>
                      <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">
                        ВЛАДЕЛИЦА СТУДИИ ЛАЗЕРНОЙ ЭПИЛЯЦИИ
                      </p>
                  </div>
               </div>
            </div>

            {/* 4. Описание (Подзаголовок) */}
            <div className="order-4">
              <p className="text-base md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Видимый результат уже после 1 сеанса. <br className="md:hidden" />
                Гарантируем безболезненную процедуру — или вернем деньги.
              </p>
            </div>

            {/* 5. Кнопки */}
            <div className="order-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <button className="w-full sm:w-64 bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-5 px-8 rounded-full transition-all shadow-lg active:scale-95">
                Записаться
              </button>
              <button className="w-full sm:w-64 bg-white border-2 border-gray-100 hover:border-accent text-gray-800 text-lg font-bold py-5 px-8 rounded-full transition-all active:scale-95">
                Выбрать услугу
              </button>
            </div>

            {/* 6. Преимущества */}
            <div className="order-6 flex flex-col gap-5 text-left max-w-md mx-auto lg:mx-0">
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

          {/* ПРАВАЯ КОЛОНКА (Только для десктопа) */}
          <div className="hidden lg:flex lg:w-2/5 justify-end">
             <div className="relative w-full aspect-[4/5] max-w-[420px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 font-medium italic">Место для фото</p>
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
