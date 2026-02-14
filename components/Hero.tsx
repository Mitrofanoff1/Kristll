import React from 'react';
import { Zap, Eye, CheckCircle2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-10 lg:pt-20 lg:pb-32">
      {/* ДЕКОРАТИВНЫЙ ФОН */}
      <Sparkles className="absolute top-10 right-10 text-accent/40 w-8 h-8 lg:w-12 lg:h-12 -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          
          {/* КОНТЕНТНЫЙ БЛОК */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col text-center lg:text-left">
            
            {/* 1. Верхняя подпись */}
            <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Студия лазерной эпиляции в Мурино
            </p>

            {/* 2. Розовая плашка с ценой */}
            <div className="inline-block self-center lg:self-start mb-4">
              <span className="bg-accent px-4 py-1.5 rounded-full text-xs md:text-sm font-bold text-black shadow-sm uppercase tracking-wide">
                Эпиляция всего от 420 руб*
              </span>
            </div>

            {/* 3. Главный оффер */}
            <h1 className="text-[1.8rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от волос <br className="hidden sm:block"/> с помощью <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* 4. Текст с гарантией */}
            <p className="text-sm md:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Видимый результат уже после 1 сеанса. <br className="hidden md:block" />
              Гарантируем безболезненную процедуру — или вернем деньги.
            </p>

            {/* 5. КНОПКИ (Сразу под текстом для быстрого доступа) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button className="w-full sm:w-60 bg-accent hover:bg-[#ffbaba] text-black text-base font-extrabold py-4 rounded-full transition-all shadow-md shadow-accent/20 active:scale-95 uppercase tracking-wider">
                Записаться
              </button>
              <button className="w-full sm:w-60 bg-white border-2 border-gray-100 text-gray-800 text-base font-extrabold py-4 rounded-full transition-all active:scale-95 uppercase tracking-wider">
                Выбрать услугу
              </button>
            </div>

            {/* 6. ФОТО ДЛЯ МОБИЛЬНЫХ (Компактное, после кнопок) */}
            <div className="lg:hidden w-full mb-8 relative">
                <div className="relative w-full aspect-[16/9] max-w-[340px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] flex items-center justify-center overflow-hidden">
                    <p className="text-gray-400 font-medium italic text-[10px]">Фото Кристины</p>
                    
                    {/* Бейдж Кристины */}
                    <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-accent/10">
                        <p className="text-sm font-bold text-gray-900 leading-none">Кристина Горячева</p>
                        <p className="text-[8px] text-gray-400 font-bold uppercase mt-1 tracking-wider">
                          ВЛАДЕЛИЦА KRISTLL STUDIO
                        </p>
                    </div>
                </div>
            </div>

            {/* 7. ПРЕИМУЩЕСТВА (Микро-буллиты в ряд) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0 border-t border-gray-50 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-semibold uppercase tracking-tight">Без раздражений</p>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-semibold uppercase tracking-tight">Массаж Yamaguchi</p>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-semibold uppercase tracking-tight">Лазер Coherent USA</p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ФОТО ДЛЯ КОМПЬЮТЕРОВ */}
          <div className="hidden lg:flex lg:w-2/5 justify-end">
             <div className="relative w-full aspect-[4/5] max-w-[420px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl">
                <p className="text-gray-400 font-medium italic">Место для фото Кристины</p>
                
                {/* Бейдж для десктопа */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[30px] shadow-2xl border border-accent/10">
                    <p className="text-xl font-bold text-gray-900 mb-1 leading-none">Кристина Горячева</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">
                      ВЛАДЕЛИЦА KRISTLL STUDIO
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
