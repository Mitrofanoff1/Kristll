"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Каждая карточка — это пара ДО и ПОСЛЕ
  const slides = [
    { id: 1, area: "Подмышечные впадины", result: "Результат после 3 сеансов" },
    { id: 2, area: "Голени", result: "Результат после 5 сеансов" },
    { id: 3, area: "Глубокое бикини", result: "Результат после 4 сеансов" },
    { id: 4, area: "Руки полностью", result: "Результат после 2 сеансов" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Автоматическое переключение
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК И ТЕКСТ */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
            Результаты наших клиентов
          </h2>
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium px-4">
            Показываем реальные фотографии, чтобы вы могли оценить результаты, 
            которых достигают наши клиенты с лазерной эпиляцией в <span className="text-accent font-bold">Kristll Studio.</span>
          </p>
        </div>

        {/* КОНТЕЙНЕР СЛАЙДЕРА */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* ОБЛАСТЬ СЛАЙДОВ */}
          <div className="relative overflow-hidden rounded-[30px] md:rounded-[50px] bg-white shadow-xl border-4 border-white">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 p-2 md:p-4">
                  
                  {/* ПАРА ФОТОГРАФИЙ (ДО И ПОСЛЕ) */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    
                    {/* ФОТО "ДО" */}
                    <div className="relative flex-1 aspect-[4/5] bg-gray-100 rounded-[20px] md:rounded-[40px] flex items-center justify-center overflow-hidden">
                       <div className="text-center">
                          <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Фото "ДО"</p>
                          <p className="text-[8px] text-gray-300 mt-1 italic">Размер: 800x1000px</p>
                       </div>
                       <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">До</div>
                    </div>

                    {/* ФОТО "ПОСЛЕ" */}
                    <div className="relative flex-1 aspect-[4/5] bg-accent/5 rounded-[20px] md:rounded-[40px] flex items-center justify-center overflow-hidden border-2 border-accent/10">
                       <div className="text-center">
                          <ImageIcon className="w-8 h-8 text-accent/30 mx-auto mb-2" />
                          <p className="text-[10px] text-accent/40 uppercase font-bold tracking-widest">Фото "ПОСЛЕ"</p>
                          <p className="text-[8px] text-accent/20 mt-1 italic">Размер: 800x1000px</p>
                       </div>
                       <div className="absolute top-4 right-4 bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg">После</div>
                    </div>

                  </div>

                  {/* ОПИСАНИЕ ПОД ФОТО */}
                  <div className="text-center mt-6 pb-4">
                    <p className="text-gray-900 font-black uppercase text-sm md:text-lg tracking-tight">
                        {slide.area}
                    </p>
                    <p className="text-accent font-bold text-xs md:text-sm italic">
                        {slide.result}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* КНОПКИ УПРАВЛЕНИЯ (СТРЕЛКИ) */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 hover:scale-110 active:scale-90 transition-all border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 hover:scale-110 active:scale-90 transition-all border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* ТОЧКИ (ИНДИКАТОРЫ) */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-10 bg-accent' : 'w-3 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ТЕХНИЧЕСКАЯ ПОДСКАЗКА ДЛЯ ТЕБЯ */}
        <div className="mt-16 max-w-2xl mx-auto p-6 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Памятка для контента:</p>
            <p className="text-xs text-gray-500 leading-relaxed">
                Для этого блока подготовьте <span className="text-black font-bold">8 фотографий</span> (4 пары). <br/>
                Рекомендуемый размер каждой фотографии: <span className="text-accent font-bold">800x1000 пикселей</span> (вертикальный формат 4:5). <br/>
                Важно, чтобы обе фотографии в паре были сделаны с одного ракурса и при похожем освещении.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Results;
