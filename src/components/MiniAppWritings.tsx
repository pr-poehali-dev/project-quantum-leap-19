export function MiniAppWritings() {
  const posts = [
    {
      title: "Почему мы вообще спим?",
      date: "Биология",
      excerpt:
        "Сон — не просто отдых. За ночь мозг «промывает» себя от вредных белков (в том числе тех, что связаны с болезнью Альцгеймера) через лимфатическую систему.",
    },
    {
      title: "Осознанные сновидения",
      date: "Психология",
      excerpt: "Можно ли управлять своими снами? Да! Осознанный сон — это состояние, когда человек понимает, что спит, и может контролировать происходящее.",
    },
    {
      title: "Вещие сны: миф или реальность?",
      date: "Нейронаука",
      excerpt: "Учёные объясняют: мозг постоянно строит прогнозы. Иногда совпадение сна и реального события — просто работа нашего предсказательного мышления.",
    },
    {
      title: "Кошмары и их смысл",
      date: "Эмоции",
      excerpt: "Кошмары — способ мозга «тренировать» реакцию на страх в безопасной обстановке. Они помогают нам справляться с тревогой в реальной жизни.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Статьи</h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{post.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black">
                {post.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все материалы
        </button>
      </div>
    </div>
  )
}