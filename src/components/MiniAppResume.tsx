export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Научные факты</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Фазы сна</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Медленный сон (NREM)</h4>
              <p className="text-gray-600 font-medium">1–3 стадии · около 75% всего сна</p>
              <p className="mt-2">
                Самая глубокая и восстановительная фаза. В этот период тело восстанавливает мышцы, укрепляет иммунитет и сохраняет важные воспоминания в долгосрочную память.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Быстрый сон (REM)</h4>
              <p className="text-gray-600 font-medium">4 стадия · около 25% всего сна</p>
              <p className="mt-2">
                Именно здесь происходят яркие сновидения! Глаза быстро двигаются под веками, мозг почти так же активен, как при бодрствовании. Помогает обработке эмоций.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Интересные цифры</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">90% снов забываются</h4>
              <p className="text-sm text-gray-600 mb-2">Источник: исследования нейробиологии</p>
              <p>Через 10 минут после пробуждения большинство людей не помнят 90% приснившегося. Мозг считает это лишней информацией.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Человек видит 4–6 снов за ночь</h4>
              <p className="text-sm text-gray-600 mb-2">Каждый цикл сна — новый сон</p>
              <p>За 8 часов сна мозг успевает «показать» несколько отдельных историй. Запомнить удаётся лишь последнюю перед пробуждением.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Слепые люди тоже видят сны</h4>
              <p className="text-sm text-gray-600 mb-2">Через звук, запах и тактильные ощущения</p>
              <p>Люди, которые ослепли после рождения, видят визуальные сны. А те, кто слеп с рождения, видят сны через другие чувства.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}