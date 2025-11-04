import React from 'react';
import { layout } from '../../utils/designSystem';

interface PrivacyPolicyPageProps {
  currentLanguage?: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ currentLanguage = 'PT' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Janeiro 2025',
        introduction: 'Esta Política de Privacidade descreve como o aplicativo Tuggi (Tuggi Drive e Tuggi Walk) e o site tuggi.app coletam, utilizam, armazenam, compartilham e protegem os dados dos usuários. Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia.',
        sections: [
          {
            title: '1. Informações que Coletamos',
            subsections: [
              {
                subtitle: '1.1 Informações da Conta e Autenticação',
                content: `O Tuggi Drive oferece três métodos de cadastro e login:

**Cadastro com Email e Senha:**
• E-mail (obrigatório, usado para login e comunicação)
• Senha (armazenada de forma criptografada, nunca em texto plano)
• Nome completo (opcional, para personalização)
• Número de telefone (opcional, para recuperação de conta)
• Verificação de e-mail obrigatória para ativação da conta

**Google Sign-In:**
• Integração com Google OAuth para autenticação
• E-mail (fornecido pelo Google)
• Nome (se autorizado)
• Foto de perfil (se autorizado)
• Tokens de autenticação gerenciados pelo Google conforme sua política de privacidade

**Apple Sign-In:**
• Integração nativa com Apple Authentication
• E-mail (pode ser um e-mail privado fornecido pela Apple para proteger sua privacidade)
• Nome (se autorizado na primeira vez)
• Conforme política de privacidade da Apple

**Dados do Perfil Armazenados:**
• Nome completo (full_name)
• E-mail (somente leitura após criação da conta)
• Telefone (phone) - opcional
• Apelido (nickname) - opcional
• Avatar/foto de perfil (avatar_url) - opcional
• ID único do usuário (UUID)
• Data de criação da conta
• Última atualização do perfil`
              },
              {
                subtitle: '1.2 Dados de Localização',
                content: `A coleta de dados de localização é **essencial** para o funcionamento do aplicativo. O app não funciona adequadamente sem permissão de localização.

**Permissões Solicitadas:**
• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (localização aproximada), ACCESS_BACKGROUND_LOCATION (localização em segundo plano - opcional mas recomendado)
• **iOS:** Localização enquanto app está aberto e em segundo plano durante sessões de viagem

**Dados de Localização Coletados:**
• Latitude e longitude (com precisão GPS)
• Altitude
• Heading (direção do movimento)
• Velocidade
• Precisão do sinal GPS
• Timestamp de cada atualização
• Status de movimento (parado/em movimento)

**Quando Coletamos Localização:**
• Durante sessões de guia de viagem ativas
• Em segundo plano quando o app está rodando durante uma viagem
• Para rastreamento de rota durante deslocamentos
• Para detecção automática de pontos de interesse (POIs) próximos
• **NÃO coletamos quando o app está completamente fechado** (a menos que você tenha concedido permissão de localização em background)

**Armazenamento de Dados de Localização:**
• Pontos de localização durante sessões são armazenados na tabela \`drive.route_trail\` vinculados à sessão de viagem
• Sessões completas de viagem são armazenadas na tabela \`drive.trip_sessions\`
• Dados são vinculados ao seu usuário e protegidos por Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Informações do Dispositivo',
                content: `Coletamos informações técnicas do dispositivo para otimização do serviço e resolução de problemas:

**Identificadores:**
• Device ID (identificador único do dispositivo)
• Unique ID (identificador único da instalação do app)
• FCM Token (para notificações push, se permitido)

**Informações de Hardware:**
• Modelo do dispositivo (ex: iPhone 14, Samsung Galaxy S23)
• Sistema operacional (iOS/Android)
• Versão do OS (ex: iOS 17.0, Android 14)
• Versão do app
• Build number
• Nome do dispositivo (se disponível)

**Informações de Performance:**
• Memória total do dispositivo (para otimização)
• Capacidade de armazenamento (para gerenciamento de cache)`
              },
              {
                subtitle: '1.4 Dados de Uso e Interações',
                content: `Coletamos informações sobre como você usa o aplicativo:

**Eventos de Sessão:**
• Início e fim de sessões de viagem
• Duração de cada sessão
• Modo de transporte utilizado (dirigindo, caminhando, bicicleta, etc.)

**Interações com POIs:**
• POIs visitados/detectados durante viagens
• Distância de trigger de cada POI
• Direção do POI em relação ao usuário (esquerda, direita, frente, atrás)
• Timestamp de cada detecção
• Reprodução de áudios (início, duração, conclusão ou interrupção)

**Interações com Rotas:**
• Rotas criadas e salvas
• POIs incluídos em cada rota
• Ordem otimizada dos POIs
• Distância total estimada
• Duração total estimada
• Preferências de rota

**Histórico de Viagens:**
• Histórico completo de rotas e viagens realizadas
• Pontos visitados durante cada viagem
• Localizações iniciais e finais de cada sessão`
              },
              {
                subtitle: '1.5 Dados de Áudio e Narrações',
                content: `**Preferências de Áudio:**
• Idioma de áudio preferido (pt-BR, en, es)
• Voz preferida (masculina/feminina)
• Velocidade de TTS (text-to-speech)

**Estatísticas de Reprodução:**
• Duração de áudios reproduzidos
• Taxa de conclusão (áudio ouvido até o fim ou interrompido)
• Idioma de áudio selecionado para cada POI

**Cache Local de Áudio:**
• Arquivos de áudio baixados localmente para reprodução offline
• Metadados de cache (URLs, timestamps, tamanhos)
• **Observação:** Áudios são armazenados localmente no dispositivo, não são enviados para nossos servidores`
              },
              {
                subtitle: '1.6 Dados de Configurações e Preferências',
                content: `Armazenamos suas preferências e configurações:

**Preferências de Guia:**
• Raio de trigger (100m, 200m ou 500m)
• Privacidade padrão de POI (privado/público)
• Permissão de compartilhamento de listas

**Preferências de Notificações:**
• Status de permissão de notificações push
• Preferências de tipos de notificação (se configurado)`
              }
            ]
          },
          {
            title: '2. Como Utilizamos Seus Dados',
            subsections: [
              {
                subtitle: '2.1 Para Funcionamento do Serviço',
                content: `Utilizamos seus dados para fornecer os serviços principais do aplicativo:

• **Detecção Automática de POIs:** Utilizamos sua localização em tempo real para detectar quando você se aproxima de pontos de interesse e reproduzir narrações automaticamente
• **Geração de Rotas:** Criamos rotas personalizadas conectando múltiplos POIs baseado em sua localização e preferências
• **Histórico de Viagens:** Armazenamos seu histórico para que você possa acessar rotas e viagens anteriores
• **Funcionalidade Offline:** Cache local permite que você use o app mesmo sem conexão à internet
• **Autenticação:** Gerenciamos sua conta e autenticação para acesso seguro ao serviço`
              },
              {
                subtitle: '2.2 Para Melhorar o Serviço',
                content: `Utilizamos dados agregados e anonimizados para melhorar continuamente o aplicativo:

• **Análise de Uso:** Analisamos padrões de uso para identificar problemas e oportunidades de melhoria
• **Otimização de Performance:** Utilizamos informações do dispositivo para otimizar o desempenho do app
• **Aprimoramento de Localização:** Melhoramos a precisão da detecção de POIs baseado em dados de uso
• **Otimização de Cache:** Gerenciamos eficientemente o cache de áudios e POIs para melhor experiência
• **Resolução de Problemas:** Utilizamos dados de crash e erros para identificar e corrigir bugs`
              },
              {
                subtitle: '2.3 Para Personalização',
                content: `Personalizamos sua experiência com base em suas preferências:

• **Interface Personalizada:** Utilizamos seu nome, apelido e foto de perfil para personalizar a interface
• **Conteúdo Relevante:** Oferecemos conteúdo e rotas baseadas em suas preferências e histórico
• **Configurações de Áudio:** Aplicamos suas preferências de idioma, voz e velocidade de narração
• **Notificações Personalizadas:** Enviamos notificações relevantes sobre atrações próximas (se permitido)`
              },
              {
                subtitle: '2.4 Para Comunicação e Suporte',
                content: `Utilizamos seus dados de contato para:

• **Verificação de Conta:** Enviamos e-mails de verificação durante o cadastro
• **Recuperação de Conta:** Permite recuperação de senha via e-mail
• **Suporte ao Cliente:** Respondemos suas solicitações e dúvidas
• **Comunicações Importantes:** Notificamos sobre mudanças significativas na política ou termos de uso`
              }
            ]
          },
          {
            title: '3. Compartilhamento de Dados com Terceiros',
            subsections: [
              {
                subtitle: '3.1 Provedores de Serviços Essenciais',
                content: `Compartilhamos dados com provedores de serviços que nos ajudam a operar o aplicativo:

**Supabase (Backend as a Service):**
• **Dados compartilhados:** Todos os dados do usuário (perfil, localização, rotas, viagens, preferências)
• **Finalidade:** Armazenamento seguro de dados, autenticação, APIs e sincronização entre dispositivos
• **Segurança:** Dados protegidos por Row Level Security (RLS) e criptografia
• **Localização:** Servidores podem estar localizados fora do Brasil, conforme política do Supabase
• **Política de Privacidade:** https://supabase.com/privacy

**Firebase (Google):**
• **Firebase Analytics:** Dados de uso e eventos anonimizados para análise
• **Firebase Crashlytics:** Relatórios de crash e erros (sem informações pessoais identificáveis)
• **Firebase Cloud Messaging (FCM):** Tokens FCM para envio de notificações push
• **Dados compartilhados:** Eventos de uso, dados de crash, tokens FCM, informações do dispositivo (anonimizados quando possível)
• **Finalidade:** Analytics, resolução de problemas, notificações push
• **Localização:** Servidores Google (principalmente EUA)
• **Política de Privacidade:** https://policies.google.com/privacy

**Google Maps SDK:**
• **Dados compartilhados:** Localização, rotas, POIs (conforme política do Google)
• **Finalidade:** Renderização de mapas, geocodificação, serviços de navegação
• **Política de Privacidade:** https://policies.google.com/privacy

**Google OAuth / Apple Sign-In:**
• **Dados compartilhados:** Email, nome (se autorizado), foto de perfil (se autorizado)
• **Finalidade:** Autenticação de usuário
• **Política de Privacidade Google:** https://policies.google.com/privacy
• **Política de Privacidade Apple:** https://www.apple.com/privacy/`
              },
              {
                subtitle: '3.2 Compartilhamento Não Permitido',
                content: `**NÃO vendemos, alugamos ou comercializamos seus dados pessoais** para terceiros para fins de marketing ou publicidade.

**NÃO compartilhamos seus dados com:**
• Empresas de publicidade para marketing direcionado
• Corretores de dados
• Outros serviços que não sejam essenciais para o funcionamento do app`
              },
              {
                subtitle: '3.3 Requisitos Legais',
                content: `Podemos compartilhar seus dados quando exigido por lei:

• Em resposta a processos legais válidos (mandados, ordens judiciais)
• Para cumprir obrigações legais
• Para proteger direitos, propriedade ou segurança nossa, de nossos usuários ou do público
• Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)`
              }
            ]
          },
          {
            title: '4. Armazenamento de Dados',
            subsections: [
              {
                subtitle: '4.1 Armazenamento no Servidor (Supabase)',
                content: `Seus dados são armazenados de forma segura no Supabase:

**Tabelas e Dados Armazenados:**
• **drive.profiles:** Dados do perfil, preferências de áudio e configurações (retenção: enquanto conta existir)
• **drive.user_route_history:** Histórico de rotas salvas (retenção: enquanto conta existir ou até você deletar)
• **drive.route_pois:** POIs detalhados de cada rota salva (retenção: vinculado à rota)
• **drive.trip_sessions:** Sessões de viagem completas (retenção: enquanto conta existir ou até você deletar)
• **drive.trip_session_attractions:** POIs visitados durante viagens (retenção: vinculado à sessão)
• **drive.route_trail:** Pontos de localização durante sessões (retenção: vinculado à sessão)
• **drive.fcm_tokens:** Tokens FCM para push notifications (retenção: enquanto app estiver instalado)
• **drive.data_deletion_requests:** Logs de solicitações de exclusão (retenção: para auditoria, conforme regulamentação)

**Segurança:**
• Todos os dados protegidos por Row Level Security (RLS)
• Apenas você pode acessar seus próprios dados
• Criptografia em trânsito (HTTPS/TLS)
• Criptografia em repouso conforme padrões do Supabase`
              },
              {
                subtitle: '4.2 Armazenamento Local (Dispositivo)',
                content: `Dados armazenados localmente no seu dispositivo:

**SQLite (Cache):**
• Cache de POIs (retenção: 5 dias, limpeza automática)
• Cache de áudios (retenção: 7 dias, limpeza automática)
• Metadados de cache (URLs, timestamps, tamanhos)

**AsyncStorage:**
• Cache temporário de dados (retenção: 1 minuto)
• Preferências locais temporárias

**File System:**
• Arquivos de áudio baixados
• **Localização iOS:** \`Documents/audio/\` (sandbox do app)
• **Localização Android:** \`DocumentDirectory/audio/\` (armazenamento interno do app)

**Limpeza Automática:**
• Cache expirado é removido automaticamente
• Limpeza semanal de arquivos órfãos
• Todos os dados locais são removidos ao desinstalar o app`
              }
            ]
          },
          {
            title: '5. Permissões Solicitadas',
            subsections: [
              {
                subtitle: '5.1 Permissões Obrigatórias',
                content: `**Localização (CRÍTICA - Obrigatória):**
O app **não funciona adequadamente** sem permissão de localização.

• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (localização aproximada), ACCESS_BACKGROUND_LOCATION (opcional mas recomendado para funcionamento durante viagens)
• **iOS:** Localização enquanto app está aberto e em segundo plano durante sessões de viagem
• **Finalidade:** Detecção automática de POIs, rastreamento de rota, cálculo de distâncias, funcionamento do guia de viagem
• **Quando usada:** Durante sessões de guia ativas e em background durante viagens

**Áudio (Obrigatória):**
• **Android:** Permissões para reproduzir áudio e ajustar volume
• **iOS:** Permissões automáticas para reprodução de áudio
• **Finalidade:** Reprodução de narrações de POIs, controle de áudio durante navegação, integração com sistemas de carro (CarPlay)`
              },
              {
                subtitle: '5.2 Permissões Opcionais',
                content: `**Notificações Push (Opcional):**
• **Finalidade:** Notificações sobre POIs próximos, atualizações do app, lembretes e recomendações
• **Controle:** Você pode ativar/desativar nas configurações do dispositivo a qualquer momento
• **Dados coletados:** FCM Token, status de permissão, preferências de notificação

**Biometria (Opcional):**
• **Finalidade:** Login mais seguro e conveniente
• **Armazenamento:** Armazenado no sistema de segurança do dispositivo (keychain/secure enclave), nunca em nossos servidores
• **Controle:** Você pode ativar/desativar nas configurações do app

**Câmera (Futuro - Opcional):**
• **Finalidade:** Para tirar foto de perfil, se desejado
• **Controle:** Será solicitada apenas quando você optar por usar esta funcionalidade`
              },
              {
                subtitle: '5.3 Controle de Permissões',
                content: `Você tem controle total sobre as permissões:

• Você pode revogar qualquer permissão a qualquer momento nas configurações do dispositivo
• Algumas funcionalidades podem não funcionar sem permissões necessárias
• O app solicitará permissões quando necessário e explicará o motivo
• Você pode negar permissões opcionais sem afetar o uso básico do app (exceto localização, que é essencial)`
              }
            ]
          },
          {
            title: '6. Analytics e Rastreamento',
            subsections: [
              {
                subtitle: '6.1 Firebase Analytics',
                content: `Utilizamos Firebase Analytics (Google Analytics) para entender como o app é usado e melhorá-lo:

**Eventos Rastreados:**
• **Eventos de Sessão:** Início/fim de viagem, visualização de telas
• **Eventos de POI:** POI detectado, início/conclusão de reprodução de áudio
• **Eventos de Autenticação:** Login, logout, tentativas de login/cadastro
• **Eventos de Interação:** Cliques em botões, visualizações de telas

**Dados Coletados com Eventos:**
• User ID (anonimizado quando possível)
• Session ID
• Timestamps
• Dados de localização (latitude, longitude, precisão) - anonimizados
• Informações de POI (ID, nome, categoria) - anonimizadas
• Métricas de performance (tempo de resposta, taxa de cache hit)

**Anonimização:**
• Dados são anonimizados quando possível
• Não coletamos dados pessoais identificáveis através do Analytics
• Dados são agregados para análise estatística

**Desativação:**
• Analytics é necessário para funcionalidade e melhoria do serviço
• Dados são tratados conforme política do Google Analytics
• Retenção: Geralmente 14 meses (política padrão do Google Analytics)`
              },
              {
                subtitle: '6.2 Firebase Crashlytics',
                content: `Utilizamos Firebase Crashlytics para identificar e corrigir problemas técnicos:

**Dados Coletados:**
• Stack traces de erros
• Informações do dispositivo (modelo, OS, versão do app) - anonimizadas
• Estado do app no momento do crash
• Logs de erro (sem informações pessoais identificáveis)

**Não Inclui:**
• Informações pessoais identificáveis
• Dados de localização (exceto se necessário para debug do erro específico)
• Dados sensíveis do usuário

**Finalidade:**
• Identificar bugs e crashes
• Melhorar estabilidade do app
• Resolver problemas técnicos rapidamente`
              },
              {
                subtitle: '6.3 Firebase Cloud Messaging (FCM)',
                content: `Utilizamos FCM para enviar notificações push:

**Dados Coletados:**
• FCM Token (identificador único do dispositivo para push)
• Status de permissão de notificações
• Preferências de notificação do usuário

**Armazenamento:**
• Tokens armazenados na tabela \`drive.fcm_tokens\` vinculados ao usuário
• Removidos quando você desinstala o app ou revoga permissões

**Finalidade:**
• Enviar notificações sobre POIs próximos
• Atualizações do app
• Lembretes e recomendações (se permitido)`
              }
            ]
          },
          {
            title: '7. Segurança dos Dados',
            subsections: [
              {
                subtitle: '7.1 Medidas de Segurança Implementadas',
                content: `Implementamos medidas de segurança robustas para proteger seus dados:

**Autenticação:**
• Senhas hashadas (nunca armazenadas em texto plano)
• Tokens JWT para autenticação segura
• OAuth seguro para Google/Apple Sign-In
• Autenticação biométrica opcional (armazenada no dispositivo)

**Criptografia:**
• Comunicação HTTPS/TLS com servidores
• Dados sensíveis criptografados em trânsito
• Armazenamento seguro no Supabase (conforme padrões de segurança)
• Criptografia em repouso conforme padrões do Supabase

**Row Level Security (RLS):**
• Usuários só podem acessar seus próprios dados
• Políticas RLS no Supabase para todas as tabelas
• Verificação de autenticação em todas as queries
• Isolamento completo de dados entre usuários

**Armazenamento Local:**
• Dados locais armazenados no sandbox do app
• Não acessíveis por outros apps
• Limpeza automática ao desinstalar
• Cache expira automaticamente após período definido`
              },
              {
                subtitle: '7.2 Proteção Contra Acesso Não Autorizado',
                content: `• Monitoramento contínuo de segurança
• Acesso restrito apenas a funcionários autorizados
• Auditorias regulares de segurança
• Resposta rápida a incidentes de segurança`
              }
            ]
          },
          {
            title: '8. Seus Direitos (LGPD/GDPR)',
            subsections: [
              {
                subtitle: '8.1 Direito de Acesso',
                content: `Você tem o direito de acessar todos os seus dados pessoais:

• Visualizar todos os dados do perfil na tela de Profile do app
• Acessar histórico de rotas e viagens no app
• Solicitar informações detalhadas sobre dados armazenados via **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Direito de Correção',
                content: `Você pode corrigir seus dados a qualquer momento:

• Editar perfil (nome, telefone, nickname) diretamente no app
• Atualizar preferências de áudio e configurações
• Solicitar correção de dados incorretos via **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Direito de Exclusão',
                content: `Você pode solicitar a exclusão completa de sua conta e dados:

• **Exclusão disponível no app:** Acesse as configurações e selecione "Excluir Conta"
• **O que é removido:**
  - Todos os dados do perfil
  - Histórico de rotas e viagens
  - Preferências e configurações
  - Dados de autenticação do Supabase Auth
  - Cache local do dispositivo
• **Tempo de processamento:** Geralmente em até 30 dias
• **Exceções:** Alguns dados podem ser mantidos conforme obrigações legais (logs de auditoria)`
              },
              {
                subtitle: '8.4 Direito de Portabilidade',
                content: `Você pode solicitar uma cópia dos seus dados em formato estruturado:

• Solicite via **contato@tuggi.app**
• Dados serão exportados em formato JSON
• Inclui todos os dados do perfil, rotas, viagens e preferências
• Processamento em até 30 dias`
              },
              {
                subtitle: '8.5 Direito de Revogação de Consentimento',
                content: `Você pode revogar consentimentos a qualquer momento:

• **Permissões de Localização:** Revogue nas configurações do dispositivo (pode afetar funcionalidade do app)
• **Notificações Push:** Desative nas configurações do dispositivo
• **Analytics:** Entre em contato via **contato@tuggi.app** (algumas funcionalidades podem ser afetadas)
• **Exclusão de Conta:** Remove todos os consentimentos e dados`
              },
              {
                subtitle: '8.6 Direito de Oposição ao Processamento',
                content: `Você pode se opor ao processamento de seus dados:

• Solicite parada de processamento via **contato@tuggi.app**
• Algumas funcionalidades podem não estar disponíveis
• Exclusão de conta remove todos os processamentos`
              }
            ]
          },
          {
            title: '9. Retenção de Dados',
            content: `**Dados do Perfil:**
• Retidos enquanto sua conta existir
• Deletados imediatamente ao excluir conta

**Histórico de Rotas e Viagens:**
• Retidos enquanto conta existir
• Podem ser deletados individualmente por você
• Deletados ao excluir conta

**Dados de Localização:**
• Retidos durante sessão de viagem
• Vinculados ao histórico de viagem
• Deletados quando sessão de viagem é deletada

**Cache Local:**
• POIs: 5 dias (limpeza automática)
• Áudios: 7 dias (limpeza automática)
• Limpeza semanal de arquivos órfãos

**Dados de Analytics:**
• Retidos conforme política do Firebase Analytics
• Geralmente 14 meses (política padrão do Google Analytics)

**Logs de Exclusão:**
• Retidos para fins de auditoria
• Período conforme regulamentação aplicável (LGPD, GDPR)`
          },
          {
            title: '10. Transferência Internacional de Dados',
            content: `Seus dados podem ser transferidos e processados fora do Brasil:

**Supabase:**
• Servidores podem estar localizados fora do Brasil
• Conformidade com padrões de segurança internacionais
• Política de privacidade: https://supabase.com/privacy

**Firebase (Google):**
• Servidores localizados globalmente (principalmente EUA)
• Dados de analytics transferidos para servidores Google
• Conformidade com padrões de segurança do Google
• Política de privacidade: https://policies.google.com/privacy

**Google Maps:**
• Serviços de mapas podem processar dados em servidores globais
• Conformidade com política de privacidade do Google

**Proteções:**
• Utilizamos apenas provedores que garantem proteções adequadas
• Cláusulas contratuais padrão (Standard Contractual Clauses - SCCs) quando aplicável
• Conformidade com GDPR para transferências para UE`
          },
          {
            title: '11. Notificações Push',
            content: `Se você optar por receber notificações push:

**Tipos de Notificações:**
• Notificações sobre POIs próximos (quando implementado)
• Atualizações do app
• Lembretes e recomendações

**Controle:**
• Você pode ativar/desativar nas configurações do dispositivo a qualquer momento
• Preferências de notificação podem ser gerenciadas no app (se implementado)

**Dados Utilizados:**
• FCM Token (identificador único do dispositivo)
• Status de permissão
• Sua localização (apenas para notificações sobre POIs próximos, se permitido)

**Revogação:**
• Você pode revogar permissão de notificações nas configurações do dispositivo
• Imediatamente efetivo`
          },
          {
            title: '12. Conformidade Regulatória',
            content: `Estamos em conformidade com:

**LGPD (Lei Geral de Proteção de Dados - Brasil):**
• Consentimento explícito para coleta de dados
• Direito de acesso, correção e exclusão
• Portabilidade de dados
• Sistema de exclusão de dados implementado
• Transparência sobre coleta e uso de dados

**GDPR (Regulamento Geral sobre a Proteção de Dados - Europa):**
• Base legal para processamento de dados
• Direitos dos titulares de dados
• Sistema de exclusão de dados
• Proteção de dados de transferência internacional
• Notificação de violações de dados (se aplicável)

**COPPA (Children's Online Privacy Protection Act - EUA):**
• App não é direcionado a crianças menores de 13 anos
• Não coletamos dados de crianças sem consentimento parental

**Política de Privacidade de Crianças:**
• Se você tem menos de 13 anos (ou idade mínima em seu país), não use este app sem consentimento parental
• Entre em contato conosco se tiver dúvidas sobre proteção de dados de crianças`
          },
          {
            title: '13. Cookies e Tecnologias Similares',
            content: `**Site (tuggi.app):**
O site pode utilizar cookies e tecnologias similares. Consulte nossa Política de Cookies para mais detalhes.

**Aplicativo:**
O aplicativo não utiliza cookies no sentido tradicional. Utilizamos:
• Cache local (SQLite, AsyncStorage) para funcionalidade offline
• Tokens de autenticação para sessões
• FCM Tokens para notificações push

Esses dados são armazenados localmente no dispositivo e não são cookies rastreáveis.`
          },
          {
            title: '14. Atualizações Nesta Política',
            content: `Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossos serviços ou práticas legais.

**Notificações:**
• Mudanças significativas serão comunicadas pelo app ou e-mail
• Data de última atualização sempre visível no topo desta política
• Você será notificado sobre mudanças importantes antes que entrem em vigor

**Continuidade:**
• Ao continuar usando o app após mudanças, você concorda com os termos atualizados
• Se você não concordar com as mudanças, pode excluir sua conta a qualquer momento

**Histórico:**
• Versões anteriores desta política podem ser solicitadas via **contato@tuggi.app**`
          },
          {
            title: '15. Contato e Dúvidas',
            content: `Se você tiver qualquer dúvida sobre nossa Política de Privacidade ou quiser exercer seus direitos, entre em contato:

**E-mail Geral:**
**contato@tuggi.app**

**Para Questões de Privacidade:**
**contato@tuggi.app** (assunto: "Privacidade")

**Para Exercer Direitos (LGPD/GDPR):**
**contato@tuggi.app** (assunto: "Direitos de Dados")

**Website:**
https://www.tuggi.app/pt/privacy-policy

**Tempo de Resposta:**
Respondemos solicitações relacionadas a direitos de dados em até 30 dias, conforme exigido pela LGPD e GDPR.

**Identificação:**
Ao solicitar exercício de direitos, podemos solicitar verificação de identidade para proteger seus dados.`
          }
        ]
      },
      EN: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: January 2025',
        introduction: 'This Privacy Policy describes how the Tuggi application (Tuggi Drive and Tuggi Walk) and the tuggi.app website collect, use, store, share, and protect user data. This policy is compliant with the General Data Protection Law (LGPD) of Brazil and the General Data Protection Regulation (GDPR) of the European Union.',
        sections: [
          {
            title: '1. Information We Collect',
            subsections: [
              {
                subtitle: '1.1 Account and Authentication Information',
                content: `Tuggi Drive offers three methods of registration and login:

**Email and Password Registration:**
• Email (required, used for login and communication)
• Password (stored encrypted, never in plain text)
• Full name (optional, for personalization)
• Phone number (optional, for account recovery)
• Email verification required for account activation

**Google Sign-In:**
• Integration with Google OAuth for authentication
• Email (provided by Google)
• Name (if authorized)
• Profile photo (if authorized)
• Authentication tokens managed by Google per their privacy policy

**Apple Sign-In:**
• Native integration with Apple Authentication
• Email (may be a private email provided by Apple to protect your privacy)
• Name (if authorized the first time)
• Per Apple's privacy policy

**Stored Profile Data:**
• Full name (full_name)
• Email (read-only after account creation)
• Phone (phone) - optional
• Nickname (nickname) - optional
• Avatar/profile photo (avatar_url) - optional
• Unique user ID (UUID)
• Account creation date
• Last profile update`
              },
              {
                subtitle: '1.2 Location Data',
                content: `Location data collection is **essential** for the app to function. The app does not work properly without location permission.

**Permissions Requested:**
• **Android:** ACCESS_FINE_LOCATION (precise GPS), ACCESS_COARSE_LOCATION (approximate location), ACCESS_BACKGROUND_LOCATION (background location - optional but recommended)
• **iOS:** Location while app is open and in background during travel sessions

**Location Data Collected:**
• Latitude and longitude (with GPS precision)
• Altitude
• Heading (direction of movement)
• Speed
• GPS signal accuracy
• Timestamp of each update
• Movement status (stopped/moving)

**When We Collect Location:**
• During active travel guide sessions
• In background when the app is running during a trip
• For route tracking during travel
• For automatic detection of nearby points of interest (POIs)
• **We do NOT collect when the app is completely closed** (unless you have granted background location permission)

**Location Data Storage:**
• Location points during sessions are stored in the \`drive.route_trail\` table linked to the travel session
• Complete travel sessions are stored in the \`drive.trip_sessions\` table
• Data is linked to your user and protected by Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Device Information',
                content: `We collect technical device information for service optimization and troubleshooting:

**Identifiers:**
• Device ID (unique device identifier)
• Unique ID (unique app installation identifier)
• FCM Token (for push notifications, if permitted)

**Hardware Information:**
• Device model (e.g., iPhone 14, Samsung Galaxy S23)
• Operating system (iOS/Android)
• OS version (e.g., iOS 17.0, Android 14)
• App version
• Build number
• Device name (if available)

**Performance Information:**
• Total device memory (for optimization)
• Storage capacity (for cache management)`
              },
              {
                subtitle: '1.4 Usage and Interaction Data',
                content: `We collect information about how you use the application:

**Session Events:**
• Start and end of travel sessions
• Duration of each session
• Transportation mode used (driving, walking, bicycle, etc.)

**POI Interactions:**
• POIs visited/detected during trips
• Trigger distance of each POI
• POI direction relative to user (left, right, front, behind)
• Timestamp of each detection
• Audio playback (start, duration, completion or interruption)

**Route Interactions:**
• Routes created and saved
• POIs included in each route
• Optimized POI order
• Total estimated distance
• Total estimated duration
• Route preferences

**Travel History:**
• Complete history of routes and trips taken
• Points visited during each trip
• Initial and final locations of each session`
              },
              {
                subtitle: '1.5 Audio and Narration Data',
                content: `**Audio Preferences:**
• Preferred audio language (pt-BR, en, es)
• Preferred voice (male/female)
• TTS speed (text-to-speech)

**Playback Statistics:**
• Duration of audio played
• Completion rate (audio listened to completion or interrupted)
• Audio language selected for each POI

**Local Audio Cache:**
• Audio files downloaded locally for offline playback
• Cache metadata (URLs, timestamps, sizes)
• **Note:** Audio is stored locally on the device and not sent to our servers`
              },
              {
                subtitle: '1.6 Settings and Preferences Data',
                content: `We store your preferences and settings:

**Guide Preferences:**
• Trigger radius (100m, 200m or 500m)
• Default POI privacy (private/public)
• List sharing permission

**Notification Preferences:**
• Push notification permission status
• Notification type preferences (if configured)`
              }
            ]
          },
          {
            title: '2. How We Use Your Data',
            subsections: [
              {
                subtitle: '2.1 For Service Functionality',
                content: `We use your data to provide the main services of the application:

• **Automatic POI Detection:** We use your real-time location to detect when you approach points of interest and automatically play narrations
• **Route Generation:** We create personalized routes connecting multiple POIs based on your location and preferences
• **Travel History:** We store your history so you can access previous routes and trips
• **Offline Functionality:** Local cache allows you to use the app even without internet connection
• **Authentication:** We manage your account and authentication for secure access to the service`
              },
              {
                subtitle: '2.2 To Improve Service',
                content: `We use aggregated and anonymized data to continuously improve the application:

• **Usage Analysis:** We analyze usage patterns to identify problems and improvement opportunities
• **Performance Optimization:** We use device information to optimize app performance
• **Location Enhancement:** We improve POI detection accuracy based on usage data
• **Cache Optimization:** We efficiently manage audio and POI cache for better experience
• **Problem Resolution:** We use crash and error data to identify and fix bugs`
              },
              {
                subtitle: '2.3 For Personalization',
                content: `We personalize your experience based on your preferences:

• **Personalized Interface:** We use your name, nickname, and profile photo to personalize the interface
• **Relevant Content:** We offer content and routes based on your preferences and history
• **Audio Settings:** We apply your language, voice, and narration speed preferences
• **Personalized Notifications:** We send relevant notifications about nearby attractions (if permitted)`
              },
              {
                subtitle: '2.4 For Communication and Support',
                content: `We use your contact data for:

• **Account Verification:** We send verification emails during registration
• **Account Recovery:** Allows password recovery via email
• **Customer Support:** We respond to your requests and questions
• **Important Communications:** We notify about significant changes in policy or terms of use`
              }
            ]
          },
          {
            title: '3. Data Sharing with Third Parties',
            subsections: [
              {
                subtitle: '3.1 Essential Service Providers',
                content: `We share data with service providers that help us operate the application:

**Supabase (Backend as a Service):**
• **Data shared:** All user data (profile, location, routes, trips, preferences)
• **Purpose:** Secure data storage, authentication, APIs, and device synchronization
• **Security:** Data protected by Row Level Security (RLS) and encryption
• **Location:** Servers may be located outside Brazil, per Supabase policy
• **Privacy Policy:** https://supabase.com/privacy

**Firebase (Google):**
• **Firebase Analytics:** Anonymized usage and event data for analysis
• **Firebase Crashlytics:** Crash and error reports (without personally identifiable information)
• **Firebase Cloud Messaging (FCM):** FCM tokens for push notifications
• **Data shared:** Usage events, crash data, FCM tokens, device information (anonymized when possible)
• **Purpose:** Analytics, problem resolution, push notifications
• **Location:** Google servers (primarily USA)
• **Privacy Policy:** https://policies.google.com/privacy

**Google Maps SDK:**
• **Data shared:** Location, routes, POIs (per Google policy)
• **Purpose:** Map rendering, geocoding, navigation services
• **Privacy Policy:** https://policies.google.com/privacy

**Google OAuth / Apple Sign-In:**
• **Data shared:** Email, name (if authorized), profile photo (if authorized)
• **Purpose:** User authentication
• **Google Privacy Policy:** https://policies.google.com/privacy
• **Apple Privacy Policy:** https://www.apple.com/privacy/`
              },
              {
                subtitle: '3.2 Sharing Not Permitted',
                content: `**We do NOT sell, rent, or commercialize your personal data** to third parties for marketing or advertising purposes.

**We do NOT share your data with:**
• Advertising companies for targeted marketing
• Data brokers
• Other services that are not essential for app operation`
              },
              {
                subtitle: '3.3 Legal Requirements',
                content: `We may share your data when required by law:

• In response to valid legal processes (warrants, court orders)
• To comply with legal obligations
• To protect rights, property, or safety of us, our users, or the public
• In case of merger, acquisition, or asset sale (with prior notice)`
              }
            ]
          },
          {
            title: '4. Data Storage',
            subsections: [
              {
                subtitle: '4.1 Server Storage (Supabase)',
                content: `Your data is stored securely on Supabase:

**Tables and Stored Data:**
• **drive.profiles:** Profile data, audio preferences and settings (retention: while account exists)
• **drive.user_route_history:** Saved route history (retention: while account exists or until you delete)
• **drive.route_pois:** Detailed POIs of each saved route (retention: linked to route)
• **drive.trip_sessions:** Complete travel sessions (retention: while account exists or until you delete)
• **drive.trip_session_attractions:** POIs visited during trips (retention: linked to session)
• **drive.route_trail:** Location points during sessions (retention: linked to session)
• **drive.fcm_tokens:** FCM tokens for push notifications (retention: while app is installed)
• **drive.data_deletion_requests:** Data deletion request logs (retention: for audit, per regulations)

**Security:**
• All data protected by Row Level Security (RLS)
• Only you can access your own data
• Encryption in transit (HTTPS/TLS)
• Encryption at rest per Supabase standards`
              },
              {
                subtitle: '4.2 Local Storage (Device)',
                content: `Data stored locally on your device:

**SQLite (Cache):**
• POI cache (retention: 5 days, automatic cleanup)
• Audio cache (retention: 7 days, automatic cleanup)
• Cache metadata (URLs, timestamps, sizes)

**AsyncStorage:**
• Temporary data cache (retention: 1 minute)
• Temporary local preferences

**File System:**
• Downloaded audio files
• **iOS Location:** \`Documents/audio/\` (app sandbox)
• **Android Location:** \`DocumentDirectory/audio/\` (app internal storage)

**Automatic Cleanup:**
• Expired cache is automatically removed
• Weekly cleanup of orphaned files
• All local data is removed when you uninstall the app`
              }
            ]
          },
          {
            title: '5. Requested Permissions',
            subsections: [
              {
                subtitle: '5.1 Required Permissions',
                content: `**Location (CRITICAL - Required):**
The app **does not work properly** without location permission.

• **Android:** ACCESS_FINE_LOCATION (precise GPS), ACCESS_COARSE_LOCATION (approximate location), ACCESS_BACKGROUND_LOCATION (optional but recommended for operation during trips)
• **iOS:** Location while app is open and in background during travel sessions
• **Purpose:** Automatic POI detection, route tracking, distance calculation, travel guide operation
• **When used:** During active guide sessions and in background during trips

**Audio (Required):**
• **Android:** Permissions to play audio and adjust volume
• **iOS:** Automatic permissions for audio playback
• **Purpose:** POI narration playback, audio control during navigation, integration with car systems (CarPlay)`
              },
              {
                subtitle: '5.2 Optional Permissions',
                content: `**Push Notifications (Optional):**
• **Purpose:** Notifications about nearby POIs, app updates, reminders and recommendations
• **Control:** You can enable/disable in device settings at any time
• **Data collected:** FCM Token, permission status, notification preferences

**Biometrics (Optional):**
• **Purpose:** More secure and convenient login
• **Storage:** Stored in device security system (keychain/secure enclave), never on our servers
• **Control:** You can enable/disable in app settings

**Camera (Future - Optional):**
• **Purpose:** To take profile photo, if desired
• **Control:** Will only be requested when you choose to use this feature`
              },
              {
                subtitle: '5.3 Permission Control',
                content: `You have full control over permissions:

• You can revoke any permission at any time in device settings
• Some features may not work without necessary permissions
• The app will request permissions when needed and explain the reason
• You can deny optional permissions without affecting basic app use (except location, which is essential)`
              }
            ]
          },
          {
            title: '6. Analytics and Tracking',
            subsections: [
              {
                subtitle: '6.1 Firebase Analytics',
                content: `We use Firebase Analytics (Google Analytics) to understand how the app is used and improve it:

**Tracked Events:**
• **Session Events:** Trip start/end, screen views
• **POI Events:** POI detected, audio playback start/completion
• **Authentication Events:** Login, logout, login/signup attempts
• **Interaction Events:** Button clicks, screen views

**Data Collected with Events:**
• User ID (anonymized when possible)
• Session ID
• Timestamps
• Location data (latitude, longitude, accuracy) - anonymized
• POI information (ID, name, category) - anonymized
• Performance metrics (response time, cache hit rate)

**Anonymization:**
• Data is anonymized when possible
• We do not collect personally identifiable information through Analytics
• Data is aggregated for statistical analysis

**Deactivation:**
• Analytics is necessary for functionality and service improvement
• Data is handled per Google Analytics policy
• Retention: Generally 14 months (default Google Analytics policy)`
              },
              {
                subtitle: '6.2 Firebase Crashlytics',
                content: `We use Firebase Crashlytics to identify and fix technical problems:

**Data Collected:**
• Error stack traces
• Device information (model, OS, app version) - anonymized
• App state at time of crash
• Error logs (without personally identifiable information)

**Does Not Include:**
• Personally identifiable information
• Location data (except if necessary for specific error debugging)
• Sensitive user data

**Purpose:**
• Identify bugs and crashes
• Improve app stability
• Resolve technical problems quickly`
              },
              {
                subtitle: '6.3 Firebase Cloud Messaging (FCM)',
                content: `We use FCM to send push notifications:

**Data Collected:**
• FCM Token (unique device identifier for push)
• Notification permission status
• User notification preferences

**Storage:**
• Tokens stored in \`drive.fcm_tokens\` table linked to user
• Removed when you uninstall the app or revoke permissions

**Purpose:**
• Send notifications about nearby POIs
• App updates
• Reminders and recommendations (if permitted)`
              }
            ]
          },
          {
            title: '7. Data Security',
            subsections: [
              {
                subtitle: '7.1 Security Measures Implemented',
                content: `We implement robust security measures to protect your data:

**Authentication:**
• Hashed passwords (never stored in plain text)
• JWT tokens for secure authentication
• Secure OAuth for Google/Apple Sign-In
• Optional biometric authentication (stored on device)

**Encryption:**
• HTTPS/TLS communication with servers
• Sensitive data encrypted in transit
• Secure storage on Supabase (per security standards)
• Encryption at rest per Supabase standards

**Row Level Security (RLS):**
• Users can only access their own data
• RLS policies on Supabase for all tables
• Authentication verification on all queries
• Complete data isolation between users

**Local Storage:**
• Local data stored in app sandbox
• Not accessible by other apps
• Automatic cleanup on uninstall
• Cache expires automatically after defined period`
              },
              {
                subtitle: '7.2 Protection Against Unauthorized Access',
                content: `• Continuous security monitoring
• Access restricted to authorized employees only
• Regular security audits
• Quick response to security incidents`
              }
            ]
          },
          {
            title: '8. Your Rights (LGPD/GDPR)',
            subsections: [
              {
                subtitle: '8.1 Right of Access',
                content: `You have the right to access all your personal data:

• View all profile data in the app's Profile screen
• Access route and trip history in the app
• Request detailed information about stored data via **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Right of Rectification',
                content: `You can correct your data at any time:

• Edit profile (name, phone, nickname) directly in the app
• Update audio preferences and settings
• Request correction of incorrect data via **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Right of Erasure',
                content: `You can request complete deletion of your account and data:

• **Deletion available in app:** Go to settings and select "Delete Account"
• **What is removed:**
  - All profile data
  - Route and trip history
  - Preferences and settings
  - Supabase Auth authentication data
  - Local device cache
• **Processing time:** Generally within 30 days
• **Exceptions:** Some data may be retained per legal obligations (audit logs)`
              },
              {
                subtitle: '8.4 Right of Portability',
                content: `You can request a copy of your data in structured format:

• Request via **contato@tuggi.app**
• Data will be exported in JSON format
• Includes all profile data, routes, trips, and preferences
• Processing within 30 days`
              },
              {
                subtitle: '8.5 Right to Withdraw Consent',
                content: `You can withdraw consent at any time:

• **Location Permissions:** Revoke in device settings (may affect app functionality)
• **Push Notifications:** Disable in device settings
• **Analytics:** Contact via **contato@tuggi.app** (some features may be affected)
• **Account Deletion:** Removes all consent and data`
              },
              {
                subtitle: '8.6 Right to Object to Processing',
                content: `You can object to processing of your data:

• Request processing stop via **contato@tuggi.app**
• Some features may not be available
• Account deletion removes all processing`
              }
            ]
          },
          {
            title: '9. Data Retention',
            content: `**Profile Data:**
• Retained while your account exists
• Deleted immediately upon account deletion

**Route and Trip History:**
• Retained while account exists
• Can be deleted individually by you
• Deleted upon account deletion

**Location Data:**
• Retained during travel session
• Linked to travel history
• Deleted when travel session is deleted

**Local Cache:**
• POIs: 5 days (automatic cleanup)
• Audio: 7 days (automatic cleanup)
• Weekly cleanup of orphaned files

**Analytics Data:**
• Retained per Firebase Analytics policy
• Generally 14 months (default Google Analytics policy)

**Deletion Logs:**
• Retained for audit purposes
• Period per applicable regulations (LGPD, GDPR)`
          },
          {
            title: '10. International Data Transfers',
            content: `Your data may be transferred and processed outside Brazil:

**Supabase:**
• Servers may be located outside Brazil
• Compliance with international security standards
• Privacy policy: https://supabase.com/privacy

**Firebase (Google):**
• Servers located globally (primarily USA)
• Analytics data transferred to Google servers
• Compliance with Google security standards
• Privacy policy: https://policies.google.com/privacy

**Google Maps:**
• Map services may process data on global servers
• Compliance with Google privacy policy

**Protections:**
• We only use providers that guarantee adequate protections
• Standard Contractual Clauses (SCCs) when applicable
• GDPR compliance for transfers to EU`
          },
          {
            title: '11. Push Notifications',
            content: `If you choose to receive push notifications:

**Types of Notifications:**
• Notifications about nearby POIs (when implemented)
• App updates
• Reminders and recommendations

**Control:**
• You can enable/disable in device settings at any time
• Notification preferences can be managed in the app (if implemented)

**Data Used:**
• FCM Token (unique device identifier)
• Permission status
• Your location (only for notifications about nearby POIs, if permitted)

**Revocation:**
• You can revoke notification permission in device settings
• Immediately effective`
          },
          {
            title: '12. Regulatory Compliance',
            content: `We are compliant with:

**LGPD (General Data Protection Law - Brazil):**
• Explicit consent for data collection
• Right of access, rectification, and erasure
• Data portability
• Data deletion system implemented
• Transparency about data collection and use

**GDPR (General Data Protection Regulation - Europe):**
• Legal basis for data processing
• Data subject rights
• Data deletion system
• International data transfer protection
• Data breach notification (if applicable)

**COPPA (Children's Online Privacy Protection Act - USA):**
• App is not directed to children under 13 years of age
• We do not collect data from children without parental consent

**Children's Privacy Policy:**
• If you are under 13 years of age (or minimum age in your country), do not use this app without parental consent
• Contact us if you have questions about children's data protection`
          },
          {
            title: '13. Cookies and Similar Technologies',
            content: `**Website (tuggi.app):**
The website may use cookies and similar technologies. See our Cookie Policy for more details.

**Application:**
The application does not use cookies in the traditional sense. We use:
• Local cache (SQLite, AsyncStorage) for offline functionality
• Authentication tokens for sessions
• FCM Tokens for push notifications

This data is stored locally on the device and is not trackable cookies.`
          },
          {
            title: '14. Updates to This Policy',
            content: `We may update this Privacy Policy periodically to reflect changes in our services or legal practices.

**Notifications:**
• Significant changes will be communicated through the app or email
• Last update date always visible at the top of this policy
• You will be notified about important changes before they take effect

**Continuity:**
• By continuing to use the app after changes, you agree to the updated terms
• If you do not agree with the changes, you can delete your account at any time

**History:**
• Previous versions of this policy can be requested via **contato@tuggi.app**`
          },
          {
            title: '15. Contact and Questions',
            content: `If you have any questions about our Privacy Policy or wish to exercise your rights, contact us:

**General Email:**
**contato@tuggi.app**

**For Privacy Questions:**
**contato@tuggi.app** (subject: "Privacy")

**To Exercise Rights (LGPD/GDPR):**
**contato@tuggi.app** (subject: "Data Rights")

**Website:**
https://www.tuggi.app/en/privacy-policy

**Response Time:**
We respond to data rights requests within 30 days, as required by LGPD and GDPR.

**Identification:**
When requesting to exercise rights, we may request identity verification to protect your data.`
          }
        ]
      },
      ES: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: Enero 2025',
        introduction: 'Esta Política de Privacidad describe cómo la aplicación Tuggi (Tuggi Drive y Tuggi Walk) y el sitio web tuggi.app recopilan, utilizan, almacenan, comparten y protegen los datos de los usuarios. Esta política cumple con la Ley General de Protección de Datos (LGPD) de Brasil y el Reglamento General de Protección de Datos (GDPR) de la Unión Europea.',
        sections: [
          {
            title: '1. Información que recopilamos',
            subsections: [
              {
                subtitle: 'a) Información de la cuenta',
                content: `• Email (obligatorio, para login)
• Nombre completo (opcional, para personalización)
• Apodo (opcional, para mostrar en la app)
• Número de teléfono (opcional, para recuperación de cuenta)
• Foto de perfil (opcional)`
              },
              {
                subtitle: 'b) Datos de ubicación',
                content: `• Ubicación en tiempo real durante el uso de la app
• Seguimiento en segundo plano durante sesiones de navegación
• Historial de rutas y puntos visitados
• Calles, barrios y regiones accedidas para contexto cultural`
              },
              {
                subtitle: 'c) Información del dispositivo',
                content: `• Modelo del dispositivo y sistema operativo
• Versión de la app
• Identificadores anónimos para análisis (Firebase, Mixpanel)`
              },
              {
                subtitle: 'd) Datos de uso',
                content: `• Eventos en la app (login, inicio/fin de ruta, reproducción de audio)
• Duración y frecuencia de sesiones
• Interacciones con funciones de la app
• Comentarios enviados sobre puntos de interés`
              },
              {
                subtitle: 'e) Datos de audio',
                content: `• Audio almacenado localmente para reproducción offline
• Estadísticas de reproducción (duración, éxito/fallo)
• Comandos de voz (cuando se usan, no se almacenan)`
              }
            ]
          },
          {
            title: '2. Cómo utilizamos tus datos',
            subsections: [
              {
                subtitle: 'Para funcionamiento de la app',
                content: `• Activar narraciones automáticas por ubicación
• Permitir navegación contextual y en segundo plano
• Ofrecer contenido personalizado durante el viaje`
              },
              {
                subtitle: 'Para mejorar el servicio',
                content: `• Analizar uso de la app y comportamiento de usuarios
• Mejorar el sistema de ubicación y activación de puntos
• Optimizar caché de audio y rendimiento general`
              },
              {
                subtitle: 'Para soporte y experiencia',
                content: `• Personalizar la interfaz con apodos y fotos
• Enviar notificaciones sobre atracciones cercanas
• Atender solicitudes y dudas de usuarios`
              }
            ]
          },
          {
            title: '3. Dónde se almacenan tus datos',
            content: `• Supabase: datos de cuenta y ubicación (con seguridad y RLS)
• Firebase / Mixpanel: datos analíticos y eventos de uso
• Dispositivo del usuario: caché local de audio y datos temporales
• Biometría (si está activada): almacenada en el sistema de seguridad del dispositivo (keychain/secure enclave)`
          },
          {
            title: '4. Compartir datos',
            content: `• **No vendemos ni compartimos tus datos con terceros**
• Los datos se utilizan solo para operación y mejora del servicio`
          },
          {
            title: '5. Permisos solicitados',
            content: `• **Ubicación (obligatorio)** – para detectar tu posición y activar audio
• **Audio (obligatorio)** – para reproducción de narraciones
• **Notificaciones (opcional)** – para alertas sobre atracciones
• **Biometría (opcional)** – para login más seguro
• **Cámara (futuro)** – para foto de perfil, si se desea`
          },
          {
            title: '6. Tus derechos',
            content: `Puedes en cualquier momento:

• Solicitar eliminación de la cuenta y datos asociados
• Desactivar permisos en tu dispositivo
• Corregir información personal en tu perfil
• Solicitar información sobre datos almacenados

Para esto, contáctanos:
**contato@tuggi.app**`
          },
          {
            title: '7. Seguridad',
            content: `Adoptamos prácticas modernas de seguridad, incluyendo:

• Cifrado de datos en tránsito
• Acceso restringido con autenticación segura
• Almacenamiento seguro con control de acceso (Supabase RLS)`
          },
          {
            title: '8. Actualizaciones en esta política',
            content: `Podemos actualizar esta Política periódicamente.
Los cambios relevantes serán comunicados por la app o email.
Al continuar usando la app, aceptas los términos actualizados.`
          },
          {
            title: '9. Dudas',
            content: `Si tienes alguna duda sobre nuestra Política de Privacidad, contáctanos:

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

export default PrivacyPolicyPage;