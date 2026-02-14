"use client"; // Обязательно для анимаций и слайдера

import React, { useState, useEffect } from 'react';
import { Coffee, Music, Eye, MoveVertical, Sparkles } from 'lucide-react';

const Block3 = () => {
  const [currentImg, setCurrentImg] = useState(0);

  // Заглушки для фото (комфорт, кофе, очки, кушетка и т.д.)
  const photos = [
    { id: 1, label: "Интерьер студии" },
    { id: 2, label: "Зона кофе" },
    { id: 3, label: "Массаж Yamaguchi" },
    { id: 4, label: "Процесс (кушетка)" }
  ];

  // Авто-слайдер для мобильной версии
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const benefits = [
    {
      icon: <Coffee className="text-accent w-6 h-6" />,
      title: "Кофе и согревающий чай",
      text: "После процедуры угостим вас выбранным напитком из натуральных зёрен."
    },
    {
      icon: <Music className="text-accent w-6 h-6" />,
      title: "Ваша музыка",
      text: "Возможность включить свой любимый плейлист во время процедуры."
    },
    {
      icon: <Eye className="text-accent w-6 h-6" />,
      title: "Массаж глаз Yamaguchi",
      text: "Вместо обычных очков предлагаем расслабляющий массаж во время сеанса."
    },
    {
      icon: <MoveVertical className="text-accent w-6 h-6" />,
      title: "Умная кушетка",
      text: "Электропривод позволяет настроить положение индивидуально под ваш комфорт."
    },
    {
      icon: <Sparkles className="text-accent w-6 h-6" />,
      title: "Тщательный подход",
      text: "Каждая зона прорабатывается детально, результат заметен уже после первых сеансов."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="max-w-4xl mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
            Kristll studio — <br/>
            <span className="text-accent">атмосферное пространство,</span> <br/>
            где хочется задержаться
          </h2>
          <p className="text-gray-500 md:text-xl font-medium max-w-2xl italic">
            Комфортный интерьер и безупречный сервис в каждой детали.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ЛЕВАЯ ЧАСТЬ: ФОТО (ДЛЯ МОБИЛЬНЫХ СЛАЙДЕР, ДЛЯ ПК КОЛЛАЖ) */}
          <div className="w-full lg:w-1/2">
            
            {/* МОБИЛЬНЫЙ СЛАЙДЕР */}
            <div className="lg:hidden relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center bg-gray-100 ${
                    index === currentImg ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-center px-10">
                    {photo.label}
                  </p>
                  {/* Здесь потом будет <Image src={...} fill /> */}
                </div>
              ))}
              {/* Точки слайдера */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImg ? 'w-8 bg-accent' : 'w-2 bg-white/50'}`}></div>
                ))}
              </div>
            </div>

            {/* ДЕСТОПНЫЙ КОЛЛАЖ (Инстаграм-сетка) */}
            <div className="hidden lg:grid grid-cols-2 gap-4 h-[700px]">
                <div className="bg-gray-100 rounded-[40px] flex items-center justify-center border-2 border-dashed border-gray-200 hover:border-accent transition-colors">
                    <span className="text-gray-400 font-bold uppercase text-xs">Интерьер</span>
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="bg-gray-100 rounded-[40px] flex items-center justify-center border-2 border-dashed border-gray-200">
                        <span className="text-gray-400 font-bold uppercase text-xs">Кофе / Напитки</span>
                    </div>
                    <div className="bg-accent/10 rounded-[40px] flex items-center justify-center border-2 border-accent/20">
                        <span className="text-accent font-bold uppercase text-xs">Yamaguchi</span>
                    </div>
                </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ПРЕИМУЩЕСТВА */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-lg md:text-xl font-black uppercase mb-8 tracking-widest text-gray-400">
              Сервис и удобство
            </h3>
            
            <div className="space-y-8 md:space-y-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{b.title}</h4>
                    <p className="text-gray-500 leading-snug">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ФИНАЛЬНЫЙ ТЕКСТ */}
            <div className="mt-16 p-8 bg-white rounded-[30px] shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                <p className="text-gray-800 font-bold md:text-lg leading-relaxed">
                  Обеспечим индивидуальный комфорт и конфиденциальность. Мы делаем все возможное, чтобы поход в нашу студию проходил, <span className="text-accent italic">как отдых.</span>
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Block3;
