import React from 'react';
import { layout } from '../../utils/designSystem';

interface TermsOfUsePageProps {
  currentLanguage?: string;
}

const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ currentLanguage = 'PT' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        title: 'Termos de Uso',
        lastUpdated: 'Última atualização: Janeiro 2025',
        introduction: 'Estes Termos de Uso descrevem as condições para uso do aplicativo Tuggi e do site oficial tuggi.app. Ao criar uma conta, instalar, acessar ou utilizar nossos serviços, você concorda expressamente com estes termos. Se você não concordar com estes termos, não utilize nossos serviços.',
        sections: [
          {
            title: '1. Aceitação dos Termos',
            content: `Ao utilizar o aplicativo Tuggi ou o site tuggi.app, você confirma que:

• Leu, compreendeu e concorda com estes Termos de Uso e nossa Política de Privacidade
• Tem pelo menos 13 anos de idade (ou idade mínima legal em seu país para consentir ao uso de serviços)
• Tem capacidade legal para celebrar contratos
• Não está proibido de usar nossos serviços sob as leis aplicáveis
• Fornecerá informações verdadeiras e precisas ao criar sua conta

**Se você for menor de 18 anos**, você declara que tem o consentimento de seus pais ou responsáveis legais para usar nossos serviços.

Ao continuar usando nossos serviços após mudanças nestes termos, você aceita as alterações.`
          },
          {
            title: '2. Finalidade do Aplicativo',
            content: `O Tuggi é um copiloto cultural que fornece orientações em áudio sobre pontos de interesse (POIs) baseados na sua localização.

**Funcionalidades Principais:**
• As narrações são acionadas automaticamente conforme você se move
• O app funciona em segundo plano e pode operar durante deslocamentos
• A cobertura geográfica varia por região
• O app detecta automaticamente quando você se aproxima de POIs
• Funcionalidade offline disponível para POIs e áudios pré-baixados

**Propósito:**
O Tuggi é um guia de viagem e ferramenta educacional. O app não substitui sistemas de navegação profissional nem deve ser usado como única fonte de orientação durante viagens.`
          },
          {
            title: '3. Responsabilidades do Usuário',
            subsections: [
              {
                subtitle: '3.1 Segurança Durante o Uso',
                content: `**Uso Seguro é Obrigatório:**

• **NUNCA interaja com o app enquanto dirige** - O app deve ser usado apenas por passageiros ou quando o veículo estiver parado
• Mantenha atenção total à via e às condições de trânsito
• Respeite todas as leis de trânsito locais
• Não use o app de forma que possa distrair o motorista ou comprometer a segurança
• Use o app apenas quando seguro fazê-lo

**Atenção:** O uso inadequado do app durante direção pode resultar em acidentes graves. Você é totalmente responsável por usar o app de forma segura.`
              },
              {
                subtitle: '3.2 Conta e Credenciais',
                content: `Você é responsável por:

• Proteger suas credenciais de acesso (email, senha)
• Não compartilhar sua conta com terceiros
• Ativar autenticação biométrica se disponível para maior segurança
• Notificar imediatamente a Tuggi em caso de acesso não autorizado ou suspeita de violação de segurança
• Manter suas informações de conta atualizadas e precisas
• Usar uma senha forte e única`
              },
              {
                subtitle: '3.3 Uso Apropriado do Serviço',
                content: `Você concorda em usar nossos serviços apenas para fins legais e apropriados:

• Não use o app para atividades ilegais, fraudulentas ou maliciosas
• Não use o app para coletar dados de outros usuários sem autorização
• Não tente acessar áreas não autorizadas do app ou sistemas
• Não interfira com o funcionamento do app ou tente contornar medidas de segurança
• Não use o app para enviar spam, vírus ou código malicioso
• Respeite os direitos de propriedade intelectual de terceiros`
              },
              {
                subtitle: '3.4 Precisão das Informações',
                content: `Você é responsável por:

• Fornecer informações verdadeiras, precisas e completas ao criar sua conta
• Manter suas informações atualizadas
• Não fornecer informações falsas ou enganosas
• Notificar-nos imediatamente sobre qualquer mudança nas informações fornecidas

**Atenção:** Informações imprecisas podem afetar o funcionamento do serviço e resultar em suspensão da conta.`
              },
              {
                subtitle: '3.5 Responsabilidade por Dados de Localização',
                content: `Ao usar o app, você entende e concorda que:

• O app coleta e utiliza dados de localização em tempo real
• Você é responsável por garantir que tem direito de fornecer dados de localização
• Você é responsável por usar o app em locais onde é legal e apropriado fazê-lo
• A Tuggi não é responsável por consequências de uso de dados de localização em locais onde tal uso possa ser restrito ou proibido
• Você deve respeitar leis locais sobre coleta e uso de dados de localização`
              }
            ]
          },
          {
            title: '4. Permissões e Coleta de Dados',
            subsections: [
              {
                subtitle: '4.1 Permissões Obrigatórias',
                content: `Para funcionar adequadamente, o app requer as seguintes permissões:

• **Localização (em 1º e 2º plano):** Obrigatória para detectar sua posição e acionar automaticamente as narrações de POIs. O app não funciona sem esta permissão.
• **Áudio:** Necessária para reprodução das narrações

**Importante:** A permissão de localização é essencial para o funcionamento do app. Sem ela, o app não pode fornecer os serviços de guia de viagem.`
              },
              {
                subtitle: '4.2 Permissões Opcionais',
                content: `As seguintes permissões são opcionais mas melhoram a experiência:

• **Notificações:** Para alertas sobre POIs próximos, atualizações do app e recomendações
• **Biometria:** Para login mais seguro e conveniente
• **Câmera (futuramente):** Para tirar foto de perfil, se desejado

Você pode revogar permissões opcionais a qualquer momento nas configurações do dispositivo, mas isso pode afetar algumas funcionalidades.`
              },
              {
                subtitle: '4.3 Dados de Terceiros',
                content: `O app utiliza serviços de terceiros que podem coletar dados:

• **Serviço de Mapas:** Utilizado para renderização de mapas e serviços de geocodificação. O uso está sujeito aos termos de serviço do provedor.
• **Serviços de Analytics e Monitoramento:** Utilizados para analytics, crash reporting e notificações push, conforme nossa Política de Privacidade.
• **Provedor de Backend:** Utilizado para armazenamento de dados e autenticação, conforme nossa Política de Privacidade.

Ao usar o app, você também concorda com os termos de serviço desses provedores quando aplicável. Consulte nossa [Política de Privacidade](/privacy) para detalhes sobre como tratamos seus dados.`
              }
            ]
          },
          {
            title: '5. Limitações do Serviço',
            content: `O app está sujeito às seguintes limitações técnicas:

• **Requisitos de Dispositivo:** É necessário dispositivo com GPS e acesso à internet na instalação inicial
• **Armazenamento:** O app requer aproximadamente 50MB de espaço livre para cache de áudios
• **Compatibilidade:** Compatível com iOS 12+ e Android 5.0+
• **Cobertura:** A cobertura de POIs pode ser limitada em algumas regiões geográficas
• **Conectividade:** Algumas funcionalidades requerem conexão à internet, embora funcionalidade offline esteja disponível para conteúdo pré-baixado
• **Precisão:** A precisão da localização depende de condições externas (GPS, sinal, qualidade do dispositivo)

A Tuggi não garante que o serviço estará sempre disponível, ininterrupto ou livre de erros.`
          },
          {
            title: '6. Uso Apropriado e Restrições',
            content: `Ao usar nossos serviços, você concorda em:

• Usar o app apenas para os fins previstos e legais
• Não modificar, adaptar, hackear, distribuir ou descompilar o aplicativo
• Não utilizar o app para atividades ilegais, fraudulentas ou comerciais sem autorização expressa
• Não tentar acessar áreas não autorizadas do app ou sistemas relacionados
• Não interferir com o funcionamento do app ou tentar contornar medidas de segurança
• Não usar o app de forma que viole direitos de terceiros
• Não coletar dados de outros usuários sem autorização

**Violação destas regras pode resultar em suspensão ou encerramento imediato da conta.**`
          },
          {
            title: '7. Propriedade Intelectual',
            content: `Todos os direitos de propriedade intelectual relacionados aos nossos serviços pertencem à Tuggi ou aos seus licenciadores:

• **Conteúdo do App:** As narrações, textos, imagens, áudios, designs e todo conteúdo do app são protegidos por direitos autorais e outras leis de propriedade intelectual
• **Marca e Identidade:** A marca Tuggi, logotipos, nomes comerciais e elementos visuais são de propriedade exclusiva da Tuggi
• **Software:** O código do aplicativo, algoritmos e tecnologia são protegidos por direitos autorais e segredos comerciais
• **Feedback:** Você mantém os direitos sobre feedback, sugestões ou comentários enviados, mas concede à Tuggi uma licença mundial, não exclusiva e gratuita para usar, modificar e incorporar esse feedback em nossos serviços

Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte de nossos serviços sem autorização expressa por escrito.`
          },
          {
            title: '8. Limitação de Responsabilidade',
            content: `**DISCLAIMER DE RESPONSABILIDADE:**

Na máxima extensão permitida por lei, a Tuggi não será responsável por:

• **Danos Diretos, Indiretos ou Consequenciais:** Perda de dados, lucros, receita, oportunidades de negócio ou danos morais decorrentes do uso ou impossibilidade de uso do app
• **Precisão de Informações:** As informações narradas podem não refletir dados atualizados, completos ou precisos. O app não garante a precisão absoluta das informações fornecidas
• **Condições Externas:** A precisão da localização e funcionalidade do app dependem de condições externas (GPS, sinal, qualidade do dispositivo, condições climáticas) fora do controle da Tuggi
• **Uso Inadequado:** A Tuggi não é responsável por danos resultantes de uso inadequado do app, incluindo uso durante direção ou em locais proibidos
• **Interrupções:** A Tuggi não garante funcionamento ininterrupto ou livre de erros do serviço

**O app é fornecido "COMO ESTÁ" e "CONFORME DISPONÍVEL", sem garantias de qualquer tipo.**`
          },
          {
            title: '9. Limitações de Garantias',
            content: `**EXCLUSÃO DE GARANTIAS:**

Na máxima extensão permitida por lei, a Tuggi renuncia a todas as garantias, expressas ou implícitas, incluindo mas não limitado a:

• Garantias de comercialização, adequação a um propósito específico ou não violação
• Garantias de que o serviço será ininterrupto, seguro, livre de erros ou vírus
• Garantias sobre a precisão, confiabilidade ou atualidade das informações fornecidas
• Garantias de que defeitos serão corrigidos ou que o serviço atenderá suas expectativas

**O app não substitui sistemas de navegação profissional** e não deve ser usado como única fonte de orientação durante viagens. O app é um guia cultural e educacional, não um sistema de navegação em tempo real.`
          },
          {
            title: '10. Suspensão e Encerramento de Conta',
            content: `**Encerramento pela Tuggi:**
A Tuggi pode suspender ou encerrar sua conta e acesso aos serviços imediatamente, sem aviso prévio, se:

• Você violar estes Termos de Uso ou nossa Política de Privacidade
• Você usar o app de forma ilegal, fraudulenta ou inadequada
• Você fornecer informações falsas ou enganosas
• A Tuggi determinar, a seu critério exclusivo, que seu uso representa risco para outros usuários ou para a Tuggi

**Encerramento pelo Usuário:**
Você pode encerrar sua conta a qualquer momento através das configurações do app ou entrando em contato conosco.

**Efeitos do Encerramento:**
• Seu direito de usar o app cessará imediatamente
• Alguns dados podem ser mantidos conforme obrigações legais ou para fins de auditoria
• Dados pessoais serão tratados conforme nossa Política de Privacidade e LGPD/GDPR`
          },
          {
            title: '11. Modificações e Atualizações',
            subsections: [
              {
                subtitle: '11.1 Atualizações do App',
                content: `A Tuggi pode modificar, atualizar ou descontinuar funcionalidades do app a qualquer momento. Você pode ser solicitado a atualizar o app para continuar usando os serviços. Não garantimos que versões antigas do app continuarão funcionando.`
              },
              {
                subtitle: '11.2 Atualizações dos Termos',
                content: `A Tuggi pode modificar estes Termos de Uso periodicamente. Mudanças significativas serão comunicadas:

• Através do app (notificação push ou banner)
• Por e-mail para o endereço associado à sua conta
• Publicação da data de "última atualização" no topo desta página

**Aceitação Contínua:**
Ao continuar usando nossos serviços após mudanças nos termos, você concorda com as alterações. Se você não concordar com as mudanças, deve encerrar sua conta e parar de usar os serviços.

**Revisão Periódica:**
Recomendamos que você revise estes termos periodicamente para estar ciente de quaisquer mudanças.`
              }
            ]
          },
          {
            title: '12. Resolução de Disputas',
            subsections: [
              {
                subtitle: '12.1 Lei Aplicável',
                content: `Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil, sem consideração a seus princípios de conflito de leis.

Para usuários fora do Brasil, as leis do seu país podem se aplicar, mas estes termos serão interpretados conforme as leis brasileiras na medida do possível.`
              },
              {
                subtitle: '12.2 Jurisdição',
                content: `Qualquer disputa relacionada a estes termos ou aos nossos serviços será resolvida nos tribunais competentes de São Paulo, SP, Brasil, e você concorda com a jurisdição exclusiva desses tribunais.

Para disputas envolvendo usuários da União Europeia, você pode ter direito adicional de apresentar reclamação junto à autoridade de proteção de dados do seu país.`
              },
              {
                subtitle: '12.3 Resolução Amigável',
                content: `Antes de iniciar qualquer processo judicial formal, você concorda em:

• Tentar resolver disputas amigavelmente através de comunicação direta com a Tuggi
• Fornecer detalhes escritos sobre a disputa
• Aguardar um período razoável (30 dias) para resposta da Tuggi

A Tuggi se compromete a responder a disputas de boa fé e buscar soluções mutuamente aceitáveis.`
              },
              {
                subtitle: '12.4 Arbitragem (se aplicável)',
                content: `Para disputas que não possam ser resolvidas amigavelmente, você e a Tuggi concordam em tentar resolver através de arbitragem de acordo com as regras da Câmara de Arbitragem aplicável, a menos que a lei exija procedimento diferente.`
              }
            ]
          },
          {
            title: '13. Disposições Gerais',
            subsections: [
              {
                subtitle: '13.1 Acordo Completo',
                content: `Estes Termos de Uso, junto com nossa Política de Privacidade e Política de Cookies, constituem o acordo completo entre você e a Tuggi sobre o uso dos serviços.`
              },
              {
                subtitle: '13.2 Divisibilidade',
                content: `Se qualquer disposição destes termos for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito.`
              },
              {
                subtitle: '13.3 Renúncia',
                content: `A falha da Tuggi em exercer qualquer direito sob estes termos não constitui renúncia a tal direito.`
              },
              {
                subtitle: '13.4 Cessão',
                content: `Você não pode transferir ou ceder seus direitos ou obrigações sob estes termos. A Tuggi pode transferir ou ceder seus direitos e obrigações a qualquer momento, incluindo em caso de fusão, aquisição ou venda de ativos.`
              }
            ]
          },
          {
            title: '14. Contato',
            content: `Para questões sobre estes Termos de Uso, entre em contato:

**E-mail:**
**contato@tuggi.app**

**Website:**
https://www.tuggi.app/pt/terms-of-use

**Para Questões Legais:**
**contato@tuggi.app** (assunto: "Termos de Uso")

Respondemos em até 30 dias úteis.`
          }
        ]
      },
      EN: {
        title: 'Terms of Use',
        lastUpdated: 'Last updated: January 2025',
        introduction: 'These Terms of Use describe the conditions for using the Tuggi application and the official website tuggi.app. By creating an account, installing, accessing, or using our services, you expressly agree to these terms. If you do not agree with these terms, do not use our services.',
        sections: [
          {
            title: '1. Acceptance of Terms',
            content: `By using the Tuggi application or tuggi.app website, you confirm that:

• You have read, understood, and agree to these Terms of Use and our Privacy Policy
• You are at least 13 years of age (or minimum legal age in your country to consent to use of services)
• You have legal capacity to enter into contracts
• You are not prohibited from using our services under applicable laws
• You will provide true and accurate information when creating your account

**If you are under 18 years old**, you declare that you have the consent of your parents or legal guardians to use our services.

By continuing to use our services after changes to these terms, you accept the changes.`
          },
          {
            title: '2. App Purpose',
            content: `Tuggi is a cultural copilot that provides audio guidance about points of interest (POIs) based on your location.

**Main Features:**
• Narrations are automatically triggered as you move
• The app works in the background and can operate during travel
• Geographic coverage varies by region
• The app automatically detects when you approach POIs
• Offline functionality available for pre-downloaded POIs and audio

**Purpose:**
Tuggi is a travel guide and educational tool. The app does not replace professional navigation systems and should not be used as the sole source of guidance during travel.`
          },
          {
            title: '3. User Responsibilities',
            subsections: [
              {
                subtitle: '3.1 Safety During Use',
                content: `**Safe Use is Mandatory:**

• **NEVER interact with the app while driving** - The app should only be used by passengers or when the vehicle is stopped
• Maintain full attention to the road and traffic conditions
• Respect all local traffic laws
• Do not use the app in a way that may distract the driver or compromise safety
• Use the app only when it is safe to do so

**Warning:** Improper use of the app while driving may result in serious accidents. You are solely responsible for using the app safely.`
              },
              {
                subtitle: '3.2 Account and Credentials',
                content: `You are responsible for:

• Protecting your access credentials (email, password)
• Not sharing your account with third parties
• Enabling biometric authentication if available for enhanced security
• Immediately notifying Tuggi of any unauthorized access or suspected security breach
• Keeping your account information updated and accurate
• Using a strong and unique password`
              },
              {
                subtitle: '3.3 Appropriate Use of Service',
                content: `You agree to use our services only for lawful and appropriate purposes:

• Do not use the app for illegal, fraudulent, or malicious activities
• Do not use the app to collect data from other users without authorization
• Do not attempt to access unauthorized areas of the app or related systems
• Do not interfere with app functionality or attempt to circumvent security measures
• Do not use the app to send spam, viruses, or malicious code
• Respect third-party intellectual property rights`
              },
              {
                subtitle: '3.4 Accuracy of Information',
                content: `You are responsible for:

• Providing true, accurate, and complete information when creating your account
• Keeping your information updated
• Not providing false or misleading information
• Immediately notifying us of any changes to the information provided

**Warning:** Inaccurate information may affect service functionality and result in account suspension.`
              },
              {
                subtitle: '3.5 Responsibility for Location Data',
                content: `By using the app, you understand and agree that:

• The app collects and uses real-time location data
• You are responsible for ensuring you have the right to provide location data
• You are responsible for using the app in locations where it is legal and appropriate to do so
• Tuggi is not responsible for consequences of using location data in locations where such use may be restricted or prohibited
• You must respect local laws regarding collection and use of location data`
              }
            ]
          },
          {
            title: '4. Permissions and Data Collection',
            subsections: [
              {
                subtitle: '4.1 Required Permissions',
                content: `For the app to function properly, it requires the following permissions:

• **Location (1st and 2nd plan):** Required to detect your position and automatically trigger POI narrations. The app does not work without this permission.
• **Audio:** Necessary for narration playback

**Important:** Location permission is essential for app functionality. Without it, the app cannot provide travel guide services.`
              },
              {
                subtitle: '4.2 Optional Permissions',
                content: `The following permissions are optional but improve the experience:

• **Notifications:** For alerts about nearby POIs, app updates, and recommendations
• **Biometrics:** For more secure and convenient login
• **Camera (future):** To take profile photo, if desired

You can revoke optional permissions at any time in device settings, but this may affect some features.`
              },
              {
                subtitle: '4.3 Third-Party Data',
                content: `The app uses third-party services that may collect data:

• **Maps Service:** Used for map rendering and geocoding services. Use is subject to the provider's terms of service.
• **Analytics and Monitoring Services:** Used for analytics, crash reporting, and push notifications, per our Privacy Policy.
• **Backend Provider:** Used for data storage and authentication, per our Privacy Policy.

By using the app, you also agree to these providers' terms of service when applicable. See our [Privacy Policy](/privacy) for details on how we handle your data.`
              }
            ]
          },
          {
            title: '5. Service Limitations',
            content: `The app is subject to the following technical limitations:

• **Device Requirements:** Device with GPS and internet access required for initial installation
• **Storage:** App requires approximately 50MB of free space for audio cache
• **Compatibility:** Compatible with iOS 12+ and Android 5.0+
• **Coverage:** POI coverage may be limited in some geographic regions
• **Connectivity:** Some features require internet connection, although offline functionality is available for pre-downloaded content
• **Accuracy:** Location accuracy depends on external conditions (GPS, signal, device quality)

Tuggi does not guarantee that the service will always be available, uninterrupted, or error-free.`
          },
          {
            title: '6. Appropriate Use and Restrictions',
            content: `When using our services, you agree to:

• Use the app only for intended and lawful purposes
• Not modify, adapt, hack, distribute, or decompile the application
• Not use the app for illegal, fraudulent, or commercial activities without express authorization
• Not attempt to access unauthorized areas of the app or related systems
• Not interfere with app functionality or attempt to circumvent security measures
• Not use the app in a way that violates third-party rights
• Not collect data from other users without authorization

**Violation of these rules may result in immediate account suspension or termination.**`
          },
          {
            title: '7. Intellectual Property',
            content: `All intellectual property rights related to our services belong to Tuggi or its licensors:

• **App Content:** Narrations, texts, images, audio, designs, and all app content are protected by copyright and other intellectual property laws
• **Brand and Identity:** Tuggi brand, logos, trade names, and visual elements are exclusive property of Tuggi
• **Software:** Application code, algorithms, and technology are protected by copyright and trade secrets
• **Feedback:** You retain rights to feedback, suggestions, or comments submitted, but grant Tuggi a worldwide, non-exclusive, royalty-free license to use, modify, and incorporate such feedback into our services

You may not copy, modify, distribute, sell, or rent any part of our services without express written authorization.`
          },
          {
            title: '8. Limitation of Liability',
            content: `**LIABILITY DISCLAIMER:**

To the maximum extent permitted by law, Tuggi will not be liable for:

• **Direct, Indirect, or Consequential Damages:** Loss of data, profits, revenue, business opportunities, or moral damages arising from use or inability to use the app
• **Information Accuracy:** Narrated information may not reflect updated, complete, or accurate data. The app does not guarantee absolute accuracy of information provided
• **External Conditions:** Location accuracy and app functionality depend on external conditions (GPS, signal, device quality, weather conditions) outside Tuggi's control
• **Improper Use:** Tuggi is not responsible for damages resulting from improper app use, including use while driving or in prohibited locations
• **Interruptions:** Tuggi does not guarantee uninterrupted or error-free service operation

**The app is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.**`
          },
          {
            title: '9. Warranty Limitations',
            content: `**WARRANTY DISCLAIMER:**

To the maximum extent permitted by law, Tuggi disclaims all warranties, express or implied, including but not limited to:

• Warranties of merchantability, fitness for a particular purpose, or non-infringement
• Warranties that the service will be uninterrupted, secure, error-free, or virus-free
• Warranties about the accuracy, reliability, or timeliness of information provided
• Warranties that defects will be corrected or that the service will meet your expectations

**The app does not replace professional navigation systems** and should not be used as the sole source of guidance during travel. The app is a cultural and educational guide, not a real-time navigation system.`
          },
          {
            title: '10. Account Suspension and Termination',
            content: `**Termination by Tuggi:**
Tuggi may suspend or terminate your account and access to services immediately, without prior notice, if:

• You violate these Terms of Use or our Privacy Policy
• You use the app illegally, fraudulently, or inappropriately
• You provide false or misleading information
• Tuggi determines, at its sole discretion, that your use represents a risk to other users or to Tuggi

**Termination by User:**
You may terminate your account at any time through app settings or by contacting us.

**Effects of Termination:**
• Your right to use the app will cease immediately
• Some data may be retained per legal obligations or for audit purposes
• Personal data will be handled per our Privacy Policy and LGPD/GDPR`
          },
          {
            title: '11. Modifications and Updates',
            subsections: [
              {
                subtitle: '11.1 App Updates',
                content: `Tuggi may modify, update, or discontinue app features at any time. You may be required to update the app to continue using services. We do not guarantee that older versions of the app will continue to work.`
              },
              {
                subtitle: '11.2 Terms Updates',
                content: `Tuggi may modify these Terms of Use periodically. Significant changes will be communicated:

• Through the app (push notification or banner)
• By email to the address associated with your account
• Publication of "last updated" date at the top of this page

**Continuous Acceptance:**
By continuing to use our services after changes to the terms, you agree to the changes. If you do not agree with the changes, you must terminate your account and stop using the services.

**Periodic Review:**
We recommend that you review these terms periodically to be aware of any changes.`
              }
            ]
          },
          {
            title: '12. Dispute Resolution',
            subsections: [
              {
                subtitle: '12.1 Applicable Law',
                content: `These Terms of Use are governed by the laws of the Federative Republic of Brazil, without regard to its conflict of law principles.

For users outside Brazil, the laws of your country may apply, but these terms will be interpreted according to Brazilian laws to the extent possible.`
              },
              {
                subtitle: '12.2 Jurisdiction',
                content: `Any dispute related to these terms or our services will be resolved in the competent courts of São Paulo, SP, Brazil, and you agree to the exclusive jurisdiction of these courts.

For disputes involving European Union users, you may have additional right to file a complaint with your country's data protection authority.`
              },
              {
                subtitle: '12.3 Amicable Resolution',
                content: `Before initiating any formal legal process, you agree to:

• Attempt to resolve disputes amicably through direct communication with Tuggi
• Provide written details about the dispute
• Wait a reasonable period (30 days) for Tuggi's response

Tuggi commits to responding to disputes in good faith and seeking mutually acceptable solutions.`
              },
              {
                subtitle: '12.4 Arbitration (if applicable)',
                content: `For disputes that cannot be resolved amicably, you and Tuggi agree to attempt resolution through arbitration according to the rules of the applicable Arbitration Chamber, unless the law requires a different procedure.`
              }
            ]
          },
          {
            title: '13. General Provisions',
            subsections: [
              {
                subtitle: '13.1 Complete Agreement',
                content: `These Terms of Use, together with our Privacy Policy and Cookie Policy, constitute the complete agreement between you and Tuggi regarding use of services.`
              },
              {
                subtitle: '13.2 Severability',
                content: `If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.`
              },
              {
                subtitle: '13.3 Waiver',
                content: `Tuggi's failure to exercise any right under these terms does not constitute a waiver of such right.`
              },
              {
                subtitle: '13.4 Assignment',
                content: `You may not transfer or assign your rights or obligations under these terms. Tuggi may transfer or assign its rights and obligations at any time, including in case of merger, acquisition, or asset sale.`
              }
            ]
          },
          {
            title: '14. Contact',
            content: `For questions about these Terms of Use, contact us:

**Email:**
**contato@tuggi.app**

**Website:**
https://www.tuggi.app/en/terms-of-use

**For Legal Questions:**
**contato@tuggi.app** (subject: "Terms of Use")

We respond within 30 business days.`
          }
        ]
      },
      ES: {
        title: 'Términos de Uso',
        lastUpdated: 'Última actualización: Enero 2025',
        introduction: 'Estos Términos de Uso describen las condiciones para el uso de la aplicación Tuggi y el sitio web oficial tuggi.app. Al crear una cuenta, instalar, acceder o utilizar nuestros servicios, aceptas expresamente estos términos. Si no estás de acuerdo con estos términos, no utilices nuestros servicios.',
        sections: [
          {
            title: '1. Aceptación de los Términos',
            content: `Al utilizar la aplicación Tuggi o el sitio web tuggi.app, confirmas que:

• Has leído, comprendido y aceptas estos Términos de Uso y nuestra Política de Privacidad
• Tienes al menos 13 años de edad (o edad mínima legal en tu país para consentir al uso de servicios)
• Tienes capacidad legal para celebrar contratos
• No estás prohibido de usar nuestros servicios bajo las leyes aplicables
• Proporcionarás información verdadera y precisa al crear tu cuenta

**Si eres menor de 18 años**, declaras que tienes el consentimiento de tus padres o tutores legales para usar nuestros servicios.

Al continuar usando nuestros servicios después de cambios en estos términos, aceptas las alteraciones.`
          },
          {
            title: '2. Propósito de la Aplicación',
            content: `Tuggi es un copiloto cultural que proporciona orientación en audio sobre puntos de interés (POIs) basados en tu ubicación.

**Funcionalidades Principales:**
• Las narraciones se activan automáticamente mientras te mueves
• La app funciona en segundo plano y puede operar durante desplazamientos
• La cobertura geográfica varía por región
• La app detecta automáticamente cuando te acercas a POIs
• Funcionalidad offline disponible para POIs y audios pre-descargados

**Propósito:**
Tuggi es una guía de viaje y herramienta educacional. La app no sustituye sistemas de navegación profesional ni debe ser usada como única fuente de orientación durante viajes.`
          },
          {
            title: '3. Responsabilidades del Usuario',
            subsections: [
              {
                subtitle: '3.1 Seguridad Durante el Uso',
                content: `**Uso Seguro es Obligatorio:**

• **NUNCA interactúes con la app mientras conduces** - La app debe ser usada solo por pasajeros o cuando el vehículo esté detenido
• Mantén atención total a la vía y a las condiciones de tránsito
• Respeta todas las leyes de tránsito locales
• No uses la app de forma que pueda distraer al conductor o comprometer la seguridad
• Usa la app solo cuando sea seguro hacerlo

**Atención:** El uso inadecuado de la app durante la conducción puede resultar en accidentes graves. Eres totalmente responsable de usar la app de forma segura.`
              },
              {
                subtitle: '3.2 Cuenta y Credenciales',
                content: `Eres responsable de:

• Proteger tus credenciales de acceso (email, contraseña)
• No compartir tu cuenta con terceros
• Activar autenticación biométrica si está disponible para mayor seguridad
• Notificar inmediatamente a Tuggi en caso de acceso no autorizado o sospecha de violación de seguridad
• Mantener tu información de cuenta actualizada y precisa
• Usar una contraseña fuerte y única`
              },
              {
                subtitle: '3.3 Uso Apropiado del Servicio',
                content: `Acuerdas usar nuestros servicios solo para fines legales y apropiados:

• No uses la app para actividades ilegales, fraudulentas o maliciosas
• No uses la app para recopilar datos de otros usuarios sin autorización
• No intentes acceder a áreas no autorizadas de la app o sistemas
• No interfieras con el funcionamiento de la app o intentes contornear medidas de seguridad
• No uses la app para enviar spam, virus o código malicioso
• Respeta los derechos de propiedad intelectual de terceros`
              },
              {
                subtitle: '3.4 Precisión de la Información',
                content: `Eres responsable de:

• Proporcionar información verdadera, precisa y completa al crear tu cuenta
• Mantener tu información actualizada
• No proporcionar información falsa o engañosa
• Notificarnos inmediatamente sobre cualquier cambio en la información proporcionada

**Atención:** Información imprecisa puede afectar el funcionamiento del servicio y resultar en suspensión de la cuenta.`
              },
              {
                subtitle: '3.5 Responsabilidad por Datos de Ubicación',
                content: `Al usar la app, entiendes y aceptas que:

• La app recopila y utiliza datos de ubicación en tiempo real
• Eres responsable de garantizar que tienes derecho de proporcionar datos de ubicación
• Eres responsable de usar la app en lugares donde es legal y apropiado hacerlo
• Tuggi no es responsable de consecuencias de uso de datos de ubicación en lugares donde tal uso pueda estar restringido o prohibido
• Debes respetar leyes locales sobre recopilación y uso de datos de ubicación`
              }
            ]
          },
          {
            title: '4. Permisos y Recopilación de Datos',
            subsections: [
              {
                subtitle: '4.1 Permisos Obligatorios',
                content: `Para funcionar adecuadamente, la app requiere los siguientes permisos:

• **Ubicación (en 1º y 2º plano):** Obligatoria para detectar tu posición y activar automáticamente las narraciones de POIs. La app no funciona sin este permiso.
• **Audio:** Necesaria para reproducción de las narraciones

**Importante:** El permiso de ubicación es esencial para el funcionamiento de la app. Sin él, la app no puede proporcionar los servicios de guía de viaje.`
              },
              {
                subtitle: '4.2 Permisos Opcionales',
                content: `Los siguientes permisos son opcionales pero mejoran la experiencia:

• **Notificaciones:** Para alertas sobre POIs cercanos, actualizaciones de la app y recomendaciones
• **Biometría:** Para login más seguro y conveniente
• **Cámara (futuramente):** Para tomar foto de perfil, si se desea

Puedes revocar permisos opcionales en cualquier momento en la configuración del dispositivo, pero esto puede afectar algunas funcionalidades.`
              },
              {
                subtitle: '4.3 Datos de Terceros',
                content: `La app utiliza servicios de terceros que pueden recopilar datos:

• **Servicio de Mapas:** Utilizado para renderización de mapas y servicios de geocodificación. El uso está sujeto a los términos de servicio del proveedor.
• **Servicios de Analytics y Monitoreo:** Utilizados para analytics, crash reporting y notificaciones push, conforme nuestra Política de Privacidad.
• **Proveedor de Backend:** Utilizado para almacenamiento de datos y autenticación, conforme nuestra Política de Privacidad.

Al usar la app, también aceptas los términos de servicio de estos proveedores cuando sea aplicable. Consulta nuestra [Política de Privacidad](/privacy) para detalles sobre cómo tratamos tus datos.`
              }
            ]
          },
          {
            title: '5. Limitaciones del Servicio',
            content: `La app está sujeta a las siguientes limitaciones técnicas:

• **Requisitos de Dispositivo:** Es necesario dispositivo con GPS y acceso a internet en la instalación inicial
• **Almacenamiento:** La app requiere aproximadamente 50MB de espacio libre para caché de audios
• **Compatibilidad:** Compatible con iOS 12+ y Android 5.0+
• **Cobertura:** La cobertura de POIs puede ser limitada en algunas regiones geográficas
• **Conectividad:** Algunas funcionalidades requieren conexión a internet, aunque funcionalidad offline esté disponible para contenido pre-descargado
• **Precisión:** La precisión de la ubicación depende de condiciones externas (GPS, señal, calidad del dispositivo)

Tuggi no garantiza que el servicio estará siempre disponible, ininterrumpido o libre de errores.`
          },
          {
            title: '6. Uso Apropiado y Restricciones',
            content: `Al usar nuestros servicios, acuerdas:

• Usar la app solo para los fines previstos y legales
• No modificar, adaptar, hackear, distribuir o descompilar la aplicación
• No utilizar la app para actividades ilegales, fraudulentas o comerciales sin autorización expresa
• No intentar acceder a áreas no autorizadas de la app o sistemas relacionados
• No interferir con el funcionamiento de la app o intentar contornear medidas de seguridad
• No usar la app de forma que viole derechos de terceros
• No recopilar datos de otros usuarios sin autorización

**La violación de estas reglas puede resultar en suspensión o terminación inmediata de la cuenta.**`
          },
          {
            title: '7. Propiedad Intelectual',
            content: `Todos los derechos de propiedad intelectual relacionados con nuestros servicios pertenecen a Tuggi o a sus licenciadores:

• **Contenido de la App:** Las narraciones, textos, imágenes, audios, diseños y todo contenido de la app están protegidos por derechos de autor y otras leyes de propiedad intelectual
• **Marca e Identidad:** La marca Tuggi, logotipos, nombres comerciales y elementos visuales son propiedad exclusiva de Tuggi
• **Software:** El código de la aplicación, algoritmos y tecnología están protegidos por derechos de autor y secretos comerciales
• **Feedback:** Mantienes los derechos sobre feedback, sugerencias o comentarios enviados, pero concedes a Tuggi una licencia mundial, no exclusiva y gratuita para usar, modificar e incorporar ese feedback en nuestros servicios

No puedes copiar, modificar, distribuir, vender o alquilar ninguna parte de nuestros servicios sin autorización expresa por escrito.`
          },
          {
            title: '8. Limitación de Responsabilidad',
            content: `**DISCLAIMER DE RESPONSABILIDAD:**

En la máxima extensión permitida por ley, Tuggi no será responsable de:

• **Daños Directos, Indirectos o Consecuenciales:** Pérdida de datos, beneficios, ingresos, oportunidades de negocio o daños morales derivados del uso o imposibilidad de uso de la app
• **Precisión de Información:** La información narrada puede no reflejar datos actualizados, completos o precisos. La app no garantiza la precisión absoluta de la información proporcionada
• **Condiciones Externas:** La precisión de la ubicación y funcionalidad de la app dependen de condiciones externas (GPS, señal, calidad del dispositivo, condiciones climáticas) fuera del control de Tuggi
• **Uso Inadecuado:** Tuggi no es responsable de daños resultantes de uso inadecuado de la app, incluyendo uso durante conducción o en lugares prohibidos
• **Interrupciones:** Tuggi no garantiza funcionamiento ininterrumpido o libre de errores del servicio

**La app se proporciona "TAL COMO ESTÁ" y "CONFORME DISPONIBLE", sin garantías de ningún tipo.**`
          },
          {
            title: '9. Limitaciones de Garantías',
            content: `**EXCLUSIÓN DE GARANTÍAS:**

En la máxima extensión permitida por ley, Tuggi renuncia a todas las garantías, expresas o implícitas, incluyendo pero no limitado a:

• Garantías de comercialización, adecuación a un propósito específico o no violación
• Garantías de que el servicio será ininterrumpido, seguro, libre de errores o virus
• Garantías sobre la precisión, confiabilidad o actualidad de la información proporcionada
• Garantías de que los defectos serán corregidos o que el servicio cumplirá tus expectativas

**La app no sustituye sistemas de navegación profesional** y no debe ser usada como única fuente de orientación durante viajes. La app es una guía cultural y educacional, no un sistema de navegación en tiempo real.`
          },
          {
            title: '10. Suspensión y Terminación de Cuenta',
            content: `**Terminación por Tuggi:**
Tuggi puede suspender o terminar tu cuenta y acceso a servicios inmediatamente, sin aviso previo, si:

• Violas estos Términos de Uso o nuestra Política de Privacidad
• Usas la app de forma ilegal, fraudulenta o inapropiada
• Proporcionas información falsa o engañosa
• Tuggi determina, a su exclusivo criterio, que tu uso representa riesgo para otros usuarios o para Tuggi

**Terminación por Usuario:**
Puedes terminar tu cuenta en cualquier momento a través de la configuración de la app o contactándonos.

**Efectos de la Terminación:**
• Tu derecho de usar la app cesará inmediatamente
• Algunos datos pueden mantenerse según obligaciones legales o para fines de auditoría
• Los datos personales serán tratados conforme nuestra Política de Privacidad y LGPD/GDPR`
          },
          {
            title: '11. Modificaciones y Actualizaciones',
            subsections: [
              {
                subtitle: '11.1 Actualizaciones de la App',
                content: `Tuggi puede modificar, actualizar o descontinuar funcionalidades de la app en cualquier momento. Puedes ser solicitado a actualizar la app para continuar usando los servicios. No garantizamos que versiones antiguas de la app continuarán funcionando.`
              },
              {
                subtitle: '11.2 Actualizaciones de los Términos',
                content: `Tuggi puede modificar estos Términos de Uso periódicamente. Cambios significativos serán comunicados:

• A través de la app (notificación push o banner)
• Por email a la dirección asociada con tu cuenta
• Publicación de la fecha de "última actualización" en la parte superior de esta página

**Aceptación Continua:**
Al continuar usando nuestros servicios después de cambios en los términos, aceptas las alteraciones. Si no estás de acuerdo con los cambios, debes terminar tu cuenta y dejar de usar los servicios.

**Revisión Periódica:**
Recomendamos que revises estos términos periódicamente para estar al tanto de cualquier cambio.`
              }
            ]
          },
          {
            title: '12. Resolución de Disputas',
            subsections: [
              {
                subtitle: '12.1 Ley Aplicable',
                content: `Estos Términos de Uso se rigen por las leyes de la República Federativa de Brasil, sin consideración a sus principios de conflicto de leyes.

Para usuarios fuera de Brasil, las leyes de tu país pueden aplicarse, pero estos términos serán interpretados conforme las leyes brasileñas en la medida de lo posible.`
              },
              {
                subtitle: '12.2 Jurisdicción',
                content: `Cualquier disputa relacionada con estos términos o nuestros servicios será resuelta en los tribunales competentes de São Paulo, SP, Brasil, y aceptas la jurisdicción exclusiva de estos tribunales.

Para disputas involucrando usuarios de la Unión Europea, puedes tener derecho adicional de presentar reclamación junto a la autoridad de protección de datos de tu país.`
              },
              {
                subtitle: '12.3 Resolución Amigable',
                content: `Antes de iniciar cualquier proceso judicial formal, acuerdas:

• Intentar resolver disputas amigablemente a través de comunicación directa con Tuggi
• Proporcionar detalles escritos sobre la disputa
• Esperar un período razonable (30 días) para respuesta de Tuggi

Tuggi se compromete a responder a disputas de buena fe y buscar soluciones mutuamente aceptables.`
              },
              {
                subtitle: '12.4 Arbitraje (si aplicable)',
                content: `Para disputas que no puedan ser resueltas amigablemente, tú y Tuggi acuerdan intentar resolver a través de arbitraje de acuerdo con las reglas de la Cámara de Arbitraje aplicable, a menos que la ley exija procedimiento diferente.`
              }
            ]
          },
          {
            title: '13. Disposiciones Generales',
            subsections: [
              {
                subtitle: '13.1 Acuerdo Completo',
                content: `Estos Términos de Uso, junto con nuestra Política de Privacidad y Política de Cookies, constituyen el acuerdo completo entre tú y Tuggi sobre el uso de los servicios.`
              },
              {
                subtitle: '13.2 Divisibilidad',
                content: `Si cualquier disposición de estos términos es considerada inválida o inejecutable, las disposiciones restantes permanecerán en pleno vigor y efecto.`
              },
              {
                subtitle: '13.3 Renuncia',
                content: `La falla de Tuggi en ejercer cualquier derecho bajo estos términos no constituye renuncia a tal derecho.`
              },
              {
                subtitle: '13.4 Cesión',
                content: `No puedes transferir o ceder tus derechos u obligaciones bajo estos términos. Tuggi puede transferir o ceder sus derechos y obligaciones en cualquier momento, incluyendo en caso de fusión, adquisición o venta de activos.`
              }
            ]
          },
          {
            title: '14. Contacto',
            content: `Para cuestiones sobre estos Términos de Uso, contáctanos:

**Email:**
**contato@tuggi.app**

**Sitio Web:**
https://www.tuggi.app/es/terms-of-use

**Para Cuestiones Legales:**
**contato@tuggi.app** (asunto: "Términos de Uso")

Respondemos en hasta 30 días hábiles.`
          }
        ]
      },
      FR: {
        title: 'Conditions d\'Utilisation',
        lastUpdated: 'Dernière mise à jour : Janvier 2025',
        introduction: 'Ces Conditions d\'Utilisation décrivent les conditions d\'utilisation de l\'application Tuggi et du site officiel tuggi.app. En créant un compte, en installant, en accédant ou en utilisant nos services, vous acceptez expressément ces conditions. Si vous n\'acceptez pas ces conditions, n\'utilisez pas nos services.',
        sections: [
          {
            title: '1. Acceptation des Conditions',
            content: `En utilisant l'application Tuggi ou le site tuggi.app, vous confirmez que :

• Vous avez lu, compris et accepté ces Conditions d'Utilisation et notre Politique de Confidentialité
• Vous avez au moins 13 ans (ou l'âge minimum légal dans votre pays pour consentir à l'utilisation de services)
• Vous avez la capacité juridique de conclure des contrats
• Vous n'êtes pas interdit d'utiliser nos services en vertu des lois applicables
• Vous fournirez des informations vraies et exactes lors de la création de votre compte

**Si vous avez moins de 18 ans**, vous déclarez avoir le consentement de vos parents ou tuteurs légaux pour utiliser nos services.

En continuant à utiliser nos services après des modifications de ces conditions, vous acceptez les modifications.`
          },
          {
            title: '2. Objectif de l\'Application',
            content: `Tuggi est un copilote culturel qui fournit des conseils audio sur les points d'intérêt (POI) en fonction de votre localisation.

**Fonctionnalités Principales :**
• Les narrations sont déclenchées automatiquement lorsque vous vous déplacez
• L'app fonctionne en arrière-plan et peut fonctionner pendant les déplacements
• La couverture géographique varie selon la région
• L'app détecte automatiquement lorsque vous vous approchez des POI
• Fonctionnalité hors ligne disponible pour les POI et audios pré-téléchargés

**Objectif :**
Tuggi est un guide de voyage et un outil éducatif. L'app ne remplace pas les systèmes de navigation professionnels et ne doit pas être utilisée comme seule source d'orientation pendant les voyages.`
          },
          {
            title: '3. Responsabilités de l\'Utilisateur',
            subsections: [
              {
                subtitle: '3.1 Sécurité Pendant l\'Utilisation',
                content: `**L'Utilisation Sûre est Obligatoire :**

• **N'interagissez JAMAIS avec l'app en conduisant** - L'app ne doit être utilisée que par des passagers ou lorsque le véhicule est à l'arrêt
• Maintenez une attention totale à la route et aux conditions de circulation
• Respectez toutes les lois locales sur la circulation
• N'utilisez pas l'app d'une manière qui pourrait distraire le conducteur ou compromettre la sécurité
• Utilisez l'app uniquement lorsqu'il est sûr de le faire

**Attention :** Une mauvaise utilisation de l'app pendant la conduite peut entraîner des accidents graves. Vous êtes entièrement responsable de l'utilisation sûre de l'app.`
              },
              {
                subtitle: '3.2 Compte et Identifiants',
                content: `Vous êtes responsable de :

• Protéger vos identifiants d'accès (e-mail, mot de passe)
• Ne pas partager votre compte avec des tiers
• Activer l'authentification biométrique si disponible pour une sécurité accrue
• Notifier immédiatement Tuggi en cas d'accès non autorisé ou de suspicion de violation de sécurité
• Maintenir vos informations de compte à jour et exactes
• Utiliser un mot de passe fort et unique`
              },
              {
                subtitle: '3.3 Utilisation Appropriée du Service',
                content: `Vous acceptez d'utiliser nos services uniquement à des fins légales et appropriées :

• N'utilisez pas l'app pour des activités illégales, frauduleuses ou malveillantes
• N'utilisez pas l'app pour collecter des données d'autres utilisateurs sans autorisation
• N'essayez pas d'accéder à des zones non autorisées de l'app ou des systèmes
• N'interférez pas avec le fonctionnement de l'app ou n'essayez pas de contourner les mesures de sécurité
• N'utilisez pas l'app pour envoyer du spam, des virus ou du code malveillant
• Respectez les droits de propriété intellectuelle de tiers`
              },
              {
                subtitle: '3.4 Exactitude des Informations',
                content: `Vous êtes responsable de :

• Fournir des informations vraies, exactes et complètes lors de la création de votre compte
• Maintenir vos informations à jour
• Ne pas fournir d'informations fausses ou trompeuses
• Nous notifier immédiatement de tout changement dans les informations fournies

**Attention :** Des informations inexactes peuvent affecter le fonctionnement du service et entraîner la suspension du compte.`
              },
              {
                subtitle: '3.5 Responsabilité des Données de Localisation',
                content: `En utilisant l'app, vous comprenez et acceptez que :

• L'app collecte et utilise des données de localisation en temps réel
• Vous êtes responsable de vous assurer que vous avez le droit de fournir des données de localisation
• Vous êtes responsable d'utiliser l'app dans des endroits où il est légal et approprié de le faire
• Tuggi n'est pas responsable des conséquences de l'utilisation de données de localisation dans des endroits où une telle utilisation peut être restreinte ou interdite
• Vous devez respecter les lois locales concernant la collecte et l'utilisation de données de localisation`
              }
            ]
          },
          {
            title: '4. Autorisations et Collecte de Données',
            subsections: [
              {
                subtitle: '4.1 Autorisations Obligatoires',
                content: `Pour fonctionner correctement, l'app nécessite les autorisations suivantes :

• **Localisation (au 1er et 2e plan) :** Obligatoire pour détecter votre position et déclencher automatiquement les narrations de POI. L'app ne fonctionne pas sans cette autorisation.
• **Audio :** Nécessaire pour la lecture des narrations

**Important :** L'autorisation de localisation est essentielle pour le fonctionnement de l'app. Sans elle, l'app ne peut pas fournir les services de guide de voyage.`
              },
              {
                subtitle: '4.2 Autorisations Facultatives',
                content: `Les autorisations suivantes sont facultatives mais améliorent l'expérience :

• **Notifications :** Pour des alertes sur les POI proches, les mises à jour de l'app et les recommandations
• **Biométrie :** Pour une connexion plus sûre et pratique
• **Caméra (futurement) :** Pour prendre une photo de profil, si souhaité

Vous pouvez révoquer les autorisations facultatives à tout moment dans les paramètres de l'appareil, mais cela peut affecter certaines fonctionnalités.`
              },
              {
                subtitle: '4.3 Données de Tiers',
                content: `L'app utilise des services de tiers qui peuvent collecter des données :

• **Service de Cartographie :** Utilisé pour le rendu des cartes et les services de géocodage. L'utilisation est soumise aux conditions de service du fournisseur.
• **Services d'Analytics et de Surveillance :** Utilisés pour l'analyse, le rapport de crash et les notifications push, conformément à notre Politique de Confidentialité.
• **Fournisseur de Backend :** Utilisé pour le stockage des données et l'authentification, conformément à notre Politique de Confidentialité.

En utilisant l'app, vous acceptez également les conditions de service de ces fournisseurs le cas échéant. Consultez notre [Politique de Confidentialité](/privacy) pour plus de détails sur la façon dont nous traitons vos données.`
              }
            ]
          },
          {
            title: '5. Limitations du Service',
            content: `L'app est soumise aux limitations techniques suivantes :

• **Exigences de l'Appareil :** Un appareil avec GPS et accès Internet est nécessaire lors de l'installation initiale
• **Stockage :** L'app nécessite environ 50 Mo d'espace libre pour le cache audio
• **Compatibilité :** Compatible avec iOS 12+ et Android 5.0+
• **Couverture :** La couverture des POI peut être limitée dans certaines régions géographiques
• **Connectivité :** Certaines fonctionnalités nécessitent une connexion Internet, bien que la fonctionnalité hors ligne soit disponible pour le contenu pré-téléchargé
• **Précision :** La précision de la localisation dépend de conditions externes (GPS, signal, qualité de l'appareil)

Tuggi ne garantit pas que le service sera toujours disponible, ininterrompu ou sans erreur.`
          },
          {
            title: '6. Utilisation Appropriée et Restrictions',
            content: `En utilisant nos services, vous acceptez de :

• Utiliser l'app uniquement aux fins prévues et légales
• Ne pas modifier, adapter, pirater, distribuer ou décompiler l'application
• Ne pas utiliser l'app pour des activités illégales, frauduleuses ou commerciales sans autorisation expresse
• Ne pas tenter d'accéder à des zones non autorisées de l'app ou des systèmes connexes
• Ne pas interférer avec le fonctionnement de l'app ou tenter de contourner les mesures de sécurité
• Ne pas utiliser l'app d'une manière qui viole les droits de tiers
• Ne pas collecter de données d'autres utilisateurs sans autorisation

**La violation de ces règles peut entraîner la suspension ou la résiliation immédiate du compte.**`
          },
          {
            title: '7. Propriété Intellectuelle',
            content: `Tous les droits de propriété intellectuelle liés à nos services appartiennent à Tuggi ou à ses concédants de licence :

• **Contenu de l'App :** Les narrations, textes, images, audios, conceptions et tout le contenu de l'app sont protégés par le droit d'auteur et d'autres lois sur la propriété intellectuelle
• **Marque et Identité :** La marque Tuggi, les logos, les noms commerciaux et les éléments visuels sont la propriété exclusive de Tuggi
• **Logiciel :** Le code de l'application, les algorithmes et la technologie sont protégés par le droit d'auteur et les secrets commerciaux
• **Feedback :** Vous conservez les droits sur les commentaires, suggestions ou remarques soumis, mais accordez à Tuggi une licence mondiale, non exclusive et gratuite pour utiliser, modifier et intégrer ce feedback dans nos services

Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer une partie de nos services sans autorisation écrite expresse.`
          },
          {
            title: '8. Limitation de Responsabilité',
            content: `**AVIS DE NON-RESPONSABILITÉ :**

Dans toute la mesure permise par la loi, Tuggi ne sera pas responsable de :

• **Dommages Directs, Indirects ou Consécutifs :** Perte de données, bénéfices, revenus, opportunités commerciales ou dommages moraux résultant de l'utilisation ou de l'impossibilité d'utiliser l'app
• **Exactitude des Informations :** Les informations racontées peuvent ne pas refléter des données mises à jour, complètes ou exactes. L'app ne garantit pas l'exactitude absolue des informations fournies
• **Conditions Externes :** La précision de la localisation et la fonctionnalité de l'app dépendent de conditions externes (GPS, signal, qualité de l'appareil, conditions météorologiques) hors du contrôle de Tuggi
• **Utilisation Inappropriée :** Tuggi n'est pas responsable des dommages résultant d'une utilisation inappropriée de l'app, y compris l'utilisation pendant la conduite ou dans des endroits interdits
• **Interruptions :** Tuggi ne garantit pas un fonctionnement ininterrompu ou sans erreur du service

**L'app est fournie "EN L'ÉTAT" et "SELON LA DISPONIBILITÉ", sans garanties d'aucune sorte.**`
          },
          {
            title: '9. Limitations de Garantie',
            content: `**EXCLUSION DE GARANTIES :**

Dans toute la mesure permise par la loi, Tuggi décline toutes les garanties, expresses ou implicites, y compris, mais sans s'y limiter :

• Garanties de qualité marchande, d'adéquation à un usage particulier ou de non-violation
• Garanties que le service sera ininterrompu, sécurisé, sans erreur ou sans virus
• Garanties sur l'exactitude, la fiabilité ou l'actualité des informations fournies
• Garanties que les défauts seront corrigés ou que le service répondra à vos attentes

**L'app ne remplace pas les systèmes de navigation professionnels** et ne doit pas être utilisée comme seule source d'orientation pendant les voyages. L'app est un guide culturel et éducatif, pas un système de navigation en temps réel.`
          },
          {
            title: '10. Suspension et Résiliation de Compte',
            content: `**Résiliation par Tuggi :**
Tuggi peut suspendre ou résilier votre compte et l'accès aux services immédiatement, sans préavis, si :

• Vous violez ces Conditions d'Utilisation ou notre Politique de Confidentialité
• Vous utilisez l'app de manière illégale, frauduleuse ou inappropriée
• Vous fournissez des informations fausses ou trompeuses
• Tuggi détermine, à sa seule discrétion, que votre utilisation représente un risque pour d'autres utilisateurs ou pour Tuggi

**Résiliation par l'Utilisateur :**
Vous pouvez résilier votre compte à tout moment via les paramètres de l'app ou en nous contactant.

**Effets de la Résiliation :**
• Votre droit d'utiliser l'app cessera immédiatement
• Certaines données peuvent être conservées conformément aux obligations légales ou à des fins d'audit
• Les données personnelles seront traitées conformément à notre Politique de Confidentialité et au LGPD/RGPD`
          },
          {
            title: '11. Modifications et Mises à jour',
            subsections: [
              {
                subtitle: '11.1 Mises à jour de l\'App',
                content: `Tuggi peut modifier, mettre à jour ou interrompre des fonctionnalités de l'app à tout moment. Vous pouvez être tenu de mettre à jour l'app pour continuer à utiliser les services. Nous ne garantissons pas que les anciennes versions de l'app continueront de fonctionner.`
              },
              {
                subtitle: '11.2 Mises à jour des Conditions',
                content: `Tuggi peut modifier ces Conditions d'Utilisation périodiquement. Les changements importants seront communiqués :

• Via l'app (notification push ou bannière)
• Par e-mail à l'adresse associée à votre compte
• Publication de la date de "dernière mise à jour" en haut de cette page

**Acceptation Continue :**
En continuant à utiliser nos services après des modifications des conditions, vous acceptez les modifications. Si vous n'êtes pas d'accord avec les modifications, vous devez résilier votre compte et cesser d'utiliser les services.

**Examen Périodique :**
Nous vous recommandons de revoir ces conditions périodiquement pour être informé de tout changement.`
              }
            ]
          },
          {
            title: '12. Résolution des Litiges',
            subsections: [
              {
                subtitle: '12.1 Loi Applicable',
                content: `Ces Conditions d'Utilisation sont régies par les lois de la République Fédérative du Brésil, sans tenir compte de ses principes de conflit de lois.

Pour les utilisateurs hors du Brésil, les lois de votre pays peuvent s'appliquer, mais ces conditions seront interprétées conformément aux lois brésiliennes dans la mesure du possible.`
              },
              {
                subtitle: '12.2 Juridiction',
                content: `Tout litige lié à ces conditions ou à nos services sera résolu devant les tribunaux compétents de São Paulo, SP, Brésil, et vous acceptez la compétence exclusive de ces tribunaux.

Pour les litiges impliquant des utilisateurs de l'Union Européenne, vous pouvez avoir le droit supplémentaire de déposer une plainte auprès de l'autorité de protection des données de votre pays.`
              },
              {
                subtitle: '12.3 Résolution Amiable',
                content: `Avant d'engager toute procédure judiciaire formelle, vous acceptez de :

• Tenter de résoudre les litiges à l'amiable par une communication directe avec Tuggi
• Fournir des détails écrits sur le litige
• Attendre un délai raisonnable (30 jours) pour la réponse de Tuggi

Tuggi s'engage à répondre aux litiges de bonne foi et à rechercher des solutions mutuellement acceptables.`
              },
              {
                subtitle: '12.4 Arbitrage (si applicable)',
                content: `Pour les litiges qui ne peuvent être résolus à l'amiable, vous et Tuggi acceptez de tenter de résoudre par arbitrage conformément aux règles de la Chambre d'Arbitrage applicable, sauf si la loi exige une procédure différente.`
              }
            ]
          },
          {
            title: '13. Dispositions Générales',
            subsections: [
              {
                subtitle: '13.1 Accord Complet',
                content: `Ces Conditions d'Utilisation, ainsi que notre Politique de Confidentialité et notre Politique de Cookies, constituent l'accord complet entre vous et Tuggi concernant l'utilisation des services.`
              },
              {
                subtitle: '13.2 Divisibilité',
                content: `Si une disposition de ces conditions est jugée invalide ou inapplicable, les dispositions restantes resteront pleinement en vigueur.`
              },
              {
                subtitle: '13.3 Renonciation',
                content: `Le défaut de Tuggi d'exercer un droit en vertu de ces conditions ne constitue pas une renonciation à ce droit.`
              },
              {
                subtitle: '13.4 Cession',
                content: `Vous ne pouvez pas transférer ou céder vos droits ou obligations en vertu de ces conditions. Tuggi peut transférer ou céder ses droits et obligations à tout moment, y compris en cas de fusion, d'acquisition ou de vente d'actifs.`
              }
            ]
          },
          {
            title: '14. Contact',
            content: `Pour des questions concernant ces Conditions d'Utilisation, contactez-nous :

**E-mail :**
**contato@tuggi.app**

**Site Web :**
https://www.tuggi.app/fr/terms-of-use

**Pour les Questions Juridiques :**
**contato@tuggi.app** (sujet : "Conditions d'Utilisation")

Nous répondons dans les 30 jours ouvrables.`
          }
        ]
      },
      DE: {
        title: 'Nutzungsbedingungen',
        lastUpdated: 'Letzte Aktualisierung: Januar 2025',
        introduction: 'Diese Nutzungsbedingungen beschreiben die Bedingungen für die Nutzung der Tuggi-Anwendung und der offiziellen Website tuggi.app. Durch das Erstellen eines Kontos, die Installation, den Zugriff oder die Nutzung unserer Dienste stimmen Sie diesen Bedingungen ausdrücklich zu. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie unsere Dienste nicht.',
        sections: [
          {
            title: '1. Annahme der Bedingungen',
            content: `Durch die Nutzung der Tuggi-App oder der Website tuggi.app bestätigen Sie, dass:

• Sie diese Nutzungsbedingungen und unsere Datenschutzrichtlinie gelesen, verstanden und akzeptiert haben
• Sie mindestens 13 Jahre alt sind (oder das gesetzliche Mindestalter in Ihrem Land, um der Nutzung von Diensten zuzustimmen)
• Sie die Rechtsfähigkeit haben, Verträge abzuschließen
• Es Ihnen nach geltendem Recht nicht untersagt ist, unsere Dienste zu nutzen
• Sie bei der Erstellung Ihres Kontos wahre und genaue Informationen angeben werden

**Wenn Sie unter 18 Jahre alt sind**, erklären Sie, dass Sie die Zustimmung Ihrer Eltern oder Erziehungsberechtigten zur Nutzung unserer Dienste haben.

Durch die fortgesetzte Nutzung unserer Dienste nach Änderungen dieser Bedingungen akzeptieren Sie die Änderungen.`
          },
          {
            title: '2. Zweck der App',
            content: `Tuggi ist ein kultureller Copilot, der Audio-Anleitungen zu Points of Interest (POIs) basierend auf Ihrem Standort bietet.

**Hauptfunktionen:**
• Erzählungen werden automatisch ausgelöst, während Sie sich bewegen
• Die App läuft im Hintergrund und kann während der Reise betrieben werden
• Die geografische Abdeckung variiert je nach Region
• Die App erkennt automatisch, wenn Sie sich POIs nähern
• Offline-Funktionalität für vorab heruntergeladene POIs und Audios verfügbar

**Zweck:**
Tuggi ist ein Reiseführer und ein Bildungsinstrument. Die App ersetzt keine professionellen Navigationssysteme und sollte nicht als einzige Orientierungsquelle während Reisen verwendet werden.`
          },
          {
            title: '3. Verantwortlichkeiten des Benutzers',
            subsections: [
              {
                subtitle: '3.1 Sicherheit während der Nutzung',
                content: `**Sichere Nutzung ist obligatorisch:**

• **Interagieren Sie NIEMALS mit der App während der Fahrt** - Die App sollte nur von Passagieren oder bei stehendem Fahrzeug verwendet werden
• Achten Sie voll und ganz auf die Straße und die Verkehrsbedingungen
• Respektieren Sie alle lokalen Verkehrsgesetze
• Verwenden Sie die App nicht auf eine Weise, die den Fahrer ablenken oder die Sicherheit gefährden könnte
• Verwenden Sie die App nur, wenn dies sicher möglich ist

**Warnung:** Unsachgemäße Nutzung der App während der Fahrt kann zu schweren Unfällen führen. Sie sind allein dafür verantwortlich, die App sicher zu nutzen.`
              },
              {
                subtitle: '3.2 Konto und Anmeldeinformationen',
                content: `Sie sind verantwortlich für:

• Schutz Ihrer Zugangsdaten (E-Mail, Passwort)
• Nichtweitergabe Ihres Kontos an Dritte
• Aktivierung der biometrischen Authentifizierung (falls verfügbar) für erhöhte Sicherheit
• Sofortige Benachrichtigung von Tuggi bei unbefugtem Zugriff oder Verdacht auf Sicherheitsverletzung
• Aktualisierung und Genauigkeit Ihrer Kontoinformationen
• Verwendung eines starken und einzigartigen Passworts`
              },
              {
                subtitle: '3.3 Angemessene Nutzung des Dienstes',
                content: `Sie stimmen zu, unsere Dienste nur für rechtmäßige und angemessene Zwecke zu nutzen:

• Verwenden Sie die App nicht für illegale, betrügerische oder böswillige Aktivitäten
• Verwenden Sie die App nicht, um Daten von anderen Benutzern ohne Genehmigung zu sammeln
• Versuchen Sie nicht, auf nicht autorisierte Bereiche der App oder Systeme zuzugreifen
• Stören Sie nicht die Funktionalität der App oder versuchen Sie nicht, Sicherheitsmaßnahmen zu umgehen
• Verwenden Sie die App nicht zum Versenden von Spam, Viren oder bösartigem Code
• Respektieren Sie die geistigen Eigentumsrechte Dritter`
              },
              {
                subtitle: '3.4 Genauigkeit der Informationen',
                content: `Sie sind verantwortlich für:

• Bereitstellung wahrer, genauer und vollständiger Informationen bei der Erstellung Ihres Kontos
• Aktualisierung Ihrer Informationen
• Keine Bereitstellung falscher oder irreführender Informationen
• Sofortige Benachrichtigung über Änderungen der bereitgestellten Informationen

**Warnung:** Ungenaue Informationen können die Funktionalität des Dienstes beeinträchtigen und zur Kontosperrung führen.`
              },
              {
                subtitle: '3.5 Verantwortung für Standortdaten',
                content: `Durch die Nutzung der App verstehen und akzeptieren Sie, dass:

• Die App Echtzeit-Standortdaten sammelt und verwendet
• Sie dafür verantwortlich sind, sicherzustellen, dass Sie das Recht haben, Standortdaten bereitzustellen
• Sie dafür verantwortlich sind, die App an Orten zu nutzen, an denen dies legal und angemessen ist
• Tuggi nicht verantwortlich ist für Konsequenzen der Nutzung von Standortdaten an Orten, an denen eine solche Nutzung eingeschränkt oder verboten sein kann
• Sie lokale Gesetze bezüglich der Sammlung und Nutzung von Standortdaten respektieren müssen`
              }
            ]
          },
          {
            title: '4. Berechtigungen und Datenerfassung',
            subsections: [
              {
                subtitle: '4.1 Erforderliche Berechtigungen',
                content: `Damit die App ordnungsgemäß funktioniert, sind folgende Berechtigungen erforderlich:

• **Standort (im Vorder- und Hintergrund):** Erforderlich, um Ihre Position zu erkennen und POI-Erzählungen automatisch auszulösen. Die App funktioniert ohne diese Berechtigung nicht.
• **Audio:** Notwendig für die Wiedergabe von Erzählungen

**Wichtig:** Die Standortberechtigung ist für die Funktionalität der App unerlässlich. Ohne sie kann die App keine Reiseführerdienste bereitstellen.`
              },
              {
                subtitle: '4.2 Optionale Berechtigungen',
                content: `Die folgenden Berechtigungen sind optional, verbessern aber das Erlebnis:

• **Benachrichtigungen:** Für Warnungen zu nahegelegenen POIs, App-Updates und Empfehlungen
• **Biometrie:** Für sichereren und bequemeren Login
• **Kamera (zukünftig):** Um ein Profilfoto aufzunehmen, falls gewünscht

Sie können optionale Berechtigungen jederzeit in den Geräteeinstellungen widerrufen, dies kann jedoch einige Funktionen beeinträchtigen.`
              },
              {
                subtitle: '4.3 Daten von Dritten',
                content: `Die App nutzt Dienste von Dritten, die Daten sammeln können:

• **Kartendienst:** Verwendet für Karten rendering und Geocodierungsdienste. Die Nutzung unterliegt den Nutzungsbedingungen des Anbieters.
• **Analyse- und Überwachungsdienste:** Verwendet für Analytics, Crash Reporting und Push-Benachrichtigungen gemäß unserer Datenschutzrichtlinie.
• **Backend-Anbieter:** Verwendet für Datenspeicherung und Authentifizierung gemäß unserer Datenschutzrichtlinie.

Durch die Nutzung der App stimmen Sie auch den Nutzungsbedingungen dieser Anbieter zu, sofern anwendbar. Siehe unsere [Datenschutzrichtlinie](/privacy) für Details, wie wir Ihre Daten behandeln.`
              }
            ]
          },
          {
            title: '5. Dienstbeschränkungen',
            content: `Die App unterliegt folgenden technischen Beschränkungen:

• **Geräteanforderungen:** Gerät mit GPS und Internetzugang bei der Erstinstallation erforderlich
• **Speicher:** App benötigt ca. 50 MB freien Speicherplatz für Audio-Cache
• **Kompatibilität:** Kompatibel mit iOS 12+ und Android 5.0+
• **Abdeckung:** POI-Abdeckung kann in einigen geografischen Regionen eingeschränkt sein
• **Konnektivität:** Einige Funktionen erfordern eine Internetverbindung, obwohl Offline-Funktionalität für vorab heruntergeladene Inhalte verfügbar ist
• **Genauigkeit:** Standortgenauigkeit hängt von externen Bedingungen ab (GPS, Signal, Gerätequalität)

Tuggi garantiert nicht, dass der Dienst immer verfügbar, ununterbrochen oder fehlerfrei ist.`
          },
          {
            title: '6. Angemessene Nutzung und Einschränkungen',
            content: `Bei der Nutzung unserer Dienste stimmen Sie zu:

• Die App nur für die vorgesehenen und rechtmäßigen Zwecke zu nutzen
• Die Anwendung nicht zu modifizieren, anzupassen, zu hacken, zu verteilen oder zu dekompilieren
• Die App nicht für illegale, betrügerische oder kommerzielle Aktivitäten ohne ausdrückliche Genehmigung zu nutzen
• Nicht zu versuchen, auf nicht autorisierte Bereiche der App oder verwandte Systeme zuzugreifen
• Die Funktionalität der App nicht zu stören oder zu versuchen, Sicherheitsmaßnahmen zu umgehen
• Die App nicht auf eine Weise zu nutzen, die Rechte Dritter verletzt
• Keine Daten von anderen Benutzern ohne Genehmigung zu sammeln

**Verstöße gegen diese Regeln können zur sofortigen Kontosperrung oder -kündigung führen.**`
          },
          {
            title: '7. Geistiges Eigentum',
            content: `Alle geistigen Eigentumsrechte im Zusammenhang mit unseren Diensten gehören Tuggi oder seinen Lizenzgebern:

• **App-Inhalt:** Erzählungen, Texte, Bilder, Audios, Designs und alle App-Inhalte sind durch Urheberrechte und andere Gesetze zum geistigen Eigentum geschützt
• **Marke und Identität:** Die Marke Tuggi, Logos, Handelsnamen und visuelle Elemente sind ausschließliches Eigentum von Tuggi
• **Software:** Anwendungscode, Algorithmen und Technologie sind durch Urheberrechte und Geschäftsgeheimnisse geschützt
• **Feedback:** Sie behalten die Rechte an eingereichtem Feedback, Vorschlägen oder Kommentaren, gewähren Tuggi jedoch eine weltweite, nicht exklusive, gebührenfreie Lizenz zur Nutzung, Änderung und Einbeziehung dieses Feedbacks in unsere Dienste

Sie dürfen keinen Teil unserer Dienste ohne ausdrückliche schriftliche Genehmigung kopieren, modifizieren, verteilen, verkaufen oder vermieten.`
          },
          {
            title: '8. Haftungsbeschränkung',
            content: `**HAFTUNGSAUSSCHLUSS:**

Im gesetzlich zulässigen Umfang haftet Tuggi nicht für:

• **Direkte, indirekte oder Folgeschäden:** Datenverlust, entgangener Gewinn, Umsatz, Geschäftsmöglichkeiten oder immaterielle Schäden, die aus der Nutzung oder Unmöglichkeit der Nutzung der App entstehen
• **Informationsgenauigkeit:** Erzählte Informationen spiegeln möglicherweise keine aktuellen, vollständigen oder genauen Daten wider. Die App garantiert nicht die absolute Genauigkeit der bereitgestellten Informationen
• **Externe Bedingungen:** Standortgenauigkeit und App-Funktionalität hängen von externen Bedingungen ab (GPS, Signal, Gerätequalität, Wetterbedingungen), die außerhalb der Kontrolle von Tuggi liegen
• **Unsachgemäße Nutzung:** Tuggi ist nicht verantwortlich für Schäden, die aus unsachgemäßer Nutzung der App resultieren, einschließlich Nutzung während der Fahrt oder an verbotenen Orten
• **Unterbrechungen:** Tuggi garantiert keinen ununterbrochenen oder fehlerfreien Betrieb des Dienstes

**Die App wird "WIE BESEHEN" und "NACH VERFÜGBARKEIT" ohne Garantien jeglicher Art bereitgestellt.**`
          },
          {
            title: '9. Gewährleistungsbeschränkungen',
            content: `**GEWÄHRLEISTUNGSAUSSCHLUSS:**

Im gesetzlich zulässigen Umfang lehnt Tuggi alle Garantien ab, ob ausdrücklich oder stillschweigend, einschließlich, aber nicht beschränkt auf:

• Garantien der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung
• Garantien, dass der Dienst ununterbrochen, sicher, fehlerfrei oder virenfrei ist
• Garantien über die Genauigkeit, Zuverlässigkeit oder Aktualität der bereitgestellten Informationen
• Garantien, dass Mängel behoben werden oder dass der Dienst Ihren Erwartungen entspricht

**Die App ersetzt keine professionellen Navigationssysteme** und sollte nicht als einzige Orientierungsquelle während Reisen verwendet werden. Die App ist ein kultureller und pädagogischer Führer, kein Echtzeit-Navigationssystem.`
          },
          {
            title: '10. Kontosperrung und -kündigung',
            content: `**Kündigung durch Tuggi:**
Tuggi kann Ihr Konto und den Zugang zu Diensten sofort und ohne vorherige Ankündigung sperren oder kündigen, wenn:

• Sie diese Nutzungsbedingungen oder unsere Datenschutzrichtlinie verletzen
• Sie die App illegal, betrügerisch oder unangemessen nutzen
• Sie falsche oder irreführende Informationen bereitstellen
• Tuggi nach eigenem Ermessen feststellt, dass Ihre Nutzung ein Risiko für andere Benutzer oder für Tuggi darstellt

**Kündigung durch den Benutzer:**
Sie können Ihr Konto jederzeit über die App-Einstellungen oder durch Kontaktaufnahme mit uns kündigen.

**Auswirkungen der Kündigung:**
• Ihr Recht zur Nutzung der App erlischt sofort
• Einige Daten können gemäß gesetzlichen Verpflichtungen oder zu Audit-Zwecken aufbewahrt werden
• Personenbezogene Daten werden gemäß unserer Datenschutzrichtlinie und LGPD/DSGVO behandelt`
          },
          {
            title: '11. Änderungen und Aktualisierungen',
            subsections: [
              {
                subtitle: '11.1 App-Updates',
                content: `Tuggi kann App-Funktionen jederzeit ändern, aktualisieren oder einstellen. Möglicherweise müssen Sie die App aktualisieren, um die Dienste weiterhin nutzen zu können. Wir garantieren nicht, dass ältere Versionen der App weiterhin funktionieren.`
              },
              {
                subtitle: '11.2 Aktualisierungen der Bedingungen',
                content: `Tuggi kann diese Nutzungsbedingungen regelmäßig ändern. Wesentliche Änderungen werden kommuniziert:

• Über die App (Push-Benachrichtigung oder Banner)
• Per E-Mail an die mit Ihrem Konto verknüpfte Adresse
• Veröffentlichung des Datums der "letzten Aktualisierung" oben auf dieser Seite

**Fortgesetzte Akzeptanz:**
Durch die fortgesetzte Nutzung unserer Dienste nach Änderungen der Bedingungen stimmen Sie den Änderungen zu. Wenn Sie den Änderungen nicht zustimmen, müssen Sie Ihr Konto kündigen und die Nutzung der Dienste einstellen.

**Regelmäßige Überprüfung:**
Wir empfehlen Ihnen, diese Bedingungen regelmäßig zu überprüfen, um über Änderungen informiert zu sein.`
              }
            ]
          },
          {
            title: '12. Streitbeilegung',
            subsections: [
              {
                subtitle: '12.1 Anwendbares Recht',
                content: `Diese Nutzungsbedingungen unterliegen den Gesetzen der Föderativen Republik Brasilien, ohne Berücksichtigung ihrer kollisionsrechtlichen Grundsätze.

Für Benutzer außerhalb Brasiliens können die Gesetze Ihres Landes gelten, aber diese Bedingungen werden soweit möglich nach brasilianischem Recht ausgelegt.`
              },
              {
                subtitle: '12.2 Gerichtsstand',
                content: `Alle Streitigkeiten im Zusammenhang mit diesen Bedingungen oder unseren Diensten werden vor den zuständigen Gerichten von São Paulo, SP, Brasilien, beigelegt, und Sie stimmen der ausschließlichen Zuständigkeit dieser Gerichte zu.

Für Streitigkeiten mit Benutzern aus der Europäischen Union haben Sie möglicherweise das zusätzliche Recht, Beschwerde bei der Datenschutzbehörde Ihres Landes einzureichen.`
              },
              {
                subtitle: '12.3 Gütliche Einigung',
                content: `Bevor Sie ein formelles Gerichtsverfahren einleiten, stimmen Sie zu:

• Zu versuchen, Streitigkeiten gütlich durch direkte Kommunikation mit Tuggi beizulegen
• Schriftliche Details zum Streitfall bereitzustellen
• Einen angemessenen Zeitraum (30 Tage) auf die Antwort von Tuggi zu warten

Tuggi verpflichtet sich, auf Streitigkeiten in gutem Glauben zu reagieren und nach gegenseitig akzeptablen Lösungen zu suchen.`
              },
              {
                subtitle: '12.4 Schiedsgerichtsbarkeit (falls anwendbar)',
                content: `Für Streitigkeiten, die nicht gütlich beigelegt werden können, stimmen Sie und Tuggi zu, eine Lösung durch Schiedsgerichtsbarkeit gemäß den Regeln der zuständigen Schiedskammer zu versuchen, es sei denn, das Gesetz schreibt ein anderes Verfahren vor.`
              }
            ]
          },
          {
            title: '13. Allgemeine Bestimmungen',
            subsections: [
              {
                subtitle: '13.1 Gesamte Vereinbarung',
                content: `Diese Nutzungsbedingungen stellen zusammen mit unserer Datenschutzrichtlinie und Cookie-Richtlinie die gesamte Vereinbarung zwischen Ihnen und Tuggi bezüglich der Nutzung der Dienste dar.`
              },
              {
                subtitle: '13.2 Teilnichtigkeit',
                content: `Sollte eine Bestimmung dieser Bedingungen für ungültig oder nicht durchsetzbar befunden werden, bleiben die übrigen Bestimmungen vollumfänglich wirksam.`
              },
              {
                subtitle: '13.3 Verzicht',
                content: `Das Versäumnis von Tuggi, ein Recht aus diesen Bedingungen auszuüben, stellt keinen Verzicht auf dieses Recht dar.`
              },
              {
                subtitle: '13.4 Abtretung',
                content: `Sie dürfen Ihre Rechte oder Pflichten aus diesen Bedingungen nicht übertragen oder abtreten. Tuggi kann seine Rechte und Pflichten jederzeit übertragen oder abtreten, einschließlich im Falle einer Fusion, Übernahme oder eines Verkaufs von Vermögenswerten.`
              }
            ]
          },
          {
            title: '14. Kontakt',
            content: `Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns:

**E-Mail:**
**contato@tuggi.app**

**Website:**
https://www.tuggi.app/de/terms-of-use

**Für rechtliche Fragen:**
**contato@tuggi.app** (Betreff: "Nutzungsbedingungen")

Wir antworten innerhalb von 30 Werktagen.`
          }
        ]
      },
      IT: {
        title: 'Termini di Utilizzo',
        lastUpdated: 'Ultimo aggiornamento: Gennaio 2025',
        introduction: 'Questi Termini di Utilizzo descrivono le condizioni per l\'uso dell\'applicazione Tuggi e del sito ufficiale tuggi.app. Creando un account, installando, accedendo o utilizzando i nostri servizi, accetti espressamente questi termini. Se non sei d\'accordo con questi termini, non utilizzare i nostri servizi.',
        sections: [
          {
            title: '1. Accettazione dei Termini',
            content: `Utilizzando l'applicazione Tuggi o il sito tuggi.app, confermi che:

• Hai letto, compreso e accetti questi Termini di Utilizzo e la nostra Informativa sulla Privacy
• Hai almeno 13 anni (o l'età minima legale nel tuo paese per acconsentire all'uso dei servizi)
• Hai la capacità legale di stipulare contratti
• Non ti è vietato utilizzare i nostri servizi secondo le leggi applicabili
• Fornirai informazioni veritiere e accurate durante la creazione del tuo account

**Se hai meno di 18 anni**, dichiari di avere il consenso dei tuoi genitori o tutori legali per utilizzare i nostri servizi.

Continuando a utilizzare i nostri servizi dopo modifiche a questi termini, accetti le modifiche.`
          },
          {
            title: '2. Scopo dell\'Applicazione',
            content: `Tuggi è un copilota culturale che fornisce orientamenti audio su punti di interesse (POI) basati sulla tua posizione.

**Funzionalità Principali:**
• Le narrazioni vengono attivate automaticamente mentre ti muovi
• L'app funziona in background e può operare durante gli spostamenti
• La copertura geografica varia per regione
• L'app rileva automaticamente quando ti avvicini ai POI
• Funzionalità offline disponibile per POI e audio pre-scaricati

**Scopo:**
Tuggi è una guida di viaggio e uno strumento educativo. L'app non sostituisce i sistemi di navigazione professionali né deve essere utilizzata come unica fonte di orientamento durante i viaggi.`
          },
          {
            title: '3. Responsabilità dell\'Utente',
            subsections: [
              {
                subtitle: '3.1 Sicurezza Durante l\'Uso',
                content: `**L'Uso Sicuro è Obbligatorio:**

• **Non interagire MAI con l'app mentre guidi** - L'app deve essere utilizzata solo da passeggeri o quando il veicolo è fermo
• Mantieni totale attenzione alla strada e alle condizioni del traffico
• Rispetta tutte le leggi locali sul traffico
• Non utilizzare l'app in modo che possa distrarre il conducente o compromettere la sicurezza
• Utilizza l'app solo quando è sicuro farlo

**Attenzione:** L'uso improprio dell'app durante la guida può causare incidenti gravi. Sei totalmente responsabile dell'uso sicuro dell'app.`
              },
              {
                subtitle: '3.2 Account e Credenziali',
                content: `Sei responsabile per:

• Proteggere le tue credenziali di accesso (email, password)
• Non condividere il tuo account con terzi
• Attivare l'autenticazione biometrica se disponibile per una maggiore sicurezza
• Notificare immediatamente Tuggi in caso di accesso non autorizzato o sospetta violazione della sicurezza
• Mantenere le tue informazioni account aggiornate e accurate
• Utilizzare una password forte e unica`
              },
              {
                subtitle: '3.3 Uso Appropriato del Servizio',
                content: `Accetti di utilizzare i nostri servizi solo per scopi legali e appropriati:

• Non utilizzare l'app per attività illegali, fraudolente o dannose
• Non utilizzare l'app per raccogliere dati di altri utenti senza autorizzazione
• Non tentare di accedere ad aree non autorizzate dell'app o dei sistemi
• Non interferire con il funzionamento dell'app o tentare di aggirare le misure di sicurezza
• Non utilizzare l'app per inviare spam, virus o codice dannoso
• Rispetta i diritti di proprietà intellettuale di terzi`
              },
              {
                subtitle: '3.4 Accuratezza delle Informazioni',
                content: `Sei responsabile per:

• Fornire informazioni veritiere, accurate e complete durante la creazione del tuo account
• Mantenere le tue informazioni aggiornate
• Non fornire informazioni false o fuorvianti
• Notificarci immediatamente qualsiasi cambiamento nelle informazioni fornite

**Attenzione:** Informazioni inaccurate possono influenzare il funzionamento del servizio e comportare la sospensione dell'account.`
              },
              {
                subtitle: '3.5 Responsabilità per Dati di Posizione',
                content: `Utilizzando l'app, comprendi e accetti che:

• L'app raccoglie e utilizza dati di posizione in tempo reale
• Sei responsabile di garantire di avere il diritto di fornire dati di posizione
• Sei responsabile di utilizzare l'app in luoghi in cui è legale e appropriato farlo
• Tuggi non è responsabile per conseguenze dell'uso di dati di posizione in luoghi in cui tale uso possa essere limitato o proibito
• Devi rispettare le leggi locali sulla raccolta e l'uso dei dati di posizione`
              }
            ]
          },
          {
            title: '4. Permessi e Raccolta Dati',
            subsections: [
              {
                subtitle: '4.1 Permessi Obbligatori',
                content: `Per funzionare correttamente, l'app richiede i seguenti permessi:

• **Posizione (in primo e secondo piano):** Obbligatoria per rilevare la tua posizione e attivare automaticamente le narrazioni dei POI. L'app non funziona senza questo permesso.
• **Audio:** Necessaria per la riproduzione delle narrazioni

**Importante:** Il permesso di posizione è essenziale per il funzionamento dell'app. Senza di esso, l'app non può fornire i servizi di guida di viaggio.`
              },
              {
                subtitle: '4.2 Permessi Opzionali',
                content: `I seguenti permessi sono opzionali ma migliorano l'esperienza:

• **Notifiche:** Per avvisi su POI vicini, aggiornamenti dell'app e raccomandazioni
• **Biometria:** Per login più sicuro e conveniente
• **Fotocamera (futuramente):** Per scattare foto profilo, se desiderato

Puoi revocare i permessi opzionali in qualsiasi momento nelle impostazioni del dispositivo, ma ciò può influenzare alcune funzionalità.`
              },
              {
                subtitle: '4.3 Dati di Terze Parti',
                content: `L'app utilizza servizi di terze parti che possono raccogliere dati:

• **Servizio Mappe:** Utilizzato per rendering mappe e servizi di geocodifica. L'uso è soggetto ai termini di servizio del fornitore.
• **Servizi di Analytics e Monitoraggio:** Utilizzati per analytics, crash reporting e notifiche push, secondo la nostra Informativa sulla Privacy.
• **Fornitore Backend:** Utilizzato per archiviazione dati e autenticazione, secondo la nostra Informativa sulla Privacy.

Utilizzando l'app, accetti anche i termini di servizio di questi fornitori quando applicabile. Consulta la nostra [Informativa sulla Privacy](/privacy) per dettagli su come trattiamo i tuoi dati.`
              }
            ]
          },
          {
            title: '5. Limitazioni del Servizio',
            content: `L'app è soggetta alle seguenti limitazioni tecniche:

• **Requisiti Dispositivo:** È necessario dispositivo con GPS e accesso internet all'installazione iniziale
• **Archiviazione:** L'app richiede circa 50MB di spazio libero per cache audio
• **Compatibilità:** Compatibile con iOS 12+ e Android 5.0+
• **Copertura:** La copertura dei POI può essere limitata in alcune regioni geografiche
• **Connettività:** Alcune funzionalità richiedono connessione internet, sebbene funzionalità offline sia disponibile per contenuto pre-scaricato
• **Precisione:** La precisione della posizione dipende da condizioni esterne (GPS, segnale, qualità dispositivo)

Tuggi non garantisce che il servizio sarà sempre disponibile, ininterrotto o privo di errori.`
          },
          {
            title: '6. Uso Appropriato e Restrizioni',
            content: `Utilizzando i nostri servizi, accetti di:

• Utilizzare l'app solo per i fini previsti e legali
• Non modificare, adattare, hackerare, distribuire o decompilare l'applicazione
• Non utilizzare l'app per attività illegali, fraudolente o commerciali senza autorizzazione espressa
• Non tentare di accedere ad aree non autorizzate dell'app o sistemi correlati
• Non interferire con il funzionamento dell'app o tentare di aggirare le misure di sicurezza
• Non utilizzare l'app in modo che violi diritti di terzi
• Non raccogliere dati di altri utenti senza autorizzazione

**La violazione di queste regole può comportare sospensione o terminazione immediata dell'account.**`
          },
          {
            title: '7. Proprietà Intellettuale',
            content: `Tutti i diritti di proprietà intellettuale relativi ai nostri servizi appartengono a Tuggi o ai suoi licenziatari:

• **Contenuto App:** Narrazioni, testi, immagini, audio, design e tutto il contenuto dell'app sono protetti da copyright e altre leggi sulla proprietà intellettuale
• **Marchio e Identità:** Il marchio Tuggi, i loghi, i nomi commerciali e gli elementi visivi sono proprietà esclusiva di Tuggi
• **Software:** Il codice dell'applicazione, gli algoritmi e la tecnologia sono protetti da copyright e segreti commerciali
• **Feedback:** Mantieni i diritti su feedback, suggerimenti o commenti inviati, ma concedi a Tuggi una licenza mondiale, non esclusiva e gratuita per usare, modificare e incorporare tale feedback nei nostri servizi

Non puoi copiare, modificare, distribuire, vendere o affittare alcuna parte dei nostri servizi senza autorizzazione scritta espressa.`
          },
          {
            title: '8. Limitazione di Responsabilità',
            content: `**ESCLUSIONE DI RESPONSABILITÀ:**

Nella massima misura consentita dalla legge, Tuggi non sarà responsabile per:

• **Danni Diretti, Indiretti o Conseguenti:** Perdita di dati, profitti, ricavi, opportunità di business o danni morali derivanti dall'uso o impossibilità d'uso dell'app
• **Accuratezza Informazioni:** Le informazioni narrate possono non riflettere dati aggiornati, completi o accurati. L'app non garantisce l'accuratezza assoluta delle informazioni fornite
• **Condizioni Esterne:** L'accuratezza della posizione e la funzionalità dell'app dipendono da condizioni esterne (GPS, segnale, qualità dispositivo, condizioni meteo) fuori dal controllo di Tuggi
• **Uso Improprio:** Tuggi non è responsabile per danni risultanti da uso improprio dell'app, incluso uso durante guida o in luoghi proibiti
• **Interruzioni:** Tuggi non garantisce funzionamento ininterrotto o privo di errori del servizio

**L'app è fornita "COSÌ COM'È" e "COME DISPONIBILE", senza garanzie di alcun tipo.**`
          },
          {
            title: '9. Limitazioni di Garanzia',
            content: `**ESCLUSIONE DI GARANZIE:**

Nella massima misura consentita dalla legge, Tuggi declina tutte le garanzie, espresse o implicite, incluse ma non limitate a:

• Garanzie di commerciabilità, idoneità per uno scopo particolare o non violazione
• Garanzie che il servizio sarà ininterrotto, sicuro, privo di errori o virus
• Garanzie sull'accuratezza, affidabilità o tempestività delle informazioni fornite
• Garanzie che i difetti saranno corretti o che il servizio soddisferà le tue aspettative

**L'app non sostituisce i sistemi di navigazione professionali** e non deve essere utilizzata come unica fonte di orientamento durante i viaggi. L'app è una guida culturale ed educativa, non un sistema di navigazione in tempo reale.`
          },
          {
            title: '10. Sospensione e Terminazione Account',
            content: `**Terminazione da parte di Tuggi:**
Tuggi può sospendere o terminare il tuo account e accesso ai servizi immediatamente, senza preavviso, se:

• Violi questi Termini di Utilizzo o la nostra Informativa sulla Privacy
• Usi l'app in modo illegale, fraudolento o inappropriato
• Fornisci informazioni false o fuorvianti
• Tuggi determina, a sua esclusiva discrezione, che il tuo uso rappresenta rischio per altri utenti o per Tuggi

**Terminazione da parte dell'Utente:**
Puoi terminare il tuo account in qualsiasi momento tramite le impostazioni dell'app o contattandoci.

**Effetti della Terminazione:**
• Il tuo diritto di utilizzare l'app cesserà immediatamente
• Alcuni dati possono essere mantenuti secondo obblighi legali o per fini di audit
• I dati personali saranno trattati secondo la nostra Informativa sulla Privacy e LGPD/GDPR`
          },
          {
            title: '11. Modifiche e Aggiornamenti',
            subsections: [
              {
                subtitle: '11.1 Aggiornamenti App',
                content: `Tuggi può modificare, aggiornare o interrompere funzionalità dell'app in qualsiasi momento. Potresti dover aggiornare l'app per continuare a usare i servizi. Non garantiamo che versioni precedenti dell'app continueranno a funzionare.`
              },
              {
                subtitle: '11.2 Aggiornamenti Termini',
                content: `Tuggi può modificare questi Termini di Utilizzo periodicamente. Modifiche significative saranno comunicate:

• Tramite l'app (notifica push o banner)
• Via email all'indirizzo associato al tuo account
• Pubblicazione della data di "ultimo aggiornamento" in cima a questa pagina

**Accettazione Continua:**
Continuando a usare i nostri servizi dopo modifiche ai termini, accetti le modifiche. Se non sei d'accordo con le modifiche, devi terminare il tuo account e smettere di usare i servizi.

**Revisione Periodica:**
Ti raccomandiamo di rivedere questi termini periodicamente per essere a conoscenza di eventuali modifiche.`
              }
            ]
          },
          {
            title: '12. Risoluzione Controversie',
            subsections: [
              {
                subtitle: '12.1 Legge Applicabile',
                content: `Questi Termini di Utilizzo sono regolati dalle leggi della Repubblica Federativa del Brasile, senza riguardo ai suoi principi di conflitto di leggi.

Per utenti fuori dal Brasile, le leggi del tuo paese possono applicarsi, ma questi termini saranno interpretati secondo le leggi brasiliane nella misura del possibile.`
              },
              {
                subtitle: '12.2 Giurisdizione',
                content: `Qualsiasi controversia relativa a questi termini o ai nostri servizi sarà risolta nei tribunali competenti di San Paolo, SP, Brasile, e accetti la giurisdizione esclusiva di questi tribunali.

Per controversie coinvolgenti utenti dell'Unione Europea, potresti avere diritto aggiuntivo di presentare reclamo presso l'autorità di protezione dati del tuo paese.`
              },
              {
                subtitle: '12.3 Risoluzione Amichevole',
                content: `Prima di iniziare qualsiasi processo giudiziario formale, accetti di:

• Tentare di risolvere controversie amichevolmente tramite comunicazione diretta con Tuggi
• Fornire dettagli scritti sulla controversia
• Attendere un periodo ragionevole (30 giorni) per risposta da Tuggi

Tuggi si impegna a rispondere a controversie in buona fede e cercare soluzioni mutuamente accettabili.`
              },
              {
                subtitle: '12.4 Arbitrato (se applicabile)',
                content: `Per controversie che non possono essere risolte amichevolmente, tu e Tuggi accettate di tentare risoluzione tramite arbitrato secondo le regole della Camera Arbitrale applicabile, a meno che la legge richieda procedura diversa.`
              }
            ]
          },
          {
            title: '13. Disposizioni Generali',
            subsections: [
              {
                subtitle: '13.1 Intero Accordo',
                content: `Questi Termini di Utilizzo, insieme alla nostra Informativa sulla Privacy e Informativa sui Cookie, costituiscono l'intero accordo tra te e Tuggi riguardante l'uso dei servizi.`
              },
              {
                subtitle: '13.2 Separabilità',
                content: `Se qualsiasi disposizione di questi termini è ritenuta invalida o inapplicabile, le disposizioni rimanenti rimarranno in pieno vigore ed effetto.`
              },
              {
                subtitle: '13.3 Rinuncia',
                content: `Il mancato esercizio da parte di Tuggi di qualsiasi diritto ai sensi di questi termini non costituisce rinuncia a tale diritto.`
              },
              {
                subtitle: '13.4 Cessione',
                content: `Non puoi trasferire o cedere i tuoi diritti o obblighi ai sensi di questi termini. Tuggi può trasferire o cedere i suoi diritti e obblighi in qualsiasi momento, incluso in caso di fusione, acquisizione o vendita di asset.`
              }
            ]
          },
          {
            title: '14. Contatto',
            content: `Per domande su questi Termini di Utilizzo, contattaci:

**Email:**
**contato@tuggi.app**

**Sito Web:**
https://www.tuggi.app/it/terms-of-use

**Per Questioni Legali:**
**contato@tuggi.app** (oggetto: "Termini di Utilizzo")

Rispondiamo entro 30 giorni lavorativi.`
          }
        ]
      }
    };

    return content[currentLanguage] || content['PT'];
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.narrow}>
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-neutral-600">{content.lastUpdated}</p>
          </div>
          
          <div className="mb-12">
            <p className="text-neutral-700 leading-relaxed text-lg">
              {content.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="prose prose-lg max-w-none">
            {content.sections.map((section: any, index: number) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {section.title}
                </h2>
                
                {section.subsections ? (
                  <div className="space-y-8">
                    {section.subsections.map((subsection: any, subIndex: number) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                          {subsection.subtitle}
                        </h3>
                        <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                          {subsection.content}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUsePage; 