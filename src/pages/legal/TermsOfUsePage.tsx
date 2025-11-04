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
        introduction: 'Estes Termos de Uso descrevem as condições para uso do aplicativo Tuggi (Tuggi Drive e Tuggi Walk) e do site oficial tuggi.app. Ao criar uma conta, instalar, acessar ou utilizar nossos serviços, você concorda expressamente com estes termos. Se você não concordar com estes termos, não utilize nossos serviços.',
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

• **Google Maps SDK:** Utilizado para renderização de mapas e serviços de geocodificação. O uso do Google Maps está sujeito aos Termos de Serviço do Google.
• **Firebase (Google):** Utilizado para analytics, crash reporting e notificações push, conforme nossa Política de Privacidade.
• **Supabase:** Utilizado para armazenamento de dados e autenticação, conforme nossa Política de Privacidade.

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
        introduction: 'These Terms of Use describe the conditions for using the Tuggi application (Tuggi Drive and Tuggi Walk) and the official website tuggi.app. By creating an account, installing, accessing, or using our services, you expressly agree to these terms. If you do not agree with these terms, do not use our services.',
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

• **Google Maps SDK:** Used for map rendering and geocoding services. Use of Google Maps is subject to Google's Terms of Service.
• **Firebase (Google):** Used for analytics, crash reporting, and push notifications, per our Privacy Policy.
• **Supabase:** Used for data storage and authentication, per our Privacy Policy.

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
        lastUpdated: 'Última actualización: Julio 2025',
        introduction: 'Estos Términos de Uso describen las condiciones para el uso de la aplicación Tuggi (Tuggi Drive y Tuggi Walk) y el sitio web oficial tuggi.app. Al utilizar nuestros servicios, aceptas los términos descritos a continuación.',
        sections: [
          {
            title: '1. Propósito de la aplicación',
            content: `Tuggi es un copiloto cultural que proporciona orientación en audio sobre puntos de interés (POIs) basados en tu ubicación.

• Las narraciones se activan automáticamente mientras te mueves
• La app funciona en segundo plano y puede operar durante desplazamientos
• La cobertura geográfica varía por región`
          },
          {
            title: '2. Responsabilidades del usuario',
            subsections: [
              {
                subtitle: 'Seguridad durante el uso',
                content: `• Nunca interactúes con la app mientras conduces
• Mantén atención total a la vía
• Respeta las leyes de tránsito locales`
              },
              {
                subtitle: 'Cuenta y login',
                content: `• Protege tus credenciales de acceso
• No compartas tu cuenta con terceros
• Activa autenticación biométrica si está disponible
• Avisa inmediatamente en caso de acceso indebido`
              }
            ]
          },
          {
            title: '3. Permisos y recolección de datos',
            subsections: [
              {
                subtitle: 'Permisos obligatorios',
                content: `• **Ubicación** (en 1º y 2º plano): usada para detectar tu posición y activar los audios
• **Audio**: necesaria para reproducción de las narraciones`
              },
              {
                subtitle: 'Permisos opcionales',
                content: `• **Notificaciones**: para alertas sobre paseos y actualizaciones
• **Biometría**: para login más seguro
• **Cámara** (futuramente): para foto de perfil

> Consulta también nuestra [Política de Privacidad](/privacy) para saber cómo tratamos tus datos.`
              }
            ]
          },
          {
            title: '4. Limitaciones de servicio',
            content: `• Es necesario dispositivo con GPS y acceso a internet en la instalación
• La app requiere cerca de 50MB de espacio libre para cache de audios
• Compatible con iOS 12+ y Android 5.0+
• La cobertura de POIs puede ser limitada en algunas regiones`
          },
          {
            title: '5. Condiciones de uso',
            content: `• Usa la app solo para los fines previstos
• No está permitido modificar, distribuir o descompilar la aplicación
• Está prohibido utilizar la app para actividades ilegales o comerciales sin autorización`
          },
          {
            title: '6. Propiedad intelectual',
            content: `• Las narraciones y contenidos de la app están protegidos por derechos de autor
• La marca Tuggi, logotipos y elementos visuales son de propiedad de la empresa
• El usuario mantiene los derechos sobre su feedback, pero autoriza su uso interno para mejoras`
          },
          {
            title: '7. Limitación de responsabilidad',
            content: `• La app se proporciona "tal como está", sin garantías de funcionamiento ininterrumpido
• La precisión de la ubicación depende de condiciones externas (GPS, señal, aparato)
• Las informaciones narradas pueden no reflejar datos actualizados o completos
• La app no sustituye sistemas de navegación`
          },
          {
            title: '8. Suspensión o terminación de cuenta',
            content: `• El usuario puede terminar su cuenta en cualquier momento
• Tuggi puede suspender el acceso en caso de violación de los términos
• Algunos datos pueden ser mantenidos conforme obligaciones legales`
          },
          {
            title: '9. Actualizaciones en los términos',
            content: `Estos términos pueden ser actualizados periódicamente.
Cambios relevantes serán comunicados por la app o por email.
Al continuar utilizando nuestros servicios, aceptas las alteraciones.`
          },
          {
            title: '10. Contacto',
            content: `En caso de dudas, entra en contacto por email:
**contato@tuggi.app**`
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