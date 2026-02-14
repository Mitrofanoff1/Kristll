"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Percent } from 'lucide-react';

const Price = () => {
  const [activeTab, setActiveTab] = useState('Комплексы');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    'Комплексы', 'Абонементы', 'Бикини', 'Тело', 'Лицо', 'Руки', 'Ноги'
  ];

  // Данные прайса (добавил Абонементы как пример, можешь поправить цены)
  const priceData: { [key: string]: { name: string, oldPrice: string, newPrice: string, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС S", desc: "подмышечные впадины + тотальное бикини + голени", oldPrice: "3800", newPrice: "3040" },
      { name: "КОМПЛЕКС M", desc: "ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "4500", newPrice: "3600" },
      { name: "КОМПЛЕКС L", desc: "руки до локтя + ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "5300", newPrice: "4240" },
      { name: "КОМПЛЕКС XL", desc: "все тело полностью", oldPrice: "6300", newPrice: "5040" },
    ],
    'Абонементы': [
      { name: "Абонемент на 3 сеанса (Любая зона)", desc: "Выгода до 15%", oldPrice: "6000", newPrice: "5100" },
      { name: "Абонемент на 5 сеансов (Любая зона)", desc: "Выгода до 25%", oldPrice: "10000", newPrice: "7500" },
      { name: "Абонемент на 10 сеансов (Любая зона)", desc: "Максимальная выгода", oldPrice: "20000", newPrice: "14000" },
    ],
    'Бикини': [
      { name: "Классическое бикини", oldPrice: "1400", newPrice: "1120" },
      { name: "Глубокое бикини (без меж.я. зоной)", oldPrice: "1700", newPrice: "1360" },
      { name: "Тотальное бикини (с меж.я. зоной)", oldPrice: "2000", newPrice: "1600" },
    ],
    'Тело': [
      { name: "Подмышечные впадины", oldPrice: "800", newPrice: "640" },
      { name: "Ареолы", oldPrice: "600", newPrice: "480" },
      { name: "Живот", oldPrice: "1500", newPrice: "1200" },
      { name: "Линия живота", oldPrice: "600", newPrice: "480" },
      { name: "Спина (поясница)", oldPrice: "1200", newPrice: "960" },
      { name: "Ягодицы", oldPrice: "1300", newPrice: "1040" },
    ],
    'Лицо': [
      { name: "Верхняя губа", oldPrice: "600", newPrice: "480" },
      { name: "Подбородок", oldPrice: "600", newPrice: "480" },
      { name: "Бакенбарды", oldPrice: "600", newPrice: "420" },
      { name: "Лицо полностью", oldPrice: "1300", newPrice: "1040" },
    ],
    'Руки': [
      { name: "Руки до локтя", oldPrice: "1300", newPrice: "1040" },
      { name: "Руки выше локтя", oldPrice: "1300", newPrice: "1040" },
      { name: "Кисти рук", oldPrice: "700", newPrice: "560" },
      { name: "Руки полностью", oldPrice: "1900", newPrice: "1520" },
    ],
    'Ноги': [
      { name: "Голени (с коленом)", oldPrice: "1800", newPrice: "1440" },
      { name: "Бедра", oldPrice: "1500", newPrice: "1200" },
      { name: "Пальцы на ногах", oldPrice: "600", newPrice: "480" },
      { name: "Ноги полностью", oldPrice: "2400", newPrice: "1920" },
    ]
  };

  // Центрируем активный таб при клике (для мобилок)
  const handleTabClick = (cat: string, e: React.MouseEvent) => {
    setActiveTab(cat);
    const target = e.currentTarget as HTMLElement;
    if (scrollRef.current) {
      const scrollLeft = target.offsetLeft - scrollRef.current.offsetWidth / 2 + target.offsetWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white" id="prices">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-3">Стоимость услуг</h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-medium bg-gray-50 inline-flex mx-auto px-4 py-2 rounded-full">
             <Percent className="w-4 h-4 text-accent" />
             <p className="text-xs md:text-base">Скидка 20% на первое посещение</p>
          </div>
        </div>

        {/* ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ КАТЕГОРИЙ (как на референсе) */}
        <div className="relative mb-10 md:mb-16">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar border-b border-gray-100 gap-6 md:gap-12 md:justify-center px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={(e) => handleTabClick(cat, e)}
                className={`pb-4 text-[15px] md:text-lg font-bold transition-all whitespace-nowrap relative ${
                  activeTab === cat ? 'text-accent' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-accent rounded-full animate-in fade-in zoom-in duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* СПИСОК УСЛУГ */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {priceData[activeTab]?.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 border-b border-gray-50 group"
              >
                <div className="flex-1">
                  <h3 className="text-[15px] md:text-xl font-bold text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-[11px] md:text-sm text-gray-400 mt-1 uppercase tracking-tight font-medium">
                      {item.desc}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-gray-300 line-through text-xs md:text-lg font-medium">
                    {item.oldPrice}р
                  </span>
                  <span className="text-accent text-lg md:text-2xl font-extrabold">
                    {item.newPrice}р
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* КНОПКА ЗАПИСИ */}
        <div className="mt-12 text-center px-4">
            <button className="w-full md:w-auto bg-black text-white hover:bg-zinc-800 text-sm md:text-lg font-black py-4 md:py-5 px-10 md:px-16 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest">
                Записаться со скидкой 20%
            </button>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Price;
