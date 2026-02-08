import React from 'react';
import { Shield, Lock, Eye, FileCheck, ArrowLeft } from 'lucide-react';

interface GovPrivacyPolicyPageProps {
  currentLanguage?: string;
  onBack?: () => void;
}

const GovPrivacyPolicyPage: React.FC<GovPrivacyPolicyPageProps> = ({ onBack }) => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/gov';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header Simplificado */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-sm">T</div>
             <span className="font-bold text-slate-900">Tuggi City OS <span className="text-slate-400 font-normal">| Privacidade</span></span>
          </div>
          <button 
            onClick={handleBack}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
          
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 text-xs font-bold tracking-widest uppercase mb-4">
              <Shield size={14} /> Compliance & Dados Governamentais
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-950 mb-4">Política de Privacidade de Dados Públicos</h1>
            <p className="text-slate-500 text-lg">
              Esta política detalha como o Tuggi City OS trata, armazena e protege dados de entes públicos e cidadãos, em conformidade com LGPD (Brasil), GDPR (Europa) e padrões internacionais de soberania de dados.
            </p>
            <p className="text-xs text-slate-400 mt-4">Última atualização: 08 de Fevereiro de 2026</p>
          </div>

          <div className="space-y-12 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-slate-400" />
                1. Soberania e Propriedade dos Dados
              </h2>
              <p className="mb-4">
                O Tuggi City OS opera sob o princípio da <strong>Soberania dos Dados Públicos</strong>. Todos os dados inseridos, produzidos ou gerados pela Administração Pública (incluindo inventários, textos, áudios e configurações territoriais) permanecem de propriedade exclusiva do Ente Público contratante.
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                <li>O Tuggi atua como Operador de Dados (Data Processor), enquanto o Ente Público é o Controlador (Data Controller).</li>
                <li>Não compartilhamos, vendemos ou utilizamos dados institucionais para fins publicitários de terceiros.</li>
                <li>A exportação integral dos dados é garantida a qualquer momento, em formatos abertos e interoperáveis (JSON, CSV, GeoJSON).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-slate-400" />
                2. Coleta de Dados de Cidadãos e Visitantes
              </h2>
              <p className="mb-4">
                A coleta de dados via aplicativos e interfaces públicas do Tuggi City OS é estritamente voltada para a melhoria da gestão territorial e experiência do visitante. Adotamos a metodologia de <strong>Privacy by Design</strong>.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-4">
                <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Tipos de Dados Coletados:</h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span><strong>Geolocalização Anonimizada:</strong> Coordenadas para ativação de áudio e mapas de calor, sem vínculo persistente à identidade civil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span><strong>Dados de Uso:</strong> Idioma preferido, tempo de permanência em POIs e interações com conteúdo.</span>
                  </li>
                </ul>
              </div>
              <p>
                Os dados de geolocalização são agregados e anonimizados na origem antes de serem processados para os painéis de Business Intelligence (BI), impossibilitando a reidentificação individual de cidadãos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-slate-400" />
                3. Conformidade Legal (LGPD & GDPR)
              </h2>
              <p className="mb-4">
                Nossa infraestrutura está em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e o General Data Protection Regulation (EU 2016/679).
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                <li><strong>Base Legal:</strong> O processamento de dados é justificado pelo Legítimo Interesse da administração pública e/ou Consentimento explícito do usuário final nos aplicativos.</li>
                <li><strong>Direitos do Titular:</strong> Canais automatizados para solicitação de exclusão, retificação ou portabilidade de dados pessoais.</li>
                <li><strong>Retenção:</strong> Dados brutos de visitação são retidos por no máximo 24 meses, sendo convertidos em estatísticas permanentes após este período.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-slate-400" />
                4. Segurança da Infraestrutura
              </h2>
              <p className="mb-4">
                Utilizamos padrões de segurança de nível bancário e governamental para proteger as informações.
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                <li><strong>Criptografia:</strong> Todos os dados são criptografados em repouso (AES-256) e em trânsito (TLS 1.3).</li>
                <li><strong>Auditabilidade:</strong> Logs de acesso imutáveis registram todas as ações administrativas no painel de gestão.</li>
                <li><strong>Hospedagem:</strong> Servidores localizados em jurisdições compatíveis com a legislação do ente contratante (ex: Data Centers no Brasil para clientes brasileiros).</li>
              </ul>
            </section>

            <section className="border-t border-slate-100 pt-8 mt-12">
               <h3 className="font-bold text-slate-900 mb-2">Contato do Encarregado de Dados (DPO)</h3>
               <p className="text-sm">
                 Para requisições administrativas, auditorias ou dúvidas sobre proteção de dados:<br/>
                 <strong>Email:</strong> dpo@tuggi.com.br<br/>
                 <strong>Endereço Legal:</strong> Av. Paulista, 1106 - São Paulo/SP, Brasil.
               </p>
            </section>

          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200 mt-12">
        <p>© 2026 Tuggi Enterprise. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default GovPrivacyPolicyPage;
