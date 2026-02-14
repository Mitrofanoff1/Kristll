import React from 'react';
import { Zap, Eye, CheckCircle2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-10 lg:pt-20 lg:pb-32">
      {/* Декоративные элементы как в референсе */}
      <Sparkles className="absolute top-10 right-10 text-accent/40 w-8 h-8 lg:w-12 lg:h-12 -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          
          {/* КОНТЕНТНЫЙ БЛОК */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col text-center lg:text-left">
            
            {/* 1. Маленькая надпись сверху */}
            <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Студия лазерной эпиляции в Мурино
            </p>

            {/* 2. Заголовок (уменьшили для компактности на мобильных) */}
            <h1 className="text-[1.75rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от волос <br/> с помощью <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* 3. Плашка с гарантией (сделали как в референсе — компактно) */}
            <div className="inline-block self-center lg:self-start mb-6">
               <div className="bg-accent/30 px-4 py-2 rounded-xl border border-accent/20">
                  <p className="text-sm md:text-lg font-bold text-gray-800">
                    Гарантия результата или 100% возврат
                  </p>
               </div>
            </div>

            {/* 4. КНОПКИ (Теперь они сразу под оффером на мобильных) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button className="w-full sm:w-60 bg-accent hover:bg-[#ffbaba] text-black text-base font-extrabold py-4 rounded-full transition-all shadow-md active:scale-95 uppercase tracking-wider">
                Записаться
              </button>
              <button className="w-full sm:w-60 bg-white border-2 border-gray-100 text-gray-800 text-base font-extrabold py-4 rounded-full transition-all active:scale-95 uppercase tracking-wider">
                Выбрать услугу
              </button>
            </div>

            {/* 5. ФОТО МАСТЕРА (На мобилках — компактно под кнопками, на десктопе скрыто тут) */}
            <div className="lg:hidden w-full mb-8 relative">
                <div className="relative w-full aspect-[16/9] max-w-[340px] mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] flex items-center justify-center overflow-hidden">
                    <p className="text-gray-400 font-medium italic text-[10px]">Фото Кристины</p>
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-accent/10">
                        <p className="text-sm font-bold text-gray-900 leading-none">Кристина Горячева</p>
                        <p className="text-[8px] text-gray-400 font-bold uppercase mt-1">Владелица студии</p>
                    </div>
                </div>
            </div>

            {/* 6. ПРЕИМУЩЕСТВА (Мелким шрифтом снизу) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-medium">Без раздражений</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-medium">Массаж Yamaguchi</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-4 h-4 flex-shrink-0" />
                <p className="text-[12px] text-gray-500 font-medium">Лазер Coherent USA</p>
              </div>
            </div>
          </div>

          {/* ДЕКСТОПНОЕ ФОТО (Справа) */}
          <div className="hidden lg:flex lg:w-2/5 justify-end">
             <div className="relative w-full aspect-[4/5] max-w-[420px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 font-medium italic">Фото Кристины</p>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-[30px] shadow-2xl border border-accent/10">
                    <p className="text-xl font-bold text-gray-900 mb-1">Кристина Горячева</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ВЛАДЕЛИЦА KRISTLL STUDIO</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
