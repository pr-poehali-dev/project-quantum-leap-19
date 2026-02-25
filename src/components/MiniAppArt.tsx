export function MiniAppArt() {
  const artworks = [
    { title: "REM-фаза", medium: "Быстрый сон", emoji: "👁️", color: "from-[#FF2E63] to-[#FF6B9D]" },
    { title: "Медленный сон", medium: "Глубокий отдых", emoji: "🌊", color: "from-[#4F46E5] to-[#7C3AED]" },
    { title: "Осознанный сон", medium: "Контроль снов", emoji: "🌙", color: "from-[#0891B2] to-[#06B6D4]" },
    { title: "Кошмары", medium: "Эмоции и страх", emoji: "⚡", color: "from-[#DC2626] to-[#F97316]" },
    { title: "Мелатонин", medium: "Гормон сна", emoji: "✨", color: "from-[#059669] to-[#10B981]" },
    { title: "Сновидения", medium: "Работа мозга", emoji: "💭", color: "from-[#7C3AED] to-[#EC4899]" },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Галерея понятий</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className={`aspect-square bg-gradient-to-br ${artwork.color} border-b-[3px] border-black flex items-center justify-center`}>
              <span className="text-6xl">{artwork.emoji}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{artwork.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{artwork.medium}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все понятия
        </button>
      </div>
    </div>
  )
}