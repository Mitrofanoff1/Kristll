import React from 'react';
import { ShieldCheck, Sparkles, Calendar, Wallet, Zap, Heart } from 'lucide-react';

const Block2 = () => {
  const features = [
    {
      title: "Комфорт и безопасность",
      desc: "Диодный лазер воздействует точечно на волосяной фолликул, не повреждая окружающую кожу. Без порезов, без ожогов и без длительного восстановления. Процедура проходит мягко и контролируемо.",
      icon: <ShieldCheck className="text-accent w-6 h-6" />
    },
    {
      title: "Решение проблемы вросших волос",
      desc: "Лазер разрушает корень волоса, поэтому он больше не растёт внутрь кожи. Исчезают воспаления, покраснения и болезненные уплотнения. Кожа становится ровной и гладкой.",
      icon: <Sparkles className="text-accent w-6 h-6" />
    },
    {
      title: "Долгосрочный результат",
      desc: "После курса процедур рост волос значительно сокращается, а многие зоны остаются гладкими на годы. Поддерживающие сеансы требуются редко — обычно раз в несколько месяцев.",
      icon: <Calendar className="text-accent w-6 h-6" />
    },
    {
      title: "Экономия времени и денег",
      desc: "Бритва, воск и шугаринг требуют регулярных затрат и постоянных повторений. Лазерная эпиляция позволяет забыть о ежедневной или ежемесячной рутине и сократить расходы в перспективе.",
      icon: <Wallet className="text-accent w-6 h-6" />
    },
    {
      title: "Быстро и удобно",
      desc: "Одна зона обрабатывается в среднем за 10–30 минут. Процедуру легко вписать даже в плотный график — без выпадения из привычного ритма жизни.",
      icon: <Zap className="text-accent w-6 h-6" />
    },
    {
      title: "Подходит большинству типов кожи",
      desc: "Современное оборудование позволяет настраивать параметры индивидуально под фототип и особенности кожи. Процедуру можно проводить на разных зонах тела и в любое время года.",
      icon: <Heart className="text-accent w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК БЛОКА */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a]">
            Почему лазерная эпиляция — <br className="md:hidden" />
            <span className="text-accent">это лучший выбор?</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* ЛЕВАЯ ЧАСТЬ: КАРТИНКА (ЗАГЛУШКА) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              {/* Декоративный фон за картинкой */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-[40px] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              {/* Место под фото процесса или аппарата */}
              <div className="aspect-[4/5] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center overflow-hidden shadow-sm">
                <div className="text-center p-8">
                  <p className="text-gray-400 font-medium italic mb-2 text-sm md:text-base">
                    Место для фото аппарата или процесса
                  </p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest">
                    Рекомендуется вертикальное фото
                  </p>
                </div>
              </div>

              {/* Плашка снизу картинки как на референсе */}
              <div className="mt-8 text-center lg:text-left">
                <button className="bg-accent hover:bg-[#ffbaba] text-black text-lg font-bold py-5 px-12 rounded-full transition-all shadow-lg active:scale-95 uppercase tracking-wider">
                  Записаться
                </button>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: СПИСОК ПРЕИМУЩЕСТВ */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8 md:space-y-10">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-6 group">
                  {/* Иконка в розовом круге */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Текст */}
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Дополнительный текст снизу (как на референсе) */}
            <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-gray-100 italic">
               <p className="text-sm md:text-base text-gray-600 text-center font-medium">
                  Лазерная эпиляция в <span className="text-black font-bold">Kristll Studio</span> позволит Вам забыть о бритве и наслаждаться идеальной гладкостью кожи навсегда!
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Block2;
