import React from 'react';
import { Shield, FileText, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

interface GovTermsOfUsePageProps {
  currentLanguage?: string;
  onBack?: () => void;
}

const GovTermsOfUsePage: React.FC<GovTermsOfUsePageProps> = ({ onBack }) => {
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
             <span className="font-bold text-slate-900">Tuggi City OS <span className="text-slate-400 font-normal">| Termos</span></span>
          </div>
          <button 
            onClick={handleBack}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 space-y-12">
          
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 text-xs font-bold tracking-widest uppercase mb-4">
              <Shield size={14} /> Contrato de Licença de Uso - Administração Pública
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-950 mb-4">Termos de Uso do Sistema Tuggi City OS</h1>
            <p className="text-slate-500 text-lg">
              Estes termos regem o uso do Tuggi City OS por Municípios e Entes Governamentais, garantindo a legitimidade na gestão de dados e conteúdo público.
            </p>
            <p className="text-xs text-slate-400 mt-4">Última atualização: 08 de Fevereiro de 2026</p>
          </div>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <FileText className="w-5 h-5 text-slate-400" />
               1. Licença de Uso Não-Exclusiva
             </h2>
             <p className="text-sm">
               A Tuggi Enterprise concede ao Contratante (Ente Público) uma licença de uso <strong>não exclusiva, intransferível e temporária</strong> do software Tuggi City OS. O sistema é disponibilizado no modelo SaaS (Software as a Service) hospedado em nuvem, acessível via navegador web.
             </p>
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
               <li>A licença é válida para o território e período definidos em contrato específico.</li>
               <li>Atualizações de segurança e funcionalidades core estão inclusas na licença padrão.</li>
               <li>O acesso é permitido a gestores credenciados e servidores públicos autorizados.</li>
             </ul>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <CheckCircle2 className="w-5 h-5 text-slate-400" />
               2. Responsabilidade sobre o Conteúdo
             </h2>
             <p className="text-sm">
               O Ente Público é <strong>o único responsável</strong> pela veracidade, qualidade e direitos autorais de todo o conteúdo inserido na plataforma (textos, imagens, áudios e configurações de mapas).
             </p>
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
               <li>O Tuggi City OS não modera conteúdo previamente, atuando apenas como infraestrutura tecnológica.</li>
               <li>O Município deve garantir que possui os direitos de uso de imagens e marcas inseridas.</li>
               <li>Recomendamos o uso do módulo de <strong>Governança Editorial</strong> para garantir conformidade com políticas de comunicação pública.</li>
             </ul>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <AlertTriangle className="w-5 h-5 text-slate-400" />
               3. Garantias e SLA (Acordo de Nível de Serviço)
             </h2>
             <p className="text-sm">
               Garantimos uma disponibilidade de infraestrutura mínima de <strong>99.5%</strong> (uptime) calculada mensalmente. Manutenções programadas serão comunicadas com antecedência mínima de 48 horas.
             </p>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-4 text-sm">
               <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">Suporte Técnico:</h3>
               <p>
                 O suporte técnico especializado está disponível para administradores durante o horário comercial (9h às 18h, dias úteis). Para incidentes críticos (impossibilidade de acesso total), o atendimento é 24/7.
               </p>
             </div>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <Shield className="w-5 h-5 text-slate-400" />
               4. Propriedade Intelectual
             </h2>
             <p className="text-sm">
               O código-fonte, design, algoritmos e marcas do Tuggi City OS são propriedade exclusiva da Tuggi Enterprise.
             </p>
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
               <li>O Contratante detém a propriedade intelectual sobre os dados e conteúdos específicos do seu município.</li>
               <li>É vedada a engenharia reversa, sublicenciamento ou cópia não autorizada do software.</li>
             </ul>
          </section>

           <section className="border-t border-slate-100 pt-8 mt-12">
               <h3 className="font-bold text-slate-900 mb-2">Dúvidas Legais?</h3>
               <p className="text-sm">
                 Para questões relacionadas a contratos e licenciamento:<br/>
                 <strong>Email:</strong> legal@tuggi.com.br<br/>
                 <strong>Telefone:</strong> +55 (11) 3003-0000
               </p>
            </section>

        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200 mt-12">
        <p>© 2026 Tuggi Enterprise. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default GovTermsOfUsePage;
