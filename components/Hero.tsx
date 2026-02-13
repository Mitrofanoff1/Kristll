import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Zap, Wallet, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ И ПРЕИМУЩЕСТВА */}
          <div className="w-full lg:w-3/5 z-10 text-center lg:text-left">
            {/* Плашка с ценой */}
            <div className="inline-block mb-6">
              <span className="bg-accent px-4 py-2 rounded-lg text-lg md:text-2xl font-bold text-black shadow-sm">
                Всего от 420 руб.*
              </span>
            </div>

            {/* Заголовок */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#1a1a1a]">
              Избавьтесь от нежелательных волос с помощью <span className="text-black/70">лазерной эпиляции</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Видимый результат уже после <span className="font-bold text-black">1 сеанса</span>. 
              Гарантируем безболезненную процедуру — или <span className="underline decoration-accent decoration-4">Вернем деньги</span>.
            </p>

            {/* Кнопка и гарантия */}
            <div className="flex flex-col items-center lg:items-start gap-3 mb-12">
              <button className="bg-black hover:bg-zinc-800 text-white text-xl md:text-2xl font-bold py-5 px-10 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-tight">
                Получить скидку -30%
              </button>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider italic">
                *гарантия гладкой кожи или вернем деньги
              </p>
            </div>

            {/* Список преимуществ (Плашки) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-600">Гладкая кожа без порезов, раздражений и вросших волос</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-600">Эпиляция диодным лазером с излучателем <span className="font-bold text-black">Coherent (USA)</span></p>
              </div>
              <div className="flex items-start gap-3">
                <Wallet className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-600">Экономия после курса до 600 000 ₽ за 10 лет</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-600">Массаж глаз от <span className="font-bold text-black">Yamaguchi</span> во время сеанса</p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: МАСТЕР */}
          <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative flex justify-center items-end">
            {/* Фон для мастера (абстрактный круг) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[450px] md:h-[450px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Фото мастера */}
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]">
              <Image
                src="/master.png" // Путь к твоему фото (положи фото в папку public)
                alt="Мастер лазерной эпиляции"
                fill
                className="object-contain object-bottom"
                priority
              />
              
              {/* Бейдж на фото (как на скрине) */}
              <div className="absolute bottom-10 right-0 md:right-10 bg-black/60 backdrop-blur-md text-white p-3 rounded-xl border border-white/20">
                <p className="text-sm font-bold uppercase">Елена Яковлева</p>
                <p className="text-[10px] text-gray-300">Ведущий мастер студии</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
