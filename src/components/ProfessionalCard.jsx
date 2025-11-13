function ProfessionalCard({ profissional, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl hover:shadow-pink-200 dark:hover:shadow-purple-900 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.03] border-2 border-transparent hover:border-pink-300 dark:hover:border-purple-600 overflow-hidden"
      style={{ minHeight: 500, maxWidth: 410, width: "100%" }}
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-500 via-blue-400 to-purple-600 dark:from-blue-900 dark:via-purple-800 dark:to-gray-900 flex items-center justify-center">
        <img
          src={profissional.foto}
          alt={profissional.nome}
          className="w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg ring-2 ring-pink-400 dark:ring-purple-600 absolute left-1/2 top-14 transform -translate-x-1/2"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profissional.nome)}&size=200&background=random`
          }}
        />
        <div className="absolute top-6 right-6 drop-shadow-xl z-20">
          <span className="bg-gradient-to-r from-blue-600 to-purple-500 dark:from-purple-700 dark:to-blue-600 text-white font-bold text-[0.85rem] px-4 py-1.5 rounded-full shadow-lg border border-white/50 dark:border-gray-800 ring-2 ring-pink-400 dark:ring-purple-700 shadow-md">
            {profissional.area}
          </span>
        </div>
      </div>

      <div className="pt-28 pb-10 px-8 relative z-10 flex flex-col justify-between min-h-[220px] h-auto">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center hover:text-pink-500 dark:hover:text-purple-400 transition-colors duration-150">
          {profissional.nome}
        </h3>
        <p className="text-lg text-pink-700 dark:text-purple-400 font-semibold mb-3 text-center uppercase tracking-wider">
          {profissional.cargo}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 text-center italic">
          {profissional.resumo}
        </p>
        <div className="flex items-center justify-center text-base text-gray-500 dark:text-gray-400 mb-6 gap-2">
          <svg className="w-5 h-5 text-pink-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium break-words">{profissional.localizacao}</span>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center mt-auto">
          {profissional.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-sm bg-pink-100 dark:bg-purple-700 text-pink-700 dark:text-purple-100 px-3 py-1.5 rounded-full font-semibold shadow-sm border border-pink-200 dark:border-purple-800"
            >
              {skill}
            </span>
          ))}
          {profissional.habilidadesTecnicas.length > 3 && (
            <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1 italic">
              +{profissional.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCard
