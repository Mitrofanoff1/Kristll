"use client";

import React, { useState } from 'react';
import { ChevronDown, Percent } from 'lucide-react';

const Price = () => {
  const [activeTab, setActiveTab] = useState('Комплексы');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    'Комплексы', 'Бикини', 'Тело', 'Лицо', 'Руки', 'Ноги'
  ];

  const priceData: { [key: string]: { name: string, oldPrice: string, newPrice: string, desc?: string }[] } = {
    'Комплексы': [
      { name: "КОМПЛЕКС S", desc: "подмышечные впадины + тотальное бикини + голени", oldPrice: "3800", newPrice: "3040" },
      { name: "КОМПЛЕКС M", desc: "ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "4500", newPrice: "3600" },
      { name: "КОМПЛЕКС L", desc: "руки до локтя + ноги полностью + подмышечные впадины + тотальное бикини", oldPrice: "5300", newPrice: "4240" },
      { name: "КОМПЛЕКС XL", desc: "все тело полностью", oldPrice: "6300", newPrice: "5040" },
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

  return (
    <section className="py-16 md:py-24 bg-white" id="prices">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Стоимость услуг</h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
             <Percent className="w-5 h-5 text-accent" />
             <p className="text-sm md:text-lg">Скидка 20% на первое посещение</p>
          </div>
        </div>

        {/* ТАБЫ (ДЛЯ ДЕСКТОПА) */}
        <div className="hidden md:flex justify-center mb-12 border-b border-gray-100">
          <div className="flex gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`pb-4 text-lg font-bold transition-all relative ${
                  activeTab === cat ? 'text-black' : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* СЕЛЕКТ (ДЛЯ МОБИЛЬНЫХ) */}
        <div className="md:hidden mb-8 relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-accent text-black font-black py-4 px-6 rounded-2xl flex items-center justify-between shadow-lg uppercase tracking-wider"
          >
            {activeTab}
            <ChevronDown className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left py-4 px-6 font-bold border-b border-gray-50 last:border-0 ${
                    activeTab === cat ? 'bg-accent/10 text-accent' : 'text-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* СПИСОК УСЛУГ */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {priceData[activeTab].map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-6 border-b border-gray-50 group transition-all"
              >
                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-tight font-medium">
                      {item.desc}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 line-through text-sm md:text-lg font-medium">
                    {item.oldPrice}р
                  </span>
                  <span className="text-accent text-xl md:text-2xl font-black">
                    {item.newPrice}р
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* КНОПКА ЗАПИСИ ПОД ПРАЙСОМ */}
        <div className="mt-12 text-center">
            <button className="w-full md:w-auto bg-black text-white hover:bg-zinc-800 text-base md:text-lg font-black py-5 px-12 rounded-full transition-all shadow-xl active:scale-95 uppercase tracking-widest">
                Записаться со скидкой 20%
            </button>
        </div>

      </div>
    </section>
  );
};

export default Price;
