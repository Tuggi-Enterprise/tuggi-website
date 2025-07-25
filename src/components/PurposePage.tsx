import React from 'react';
import { Compass, MapPin, Heart, Globe, Users, Eye, Headphones, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';
import FinalCTASection from './FinalCTASection';

interface PurposePageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const PurposePage: React.FC<PurposePageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Conteúdo localizado apenas em PT conforme solicitado
  const content = {
        badge: 'Nosso Propósito',
    title: 'Nossa razão de existir',
    
    // Bloco 1 - Cultura em movimento
    block1: {
      title: 'Cultura em movimento',
      content: [
        'Acreditamos que a cultura não deve estar presa a livros, roteiros turísticos ou salas de aula.',
        'Ela deve acompanhar você no seu caminho, nos lugares por onde passa, nas paisagens que atravessa, nas ruas que conhece todos os dias.',
        'Cultura é viva. Está no trajeto, não só no destino.'
      ]
    },
    
    // Bloco 2 - Por que criamos a Tuggi
    block2: {
      title: 'Por que criamos a Tuggi',
      content: [
        'Criamos a Tuggi porque queremos democratizar o acesso ao conhecimento.',
        'Queremos que cada pessoa, em qualquer lugar, tenha a oportunidade de descobrir mais sobre o mundo ao seu redor.',
        'Enquanto outras plataformas centralizam a experiência em roteiros prontos, mapas fechados ou atrações turísticas, nós preferimos entregar liberdade.',
        'Liberdade para explorar.',
        'Liberdade para ouvir.',
        'Liberdade para se conectar.'
      ]
    },
    
    // Bloco 3 - Como fazemos isso
    block3: {
      title: 'Como fazemos isso',
      content: [
        'Utilizamos tecnologia de geolocalização e inteligência contextual para acionar narrações automáticas, que contam a história do que está ao redor do usuário — no momento certo.',
        'É uma experiência sem telas, sem distrações, sem algoritmos.',
        'O conhecimento vem até você, de forma leve, orgânica e real.',
        'Você se move. A Tuggi fala.'
      ]
    },
    
    // Bloco 4 - Liberdade de rota
    block4: {
      title: 'Liberdade de rota',
      content: [
        'Você não precisa seguir uma rota planejada.',
        'A Tuggi funciona onde você estiver.',
        'Seja indo para o trabalho, viajando, caminhando no seu bairro ou explorando uma nova cidade, ela revela as camadas culturais invisíveis do seu trajeto.',
        'O caminho é seu. A descoberta também.'
      ]
    },
    
    // Bloco 5 - Um futuro construído em comunidade
    block5: {
      title: 'Um futuro construído em comunidade',
      content: [
        'Acreditamos em um futuro construído junto.',
        'Por isso, mesmo durante a fase beta, já é possível avaliar os conteúdos e sugerir melhorias.',
        'Em breve, você poderá indicar novos pontos, enviar histórias e cocriar a experiência com a gente.',
        'Porque cultura se constrói coletivamente.',
        'E a Tuggi está aqui para dar voz a esse movimento.'
      ]
      }
    };

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-6 lg:mb-8">
              <Compass className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
            </div>
            
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight max-w-4xl mx-auto lg:mx-0">
              {content.title}
            </h1>
          </div>

            {/* Visual Element - Book Mockup */}
            <div className="relative animate-fade-in">
              <div className="relative bg-gradient-subtle rounded-3xl p-6 lg:p-8">
                {/* Book Interface */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto" style={{width: '280px', height: '400px'}}>
                  {/* Book Cover */}
                  <div className="bg-gradient-to-br from-tuggi-primary to-tuggi-secondary px-6 py-8 text-white text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <div className="text-lg font-bold mb-2">Cultura Viva</div>
                    <div className="text-sm opacity-90">Histórias que se movem com você</div>
              </div>
              
                  {/* Book Pages */}
                  <div className="p-6 space-y-4">
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                        <div className="text-sm font-semibold text-neutral-800">Página 1</div>
                      </div>
                      <div className="text-xs text-neutral-600 leading-relaxed">
                        "A cultura não está presa em livros ou museus. Ela vive nas ruas, nas pessoas, nas histórias que contamos enquanto caminhamos..."
                      </div>
                    </div>
                    
                    <div className="bg-gradient-aurora rounded-lg p-4">
                      <div className="text-xs font-semibold text-tuggi-primary mb-2">🎙️ Agora lendo</div>
                      <div className="text-xs text-neutral-800 font-medium mb-2">A História da Liberdade</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-1 bg-neutral-200 rounded-full">
                          <div className="h-1 bg-tuggi-primary rounded-full w-2/3"></div>
                          </div>
                        <div className="text-xs text-neutral-600">Página 3 de 5</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-neutral-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-neutral-700">Cultura em movimento</span>
                  </div>
                      <div className="flex items-center space-x-3 p-2 bg-neutral-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-neutral-700">Histórias vivas</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-neutral-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-xs text-neutral-700">Conhecimento livre</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 1 - Cultura em movimento */}
      <section className="py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block1.title}
            </h2>
            
          <div className="space-y-6 lg:space-y-8">
            {content.block1.content.map((paragraph, index) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl text-neutral-700 leading-relaxed text-center transition-all duration-300 ${
                  index === content.block1.content.length - 1 ? 'font-medium text-tuggi-primary' : ''
                }`}>
                  {paragraph}
                </p>
                {index === content.block1.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-tuggi-primary to-tuggi-secondary rounded-full"></div>
                  </div>
                )}
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 2 - Por que criamos a Tuggi */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-tuggi-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-tuggi-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block2.title}
            </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {content.block2.content.map((paragraph, index) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index >= 3 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {index >= 3 && (
                  <div className="flex justify-center mt-3">
                    <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores da marca - Transição visual */}
      <section className="py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-tuggi-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-tuggi-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Nossos valores fundamentais
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa missão de democratizar o acesso à cultura
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Descobrimento */}
            <div className="group text-center bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-primary/5 rounded-full blur-2xl"></div>
              
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-ocean items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300 relative z-10">
                Descobrimento espontâneo
              </h3>
              <p className="text-sm lg:text-base text-neutral-600 leading-relaxed relative z-10">
                Cada lugar tem uma história. Nossa missão é revelar essas narrativas enquanto você vive sua rotina.
              </p>
            </div>

            {/* Conexão */}
            <div className="group text-center bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-secondary/5 rounded-full blur-2xl"></div>
              
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-forest items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300 relative z-10">
                Conexão cultural
              </h3>
              <p className="text-sm lg:text-base text-neutral-600 leading-relaxed relative z-10">
                Acreditamos que conhecer a história dos lugares cria um vínculo mais profundo com o mundo.
              </p>
            </div>

            {/* Liberdade */}
            <div className="group text-center bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-primary/5 rounded-full blur-2xl"></div>
              
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-cosmic items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300 relative z-10">
                Liberdade de exploração
              </h3>
              <p className="text-sm lg:text-base text-neutral-600 leading-relaxed relative z-10">
                Sem rotas predefinidas. A cultura surge naturalmente, respeitando seu ritmo e suas escolhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3 - Como fazemos isso */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-subtle relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block3.title}
            </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {content.block3.content.map((paragraph, index) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index === content.block3.content.length - 1 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {index === content.block3.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-tuggi-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 4 - Liberdade de rota */}
      <section className="py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-tuggi-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-tuggi-secondary/4 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block4.title}
            </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {content.block4.content.map((paragraph, index) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index === content.block4.content.length - 1 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {index === content.block4.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-12 h-12 bg-gradient-forest rounded-full flex items-center justify-center shadow-lg">
                      <Compass className="w-6 h-6 text-white" />
          </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 5 - Um futuro construído em comunidade */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-cosmic opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8">
              {content.block5.title}
            </h2>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 shadow-lg">
                  <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-4">
                    {content.block5.content[0]}
                  </p>
                  <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                    {content.block5.content[1]}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 rounded-2xl p-6 lg:p-8 border border-tuggi-primary/10">
                  <p className="text-base lg:text-lg text-neutral-700 leading-relaxed">
                    {content.block5.content[2]}
                  </p>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative">
                {/* Community Visual */}
                <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-tuggi-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-tuggi-secondary/10 rounded-full blur-xl"></div>
                  
                  {/* Main Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Community Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-tuggi-primary">150+</div>
                      <div className="text-sm text-neutral-600">Participantes</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-tuggi-secondary">23</div>
                      <div className="text-sm text-neutral-600">Cidades</div>
                    </div>
                  </div>
                  
                  {/* Beta Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full border border-tuggi-primary/20">
                    <div className="w-2 h-2 bg-tuggi-primary rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-semibold text-tuggi-primary">Fase Beta Ativa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Statements */}
          <div className="space-y-8 lg:space-y-12">
            {/* First Statement */}
            <div className="group">
              <div className="text-center">
                <p className="text-xl lg:text-2xl font-medium text-tuggi-primary mb-4 group-hover:text-tuggi-primary-dark transition-colors duration-300">
                  {content.block5.content[3]}
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Statement */}
            <div className="group">
              <div className="text-center">
                <p className="text-xl lg:text-2xl font-medium text-tuggi-primary mb-4 group-hover:text-tuggi-primary-dark transition-colors duration-300">
                  {content.block5.content[4]}
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5 rounded-3xl p-8 lg:p-12 border border-tuggi-primary/10">
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                Faça parte da construção
              </h3>
              <p className="text-base lg:text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
                Junte-se a nós e ajude a moldar o futuro da cultura urbana no Brasil
              </p>
              <button 
                onClick={() => handleCTAClick('join_beta')}
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 group"
              >
                <span>Participar da pesquisa</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Visual Element - App Mockup */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              A Tuggi em ação
          </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Veja como transformamos qualquer trajeto em uma jornada de descobertas culturais
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative bg-gradient-subtle rounded-3xl p-6 lg:p-8">
              {/* Mobile App Interface */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto" style={{width: '240px', height: '480px'}}>
                {/* Status Bar */}
                <div className="bg-neutral-100 px-6 py-3 flex items-center justify-between">
                  <div className="text-xs font-semibold text-neutral-700">9:41</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-neutral-400 rounded-sm"></div>
                    <div className="w-1 h-2 bg-neutral-400 rounded-sm"></div>
                    <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="bg-tuggi-primary px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Tuggi</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">🎧</span>
                    </div>
                  </div>
                  <div className="text-sm opacity-90 mt-1">Copiloto Cultural</div>
                </div>
                
                {/* Main Content */}
                <div className="p-6 space-y-4">
                  {/* Current Location */}
                  <div className="bg-tuggi-primary/5 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">São Paulo - Centro</div>
                        <div className="text-xs text-neutral-600">Histórias descobertas: 15</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Story */}
                  <div className="bg-gradient-aurora rounded-lg p-4">
                    <div className="text-sm font-semibold text-tuggi-primary mb-2">🎙️ Agora tocando</div>
                    <div className="text-sm text-neutral-800 font-medium mb-2">A História da Liberdade</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-neutral-200 rounded-full">
                        <div className="h-2 bg-tuggi-primary rounded-full w-1/3"></div>
                      </div>
                      <div className="text-xs text-neutral-600">2:30</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">Cultura em movimento</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">Histórias vivas</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">Conhecimento livre</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTASection 
        currentLanguage={currentLanguage}
        onCTAClick={handleCTAClick}
      />
    </div>
  );
};

export default PurposePage;