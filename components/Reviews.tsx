"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Reviews = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Ссылка на Яндекс из твоего запроса
  const yandexLink = "https://yandex.ru/maps/org/kristll_studio/61436315462/reviews/?ll=30.428688%2C60.055232&tab=reviews&z=16.54";
  const twoGisLink = "#"; // Вставь сюда ссылку на 2ГИС позже

  // Заглушки для 8 скриншотов отзывов
  const screenshots = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    label: `Отзыв клиента ${i + 1}`
  }));

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК БЛОКА */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
            Отзывы
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* ЛЕВАЯ ЧАСТЬ: СЛАЙДЕР СКРИНШОТОВ (Занимает 2/3 ширины на ПК) */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] bg-gray-50 border border-gray-100 aspect-[4/5] md:aspect-auto md:h-[600px] flex items-center justify-center shadow-inner">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                >
                  {screenshots.map((s) => (
                    <div key={s.id} className="w-full h-full flex-shrink-0 flex items-center justify-center p-4">
                       {/* Сюда ты вставишь <Image /> со скриншотом */}
                       <div className="text-center">
                          <ImageIcon className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{s.label}</p>
                          <p className="text-[10px] text-gray-300 mt-2 italic">Рекомендуемый размер: 1000x1250px</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопки навигации слайдера */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-accent hover:text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-accent hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Индикаторы (точки) */}
              <div className="flex justify-center gap-2 mt-6">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === currentIdx ? 'w-8 bg-accent' : 'w-2 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: КАРТОЧКИ СЕРВИСОВ (Яндекс и 2ГИС) */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 flex flex-col gap-6 md:gap-8">
            
            {/* КАРТОЧКА ЯНДЕКС */}
            <div className="bg-accent/10 p-8 rounded-[30px] md:rounded-[40px] border border-accent/20 flex flex-col items-center text-center group hover:bg-accent/20 transition-colors">
              <div className="mb-4 bg-white p-4 rounded-2xl shadow-sm">
                <span className="text-2xl md:text-3xl font-black text-[#f33]">Я</span>
                <span className="text-lg md:text-xl font-bold ml-1">ндекс</span>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffb400] text-[#ffb400]" />
                ))}
              </div>
              <p className="text-accent font-bold text-sm md:text-base mb-6">Средний рейтинг 5.0</p>
              <a 
                href={yandexLink} 
                target="_blank" 
                className="flex items-center gap-2 text-black font-black uppercase text-xs md:text-sm tracking-wider border-b-2 border-black pb-1 hover:text-accent hover:border-accent transition-all"
              >
                Посмотреть отзывы
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* КАРТОЧКА 2ГИС */}
            <div className="bg-accent/10 p-8 rounded-[30px] md:rounded-[40px] border border-accent/20 flex flex-col items-center text-center group hover:bg-accent/20 transition-colors">
              <div className="mb-4 bg-white p-4 rounded-2xl shadow-sm flex items-center">
                 <div className="w-8 h-8 bg-[#6ab031] rounded-lg mr-2 flex items-center justify-center text-white font-bold">2</div>
                 <span className="text-lg md:text-xl font-bold">ГИС</span>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#6ab031] text-[#6ab031]" />
                ))}
              </div>
              <p className="text-accent font-bold text-sm md:text-base mb-6">Средний рейтинг 5.0</p>
              <a 
                href={twoGisLink} 
                target="_blank" 
                className="flex items-center gap-2 text-black font-black uppercase text-xs md:text-sm tracking-wider border-b-2 border-black pb-1 hover:text-accent hover:border-accent transition-all"
              >
                Посмотреть отзывы
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
