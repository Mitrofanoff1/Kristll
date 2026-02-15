import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Send } from 'lucide-react';

const Footer = () => {
  const vkLink = "https://vk.com/kristll_studio";
  const tgLink = "https://t.me/kristll_studio";
  const yandexMap = "https://yandex.ru/maps/org/kristll_studio/61436315462/?ll=30.428688%2C60.055232&utm_campaign=v1&utm_medium=qr_image&utm_source=qr&z=16";
  const twoGis = "https://2gis.ru/spb/firm/70000001099309382";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. О СТУДИИ И ЮР. ДАННЫЕ */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-accent">Kristll Studio</h3>
            <div className="space-y-1 text-xs text-gray-500 font-medium">
              <p>ИП Горячева Кристина Николаевна</p>
              <p>ИНН: 780428246400</p>
              <p>ОГРНИП: 325784700084134</p>
            </div>
            <div className="flex gap-4">
              <a href={vkLink} target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <span className="font-bold text-xs uppercase">VK</span>
              </a>
              <a href={tgLink} target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. КОНТАКТЫ */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">Контакты</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-300">
                  Мурино, ул. Шувалова д.12 <br/>
                  <span className="text-gray-500">(м. Девяткино)</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:89218758196" className="text-sm md:text-base text-gray-300 hover:text-accent font-bold transition-colors">
                  8-921-875-81-96
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-300 leading-tight">
                  Ежедневно, с 10:00 до 22:00 <br/>
                  <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">По предварительной записи</span>
                </p>
              </div>
            </div>
          </div>

          {/* 3. КАРТЫ И НАВИГАЦИЯ */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">Построить маршрут</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={yandexMap} 
                target="_blank" 
                className="flex items-center justify-between bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <span className="font-bold text-sm">Яндекс Карты</span>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent" />
              </a>
              <a 
                href={twoGis} 
                target="_blank" 
                className="flex items-center justify-between bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <span className="font-bold text-sm">2ГИС</span>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent" />
              </a>
            </div>
          </div>

          {/* 4. КНОПКА ЗАПИСИ */}
          <div className="flex flex-col justify-end">
             <button className="w-full bg-accent hover:bg-[#ffbaba] text-black font-black py-5 px-6 rounded-2xl transition-all shadow-xl shadow-accent/5 active:scale-95 uppercase tracking-widest text-sm">
                Записаться сейчас
             </button>
          </div>

        </div>

        {/* НИЖНЯЯ ЧАСТЬ */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] md:text-xs text-gray-600 font-bold uppercase tracking-widest text-center md:text-left">
              *Имеются противопоказания, необходима консультация специалиста
            </p>
            <p className="text-[10px] text-gray-700 uppercase tracking-widest">
              © 2024 KRISTLL STUDIO. Все права защищены.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
