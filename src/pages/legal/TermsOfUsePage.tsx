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