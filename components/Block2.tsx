import React from 'react';

const Block2 = () => {
  const points = [
    {
      bold: "Комфорт и безопасность.",
      text: "Диодный лазер воздействует точечно на волосяной фолликул, не повреждая окружающую кожу. После процедуры не требуется длительное восстановление."
    },
    {
      bold: "Решает проблему вросших волос.",
      text: "Лазер разрушает корень волоса, поэтому он больше не растёт внутрь кожи. Исчезают воспаления, покраснения и болезненные уплотнения. Кожа становится ровной и гладкой."
    },
    {
      bold: "Долгосрочный результат.",
      text: "После курса процедур рост волос значительно сокращается, а многие зоны остаются гладкими на годы. Поддерживающие сеансы требуются редко, примерно раз в 6 месяцев."
    },
    {
      bold: "Экономия времени и денег.",
      text: "Бритва, воск и шугаринг требуют регулярных затрат и постоянных повторений. Лазерная эпиляция позволяет забыть о ежедневной или ежемесячной рутине и сократить расходы в перспективе."
    },
    {
      bold: "Быстро и удобно.",
      text: "Одна зона обрабатывается в среднем за 10–30 минут. Процедуру легко вписать даже в плотный график — без выпадения из привычного ритма жизни."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ЗАГОЛОВОК (как на референсе) */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] leading-tight">
            ПОЧЕМУ ЛАЗЕРНАЯ ЭПИЛЯЦИЯ — <br className="hidden md:block" />
            ЭТО ЛУЧШИЙ ВЫБОР?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          
          {/* ЛЕВАЯ ЧАСТЬ: СПИСОК (на мобильных идет первым) */}
          <div className="w-full lg:w-3/5 order-1">
            <div className="space-y-6 md:space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  {/* Точка как на скрине */}
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></div>
                  
                  {/* Текст: Жирный + Обычный в одном блоке */}
                  <p className="text-[15px] md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-extrabold text-black">{point.bold}</span> {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: КАРТИНКА И ИТОГ (на мобильных фото меньше и выше плашки) */}
          <div className="w-full lg:w-2/5 order-2 flex flex-col gap-8">
            
            {/* ФОТО (на мобильных сделали компактнее) */}
            <div className="px-6 md:px-0"> {/* Доп. отступы на мобилках, чтобы фото было меньше */}
                <div className="relative aspect-[4/3] md:aspect-[4/5] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[30px] md:rounded-[40px] flex items-center justify-center overflow-hidden shadow-sm">
                    <p className="text-gray-400 font-medium italic text-xs text-center px-4">
                        Место для фото процесса <br/> или аппарата
                    </p>
                </div>
            </div>

            {/* ИТОГОВАЯ ПЛАШКА */}
            <div className="text-center lg:text-left space-y-8">
                <p className="text-[15px] md:text-lg text-gray-800 font-bold leading-snug max-w-sm mx-auto lg:mx-0">
                    Лазерная эпиляция в <span className="text-accent uppercase">Мурино</span> в студии "Kristll" позволит Вам забыть о бритве и наслаждаться идеальной гладкостью кожи!
                </p>

                {/* Кнопка записи */}
                <button className="bg-accent hover:bg-[#ffbaba] text-black text-base md:text-lg font-black py-4 px-12 rounded-full transition-all shadow-md active:scale-95 uppercase tracking-widest">
                    Записаться
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Block2;
