import { useState, useEffect } from 'react'
import profissionaisData from './data/profissionais.json'
import ProfessionalCard from './components/ProfessionalCard'
import ProfessionalModal from './components/ProfessionalModal'
import SearchAndFilters from './components/SearchAndFilters'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [profissionais, setProfissionais] = useState([])
  const [filteredProfissionais, setFilteredProfissionais] = useState([])
  const [selectedProfissional, setSelectedProfissional] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterArea, setFilterArea] = useState('')
  const [filterCidade, setFilterCidade] = useState('')
  const [filterTecnologia, setFilterTecnologia] = useState('')

  useEffect(() => {
    setProfissionais(profissionaisData)
    setFilteredProfissionais(profissionaisData)
    
    // Verificar preferência de dark mode do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true')
    } else {
      setDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Aplicar dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  useEffect(() => {
    // Filtrar profissionais
    let filtered = profissionais

    // Busca por nome, cargo ou resumo
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(p => 
        p.nome.toLowerCase().includes(searchLower) ||
        p.cargo.toLowerCase().includes(searchLower) ||
        p.resumo.toLowerCase().includes(searchLower)
      )
    }

    // Filtro por área
    if (filterArea) {
      filtered = filtered.filter(p => p.area === filterArea)
    }

    // Filtro por cidade
    if (filterCidade) {
      filtered = filtered.filter(p => p.localizacao.includes(filterCidade))
    }

    // Filtro por tecnologia
    if (filterTecnologia) {
      filtered = filtered.filter(p => 
        p.habilidadesTecnicas.some(tech => 
          tech.toLowerCase().includes(filterTecnologia.toLowerCase())
        )
      )
    }

    setFilteredProfissionais(filtered)
  }, [searchTerm, filterArea, filterCidade, filterTecnologia, profissionais])

  const handleCardClick = (profissional) => {
    setSelectedProfissional(profissional)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProfissional(null)
  }

  const handleRecomendar = () => {
    alert(`Profissional ${selectedProfissional?.nome} recomendado com sucesso!`)
  }

  const handleEnviarMensagem = () => {
    alert(`Mensagem enviada para ${selectedProfissional?.nome}!`)
  }

  // Obter áreas únicas
  const areas = [...new Set(profissionais.map(p => p.area))].sort()
  
  // Obter cidades únicas
  const cidades = [...new Set(profissionais.map(p => p.localizacao.split('/')[0]))].sort()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Profissionais
          </h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          filterCidade={filterCidade}
          setFilterCidade={setFilterCidade}
          filterTecnologia={filterTecnologia}
          setFilterTecnologia={setFilterTecnologia}
          areas={areas}
          cidades={cidades}
        />

        <div className="mb-4 text-gray-700 dark:text-gray-300">
          {filteredProfissionais.length} profissional(is) encontrado(s)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfissionais.map(profissional => (
            <ProfessionalCard
              key={profissional.id}
              profissional={profissional}
              onClick={() => handleCardClick(profissional)}
            />
          ))}
        </div>

        {filteredProfissionais.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      {isModalOpen && selectedProfissional && (
        <ProfessionalModal
          profissional={selectedProfissional}
          onClose={handleCloseModal}
          onRecomendar={handleRecomendar}
          onEnviarMensagem={handleEnviarMensagem}
        />
      )}
    </div>
  )
}

export default App

