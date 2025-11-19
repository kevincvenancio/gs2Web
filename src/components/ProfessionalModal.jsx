function ProfessionalModal({ profissional, onClose, onRecomendar, onEnviarMensagem }) {
  if (!profissional) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-end gap-4">
              <img
                src={profissional.foto}
                alt={profissional.nome}
                className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profissional.nome)}&size=200&background=random`
                }}
              />
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">{profissional.nome}</h2>
                <p className="text-lg text-blue-200">{profissional.cargo}</p>
                <p className="text-sm text-gray-200 mt-1">{profissional.localizacao}</p>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sobre</h3>
            <p className="text-gray-700 dark:text-gray-300">{profissional.resumo}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {profissional.habilidadesTecnicas.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profissional.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Experiências</h3>
            <div className="space-y-4">
              {profissional.experiencias.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{exp.cargo}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.empresa}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.inicio} - {exp.fim}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Formação</h3>
            <div className="space-y-2">
              {profissional.formacao.map((form, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white">{form.curso}</p>
                  <p className="text-gray-700 dark:text-gray-300">{form.instituicao}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ano: {form.ano}</p>
                </div>
              ))}
            </div>
          </div>

          {profissional.projetos && profissional.projetos.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Projetos</h3>
              <div className="space-y-3">
                {profissional.projetos.map((projeto, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {projeto.titulo}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{projeto.descricao}</p>
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Ver projeto →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {profissional.certificacoes && profissional.certificacoes.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certificações</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {profissional.certificacoes.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {profissional.idiomas && profissional.idiomas.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Idiomas</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.idiomas.map((idioma, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {idioma.idioma} - {idioma.nivel}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profissional.areaInteresses && profissional.areaInteresses.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Áreas de Interesse</h3>
              <div className="flex flex-wrap gap-2">
                {profissional.areaInteresses.map((interesse, index) => (
                  <span
                    key={index}
                    className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm"
                  >
                    {interesse}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onRecomendar}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Recomendar Profissional
            </button>
            <button
              onClick={onEnviarMensagem}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalModal

