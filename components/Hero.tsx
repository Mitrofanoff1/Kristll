import React from 'react';
import { Sparkles, Zap, Eye, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-20 lg:pb-32">
      {/* Декоративные элементы фона (как на скриншоте 4) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start lg:gap-12">
          
          {/* ЛЕВАЯ ЧАСТЬ: КОНТЕНТ */}
          <div className="w-full lg:w-3/5 z-10">
            
            {/* Верхняя плашка (Badge) */}
            <div className="inline-block mb-6">
              <span className="bg-accent/40 px-6 py-2 rounded-full text-sm md:text-base font-semibold text-black tracking-wide uppercase">
                Всего от 420 руб.*
              </span>
            </div>

            {/* Заголовок */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-[#1a1a1a] uppercase tracking-tighter">
              Избавьтесь от нежелательных волос с помощью <br className="hidden md:block" />
              <span className="text-accent">лазерной эпиляции</span>
            </h1>

            {/* Подзаголовок (Новый текст) */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Гладкая кожа без раздражений, порезов и вросших волос.
            </p>

            {/* Кнопки (Стиль как на скриншоте 4) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button className="w-full sm:w-auto bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-accent/30 active:scale-95">
                Записаться
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-accent text-gray-800 text-lg font-bold py-4 px-10 rounded-full transition-all active:scale-95">
                Выбрать услугу
              </button>
            </div>

            {/* Список преимуществ (Новые пункты) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3 group">
                <ShieldCheck className="text-accent w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Развеем ваши страхи за одну процедуру лазерной эпиляции
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Sparkles className="text-accent w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Видимый результат уже после первого сеанса
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Eye className="text-accent w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Используем массаж для глаз от <span className="font-bold text-black">Yamaguchi</span> во время сеанса
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Zap className="text-accent w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-[15px] md:text-base text-gray-600 leading-tight">
                  Современный диодный лазер с гибридным излучателем <span className="font-bold text-black">Coherent (USA)</span>
                </p>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: МЕСТО ПОД ФОТО (PLACEHOLDERS) */}
          <div className="w-full lg:w-2/5 mt-16 lg:mt-0 flex flex-col items-center">
             {/* Главное фото мастера (Заглушка) */}
             <div className="relative w-full aspect-[4/5] max-w-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                    <p className="text-gray-400 font-medium">Место для фото мастера или процесса</p>
                    <p className="text-xs text-gray-300 mt-2">(Рекомендуемый размер: 800x1000px, прозрачный фон)</p>
                </div>
                
                {/* Бейдж имени (Заглушка) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-accent/20">
                    <p className="text-sm font-bold text-gray-900 uppercase text-center">Имя Мастера</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Ведущий специалист</p>
                </div>
             </div>

             {/* Дополнительная маленькая картинка (как на скриншоте 4 снизу) */}
             <div className="mt-8 w-full max-w-[300px] aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center">
                <p className="text-xs text-gray-400">Доп. фото (напр. кабинет)</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
