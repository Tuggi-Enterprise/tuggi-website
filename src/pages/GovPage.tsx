import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  Map,
  Shield,
  Clock,
  Play,
  ArrowRight,
  Database,
  Globe,
  AudioLines,
  TrendingUp,
  Layers,
  Lock,
  Eye,
  FileCheck,
  Languages,
  Activity,
  Workflow,
  Download,
  ListChecks
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface GovPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position: string) => void;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const GovPage: React.FC<GovPageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const trackEvent = useCallback((eventName: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        page_type: 'gov_v4_premium',
        language: currentLanguage,
        ...params
      });
    }
  }, [currentLanguage]);

  useEffect(() => {
    trackEvent('gov_page_view', { timestamp: new Date().toISOString() });
  }, [trackEvent]);

  const handleCTAClick = (ctaType: string, position: string) => {
    if (onCTAClick) {
      onCTAClick(ctaType, position);
    }
    trackEvent(`gov_cta_${ctaType}`, { position });
    
    if (ctaType === 'schedule' || ctaType === 'demo') {
      window.open('https://calendar.app.google/vXKcgKDz8oo4eTyG9', '_blank');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================================================================== */}
      {/* SEÇÃO 1: HERO (PREMIUM ENTERPRISE) */}
      {/* ================================================================== */}
      {/* ================================================================== */}
      {/* SEÇÃO 1: HERO (PREMIUM ENTERPRISE) */}
      {/* ================================================================== */}
      {/* ================================================================== */}
      {/* SEÇÃO 1: HERO (PREMIUM ENTERPRISE) */}
      {/* ================================================================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FDFDFF] overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-5">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 text-xs font-bold tracking-widest uppercase"
                >
                  <Activity size={14} /> Tuggi City OS v4.2
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
                  Infraestrutura de Inteligência Territorial
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                  O sistema operacional oficial para gerenciar inventário, conteúdo multilíngue e dados de visitação em tempo real.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, text: 'Implantação em 30 dias' },
                  { icon: Shield, text: 'Governança Auditável' },
                  { icon: BarChart3, text: 'BI Territorial' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <button 
                  onClick={() => handleCTAClick('schedule', 'hero_primary')}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-950 rounded-xl hover:bg-slate-900 transition-all shadow-2xl shadow-slate-900/20"
                >
                  Agendar Apresentação
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('video-demo')}
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  <Play className="w-5 h-5 mr-3 fill-current" />
                  Ver em Ação
                </button>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:translate-x-12"
            >
              <div className="relative z-10 rounded-2xl shadow-[0_32px_64px_-12px_rgba(15,23,42,0.15)] border border-slate-200/50 bg-white p-2.5 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                <img 
                  src="/images/gov/light_mode_dashboard_mockup.png" 
                  alt="City OS Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Perspective Shadows */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-100/30 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 2: VÍDEO INSTITUCIONAL (NOVO) */}
      {/* ================================================================== */}
      <section id="video-demo" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100 group">
             {/* Thumbnail Placeholder - Em produção, substituir pelo componente de vídeo real */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <p className="text-slate-400 font-medium">Vídeo de Apresentação Institucional</p>
                </div>
             </div>
             {/* Aqui entrará o iframe ou componente de vídeo */}
             {/* <iframe src="..." className="w-full h-full" ... /> */}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 3: O CICLO DE INTELIGÊNCIA */}
      {/* ================================================================== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic tracking-tight text-white">O que a gestão não enxerga, o City OS resolve.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Transformamos dados brutos e inventários dispersos em uma infraestrutura coordenada de turismo inteligente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Curadoria & Governança", 
                desc: "A Secretaria centraliza o inventário e aprova as narrativas oficiais em múltiplos idiomas.",
                icon: FileCheck
              },
              { 
                step: "02", 
                title: "Ativação Territorial", 
                desc: "O sistema ativa os conteúdos via áudio geossincronizado, guiando o fluxo de visitantes em tempo real.",
                icon: Workflow
              },
              { 
                step: "03", 
                title: "Inteligência de Dados", 
                desc: "O dashboard captura o comportamento real no território, gerando mapas de calor e rankings de demanda.",
                icon: BarChart3
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-slate-700 opacity-50 group-hover:text-blue-500 group-hover:opacity-100 transition-all">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 4: CAPACIDADES INTEGRADAS */}
      {/* ================================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tighter">
                Recursos Integrados
              </h2>
              <p className="text-xl text-slate-500 font-light">
                Módulos projetados para a escala e os requisitos de segurança do setor público.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Inventário e Operação',
                icon: Layers,
                color: '#4f46e5',
                bgColor: 'bg-indigo-600',
                features: [
                  'Geolocalização precisa de POIs* em escala',
                  'Filtros administrativos por status e cobertura',
                  'Importação massiva e ações laboratoriais em lote',
                  'Gestão de categorias e ativos territoriais'
                ]
              },
              {
                title: 'Conteúdo e Governança',
                icon: FileCheck,
                color: '#2563eb',
                bgColor: 'bg-blue-600',
                features: [
                  'Escrita apoiada por IA com verificação factual',
                  'Workflow de aprovação auditável (Rascunho a Publicado)',
                  'Score de qualidade editorial e referências',
                  'Soberania narrativa do município garantida'
                ]
              },
              {
                title: 'Áudio & Multilíngue',
                icon: Languages,
                color: '#9333ea',
                bgColor: 'bg-purple-600',
                features: [
                  'Geração de narração em +6 idiomas instantaneamente',
                  'Vozes profissionais via rede neural estável',
                  'Fidelidade na tradução e termos técnicos locais',
                  'Versionamento de áudio para atualizações sazonais'
                ]
              },
              {
                title: 'Inteligência Territorial',
                icon: TrendingUp,
                color: '#10b981',
                bgColor: 'bg-emerald-600',
                features: [
                  'Biometria de visitação por idioma e origem',
                  'Mapas de calor de concentração de demanda',
                  'Relatórios mensais exportáveis para gestão',
                  'Métricas de engajamento e retenção no território'
                ]
              }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-200/20 translate-x-10 translate-y-10 rounded-full"></div>
                
                <div className={`w-16 h-16 flex-shrink-0 ${pillar.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-slate-950 mb-6 uppercase tracking-tight">{pillar.title}</h3>
                  <ul className="space-y-4">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: pillar.color }}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* SEÇÃO 6: METRICS GRID */}
      {/* ================================================================== */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-950 mb-4 tracking-tight">Gestão Eficiente</h2>
            <p className="text-slate-500 text-lg">O que o Município passa a medir em tempo real.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Visitação Real", value: "Ranking POIs", icon: Map },
              { label: "Origem do Visitante", value: "Distribuição Idioma", icon: Globe },
              { label: "Engajamento", value: "Score Experiência", icon: Activity },
              { label: "Concentração", value: "Mapas de Calor", icon: TrendingUp },
              { label: "Conteúdo", value: "Audios Publicados", icon: AudioLines },
              { label: "Sazonalidade", value: "Relatórios Export.", icon: Download },
              { label: "Eficiência", value: "Ações em Lote", icon: ListChecks },
              { label: "Sinalização", value: "Cobertura (%)", icon: Database }
            ].map((metric, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-400 mb-6 font-bold group-hover:text-blue-600 transition-colors shadow-sm">
                  <metric.icon size={20} />
                </div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{metric.label}</div>
                <div className="text-lg font-black text-slate-900 tracking-tight">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================== */}
      {/* SEÇÃO 7: IMPLANTAÇÃO (SEM REPETIÇÃO) */}
      {/* ================================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tighter">
                Operação em 30 dias
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                Processo estruturado de implementação que garante autonomia e governança imediata.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-white shrink-0 font-black">01</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Fase 1: Setup & Inventário</h4>
                    <p className="text-sm text-slate-500">Configuração de acessos, importação de POIs oficiais e ativação da identidade municipal.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 font-black">02</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Fase 2: Curadoria & Publicação</h4>
                    <p className="text-sm text-slate-500">Produção de conteúdos via IA, revisão editorial e publicação dos primeiros roteiros territoriais.</p>
                  </div>
                </div>
                 <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0 font-black">03</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Operação Contínua</h4>
                    <p className="text-sm text-slate-500">Inteligência de dados mensais, mapas de calor e expansão progressiva por zonas turísticas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100">
               <div className="text-center space-y-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-12 text-slate-500">Segurança & Conformidade</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center gap-3">
                      <Shield className="w-8 h-8 text-slate-900" />
                      <span className="text-[10px] font-bold text-slate-600 text-center uppercase">Controle de Dados Municipal (GDPR/LGPD)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <Lock className="w-8 h-8 text-slate-900" />
                      <span className="text-[10px] font-bold text-slate-600 text-center uppercase">Infraestrutura em Nuvem Auditável</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <Eye className="w-8 h-8 text-slate-900" />
                      <span className="text-[10px] font-bold text-slate-600 text-center uppercase">Histórico de Alterações Publicitáveis</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <FileCheck className="w-8 h-8 text-slate-900" />
                      <span className="text-[10px] font-bold text-slate-600 text-center uppercase">Soberania Narrativa Garantida</span>
                    </div>
                  </div>
                  <div className="pt-12 border-t border-slate-200">
                    <p className="text-xs text-slate-400 italic">
                      Desenvolvido para atender aos requisitos de procurement e transparência pública conforme normativas vigentes.
                    </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 8: CTA FINAL (HIGH IMPACT - SEM REPETIÇÃO) */}
      {/* ================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden group">
            {/* Animated Light Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 blur-[120px] opacity-10 -translate-y-1/2 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Transforme a gestão do seu destino agora.
              </h2>
              <p className="text-xl text-slate-400 font-light">
                Agende uma apresentação técnica exclusiva para sua secretaria e conheça o Tuggi City OS em operação.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button 
                  onClick={() => handleCTAClick('schedule', 'footer_cta')}
                  className="w-full sm:w-auto px-12 py-6 text-xl font-bold bg-white text-slate-950 rounded-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl"
                >
                  Agendar Apresentação
                </button>
                <div className="flex gap-6 items-center">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                        <Activity size={16} className="text-blue-500" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold leading-tight">Implementado em escala</div>
                    <div className="text-slate-500 text-xs">Gestão moderna de destinos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-12 bg-white border-t border-slate-100 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-lg">T</div>
              <div>
                <div className="text-slate-900 font-black uppercase tracking-widest text-lg leading-none">Tuggi City OS</div>
                <div className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase leading-none">Platform version 4.2</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <button onClick={() => handleCTAClick('privacy_policy', 'footer')} className="hover:text-slate-900 transition-colors font-medium text-left">Privacidade</button>
              <button onClick={() => handleCTAClick('terms_of_use', 'footer')} className="hover:text-slate-900 transition-colors font-medium text-left">Termos de Uso</button>
              <a href="mailto:contato@tuggi.com.br" className="hover:text-slate-900 transition-colors font-medium">contato@tuggi.com.br</a>
            </div>
            
            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              © 2026 Tuggi Enterprise. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default GovPage;
