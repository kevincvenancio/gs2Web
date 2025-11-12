function ProfessionalCard({ profissional, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <img
          src={profissional.foto}
          alt={profissional.nome}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profissional.nome)}&size=200&background=random`
          }}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 dark:bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {profissional.area}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {profissional.nome}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
          {profissional.cargo}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {profissional.resumo}
        </p>
        
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profissional.localizacao}
        </div>

        <div className="flex flex-wrap gap-1">
          {profissional.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
          {profissional.habilidadesTecnicas.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{profissional.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCard

