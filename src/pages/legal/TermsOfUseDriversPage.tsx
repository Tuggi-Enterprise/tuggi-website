import React from 'react';


interface TermsOfUseDriversPageProps {
  currentLanguage?: string;
}

const TermsOfUseDriversPage: React.FC<TermsOfUseDriversPageProps> = ({ currentLanguage = 'PT' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        title: 'Termos de Uso - Licença Host (Motoristas)',
        lastUpdated: 'Última atualização: Fevereiro 2026',
        introduction: 'Estes Termos de Uso Específicos ("Termos Host") regem o acesso e uso da "Licença Host" ou "Licença Profissional" do aplicativo Tuggi por motoristas profissionais. Ao ativar o perfil "Motorista Profissional" no aplicativo, você concorda com estes termos, que complementam os Termos de Uso gerais.',
        sections: [
          {
            title: '1. Definição da Licença Host',
            content: `A Licença Host é uma modalidade de acesso subsidiada (gratuita) oferecida exclusivamente para profissionais de transporte (Táxi, Aplicativos, Transfer, Limousine) que utilizam o Tuggi como infraestrutura de serviço para seus passageiros.
            
            Ao contrário da licença de usuário comum ("Turista"), a Licença Host não é destinada ao consumo pessoal de entretenimento, mas sim à **distribuição de conteúdo** para terceiros (passageiros) dentro do veículo.`
          },
          {
            title: '2. Elegibilidade',
            content: `Para ser elegível à Licença Host Gratuita, você deve:
            
            • Exercer atividade remunerada de transporte de passageiros.
            • Utilizar o aplicativo estritamente durante o exercício de sua função profissional.
            • Manter um padrão de serviço compatível com as diretrizes da plataforma (avaliações positivas).`
          },
          {
            title: '3. Uso Autorizado',
            content: `A Licença Host concede ao Motorista o direito de:
            
            • Reproduzir o conteúdo de áudio do Tuggi publicamente dentro do seu veículo para seus passageiros.
            • Utilizar os materiais de marketing fornecidos pela Tuggi para divulgar o serviço.
            
            É estritamente proibido:
            • Cobrar dos passageiros especificamente pelo "uso do Tuggi" (o valor deve estar diluído no serviço de transporte ou ser uma cortesia).
            • Revender, sublicenciar ou alugar a Licença Host para terceiros.
            • Utilizar a Licença Host para viagens pessoais de turismo (desvio de finalidade).`
          },
          {
            title: '4. Modelo "Driver-as-Infrastructure"',
            content: `Você reconhece que, nesta modalidade, você atua como um parceiro de infraestrutura de distribuição da Tuggi. Em troca do acesso gratuito à plataforma (que tem custo para usuários finais), você fornece o canal de distribuição (seu veículo e audiência). A Tuggi se reserva o direito de revogar a licença caso este alinhamento de interesses deixe de existir.`
          },
          {
            title: '5. Isenção de Responsabilidade',
            content: `O Tuggi é uma ferramenta de auxílio ao entretenimento. O Motorista permanece sendo o único responsável pela segurança do veículo e dos passageiros. O uso do aplicativo não deve, em hipótese alguma, distrair o motorista ou interferir na condução segura.`
          }
        ]
      },
      EN: {
        title: 'Terms of Use - Host License (Drivers)',
        lastUpdated: 'Last updated: February 2026',
        introduction: 'These Specific Terms of Use ("Host Terms") govern access to and use of the "Host License" or "Professional License" of the Tuggi app by professional drivers. By activating the "Professional Driver" profile in the app, you agree to these terms, which supplement the general Terms of Use.',
        sections: [
          {
            title: '1. Host License Definition',
            content: `The Host License is a subsidized (free) access mode offered exclusively to transport professionals (Taxi, Rideshare, Transfer, Livery) who use Tuggi as service infrastructure for their passengers.
            
            Unlike the standard user license ("Tourist"), the Host License is not intended for personal entertainment consumption, but for the **distribution of content** to third parties (passengers) within the vehicle.`
          },
          {
            title: '2. Eligibility',
            content: `To be eligible for the Free Host License, you must:
            
            • Be engaged in paid passenger transport activity.
            • Use the application strictly alongside your professional duties.
            • Maintain a service standard compatible with platform guidelines.`
          },
          {
            title: '3. Authorized Use',
            content: `The Host License grants the Driver the right to:
            
            • Publicly play Tuggi audio content within their vehicle for passengers.
            • Use marketing materials provided by Tuggi to promote the service.
            
            It is strictly prohibited to:
            • Charge passengers specifically for "Tuggi use" (value must be included in transport service or as a courtesy).
            • Resell, sublicense, or rent the Host License to third parties.
            • Use the Host License for personal leisure travel.`
          },
          {
            title: '4. "Driver-as-Infrastructure" Model',
            content: `You acknowledge that in this mode, you act as a distribution infrastructure partner for Tuggi. In exchange for free platform access (which has a cost for end users), you provide the distribution channel (your vehicle and audience). Tuggi reserves the right to revoke the license if this alignment of interests ceases to exist.`
          },
          {
            title: '5. Disclaimer',
            content: `Tuggi is an entertainment aid tool. The Driver remains solely responsible for vehicle and passenger safety. Use of the application must never distract the driver or interfere with safe driving.`
          }
        ]
      },
      ES: {
        title: 'Términos de Uso - Licencia Host (Conductores)',
        lastUpdated: 'Última actualización: Febrero 2026',
        introduction: 'Estos Términos de Uso Específicos ("Términos Host") rigen el acceso y uso de la "Licencia Host" o "Licencia Profesional" de la aplicación Tuggi por conductores profesionales. Al activar el perfil "Conductor Profesional" en la app, aceptas estos términos, que complementan los Términos de Uso generales.',
        sections: [
          {
            title: '1. Definición de Licencia Host',
            content: `La Licencia Host es una modalidad de acceso subsidiada (gratuita) ofrecida exclusivamente a profesionales del transporte (Taxi, Apps, Transfer, VTC) que utilizan Tuggi como infraestructura de servicio para sus pasajeros.
            
            A diferencia de la licencia de usuario común ("Turista"), la Licencia Host no está destinada al consumo personal de entretenimiento, sino a la **distribución de contenido** a terceros (pasajeros) dentro del vehículo.`
          },
          {
            title: '2. Elegibilidad',
            content: `Para ser elegible para la Licencia Host Gratuita, debes:
            
            • Ejercer actividad remunerada de transporte de pasajeros.
            • Utilizar la aplicación estrictamente durante el ejercicio de tu función profesional.
            • Mantener un estándar de servicio compatible con las pautas de la plataforma.`
          },
          {
            title: '3. Uso Autorizado',
            content: `La Licencia Host otorga al Conductor el derecho a:
            
            • Reproducir el contenido de audio de Tuggi públicamente dentro de su vehículo para sus pasajeros.
            • Utilizar los materiales de marketing proporcionados por Tuggi.
            
            Está estrictamente prohibido:
            • Cobrar a los pasajeros específicamente por el "uso de Tuggi".
            • Revender, sublicenciar o alquilar la Licencia Host a terceros.
            • Utilizar la Licencia Host para viajes personales de turismo.`
          },
          {
            title: '4. Modelo "Driver-as-Infrastructure"',
            content: `Reconoces que, en esta modalidad, actúas como un socio de infraestructura de distribución de Tuggi. A cambio del acceso gratuito a la plataforma, proporcionas el canal de distribución. Tuggi se reserva el derecho de revocar la licencia si esta alineación de intereses deja de existir.`
          },
          {
            title: '5. Exención de Responsabilidad',
            content: `Tuggi es una herramienta de ayuda al entretenimiento. El Conductor sigue siendo el único responsable de la seguridad del vehículo y de los pasajeros.`
          }
        ]
      },
      FR: {
        title: 'Conditions d\'Utilisation - Licence Host (Chauffeurs)',
        lastUpdated: 'Dernière mise à jour : Février 2026',
        introduction: 'Ces Conditions d\'Utilisation Spécifiques ("Conditions Host") régissent l\'accès et l\'utilisation de la "Licence Host" ou "Licence Professionnelle" de l\'application Tuggi par les chauffeurs professionnels. En activant le profil "Chauffeur Professionnel" dans l\'application, vous acceptez ces conditions.',
        sections: [
          {
            title: '1. Définition de la Licence Host',
            content: `La Licence Host est un mode d'accès subventionné (gratuit) offert exclusivement aux professionnels du transport (Taxi, VTC, Transfert) qui utilisent Tuggi comme infrastructure de service pour leurs passagers.
            
            Contrairement à la licence utilisateur standard ("Touriste"), la Licence Host n'est pas destinée à la consommation personnelle, mais à la **distribution de contenu** à des tiers (passagers) dans le véhicule.`
          },
          {
            title: '2. Éligibilité',
            content: `Pour être éligible à la Licence Host Gratuite, vous devez :
            
            • Exercer une activité rémunérée de transport de passagers.
            • Utiliser l'application strictement dans l'exercice de votre fonction.
            • Maintenir un standard de service compatible avec les directives de la plateforme.`
          },
          {
            title: '3. Usage Autorisé',
            content: `La Licence Host accorde au Chauffeur le droit de :
            
            • Diffuser le contenu audio de Tuggi publiquement dans son véhicule pour ses passagers.
            • Utiliser le matériel marketing fourni par Tuggi.
            
            Il est strictement interdit de :
            • Facturer spécifiquement les passagers pour "l'utilisation de Tuggi".
            • Revendre, sous-licencier ou louer la Licence Host à des tiers.
            • Utiliser la Licence Host pour des voyages personnels.`
          },
          {
            title: '4. Modèle "Driver-as-Infrastructure"',
            content: `Vous reconnaissez agir comme partenaire d'infrastructure de distribution. En échange de l'accès gratuit, vous fournissez le canal de distribution (votre véhicule).`
          },
          {
            title: '5. Clause de Non-responsabilité',
            content: `Tuggi est un outil de divertissement. Le Chauffeur reste seul responsable de la sécurité du véhicule et des passagers.`
          }
        ]
      },
      DE: {
        title: 'Nutzungsbedingungen - Host-Lizenz (Fahrer)',
        lastUpdated: 'Letzte Aktualisierung: Februar 2026',
        introduction: 'Diese spezifischen Nutzungsbedingungen ("Host-Bedingungen") regeln den Zugang und die Nutzung der "Host-Lizenz" oder "Profi-Lizenz" der Tuggi-App durch Berufskraftfahrer. Durch Aktivieren des Profils "Berufskraftfahrer" stimmen Sie diesen Bedingungen zu.',
        sections: [
          {
            title: '1. Definition der Host-Lizenz',
            content: `Die Host-Lizenz ist ein subventionierter (kostenloser) Zugang, der exklusiv Transportprofis (Taxi, Mietwagen, Transfer) angeboten wird, die Tuggi als Service-Infrastruktur nutzen.
            
            Im Gegensatz zur Standardlizenz ("Tourist") dient die Host-Lizenz nicht dem persönlichen Konsum, sondern der **Verbreitung von Inhalten** an Dritte (Fahrgäste) im Fahrzeug.`
          },
          {
            title: '2. Berechtigung',
            content: `Um für die kostenlose Host-Lizenz berechtigt zu sein, müssen Sie:
            
            • Eine bezahlte Personenbeförderungstätigkeit ausüben.
            • Die App strikt während Ihrer beruflichen Tätigkeit nutzen.
            • Einen Servicestandard aufrechterhalten, der den Plattformrichtlinien entspricht.`
          },
          {
            title: '3. Autorisierte Nutzung',
            content: `Die Host-Lizenz gewährt dem Fahrer das Recht:
            
            • Tuggi-Audioinhalte öffentlich in seinem Fahrzeug für Fahrgäste abzuspielen.
            • Von Tuggi bereitgestelltes Marketingmaterial zu nutzen.
            
            Es ist streng verboten:
            • Fahrgäste speziell für die "Tuggi-Nutzung" zur Kasse zu bitten.
            • Die Host-Lizenz weiterzuverkaufen oder zu vermieten.
            • Die Host-Lizenz für private Urlaubsreisen zu nutzen.`
          },
          {
            title: '4. Modell "Fahrer-als-Infrastruktur"',
            content: `Sie erkennen an, dass Sie als Vertriebsinfrastrukturpartner für Tuggi handeln. Im Austausch für den kostenlosen Zugang stellen Sie den Vertriebskanal bereit.`
          },
          {
            title: '5. Haftungsausschluss',
            content: `Tuggi ist ein Unterhaltungstool. Der Fahrer bleibt allein verantwortlich für die Sicherheit von Fahrzeug und Passagieren.`
          }
        ]
      },
      IT: {
        title: 'Termini di Utilizzo - Licenza Host (Driver)',
        lastUpdated: 'Ultimo aggiornamento: Febbraio 2026',
        introduction: 'Questi Termini di Utilizzo Specifici ("Termini Host") regolano l\'accesso e l\'uso della "Licenza Host" o "Licenza Professionale" dell\'app Tuggi da parte di autisti professionisti. Attivando il profilo "Autista Professionista" nell\'app, accetti questi termini.',
        sections: [
          {
            title: '1. Definizione Litcenza Host',
            content: `La Licenza Host è una modalità di accesso sussidiata (gratuita) offerta esclusivamente ai professionisti del trasporto (Taxi, NCC, Uber) che utilizzano Tuggi come infrastruttura di servizio.
            
            A differenza della licenza standard ("Turista"), la Licenza Host non è destinata al consumo personale, ma alla **distribuzione di contenuti** a terzi (passeggeri) all'interno del veicolo.`
          },
          {
            title: '2. Idoneità',
            content: `Per essere idoneo alla Licenza Host Gratuita, devi:
            
            • Esercitare attività retribuita di trasporto passeggeri.
            • Utilizzare l'app strettamente durante l'esercizio della tua funzione professionale.
            • Mantenere uno standard di servizio compatibile con le linee guida della piattaforma.`
          },
          {
            title: '3. Uso Autorizzato',
            content: `La Licenza Host concede al Driver il diritto di:
            
            • Riprodurre pubblicamente i contenuti audio di Tuggi nel proprio veicolo per i passeggeri.
            • Utilizzare i materiali di marketing forniti da Tuggi.
            
            È severamente vietato:
            • Addebitare ai passeggeri specificamente per l'"uso di Tuggi".
            • Rivendere, sublicenziare o noleggiare la Licenza Host a terzi.
            • Utilizzare la Licenza Host per viaggi personali.`
          },
          {
            title: '4. Modello "Driver-as-Infrastructure"',
            content: `Riconosci che in questa modalità agisci come partner infrastrutturale di distribuzione per Tuggi. In cambio dell'accesso gratuito, fornisci il canale di distribuzione.`
          },
          {
            title: '5. Esclusione di Responsabilità',
            content: `Tuggi è uno strumento di intrattenimento. Il Driver rimane l'unico responsabile della sicurezza del veicolo e dei passeggeri.`
          }
        ]
      }
    };
    
    return content[currentLanguage] || content['EN'];
  };

  const t = getContent();

  return (
    <div className={`c-section bg-gray-50 min-h-screen pt-32 pb-20 fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="c-container max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            {t.title}
          </h1>
          <p className="text-gray-500 mb-12 font-medium">
            {t.lastUpdated}
          </p>

          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-12 border-l-4 border-blue-600 pl-6">
              {t.introduction}
            </p>

            {t.sections.map((section: any, index: number) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tuggi Drive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseDriversPage;
