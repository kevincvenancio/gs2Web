# SPA de Profissionais

Uma Single Page Application (SPA) moderna desenvolvida com React + Vite e Tailwind CSS para listagem e visualização de perfis profissionais.

## 🚀 Funcionalidades

- **Listagem de Profissionais**: Cards com informações básicas (nome, foto, cargo, skills)
- **Modal Detalhado**: Visualização completa do perfil com todas as informações
- **Sistema de Busca**: Busca por nome, cargo ou descrição
- **Filtros Avançados**: Filtro por área, cidade ou tecnologia
- **Dark Mode**: Alternância entre tema claro e escuro
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **60+ Perfis**: Banco de dados com mais de 60 perfis profissionais simulados

## 🛠️ Tecnologias

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Build tool rápida e moderna
- **Tailwind CSS**: Framework CSS utilitário
- **HTML5**: Estrutura semântica

## Link Vercel
- https://gs2-web-ten.vercel.app/

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:5173` no navegador

## 🏗️ Estrutura do Projeto

```
gsWebFront/
├── src/
│   ├── components/
│   │   ├── ProfessionalCard.jsx      # Card de profissional
│   │   ├── ProfessionalModal.jsx     # Modal com detalhes
│   │   ├── SearchAndFilters.jsx       # Busca e filtros
│   │   └── DarkModeToggle.jsx         # Toggle de dark mode
│   ├── data/
│   │   └── profissionais.json         # Dados dos profissionais
│   ├── App.jsx                        # Componente principal
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 📋 Estrutura dos Dados

Cada perfil profissional contém:

- `id`: Identificador único
- `nome`: Nome completo
- `foto`: URL da foto de perfil
- `cargo`: Cargo atual
- `resumo`: Breve descrição profissional
- `localizacao`: Cidade e estado
- `area`: Área de atuação
- `habilidadesTecnicas`: Array de tecnologias
- `softSkills`: Array de habilidades interpessoais
- `experiencias`: Array de experiências profissionais
- `formacao`: Array de formações acadêmicas
- `projetos`: Array de projetos
- `certificacoes`: Array de certificações
- `idiomas`: Array de idiomas com níveis
- `areaInteresses`: Array de áreas de interesse

## 🎨 Recursos de Design

- Design moderno e limpo
- Animações suaves e transições
- Gradientes e cores vibrantes
- Cards com hover effects
- Modal responsivo e acessível
- Suporte completo a dark mode

## 📱 Responsividade

A aplicação é totalmente responsiva, com breakpoints para:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)
- Large Desktop (> 1280px)

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria build de produção
- `npm run preview`: Preview do build de produção

## 📝 Licença

Este projeto foi criado para fins educacionais e de demonstração.

