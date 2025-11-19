function SearchAndFilters({
  searchTerm,
  setSearchTerm,
  filterArea,
  setFilterArea,
  filterCidade,
  setFilterCidade,
  filterTecnologia,
  setFilterTecnologia,
  areas,
  cidades
}) {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 mb-10 border border-blue-200 dark:border-gray-700">
      <h2 className="text-2xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 tracking-wide text-center drop-shadow-lg">
         Buscar e Filtrar
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-base font-semibold text-blue-900 dark:text-gray-200 mb-2 tracking-wide">
            Buscar por nome, cargo ou descrição
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite para buscar..."
            className="w-full px-5 py-3 border border-blue-200 dark:border-blue-900 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-blue-50 dark:bg-gray-900 text-blue-800 dark:text-blue-200 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-base font-semibold text-blue-900 dark:text-gray-200 mb-2 tracking-wide">
              Área
            </label>
            <select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className="w-full px-5 py-3 border border-blue-200 dark:border-blue-900 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-blue-50 dark:bg-gray-900 text-blue-800 dark:text-blue-200 shadow-sm transition"
            >
              <option value="">Todas as áreas</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base font-semibold text-blue-900 dark:text-gray-200 mb-2 tracking-wide">
              Cidade
            </label>
            <select
              value={filterCidade}
              onChange={(e) => setFilterCidade(e.target.value)}
              className="w-full px-5 py-3 border border-blue-200 dark:border-blue-900 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-blue-50 dark:bg-gray-900 text-blue-800 dark:text-blue-200 shadow-sm transition"
            >
              <option value="">Todas as cidades</option>
              {cidades.map(cidade => (
                <option key={cidade} value={cidade}>{cidade}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base font-semibold text-blue-900 dark:text-gray-200 mb-2 tracking-wide">
              Tecnologia
            </label>
            <input
              type="text"
              value={filterTecnologia}
              onChange={(e) => setFilterTecnologia(e.target.value)}
              placeholder="Ex: React, Python..."
              className="w-full px-5 py-3 border border-blue-200 dark:border-blue-900 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-blue-50 dark:bg-gray-900 text-blue-800 dark:text-blue-200 placeholder-gray-400 dark:placeholder-gray-600 shadow-sm transition"
            />
          </div>
        </div>

        {(searchTerm || filterArea || filterCidade || filterTecnologia) && (
          <div className="flex justify-end">
            <button
              onClick={() => {
                setSearchTerm('')
                setFilterArea('')
                setFilterCidade('')
                setFilterTecnologia('')
              }}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-900 text-white rounded-full font-bold shadow-md hover:from-blue-600 hover:to-blue-500 transition ring-2 ring-offset-2 ring-blue-200 dark:ring-blue-900 focus:outline-none focus:ring-4"
            >
              Limpar filtros 
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchAndFilters

