export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">О теме</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Что такое сон?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Сон — это естественное состояние покоя, при котором мозг продолжает активно работать. Каждую ночь мы проходим несколько циклов сна, каждый длится около 90 минут.
          </p>
          <p className="text-lg leading-relaxed">
            Учёные до сих пор не знают всех причин, почему нам снятся сны. Но точно известно: они связаны с обработкой эмоций, закреплением памяти и творческим мышлением.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Ключевые понятия</h3>
          <div className="flex flex-wrap gap-2">
            {["REM-фаза", "Медленный сон", "Сновидения", "Осознанный сон", "Мелатонин", "Гиппокамп", "Память", "Нейроны"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}