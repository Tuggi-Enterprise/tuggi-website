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
        introduction: 'Esta Política de Privacidade descreve como o aplicativo Tuggi e o site tuggi.app coletam, utilizam, armazenam, compartilham e protegem os dados dos usuários. Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia.',
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

**Autenticação Social (Google):**
• Integração com serviço de autenticação de terceiros
• E-mail (fornecido pelo provedor)
• Nome (se autorizado)
• Foto de perfil (se autorizado)
• Tokens de autenticação gerenciados pelo provedor conforme sua política de privacidade

**Autenticação Social (Apple):**
• Integração nativa com serviço de autenticação
• E-mail (pode ser um e-mail privado fornecido pelo provedor para proteger sua privacidade)
• Nome (se autorizado na primeira vez)
• Conforme política de privacidade do provedor

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
• Pontos de localização durante sessões são armazenados vinculados à sessão de viagem
• Sessões completas de viagem são armazenadas de forma segura
• Dados são vinculados ao seu usuário e protegidos por Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Informações do Dispositivo',
                content: `Coletamos informações técnicas do dispositivo para otimização do serviço e resolução de problemas:

**Identificadores:**
• Device ID (identificador único do dispositivo)
• Unique ID (identificador único da instalação do app)
• Token de notificação push (para notificações, se permitido)

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

**Provedor de Backend e Armazenamento:**
• **Dados compartilhados:** Todos os dados do usuário (perfil, localização, rotas, viagens, preferências)
• **Finalidade:** Armazenamento seguro de dados, autenticação, APIs e sincronização entre dispositivos
• **Segurança:** Dados protegidos por Row Level Security (RLS) e criptografia
• **Localização:** Servidores podem estar localizados fora do Brasil
• **Política de Privacidade:** Disponível nas políticas do provedor de serviços

**Serviços de Analytics e Monitoramento:**
• **Analytics:** Dados de uso e eventos anonimizados para análise
• **Crash Reporting:** Relatórios de crash e erros (sem informações pessoais identificáveis)
• **Notificações Push:** Tokens para envio de notificações push
• **Dados compartilhados:** Eventos de uso, dados de crash, tokens de notificação, informações do dispositivo (anonimizados quando possível)
• **Finalidade:** Analytics, resolução de problemas, notificações push
• **Localização:** Servidores podem estar localizados fora do Brasil (principalmente EUA)
• **Política de Privacidade:** Disponível nas políticas do provedor de serviços

**Serviço de Mapas:**
• **Dados compartilhados:** Localização, rotas, POIs (conforme política do provedor)
• **Finalidade:** Renderização de mapas, geocodificação, serviços de navegação
• **Política de Privacidade:** Disponível nas políticas do provedor de serviços

**Provedores de Autenticação Social:**
• **Dados compartilhados:** Email, nome (se autorizado), foto de perfil (se autorizado)
• **Finalidade:** Autenticação de usuário
• **Política de Privacidade:** Disponível nas políticas de cada provedor de autenticação`
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
                subtitle: '4.1 Armazenamento no Servidor',
                content: `Seus dados são armazenados de forma segura em servidores protegidos:

**Tipos de Dados Armazenados:**
• **Dados do Perfil:** Informações da conta, preferências de áudio e configurações (retenção: enquanto conta existir)
• **Histórico de Rotas:** Rotas salvas e seus detalhes (retenção: enquanto conta existir ou até você deletar)
• **Sessões de Viagem:** Dados completos de cada viagem realizada (retenção: enquanto conta existir ou até você deletar)
• **Pontos Visitados:** POIs visitados durante viagens (retenção: vinculado à sessão de viagem)
• **Dados de Localização:** Pontos de localização registrados durante sessões ativas (retenção: vinculado à sessão)
• **Tokens de Notificação:** Tokens para push notifications (retenção: enquanto app estiver instalado)
• **Logs de Auditoria:** Registros de solicitações de exclusão e ações administrativas (retenção: para auditoria, conforme regulamentação)

**Segurança:**
• Todos os dados protegidos por Row Level Security (RLS)
• Apenas você pode acessar seus próprios dados
• Criptografia em trânsito (HTTPS/TLS)
• Criptografia em repouso conforme padrões de segurança
• Estrutura de banco de dados protegida e não acessível publicamente`
              },
              {
                subtitle: '4.2 Armazenamento Local (Dispositivo)',
                content: `Dados armazenados localmente no seu dispositivo:

**Banco de Dados Local (Cache):**
• Cache de POIs (retenção: 5 dias, limpeza automática)
• Cache de áudios (retenção: 7 dias, limpeza automática)
• Metadados de cache (URLs, timestamps, tamanhos)

**Armazenamento Temporário:**
• Cache temporário de dados (retenção: 1 minuto)
• Preferências locais temporárias

**Arquivos Locais:**
• Arquivos de áudio baixados para reprodução offline
• Armazenados no sandbox seguro do app (área isolada do sistema operacional)
• Não acessíveis por outros apps ou usuários do dispositivo

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
• **Dados coletados:** Token de notificação, status de permissão, preferências de notificação

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
                subtitle: '6.1 Analytics e Análise de Uso',
                content: `Utilizamos serviços de analytics para entender como o app é usado e melhorá-lo:

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
• Dados são tratados conforme política do provedor de serviços
• Retenção: Geralmente 14 meses (política padrão do provedor)`
              },
              {
                subtitle: '6.2 Relatórios de Erro e Crash',
                content: `Utilizamos serviços de relatório de erros para identificar e corrigir problemas técnicos:

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
                subtitle: '6.3 Notificações Push',
                content: `Utilizamos serviços de notificações push para enviar notificações:

**Dados Coletados:**
• Token de notificação (identificador único do dispositivo para push)
• Status de permissão de notificações
• Preferências de notificação do usuário

**Armazenamento:**
• Tokens armazenados de forma segura vinculados ao usuário
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
• Tokens de autenticação segura
• Autenticação social segura (Google/Apple)
• Autenticação biométrica opcional (armazenada no dispositivo)

**Criptografia:**
• Comunicação HTTPS/TLS com servidores
• Dados sensíveis criptografados em trânsito
• Armazenamento seguro em servidores protegidos (conforme padrões de segurança)
• Criptografia em repouso conforme padrões de segurança

**Row Level Security (RLS):**
• Usuários só podem acessar seus próprios dados
• Políticas de segurança de acesso (RLS) para todas as tabelas
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
  - Dados de autenticação do sistema
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
• Retidos conforme política do provedor de serviços
• Geralmente 14 meses (política padrão do provedor)

**Logs de Exclusão:**
• Retidos para fins de auditoria
• Período conforme regulamentação aplicável (LGPD, GDPR)`
          },
          {
            title: '10. Transferência Internacional de Dados',
            content: `Seus dados podem ser transferidos e processados fora do Brasil:

**Provedor de Backend e Armazenamento:**
• Servidores podem estar localizados fora do Brasil
• Conformidade com padrões de segurança internacionais
• Política de privacidade disponível nas políticas do provedor

**Provedor de Analytics e Monitoramento:**
• Servidores localizados globalmente (principalmente EUA)
• Dados de analytics transferidos para servidores do provedor
• Conformidade com padrões de segurança do provedor
• Política de privacidade disponível nas políticas do provedor

**Provedor de Serviços de Mapas:**
• Serviços de mapas podem processar dados em servidores globais
• Conformidade com política de privacidade do provedor

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
• Token de notificação (identificador único do dispositivo)
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
• Cache local (banco de dados local) para funcionalidade offline
• Tokens de autenticação para sessões
• Tokens de notificação para push notifications

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
        introduction: 'This Privacy Policy describes how the Tuggi application  and the tuggi.app website collect, use, store, share, and protect user data. This policy is compliant with the General Data Protection Law (LGPD) of Brazil and the General Data Protection Regulation (GDPR) of the European Union.',
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

**Social Authentication (Google):**
• Integration with third-party authentication service
• Email (provided by the provider)
• Name (if authorized)
• Profile photo (if authorized)
• Authentication tokens managed by the provider per their privacy policy

**Social Authentication (Apple):**
• Native integration with authentication service
• Email (may be a private email provided by the provider to protect your privacy)
• Name (if authorized the first time)
• Per provider's privacy policy

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
• Location points during sessions are stored linked to the travel session
• Complete travel sessions are stored securely
• Data is linked to your user and protected by Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Device Information',
                content: `We collect technical device information for service optimization and troubleshooting:

**Identifiers:**
• Device ID (unique device identifier)
• Unique ID (unique app installation identifier)
• Push notification token (for notifications, if permitted)

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

**Backend and Storage Provider:**
• **Data shared:** All user data (profile, location, routes, trips, preferences)
• **Purpose:** Secure data storage, authentication, APIs, and device synchronization
• **Security:** Data protected by Row Level Security (RLS) and encryption
• **Location:** Servers may be located outside Brazil
• **Privacy Policy:** Available in provider's service policies

**Analytics and Monitoring Services:**
• **Analytics:** Anonymized usage and event data for analysis
• **Crash Reporting:** Crash and error reports (without personally identifiable information)
• **Push Notifications:** Tokens for push notifications
• **Data shared:** Usage events, crash data, notification tokens, device information (anonymized when possible)
• **Purpose:** Analytics, problem resolution, push notifications
• **Location:** Servers may be located outside Brazil (primarily USA)
• **Privacy Policy:** Available in provider's service policies

**Maps Service:**
• **Data shared:** Location, routes, POIs (per provider policy)
• **Purpose:** Map rendering, geocoding, navigation services
• **Privacy Policy:** Available in provider's service policies

**Social Authentication Providers:**
• **Data shared:** Email, name (if authorized), profile photo (if authorized)
• **Purpose:** User authentication
• **Privacy Policy:** Available in each authentication provider's policies`
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
                subtitle: '4.1 Server Storage',
                content: `Your data is stored securely on protected servers:

**Types of Stored Data:**
• **Profile Data:** Account information, audio preferences and settings (retention: while account exists)
• **Route History:** Saved routes and their details (retention: while account exists or until you delete)
• **Travel Sessions:** Complete data of each trip taken (retention: while account exists or until you delete)
• **Visited Points:** POIs visited during trips (retention: linked to travel session)
• **Location Data:** Location points recorded during active sessions (retention: linked to session)
• **Notification Tokens:** Tokens for push notifications (retention: while app is installed)
• **Audit Logs:** Records of deletion requests and administrative actions (retention: for audit, per regulations)

**Security:**
• All data protected by Row Level Security (RLS)
• Only you can access your own data
• Encryption in transit (HTTPS/TLS)
• Encryption at rest per security standards
• Database structure protected and not publicly accessible`
              },
              {
                subtitle: '4.2 Local Storage (Device)',
                content: `Data stored locally on your device:

**Local Database (Cache):**
• POI cache (retention: 5 days, automatic cleanup)
• Audio cache (retention: 7 days, automatic cleanup)
• Cache metadata (URLs, timestamps, sizes)

**Temporary Storage:**
• Temporary data cache (retention: 1 minute)
• Temporary local preferences

**Local Files:**
• Downloaded audio files for offline playback
• Stored in the app's secure sandbox (isolated area of the operating system)
• Not accessible by other apps or device users

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
• **Data collected:** Notification token, permission status, notification preferences

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
                subtitle: '6.1 Analytics and Usage Analysis',
                content: `We use analytics services to understand how the app is used and improve it:

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
• Data is handled per provider's service policy
• Retention: Generally 14 months (default provider policy)`
              },
              {
                subtitle: '6.2 Error and Crash Reports',
                content: `We use error reporting services to identify and fix technical problems:

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
                subtitle: '6.3 Push Notifications',
                content: `We use push notification services to send notifications:

**Data Collected:**
• Notification token (unique device identifier for push)
• Notification permission status
• User notification preferences

**Storage:**
• Tokens stored securely linked to user
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
• Secure authentication tokens
• Secure social authentication (Google/Apple)
• Optional biometric authentication (stored on device)

**Encryption:**
• HTTPS/TLS communication with servers
• Sensitive data encrypted in transit
• Secure storage on protected servers (per security standards)
• Encryption at rest per security standards

**Row Level Security (RLS):**
• Users can only access their own data
• Security access policies (RLS) for all tables
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
  - System authentication data
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
• Retained per provider's service policy
• Generally 14 months (default provider policy)

**Deletion Logs:**
• Retained for audit purposes
• Period per applicable regulations (LGPD, GDPR)`
          },
          {
            title: '10. International Data Transfers',
            content: `Your data may be transferred and processed outside Brazil:

**Backend and Storage Provider:**
• Servers may be located outside Brazil
• Compliance with international security standards
• Privacy policy available in provider's service policies

**Analytics and Monitoring Provider:**
• Servers located globally (primarily USA)
• Analytics data transferred to provider servers
• Compliance with provider security standards
• Privacy policy available in provider's service policies

**Maps Service Provider:**
• Map services may process data on global servers
• Compliance with provider privacy policy

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
• Notification token (unique device identifier)
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
• Local cache (local database) for offline functionality
• Authentication tokens for sessions
• Notification tokens for push notifications

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
        introduction: 'Esta Política de Privacidad describe cómo la aplicación Tuggi y el sitio web tuggi.app recopilan, utilizan, almacenan, comparten y protegen los datos de los usuarios. Esta política cumple con la Ley General de Protección de Datos (LGPD) de Brasil y el Reglamento General de Protección de Datos (GDPR) de la Unión Europea.',
        sections: [
          {
            title: '1. Información que Recopilamos',
            subsections: [
              {
                subtitle: '1.1 Información de la Cuenta y Autenticación',
                content: `Tuggi Drive ofrece tres métodos de registro e inicio de sesión:

**Registro con Email y Contraseña:**
• Email (obligatorio, usado para login y comunicación)
• Contraseña (almacenada de forma cifrada, nunca en texto plano)
• Nombre completo (opcional, para personalización)
• Número de teléfono (opcional, para recuperación de cuenta)
• Verificación de email obligatoria para activación de la cuenta

**Autenticación Social (Google):**
• Integración con servicio de autenticación de terceros
• Email (proporcionado por el proveedor)
• Nombre (si se autoriza)
• Foto de perfil (si se autoriza)
• Tokens de autenticación gestionados por el proveedor según su política de privacidad

**Autenticación Social (Apple):**
• Integración nativa con servicio de autenticación
• Email (puede ser un email privado proporcionado por el proveedor para proteger tu privacidad)
• Nombre (si se autoriza la primera vez)
• Según la política de privacidad del proveedor

**Datos del Perfil Almacenados:**
• Nombre completo (full_name)
• Email (solo lectura después de crear la cuenta)
• Teléfono (phone) - opcional
• Apodo (nickname) - opcional
• Avatar/foto de perfil (avatar_url) - opcional
• ID único del usuario (UUID)
• Fecha de creación de la cuenta
• Última actualización del perfil`
              },
              {
                subtitle: '1.2 Datos de Ubicación',
                content: `La recopilación de datos de ubicación es **esencial** para el funcionamiento de la aplicación. La app no funciona adecuadamente sin permiso de ubicación.

**Permisos Solicitados:**
• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (ubicación aproximada), ACCESS_BACKGROUND_LOCATION (ubicación en segundo plano - opcional pero recomendado)
• **iOS:** Ubicación mientras la app está abierta y en segundo plano durante sesiones de viaje

**Datos de Ubicación Recopilados:**
• Latitud y longitud (con precisión GPS)
• Altitud
• Heading (dirección del movimiento)
• Velocidad
• Precisión de la señal GPS
• Timestamp de cada actualización
• Estado de movimiento (parado/en movimiento)

**Cuándo Recopilamos Ubicación:**
• Durante sesiones activas de guía de viaje
• En segundo plano cuando la app está ejecutándose durante un viaje
• Para rastreo de ruta durante desplazamientos
• Para detección automática de puntos de interés (POIs) cercanos
• **NO recopilamos cuando la app está completamente cerrada** (a menos que hayas otorgado permiso de ubicación en segundo plano)

**Almacenamiento de Datos de Ubicación:**
• Los puntos de ubicación durante sesiones se almacenan vinculados a la sesión de viaje
• Las sesiones completas de viaje se almacenan de forma segura
• Los datos están vinculados a tu usuario y protegidos por Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Información del Dispositivo',
                content: `Recopilamos información técnica del dispositivo para optimización del servicio y resolución de problemas:

**Identificadores:**
• Device ID (identificador único del dispositivo)
• Unique ID (identificador único de la instalación de la app)
• Token de notificación push (para notificaciones, si se permite)

**Información de Hardware:**
• Modelo del dispositivo (ej: iPhone 14, Samsung Galaxy S23)
• Sistema operativo (iOS/Android)
• Versión del OS (ej: iOS 17.0, Android 14)
• Versión de la app
• Build number
• Nombre del dispositivo (si está disponible)

**Información de Rendimiento:**
• Memoria total del dispositivo (para optimización)
• Capacidad de almacenamiento (para gestión de caché)`
              },
              {
                subtitle: '1.4 Datos de Uso e Interacciones',
                content: `Recopilamos información sobre cómo usas la aplicación:

**Eventos de Sesión:**
• Inicio y fin de sesiones de viaje
• Duración de cada sesión
• Modo de transporte utilizado (conduciendo, caminando, bicicleta, etc.)

**Interacciones con POIs:**
• POIs visitados/detectados durante viajes
• Distancia de trigger de cada POI
• Dirección del POI en relación al usuario (izquierda, derecha, frente, atrás)
• Timestamp de cada detección
• Reproducción de audio (inicio, duración, conclusión o interrupción)

**Interacciones con Rutas:**
• Rutas creadas y guardadas
• POIs incluidos en cada ruta
• Orden optimizado de los POIs
• Distancia total estimada
• Duración total estimada
• Preferencias de ruta

**Historial de Viajes:**
• Historial completo de rutas y viajes realizados
• Puntos visitados durante cada viaje
• Ubicaciones iniciales y finales de cada sesión`
              },
              {
                subtitle: '1.5 Datos de Audio y Narraciones',
                content: `**Preferencias de Audio:**
• Idioma de audio preferido (pt-BR, en, es)
• Voz preferida (masculina/femenina)
• Velocidad de TTS (text-to-speech)

**Estadísticas de Reproducción:**
• Duración de audios reproducidos
• Tasa de conclusión (audio escuchado hasta el final o interrumpido)
• Idioma de audio seleccionado para cada POI

**Caché Local de Audio:**
• Archivos de audio descargados localmente para reproducción offline
• Metadatos de caché (URLs, timestamps, tamaños)
• **Nota:** Los audios se almacenan localmente en el dispositivo, no se envían a nuestros servidores`
              },
              {
                subtitle: '1.6 Datos de Configuraciones y Preferencias',
                content: `Almacenamos tus preferencias y configuraciones:

**Preferencias de Guía:**
• Radio de trigger (100m, 200m o 500m)
• Privacidad predeterminada de POI (privado/público)
• Permiso de compartir listas

**Preferencias de Notificaciones:**
• Estado de permiso de notificaciones push
• Preferencias de tipos de notificación (si está configurado)`
              }
            ]
          },
          {
            title: '2. Cómo Utilizamos Tus Datos',
            subsections: [
              {
                subtitle: '2.1 Para Funcionamiento del Servicio',
                content: `Utilizamos tus datos para proporcionar los servicios principales de la aplicación:

• **Detección Automática de POIs:** Utilizamos tu ubicación en tiempo real para detectar cuando te acercas a puntos de interés y reproducir narraciones automáticamente
• **Generación de Rutas:** Creamos rutas personalizadas conectando múltiples POIs basado en tu ubicación y preferencias
• **Historial de Viajes:** Almacenamos tu historial para que puedas acceder a rutas y viajes anteriores
• **Funcionalidad Offline:** El caché local permite que uses la app incluso sin conexión a internet
• **Autenticación:** Gestionamos tu cuenta y autenticación para acceso seguro al servicio`
              },
              {
                subtitle: '2.2 Para Mejorar el Servicio',
                content: `Utilizamos datos agregados y anonimizados para mejorar continuamente la aplicación:

• **Análisis de Uso:** Analizamos patrones de uso para identificar problemas y oportunidades de mejora
• **Optimización de Rendimiento:** Utilizamos información del dispositivo para optimizar el rendimiento de la app
• **Mejora de Ubicación:** Mejoramos la precisión de la detección de POIs basado en datos de uso
• **Optimización de Caché:** Gestionamos eficientemente el caché de audios y POIs para mejor experiencia
• **Resolución de Problemas:** Utilizamos datos de crash y errores para identificar y corregir bugs`
              },
              {
                subtitle: '2.3 Para Personalización',
                content: `Personalizamos tu experiencia con base en tus preferencias:

• **Interfaz Personalizada:** Utilizamos tu nombre, apodo y foto de perfil para personalizar la interfaz
• **Contenido Relevante:** Ofrecemos contenido y rutas basadas en tus preferencias e historial
• **Configuraciones de Audio:** Aplicamos tus preferencias de idioma, voz y velocidad de narración
• **Notificaciones Personalizadas:** Enviamos notificaciones relevantes sobre atracciones cercanas (si se permite)`
              },
              {
                subtitle: '2.4 Para Comunicación y Soporte',
                content: `Utilizamos tus datos de contacto para:

• **Verificación de Cuenta:** Enviamos emails de verificación durante el registro
• **Recuperación de Cuenta:** Permite recuperación de contraseña vía email
• **Soporte al Cliente:** Respondemos tus solicitudes y dudas
• **Comunicaciones Importantes:** Notificamos sobre cambios significativos en la política o términos de uso`
              }
            ]
          },
          {
            title: '3. Compartimiento de Datos con Terceros',
            subsections: [
              {
                subtitle: '3.1 Proveedores de Servicios Esenciales',
                content: `Compartimos datos con proveedores de servicios que nos ayudan a operar la aplicación:

**Proveedor de Backend y Almacenamiento:**
• **Datos compartidos:** Todos los datos del usuario (perfil, ubicación, rutas, viajes, preferencias)
• **Finalidad:** Almacenamiento seguro de datos, autenticación, APIs y sincronización entre dispositivos
• **Seguridad:** Datos protegidos por Row Level Security (RLS) y cifrado
• **Ubicación:** Los servidores pueden estar ubicados fuera de Brasil
• **Política de Privacidad:** Disponible en las políticas del proveedor de servicios

**Servicios de Analytics y Monitoreo:**
• **Analytics:** Datos de uso y eventos anonimizados para análisis
• **Crash Reporting:** Informes de crash y errores (sin información personal identificable)
• **Notificaciones Push:** Tokens para envío de notificaciones push
• **Datos compartidos:** Eventos de uso, datos de crash, tokens de notificación, información del dispositivo (anonimizados cuando es posible)
• **Finalidad:** Analytics, resolución de problemas, notificaciones push
• **Ubicación:** Servidores pueden estar ubicados fuera de Brasil (principalmente EE.UU.)
• **Política de Privacidad:** Disponible en las políticas del proveedor de servicios

**Servicio de Mapas:**
• **Datos compartidos:** Ubicación, rutas, POIs (según política del proveedor)
• **Finalidad:** Renderización de mapas, geocodificación, servicios de navegación
• **Política de Privacidad:** Disponible en las políticas del proveedor de servicios

**Proveedores de Autenticación Social:**
• **Datos compartidos:** Email, nombre (si se autoriza), foto de perfil (si se autoriza)
• **Finalidad:** Autenticación de usuario
• **Política de Privacidad:** Disponible en las políticas de cada proveedor de autenticación`
              },
              {
                subtitle: '3.2 Compartimiento No Permitido',
                content: `**NO vendemos, alquilamos o comercializamos tus datos personales** a terceros para fines de marketing o publicidad.

**NO compartimos tus datos con:**
• Empresas de publicidad para marketing dirigido
• Corredores de datos
• Otros servicios que no sean esenciales para el funcionamiento de la app`
              },
              {
                subtitle: '3.3 Requisitos Legales',
                content: `Podemos compartir tus datos cuando lo exija la ley:

• En respuesta a procesos legales válidos (órdenes judiciales, órdenes de tribunales)
• Para cumplir obligaciones legales
• Para proteger derechos, propiedad o seguridad nuestra, de nuestros usuarios o del público
• En caso de fusión, adquisición o venta de activos (con notificación previa)`
              }
            ]
          },
          {
            title: '4. Almacenamiento de Datos',
            subsections: [
              {
                subtitle: '4.1 Almacenamiento en el Servidor',
                content: `Tus datos se almacenan de forma segura en servidores protegidos:

**Tipos de Datos Almacenados:**
• **Datos del Perfil:** Información de la cuenta, preferencias de audio y configuraciones (retención: mientras la cuenta exista)
• **Historial de Rutas:** Rutas guardadas y sus detalles (retención: mientras la cuenta exista o hasta que elimines)
• **Sesiones de Viaje:** Datos completos de cada viaje realizado (retención: mientras la cuenta exista o hasta que elimines)
• **Puntos Visitados:** POIs visitados durante viajes (retención: vinculado a la sesión de viaje)
• **Datos de Ubicación:** Puntos de ubicación registrados durante sesiones activas (retención: vinculado a la sesión)
• **Tokens de Notificación:** Tokens para push notifications (retención: mientras la app esté instalada)
• **Logs de Auditoría:** Registros de solicitudes de eliminación y acciones administrativas (retención: para auditoría, según regulación)

**Seguridad:**
• Todos los datos protegidos por Row Level Security (RLS)
• Solo tú puedes acceder a tus propios datos
• Cifrado en tránsito (HTTPS/TLS)
• Cifrado en reposo según estándares de seguridad
• Estructura de base de datos protegida y no accesible públicamente`
              },
              {
                subtitle: '4.2 Almacenamiento Local (Dispositivo)',
                content: `Datos almacenados localmente en tu dispositivo:

**Base de Datos Local (Caché):**
• Caché de POIs (retención: 5 días, limpieza automática)
• Caché de audios (retención: 7 días, limpieza automática)
• Metadatos de caché (URLs, timestamps, tamaños)

**Almacenamiento Temporal:**
• Caché temporal de datos (retención: 1 minuto)
• Preferencias locales temporales

**Archivos Locales:**
• Archivos de audio descargados para reproducción offline
• Almacenados en el sandbox seguro de la app (área aislada del sistema operativo)
• No accesibles por otras apps o usuarios del dispositivo

**Limpieza Automática:**
• El caché expirado se elimina automáticamente
• Limpieza semanal de archivos huérfanos
• Todos los datos locales se eliminan al desinstalar la app`
              }
            ]
          },
          {
            title: '5. Permisos Solicitados',
            subsections: [
              {
                subtitle: '5.1 Permisos Obligatorios',
                content: `**Ubicación (CRÍTICA - Obligatoria):**
La app **no funciona adecuadamente** sin permiso de ubicación.

• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (ubicación aproximada), ACCESS_BACKGROUND_LOCATION (opcional pero recomendado para funcionamiento durante viajes)
• **iOS:** Ubicación mientras la app está abierta y en segundo plano durante sesiones de viaje
• **Finalidad:** Detección automática de POIs, rastreo de ruta, cálculo de distancias, funcionamiento del guía de viaje
• **Cuándo se usa:** Durante sesiones activas de guía y en segundo plano durante viajes

**Audio (Obligatoria):**
• **Android:** Permisos para reproducir audio y ajustar volumen
• **iOS:** Permisos automáticos para reproducción de audio
• **Finalidad:** Reproducción de narraciones de POIs, control de audio durante navegación, integración con sistemas de coche (CarPlay)`
              },
              {
                subtitle: '5.2 Permisos Opcionales',
                content: `**Notificaciones Push (Opcional):**
• **Finalidad:** Notificaciones sobre POIs cercanos, actualizaciones de la app, recordatorios y recomendaciones
• **Control:** Puedes activar/desactivar en la configuración del dispositivo en cualquier momento
• **Datos recopilados:** Token de notificación, estado de permiso, preferencias de notificación

**Biometría (Opcional):**
• **Finalidad:** Login más seguro y conveniente
• **Almacenamiento:** Almacenado en el sistema de seguridad del dispositivo (keychain/secure enclave), nunca en nuestros servidores
• **Control:** Puedes activar/desactivar en la configuración de la app

**Cámara (Futuro - Opcional):**
• **Finalidad:** Para tomar foto de perfil, si se desea
• **Control:** Solo se solicitará cuando optes por usar esta funcionalidad`
              },
              {
                subtitle: '5.3 Control de Permisos',
                content: `Tienes control total sobre los permisos:

• Puedes revocar cualquier permiso en cualquier momento en la configuración del dispositivo
• Algunas funcionalidades pueden no funcionar sin permisos necesarios
• La app solicitará permisos cuando sea necesario y explicará el motivo
• Puedes negar permisos opcionales sin afectar el uso básico de la app (excepto ubicación, que es esencial)`
              }
            ]
          },
          {
            title: '6. Analytics y Rastreo',
            subsections: [
              {
                subtitle: '6.1 Analytics y Análisis de Uso',
                content: `Utilizamos servicios de analytics para entender cómo se usa la app y mejorarla:

**Eventos Rastreados:**
• **Eventos de Sesión:** Inicio/fin de viaje, visualización de pantallas
• **Eventos de POI:** POI detectado, inicio/conclusión de reproducción de audio
• **Eventos de Autenticación:** Login, logout, intentos de login/registro
• **Eventos de Interacción:** Clics en botones, visualizaciones de pantallas

**Datos Recopilados con Eventos:**
• User ID (anonimizado cuando es posible)
• Session ID
• Timestamps
• Datos de ubicación (latitud, longitud, precisión) - anonimizados
• Información de POI (ID, nombre, categoría) - anonimizada
• Métricas de rendimiento (tiempo de respuesta, tasa de cache hit)

**Anonimización:**
• Los datos se anonimizan cuando es posible
• No recopilamos información personal identificable a través del Analytics
• Los datos se agregan para análisis estadístico

**Desactivación:**
• Analytics es necesario para funcionalidad y mejora del servicio
• Los datos se tratan según política del proveedor de servicios
• Retención: Generalmente 14 meses (política predeterminada del proveedor)`
              },
              {
                subtitle: '6.2 Informes de Error y Crash',
                content: `Utilizamos servicios de informe de errores para identificar y corregir problemas técnicos:

**Datos Recopilados:**
• Stack traces de errores
• Información del dispositivo (modelo, OS, versión de la app) - anonimizada
• Estado de la app en el momento del crash
• Logs de error (sin información personal identificable)

**No Incluye:**
• Información personal identificable
• Datos de ubicación (excepto si es necesario para debug del error específico)
• Datos sensibles del usuario

**Finalidad:**
• Identificar bugs y crashes
• Mejorar estabilidad de la app
• Resolver problemas técnicos rápidamente`
              },
              {
                subtitle: '6.3 Notificaciones Push',
                content: `Utilizamos servicios de notificaciones push para enviar notificaciones:

**Datos Recopilados:**
• Token de notificación (identificador único del dispositivo para push)
• Estado de permiso de notificaciones
• Preferencias de notificación del usuario

**Almacenamiento:**
• Tokens almacenados de forma segura vinculados al usuario
• Removidos cuando desinstalas la app o revocas permisos

**Finalidad:**
• Enviar notificaciones sobre POIs cercanos
• Actualizaciones de la app
• Recordatorios y recomendaciones (si se permite)`
              }
            ]
          },
          {
            title: '7. Seguridad de los Datos',
            subsections: [
              {
                subtitle: '7.1 Medidas de Seguridad Implementadas',
                content: `Implementamos medidas de seguridad robustas para proteger tus datos:

**Autenticación:**
• Contraseñas hashadas (nunca almacenadas en texto plano)
• Tokens de autenticación segura
• Autenticación social segura (Google/Apple)
• Autenticación biométrica opcional (almacenada en el dispositivo)

**Cifrado:**
• Comunicación HTTPS/TLS con servidores
• Datos sensibles cifrados en tránsito
• Almacenamiento seguro en servidores protegidos (según estándares de seguridad)
• Cifrado en reposo según estándares de seguridad

**Row Level Security (RLS):**
• Los usuarios solo pueden acceder a sus propios datos
• Políticas de seguridad de acceso (RLS) para todas las tablas
• Verificación de autenticación en todas las queries
• Aislamiento completo de datos entre usuarios

**Almacenamiento Local:**
• Datos locales almacenados en el sandbox de la app
• No accesibles por otras apps
• Limpieza automática al desinstalar
• El caché expira automáticamente después del período definido`
              },
              {
                subtitle: '7.2 Protección Contra Acceso No Autorizado',
                content: `• Monitorización continua de seguridad
• Acceso restringido solo a empleados autorizados
• Auditorías regulares de seguridad
• Respuesta rápida a incidentes de seguridad`
              }
            ]
          },
          {
            title: '8. Tus Derechos (LGPD/GDPR)',
            subsections: [
              {
                subtitle: '8.1 Derecho de Acceso',
                content: `Tienes derecho a acceder a todos tus datos personales:

• Visualizar todos los datos del perfil en la pantalla de Profile de la app
• Acceder al historial de rutas y viajes en la app
• Solicitar información detallada sobre datos almacenados vía **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Derecho de Rectificación',
                content: `Puedes corregir tus datos en cualquier momento:

• Editar perfil (nombre, teléfono, nickname) directamente en la app
• Actualizar preferencias de audio y configuraciones
• Solicitar corrección de datos incorrectos vía **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Derecho de Eliminación',
                content: `Puedes solicitar la eliminación completa de tu cuenta y datos:

• **Eliminación disponible en la app:** Accede a la configuración y selecciona "Eliminar Cuenta"
• **Lo que se elimina:**
  - Todos los datos del perfil
  - Historial de rutas y viajes
  - Preferencias y configuraciones
  - Datos de autenticación del sistema
  - Caché local del dispositivo
• **Tiempo de procesamiento:** Generalmente en hasta 30 días
• **Excepciones:** Algunos datos pueden mantenerse según obligaciones legales (logs de auditoría)`
              },
              {
                subtitle: '8.4 Derecho de Portabilidad',
                content: `Puedes solicitar una copia de tus datos en formato estructurado:

• Solicita vía **contato@tuggi.app**
• Los datos se exportarán en formato JSON
• Incluye todos los datos del perfil, rutas, viajes y preferencias
• Procesamiento en hasta 30 días`
              },
              {
                subtitle: '8.5 Derecho de Revocación de Consentimiento',
                content: `Puedes revocar consentimientos en cualquier momento:

• **Permisos de Ubicación:** Revoca en la configuración del dispositivo (puede afectar funcionalidad de la app)
• **Notificaciones Push:** Desactiva en la configuración del dispositivo
• **Analytics:** Contacta vía **contato@tuggi.app** (algunas funcionalidades pueden verse afectadas)
• **Eliminación de Cuenta:** Elimina todos los consentimientos y datos`
              },
              {
                subtitle: '8.6 Derecho de Oposición al Procesamiento',
                content: `Puedes oponerte al procesamiento de tus datos:

• Solicita parada de procesamiento vía **contato@tuggi.app**
• Algunas funcionalidades pueden no estar disponibles
• La eliminación de cuenta elimina todos los procesamientos`
              }
            ]
          },
          {
            title: '9. Retención de Datos',
            content: `**Datos del Perfil:**
• Retenidos mientras tu cuenta exista
• Eliminados inmediatamente al eliminar cuenta

**Historial de Rutas y Viajes:**
• Retenidos mientras la cuenta exista
• Pueden ser eliminados individualmente por ti
• Eliminados al eliminar cuenta

**Datos de Ubicación:**
• Retenidos durante sesión de viaje
• Vinculados al historial de viaje
• Eliminados cuando la sesión de viaje es eliminada

**Caché Local:**
• POIs: 5 días (limpieza automática)
• Audios: 7 días (limpieza automática)
• Limpieza semanal de archivos huérfanos

**Datos de Analytics:**
• Retenidos según política del proveedor de servicios
• Generalmente 14 meses (política predeterminada del proveedor)

**Logs de Eliminación:**
• Retenidos para fines de auditoría
• Período según regulación aplicable (LGPD, GDPR)`
          },
          {
            title: '10. Transferencia Internacional de Datos',
            content: `Tus datos pueden ser transferidos y procesados fuera de Brasil:

**Proveedor de Backend y Almacenamiento:**
• Los servidores pueden estar ubicados fuera de Brasil
• Conformidad con estándares de seguridad internacionales
• Política de privacidad disponible en las políticas del proveedor

**Proveedor de Analytics y Monitoreo:**
• Servidores ubicados globalmente (principalmente EE.UU.)
• Datos de analytics transferidos a servidores del proveedor
• Conformidad con estándares de seguridad del proveedor
• Política de privacidad disponible en las políticas del proveedor

**Proveedor de Servicios de Mapas:**
• Los servicios de mapas pueden procesar datos en servidores globales
• Conformidad con política de privacidad del proveedor

**Protecciones:**
• Utilizamos solo proveedores que garantizan protecciones adecuadas
• Cláusulas contractuales estándar (Standard Contractual Clauses - SCCs) cuando sea aplicable
• Conformidad con GDPR para transferencias a UE`
          },
          {
            title: '11. Notificaciones Push',
            content: `Si optas por recibir notificaciones push:

**Tipos de Notificaciones:**
• Notificaciones sobre POIs cercanos (cuando se implemente)
• Actualizaciones de la app
• Recordatorios y recomendaciones

**Control:**
• Puedes activar/desactivar en la configuración del dispositivo en cualquier momento
• Las preferencias de notificación pueden gestionarse en la app (si se implementa)

**Datos Utilizados:**
• Token de notificación (identificador único del dispositivo)
• Estado de permiso
• Tu ubicación (solo para notificaciones sobre POIs cercanos, si se permite)

**Revocación:**
• Puedes revocar permiso de notificaciones en la configuración del dispositivo
• Inmediatamente efectivo`
          },
          {
            title: '12. Conformidad Regulatoria',
            content: `Estamos en conformidad con:

**LGPD (Ley General de Protección de Datos - Brasil):**
• Consentimiento explícito para recopilación de datos
• Derecho de acceso, corrección y eliminación
• Portabilidad de datos
• Sistema de eliminación de datos implementado
• Transparencia sobre recopilación y uso de datos

**GDPR (Reglamento General de Protección de Datos - Europa):**
• Base legal para procesamiento de datos
• Derechos de los titulares de datos
• Sistema de eliminación de datos
• Protección de datos de transferencia internacional
• Notificación de violaciones de datos (si es aplicable)

**COPPA (Children's Online Privacy Protection Act - EE.UU.):**
• La app no está dirigida a niños menores de 13 años
• No recopilamos datos de niños sin consentimiento parental

**Política de Privacidad de Niños:**
• Si tienes menos de 13 años (o edad mínima en tu país), no uses esta app sin consentimiento parental
• Contáctanos si tienes dudas sobre protección de datos de niños`
          },
          {
            title: '13. Cookies y Tecnologías Similares',
            content: `**Sitio Web (tuggi.app):**
El sitio web puede utilizar cookies y tecnologías similares. Consulta nuestra Política de Cookies para más detalles.

**Aplicación:**
La aplicación no utiliza cookies en el sentido tradicional. Utilizamos:
• Caché local (base de datos local) para funcionalidad offline
• Tokens de autenticación para sesiones
• Tokens de notificación para push notifications

Estos datos se almacenan localmente en el dispositivo y no son cookies rastreables.`
          },
          {
            title: '14. Actualizaciones en Esta Política',
            content: `Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestros servicios o prácticas legales.

**Notificaciones:**
• Los cambios significativos serán comunicados a través de la app o email
• La fecha de última actualización siempre visible en la parte superior de esta política
• Serás notificado sobre cambios importantes antes de que entren en vigor

**Continuidad:**
• Al continuar usando la app después de cambios, aceptas los términos actualizados
• Si no estás de acuerdo con los cambios, puedes eliminar tu cuenta en cualquier momento

**Historial:**
• Las versiones anteriores de esta política pueden solicitarse vía **contato@tuggi.app**`
          },
          {
            title: '15. Contacto y Dudas',
            content: `Si tienes alguna duda sobre nuestra Política de Privacidad o deseas ejercer tus derechos, contáctanos:

**Email General:**
**contato@tuggi.app**

**Para Cuestiones de Privacidad:**
**contato@tuggi.app** (asunto: "Privacidad")

**Para Ejercer Derechos (LGPD/GDPR):**
**contato@tuggi.app** (asunto: "Derechos de Datos")

**Sitio Web:**
https://www.tuggi.app/es/privacy-policy

**Tiempo de Respuesta:**
Respondemos solicitudes relacionadas con derechos de datos en hasta 30 días, según lo exigido por LGPD y GDPR.

**Identificación:**
Al solicitar ejercer derechos, podemos solicitar verificación de identidad para proteger tus datos.`
          }
        ]
      },
      FR: {
        title: 'Politique de Confidentialité',
        lastUpdated: 'Dernière mise à jour : Janvier 2025',
        introduction: 'Cette Politique de Confidentialité décrit comment l\'application Tuggi et le site tuggi.app collectent, utilisent, stockent, partagent et protègent les données des utilisateurs. Cette politique est conforme à la Loi Générale de Protection des Données (LGPD) du Brésil et au Règlement Général sur la Protection des Données (RGPD) de l\'Union Européenne.',
        sections: [
          {
            title: '1. Informations que nous collectons',
            subsections: [
              {
                subtitle: '1.1 Informations de compte et authentification',
                content: `Tuggi Drive propose trois méthodes d'inscription et de connexion :

**Inscription avec e-mail et mot de passe :**
• E-mail (obligatoire, utilisé pour la connexion et la communication)
• Mot de passe (stocké crypté, jamais en texte clair)
• Nom complet (facultatif, pour la personnalisation)
• Numéro de téléphone (facultatif, pour la récupération de compte)
• Vérification de l'e-mail requise pour l'activation du compte

**Authentification Sociale (Google) :**
• Intégration avec un service d'authentification tiers
• E-mail (fourni par le fournisseur)
• Nom (si autorisé)
• Photo de profil (si autorisé)
• Jetons d'authentification gérés par le fournisseur selon sa politique de confidentialité

**Authentification Sociale (Apple) :**
• Intégration native avec le service d'authentification
• E-mail (peut être un e-mail privé fourni par le fournisseur pour protéger votre vie privée)
• Nom (si autorisé la première fois)
• Selon la politique de confidentialité du fournisseur

**Données de profil stockées :**
• Nom complet (full_name)
• E-mail (lecture seule après création du compte)
• Téléphone (phone) - facultatif
• Surnom (nickname) - facultatif
• Avatar/photo de profil (avatar_url) - facultatif
• ID utilisateur unique (UUID)
• Date de création du compte
• Dernière mise à jour du profil`
              },
              {
                subtitle: '1.2 Données de localisation',
                content: `La collecte de données de localisation est **essentielle** pour le fonctionnement de l'application. L'app ne fonctionne pas correctement sans autorisation de localisation.

**Autorisations demandées :**
• **Android :** ACCESS_FINE_LOCATION (GPS précis), ACCESS_COARSE_LOCATION (localisation approximative), ACCESS_BACKGROUND_LOCATION (localisation en arrière-plan - facultatif mais recommandé)
• **iOS :** Localisation lorsque l'app est ouverte et en arrière-plan pendant les sessions de voyage

**Données de localisation collectées :**
• Latitude et longitude (avec précision GPS)
• Altitude
• Heading (direction du mouvement)
• Vitesse
• Précision du signal GPS
• Horodatage de chaque mise à jour
• Statut de mouvement (arrêté/en mouvement)

**Quand nous collectons la localisation :**
• Pendant les sessions de guide de voyage actives
• En arrière-plan lorsque l'app fonctionne pendant un trajet
• Pour le suivi de l'itinéraire pendant les déplacements
• Pour la détection automatique des points d'intérêt (POI) proches
• **Nous ne collectons PAS lorsque l'app est complètement fermée** (sauf si vous avez accordé l'autorisation de localisation en arrière-plan)

**Stockage des données de localisation :**
• Les points de localisation pendant les sessions sont stockés liés à la session de voyage
• Les sessions de voyage complètes sont stockées de manière sécurisée
• Les données sont liées à votre utilisateur et protégées par Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Informations sur l\'appareil',
                content: `Nous collectons des informations techniques sur l'appareil pour l'optimisation du service et la résolution de problèmes :

**Identifiants :**
• Device ID (identifiant unique de l'appareil)
• Unique ID (identifiant unique de l'installation de l'app)
• Jeton de notification push (pour les notifications, si autorisé)

**Informations matérielles :**
• Modèle de l'appareil (ex : iPhone 14, Samsung Galaxy S23)
• Système d'exploitation (iOS/Android)
• Version de l'OS (ex : iOS 17.0, Android 14)
• Version de l'app
• Numéro de build
• Nom de l'appareil (si disponible)

**Informations de performance :**
• Mémoire totale de l'appareil (pour l'optimisation)
• Capacité de stockage (pour la gestion du cache)`
              },
              {
                subtitle: '1.4 Données d\'utilisation et interactions',
                content: `Nous collectons des informations sur la façon dont vous utilisez l'application :

**Événements de session :**
• Début et fin des sessions de voyage
• Durée de chaque session
• Mode de transport utilisé (conduite, marche, vélo, etc.)

**Interactions avec les POI :**
• POI visités/détectés pendant les trajets
• Distance de déclenchement de chaque POI
• Direction du POI par rapport à l'utilisateur (gauche, droite, devant, derrière)
• Horodatage de chaque détection
• Lecture audio (début, durée, fin ou interruption)

**Interactions avec les itinéraires :**
• Itinéraires créés et enregistrés
• POI inclus dans chaque itinéraire
• Ordre optimisé des POI
• Distance totale estimée
• Durée totale estimée
• Préférences d'itinéraire

**Historique des voyages :**
• Historique complet des itinéraires et voyages effectués
• Points visités lors de chaque voyage
• Emplacements initiaux et finaux de chaque session`
              },
              {
                subtitle: '1.5 Données audio et narrations',
                content: `**Préférences audio :**
• Langue audio préférée (pt-BR, en, es)
• Voix préférée (masculine/féminine)
• Vitesse TTS (text-to-speech)

**Statistiques de lecture :**
• Durée des audios lus
• Taux d'achèvement (audio écouté jusqu'à la fin ou interrompu)
• Langue audio sélectionnée pour chaque POI

**Cache audio local :**
• Fichiers audio téléchargés localement pour lecture hors ligne
• Métadonnées du cache (URL, horodatages, tailles)
• **Note :** Les audios sont stockés localement sur l'appareil, ils ne sont pas envoyés à nos serveurs`
              },
              {
                subtitle: '1.6 Données de paramètres et préférences',
                content: `Nous stockons vos préférences et paramètres :

**Préférences de guide :**
• Rayon de déclenchement (100m, 200m ou 500m)
• Confidentialité par défaut des POI (privé/public)
• Autorisation de partage de listes

**Préférences de notifications :**
• Statut de l'autorisation des notifications push
• Préférences des types de notification (si configuré)`
              }
            ]
          },
          {
            title: '2. Comment nous utilisons vos données',
            subsections: [
              {
                subtitle: '2.1 Pour le fonctionnement du service',
                content: `Nous utilisons vos données pour fournir les principaux services de l'application :

• **Détection automatique de POI :** Nous utilisons votre localisation en temps réel pour détecter lorsque vous vous approchez de points d'intérêt et lire automatiquement les narrations
• **Génération d'itinéraires :** Nous créons des itinéraires personnalisés connectant plusieurs POI en fonction de votre localisation et de vos préférences
• **Historique des voyages :** Nous stockons votre historique pour que vous puissiez accéder aux itinéraires et voyages précédents
• **Fonctionnalité hors ligne :** Le cache local vous permet d'utiliser l'app même sans connexion internet
• **Authentification :** Nous gérons votre compte et l'authentification pour un accès sécurisé au service`
              },
              {
                subtitle: '2.2 Pour améliorer le service',
                content: `Nous utilisons des données agrégées et anonymisées pour améliorer continuellement l'application :

• **Analyse d'utilisation :** Nous analysons les modèles d'utilisation pour identifier les problèmes et les opportunités d'amélioration
• **Optimisation des performances :** Nous utilisons les informations de l'appareil pour optimiser les performances de l'app
• **Amélioration de la localisation :** Nous améliorons la précision de la détection de POI sur la base des données d'utilisation
• **Optimisation du cache :** Nous gérons efficacement le cache audio et POI pour une meilleure expérience
• **Résolution de problèmes :** Nous utilisons les données de crash et d'erreurs pour identifier et corriger les bugs`
              },
              {
                subtitle: '2.3 Pour la personnalisation',
                content: `Nous personnalisons votre expérience en fonction de vos préférences :

• **Interface personnalisée :** Nous utilisons votre nom, surnom et photo de profil pour personnaliser l'interface
• **Contenu pertinent :** Nous proposons du contenu et des itinéraires basés sur vos préférences et votre historique
• **Paramètres audio :** Nous appliquons vos préférences de langue, de voix et de vitesse de narration
• **Notifications personnalisées :** Nous envoyons des notifications pertinentes sur les attractions à proximité (si autorisé)`
              },
              {
                subtitle: '2.4 Pour la communication et le support',
                content: `Nous utilisons vos données de contact pour :

• **Vérification de compte :** Nous envoyons des e-mails de vérification lors de l'inscription
• **Récupération de compte :** Permet la récupération du mot de passe par e-mail
• **Support client :** Nous répondons à vos demandes et questions
• **Communications importantes :** Nous vous informons des changements importants dans la politique ou les conditions d'utilisation`
              }
            ]
          },
          {
            title: '3. Partage de données avec des tiers',
            subsections: [
              {
                subtitle: '3.1 Fournisseurs de services essentiels',
                content: `Nous partageons des données avec des fournisseurs de services qui nous aident à faire fonctionner l'application :

**Fournisseur de Backend et Stockage :**
• **Données partagées :** Toutes les données utilisateur (profil, localisation, itinéraires, voyages, préférences)
• **Finalité :** Stockage sécurisé des données, authentification, API et synchronisation entre appareils
• **Sécurité :** Données protégées par Row Level Security (RLS) et cryptage
• **Localisation :** Les serveurs peuvent être situés hors du Brésil
• **Politique de confidentialité :** Disponible dans les politiques du fournisseur de services

**Services d'Analytics et de Surveillance :**
• **Analytics :** Données d'utilisation et événements anonymisés pour analyse
• **Rapports de crash :** Rapports de crash et d'erreurs (sans informations personnelles identifiables)
• **Notifications Push :** Jetons pour l'envoi de notifications push
• **Données partagées :** Événements d'utilisation, données de crash, jetons de notification, informations sur l'appareil (anonymisées lorsque possible)
• **Finalité :** Analytics, résolution de problèmes, notifications push
• **Localisation :** Les serveurs peuvent être situés hors du Brésil (principalement aux États-Unis)
• **Politique de confidentialité :** Disponible dans les politiques du fournisseur de services

**Service de Cartographie :**
• **Données partagées :** Localisation, itinéraires, POI (selon la politique du fournisseur)
• **Finalité :** Rendu de cartes, géocodage, services de navigation
• **Politique de confidentialité :** Disponible dans les politiques du fournisseur de services

**Fournisseurs d'Authentification Sociale :**
• **Données partagées :** E-mail, nom (si autorisé), photo de profil (si autorisé)
• **Finalité :** Authentification de l'utilisateur
• **Politique de confidentialité :** Disponible dans les politiques de chaque fournisseur d'authentification`
              },
              {
                subtitle: '3.2 Partage non autorisé',
                content: `**Nous ne vendons, louons ni ne commercialisons vos données personnelles** à des tiers à des fins de marketing ou de publicité.

**Nous ne partageons PAS vos données avec :**
• Des sociétés de publicité pour le marketing ciblé
• Des courtiers en données
• D'autres services qui ne sont pas essentiels au fonctionnement de l'app`
              },
              {
                subtitle: '3.3 Exigences légales',
                content: `Nous pouvons partager vos données lorsque la loi l'exige :

• En réponse à des procédures légales valides (mandats, ordonnances judiciaires)
• Pour se conformer aux obligations légales
• Pour protéger nos droits, notre propriété ou notre sécurité, ceux de nos utilisateurs ou du public
• En cas de fusion, d'acquisition ou de vente d'actifs (avec préavis)`
              }
            ]
          },
          {
            title: '4. Stockage des données',
            subsections: [
              {
                subtitle: '4.1 Stockage sur le serveur',
                content: `Vos données sont stockées de manière sécurisée sur des serveurs protégés :

**Types de données stockées :**
• **Données de profil :** Informations de compte, préférences audio et paramètres (rétention : tant que le compte existe)
• **Historique des itinéraires :** Itinéraires enregistrés et leurs détails (rétention : tant que le compte existe ou jusqu'à suppression par vous)
• **Sessions de voyage :** Données complètes de chaque voyage effectué (rétention : tant que le compte existe ou jusqu'à suppression par vous)
• **Points visités :** POI visités pendant les voyages (rétention : lié à la session de voyage)
• **Données de localisation :** Points de localisation enregistrés pendant les sessions actives (rétention : lié à la session)
• **Jetons de notification :** Jetons pour les notifications push (rétention : tant que l'app est installée)
• **Logs d'audit :** Enregistrements des demandes de suppression et actions administratives (rétention : pour audit, selon la réglementation)

**Sécurité :**
• Toutes les données protégées par Row Level Security (RLS)
• Vous seul pouvez accéder à vos propres données
• Cryptage en transit (HTTPS/TLS)
• Cryptage au repos selon les normes de sécurité
• Structure de base de données protégée et non accessible publiquement`
              },
              {
                subtitle: '4.2 Stockage local (Appareil)',
                content: `Données stockées localement sur votre appareil :

**Base de données locale (Cache) :**
• Cache de POI (rétention : 5 jours, nettoyage automatique)
• Cache audio (rétention : 7 jours, nettoyage automatique)
• Métadonnées de cache (URL, horodatages, tailles)

**Stockage temporaire :**
• Cache de données temporaire (rétention : 1 minute)
• Préférences locales temporaires

**Fichiers locaux :**
• Fichiers audio téléchargés pour lecture hors ligne
• Stockés dans le sandbox sécurisé de l'app (zone isolée du système d'exploitation)
• Non accessibles par d'autres apps ou utilisateurs de l'appareil

**Nettoyage automatique :**
• Le cache expiré est supprimé automatiquement
• Nettoyage hebdomadaire des fichiers orphelins
• Toutes les données locales sont supprimées lors de la désinstallation de l'app`
              }
            ]
          },
          {
            title: '5. Autorisations demandées',
            subsections: [
              {
                subtitle: '5.1 Autorisations obligatoires',
                content: `**Localisation (CRITIQUE - Obligatoire) :**
L'app **ne fonctionne pas correctement** sans autorisation de localisation.

• **Android :** ACCESS_FINE_LOCATION (GPS précis), ACCESS_COARSE_LOCATION (localisation approximative), ACCESS_BACKGROUND_LOCATION (facultatif mais recommandé pour le fonctionnement pendant les voyages)
• **iOS :** Localisation lorsque l'app est ouverte et en arrière-plan pendant les sessions de voyage
• **Finalité :** Détection automatique de POI, suivi d'itinéraire, calcul de distances, fonctionnement du guide de voyage
• **Quand utilisé :** Pendant les sessions de guide actives et en arrière-plan pendant les voyages

**Audio (Obligatoire) :**
• **Android :** Autorisations pour lire l'audio et régler le volume
• **iOS :** Autorisations automatiques pour la lecture audio
• **Finalité :** Lecture des narrations de POI, contrôle audio pendant la navigation, intégration avec les systèmes de voiture (CarPlay)`
              },
              {
                subtitle: '5.2 Autorisations facultatives',
                content: `**Notifications Push (Facultatif) :**
• **Finalité :** Notifications sur les POI proches, mises à jour de l'app, rappels et recommandations
• **Contrôle :** Vous pouvez activer/désactiver dans les paramètres de l'appareil à tout moment
• **Données collectées :** Jeton de notification, statut d'autorisation, préférences de notification

**Biométrie (Facultatif) :**
• **Finalité :** Connexion plus sûre et pratique
• **Stockage :** Stocké dans le système de sécurité de l'appareil (keychain/secure enclave), jamais sur nos serveurs
• **Contrôle :** Vous pouvez activer/désactiver dans les paramètres de l'app

**Caméra (Futur - Facultatif) :**
• **Finalité :** Pour prendre une photo de profil, si souhaité
• **Contrôle :** Ne sera demandé que lorsque vous choisirez d'utiliser cette fonctionnalité`
              },
              {
                subtitle: '5.3 Contrôle des autorisations',
                content: `Vous avez un contrôle total sur les autorisations :

• Vous pouvez révoquer toute autorisation à tout moment dans les paramètres de l'appareil
• Certaines fonctionnalités peuvent ne pas fonctionner sans les autorisations nécessaires
• L'app demandera les autorisations lorsque nécessaire et expliquera la raison
• Vous pouvez refuser les autorisations facultatives sans affecter l'utilisation de base de l'app (sauf la localisation, qui est essentielle)`
              }
            ]
          },
          {
            title: '6. Analytics et Suivi',
            subsections: [
              {
                subtitle: '6.1 Analytics et Analyse d\'utilisation',
                content: `Nous utilisons des services d'analytics pour comprendre comment l'app est utilisée et l'améliorer :

**Événements suivis :**
• **Événements de session :** Début/fin de voyage, vues d'écran
• **Événements de POI :** POI détecté, début/fin de lecture audio
• **Événements d'authentification :** Connexion, déconnexion, tentatives de connexion/inscription
• **Événements d'interaction :** Clics sur les boutons, vues d'écran

**Données collectées avec les événements :**
• User ID (anonymisé lorsque possible)
• Session ID
• Horodatages
• Données de localisation (latitude, longitude, précision) - anonymisées
• Informations sur le POI (ID, nom, catégorie) - anonymisées
• Métriques de performance (temps de réponse, taux de succès du cache)

**Anonymisation :**
• Les données sont anonymisées lorsque possible
• Nous ne collectons pas d'informations personnelles identifiables via Analytics
• Les données sont agrégées pour l'analyse statistique

**Désactivation :**
• Analytics est nécessaire pour la fonctionnalité et l'amélioration du service
• Les données sont traitées selon la politique du fournisseur de services
• Rétention : Généralement 14 mois (politique par défaut du fournisseur)`
              },
              {
                subtitle: '6.2 Rapports d\'erreurs et de crash',
                content: `Nous utilisons des services de rapport d'erreurs pour identifier et corriger les problèmes techniques :

**Données collectées :**
• Traces de pile d'erreurs
• Informations sur l'appareil (modèle, OS, version de l'app) - anonymisées
• État de l'app au moment du crash
• Logs d'erreurs (sans informations personnelles identifiables)

**N'inclut pas :**
• Informations personnelles identifiables
• Données de localisation (sauf si nécessaire pour le débogage de l'erreur spécifique)
• Données sensibles de l'utilisateur

**Finalité :**
• Identifier les bugs et les crashs
• Améliorer la stabilité de l'app
• Résoudre rapidement les problèmes techniques`
              },
              {
                subtitle: '6.3 Notifications Push',
                content: `Nous utilisons des services de notifications push pour envoyer des notifications :

**Données collectées :**
• Jeton de notification (identifiant unique de l'appareil pour le push)
• Statut de l'autorisation de notification
• Préférences de notification de l'utilisateur

**Stockage :**
• Jetons stockés de manière sécurisée liés à l'utilisateur
• Supprimés lorsque vous désinstallez l'app ou révoquez les autorisations

**Finalité :**
• Envoyer des notifications sur les POI proches
• Mises à jour de l'app
• Rappels et recommandations (si autorisé)`
              }
            ]
          },
          {
            title: '7. Sécurité des données',
            subsections: [
              {
                subtitle: '7.1 Mesures de sécurité mises en œuvre',
                content: `Nous mettons en œuvre des mesures de sécurité robustes pour protéger vos données :

**Authentification :**
• Mots de passe hachés (jamais stockés en texte clair)
• Jetons d'authentification sécurisés
• Authentification sociale sécurisée (Google/Apple)
• Authentification biométrique facultative (stockée sur l'appareil)

**Cryptage :**
• Communication HTTPS/TLS avec les serveurs
• Données sensibles cryptées en transit
• Stockage sécurisé sur des serveurs protégés (selon les normes de sécurité)
• Cryptage au repos selon les normes de sécurité

**Row Level Security (RLS) :**
• Les utilisateurs ne peuvent accéder qu'à leurs propres données
• Politiques de sécurité d'accès (RLS) pour toutes les tables
• Vérification de l'authentification sur toutes les requêtes
• Isolation complète des données entre les utilisateurs

**Stockage local :**
• Données locales stockées dans le sandbox de l'app
• Non accessibles par d'autres apps
• Nettoyage automatique lors de la désinstallation
• Le cache expire automatiquement après la période définie`
              },
              {
                subtitle: '7.2 Protection contre l\'accès non autorisé',
                content: `• Surveillance continue de la sécurité
• Accès restreint aux seuls employés autorisés
• Audits de sécurité réguliers
• Réponse rapide aux incidents de sécurité`
              }
            ]
          },
          {
            title: '8. Vos droits (LGPD/RGPD)',
            subsections: [
              {
                subtitle: '8.1 Droit d\'accès',
                content: `Vous avez le droit d'accéder à toutes vos données personnelles :

• Voir toutes les données de profil sur l'écran Profil de l'app
• Accéder à l'historique des itinéraires et des voyages dans l'app
• Demander des informations détaillées sur les données stockées via **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Droit de rectification',
                content: `Vous pouvez corriger vos données à tout moment :

• Modifier le profil (nom, téléphone, surnom) directement dans l'app
• Mettre à jour les préférences audio et les paramètres
• Demander la correction de données incorrectes via **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Droit à l\'effacement',
                content: `Vous pouvez demander la suppression complète de votre compte et de vos données :

• **Suppression disponible dans l'app :** Accédez aux paramètres et sélectionnez "Supprimer le compte"
• **Ce qui est supprimé :**
  - Toutes les données de profil
  - Historique des itinéraires et des voyages
  - Préférences et paramètres
  - Données d'authentification du système
  - Cache local de l'appareil
• **Délai de traitement :** Généralement jusqu'à 30 jours
• **Exceptions :** Certaines données peuvent être conservées selon les obligations légales (logs d'audit)`
              },
              {
                subtitle: '8.4 Droit à la portabilité',
                content: `Vous pouvez demander une copie de vos données dans un format structuré :

• Demandez via **contato@tuggi.app**
• Les données seront exportées au format JSON
• Comprend toutes les données de profil, itinéraires, voyages et préférences
• Traitement jusqu'à 30 jours`
              },
              {
                subtitle: '8.5 Droit de retrait du consentement',
                content: `Vous pouvez retirer votre consentement à tout moment :

• **Autorisations de localisation :** Révoquez dans les paramètres de l'appareil (peut affecter la fonctionnalité de l'app)
• **Notifications Push :** Désactivez dans les paramètres de l'appareil
• **Analytics :** Contactez via **contato@tuggi.app** (certaines fonctionnalités peuvent être affectées)
• **Suppression de compte :** Supprime tous les consentements et données`
              },
              {
                subtitle: '8.6 Droit d\'opposition au traitement',
                content: `Vous pouvez vous opposer au traitement de vos données :

• Demandez l'arrêt du traitement via **contato@tuggi.app**
• Certaines fonctionnalités peuvent ne pas être disponibles
• La suppression de compte supprime tous les traitements`
              }
            ]
          },
          {
            title: '9. Rétention des données',
            content: `**Données de profil :**
• Conservées tant que votre compte existe
• Supprimées immédiatement lors de la suppression du compte

**Historique des itinéraires et des voyages :**
• Conservés tant que le compte existe
• Peuvent être supprimés individuellement par vous
• Supprimés lors de la suppression du compte

**Données de localisation :**
• Conservées pendant la session de voyage
• Liées à l'historique de voyage
• Supprimées lorsque la session de voyage est supprimée

**Cache local :**
• POI : 5 jours (nettoyage automatique)
• Audios : 7 jours (nettoyage automatique)
• Nettoyage hebdomadaire des fichiers orphelins

**Données d'Analytics :**
• Conservées selon la politique du fournisseur de services
• Généralement 14 mois (politique par défaut du fournisseur)

**Logs de suppression :**
• Conservés à des fins d'audit
• Période selon la réglementation applicable (LGPD, RGPD)`
          },
          {
            title: '10. Transfert international de données',
            content: `Vos données peuvent être transférées et traitées hors du Brésil :

**Fournisseur de Backend et Stockage :**
• Les serveurs peuvent être situés hors du Brésil
• Conformité avec les normes de sécurité internationales
• Politique de confidentialité disponible dans les politiques du fournisseur

**Fournisseur d'Analytics et de Surveillance :**
• Serveurs situés mondialement (principalement aux États-Unis)
• Données d' analytics transférées aux serveurs du fournisseur
• Conformité avec les normes de sécurité du fournisseur
• Politique de confidentialité disponible dans les politiques du fournisseur

**Fournisseur de Services de Cartographie :**
• Les services de cartographie peuvent traiter les données sur des serveurs mondiaux
• Conformité avec la politique de confidentialité du fournisseur

**Protections :**
• Nous n'utilisons que des fournisseurs qui garantissent des protections adéquates
• Clauses Contractuelles Types (CCT) le cas échéant
• Conformité RGPD pour les transferts vers l'UE`
          },
          {
            title: '11. Notifications Push',
            content: `Si vous choisissez de recevoir des notifications push :

**Types de notifications :**
• Notifications sur les POI proches (lorsque mis en œuvre)
• Mises à jour de l'app
• Rappels et recommandations

**Contrôle :**
• Vous pouvez activer/désactiver dans les paramètres de l'appareil à tout moment
• Les préférences de notification peuvent être gérées dans l'app (si mis en œuvre)

**Données utilisées :**
• Jeton de notification (identifiant unique de l'appareil)
• Statut de l'autorisation
• Votre localisation (uniquement pour les notifications sur les POI proches, si autorisé)

**Révocation :**
• Vous pouvez révoquer l'autorisation de notification dans les paramètres de l'appareil
• Immédiatement effectif`
          },
          {
            title: '12. Conformité réglementaire',
            content: `Nous sommes en conformité avec :

**LGPD (Loi Générale de Protection des Données - Brésil) :**
• Consentement explicite pour la collecte de données
• Droit d'accès, de rectification et de suppression
• Portabilité des données
• Système de suppression des données mis en œuvre
• Transparence sur la collecte et l'utilisation des données

**RGPD (Règlement Général sur la Protection des Données - Europe) :**
• Base légale pour le traitement des données
• Droits des personnes concernées
• Système de suppression des données
• Protection des données de transfert international
• Notification des violations de données (le cas échéant)

**COPPA (Children's Online Privacy Protection Act - USA) :**
• L'app ne s'adresse pas aux enfants de moins de 13 ans
• Nous ne collectons pas de données d'enfants sans consentement parental

**Politique de confidentialité pour les enfants :**
• Si vous avez moins de 13 ans (ou l'âge minimum dans votre pays), n'utilisez pas cette app sans consentement parental
• Contactez-nous si vous avez des questions sur la protection des données des enfants`
          },
          {
            title: '13. Cookies et technologies similaires',
            content: `**Site Web (tuggi.app) :**
Le site web peut utiliser des cookies et des technologies similaires. Consultez notre Politique de Cookies pour plus de détails.

**Application :**
L'application n'utilise pas de cookies au sens traditionnel. Nous utilisons :
• Cache local (base de données locale) pour la fonctionnalité hors ligne
• Jetons d'authentification pour les sessions
• Jetons de notification pour les notifications push

Ces données sont stockées localement sur l'appareil et ne sont pas des cookies traçables.`
          },
          {
            title: '14. Mises à jour de cette politique',
            content: `Nous pouvons mettre à jour cette Politique de Confidentialité périodiquement pour refléter les changements dans nos services ou nos pratiques légales.

**Notifications :**
• Les changements importants seront communiqués via l'app ou par e-mail
• Date de la dernière mise à jour toujours visible en haut de cette politique
• Vous serez informé des changements importants avant qu'ils n'entrent en vigueur

**Continuité :**
• En continuant à utiliser l'app après les changements, vous acceptez les conditions mises à jour
• Si vous n'êtes pas d'accord avec les changements, vous pouvez supprimer votre compte à tout moment

**Historique :**
• Les versions précédentes de cette politique peuvent être demandées via **contato@tuggi.app**`
          },
          {
            title: '15. Contact et questions',
            content: `Si vous avez des questions sur notre Politique de Confidentialité ou souhaitez exercer vos droits, contactez-nous :

**E-mail Général :**
**contato@tuggi.app**

**Pour les questions de confidentialité :**
**contato@tuggi.app** (sujet : "Confidentialité")

**Pour exercer vos droits (LGPD/RGPD) :**
**contato@tuggi.app** (sujet : "Droits des Données")

**Site Web :**
https://www.tuggi.app/fr/privacy-policy

**Délai de réponse :**
Nous répondons aux demandes liées aux droits des données dans les 30 jours, comme exigé par la LGPD et le RGPD.

**Identification :**
Lors de la demande d'exercice des droits, nous pouvons demander une vérification d'identité pour protéger vos données.`
          }
        ]
      },
      DE: {
        title: 'Datenschutzrichtlinie',
        lastUpdated: 'Letzte Aktualisierung: Januar 2025',
        introduction: 'Diese Datenschutzrichtlinie beschreibt, wie die Tuggi-Anwendung und die Website tuggi.app Benutzerdaten sammeln, verwenden, speichern, teilen und schützen. Diese Richtlinie entspricht dem Allgemeinen Datenschutzgesetz (LGPD) von Brasilien und der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union.',
        sections: [
          {
            title: '1. Informationen, die wir sammeln',
            subsections: [
              {
                subtitle: '1.1 Konto- und Authentifizierungsinformationen',
                content: `Tuggi Drive bietet drei Methoden zur Registrierung und Anmeldung:

**Registrierung mit E-Mail und Passwort:**
• E-Mail (erforderlich, für Login und Kommunikation verwendet)
• Passwort (verschlüsselt gespeichert, niemals im Klartext)
• Vollständiger Name (optional, zur Personalisierung)
• Telefonnummer (optional, zur Kontowiederherstellung)
• E-Mail-Bestätigung zur Kontoaktivierung erforderlich

**Soziale Authentifizierung (Google):**
• Integration mit Authentifizierungsdienst eines Drittanbieters
• E-Mail (vom Anbieter bereitgestellt)
• Name (falls autorisiert)
• Profilbild (falls autorisiert)
• Authentifizierungstoken, die vom Anbieter gemäß seiner Datenschutzrichtlinie verwaltet werden

**Soziale Authentifizierung (Apple):**
• Native Integration mit Authentifizierungsdienst
• E-Mail (kann eine private E-Mail sein, die vom Anbieter zum Schutz Ihrer Privatsphäre bereitgestellt wird)
• Name (falls beim ersten Mal autorisiert)
• Gemäß der Datenschutzrichtlinie des Anbieters

**Gespeicherte Profildaten:**
• Vollständiger Name (full_name)
• E-Mail (schreibgeschützt nach Kontoerstellung)
• Telefon (phone) - optional
• Spitzname (nickname) - optional
• Avatar/Profilbild (avatar_url) - optional
• Eindeutige Benutzer-ID (UUID)
• Datum der Kontoerstellung
• Letzte Profilaktualisierung`
              },
              {
                subtitle: '1.2 Standortdaten',
                content: `Die Erfassung von Standortdaten ist für die Funktion der App **unerlässlich**. Die App funktioniert ohne Standortberechtigung nicht ordnungsgemäß.

**Angeforderte Berechtigungen:**
• **Android:** ACCESS_FINE_LOCATION (präzises GPS), ACCESS_COARSE_LOCATION (ungefährer Standort), ACCESS_BACKGROUND_LOCATION (Standort im Hintergrund - optional, aber empfohlen)
• **iOS:** Standort, während die App geöffnet ist, und im Hintergrund während Reisesitzungen

**Erfasste Standortdaten:**
• Breitengrad und Längengrad (mit GPS-Präzision)
• Höhe
• Heading (Bewegungsrichtung)
• Geschwindigkeit
• GPS-Signalgenauigkeit
• Zeitstempel jeder Aktualisierung
• Bewegungsstatus (gestoppt/in Bewegung)

**Wann wir den Standort erfassen:**
• Während aktiver Reiseführersitzungen
• Im Hintergrund, wenn die App während einer Fahrt läuft
• Zur Routenverfolgung während der Fahrt
• Zur automatischen Erkennung nahegelegener Points of Interest (POIs)
• **Wir erfassen NICHT, wenn die App vollständig geschlossen ist** (es sei denn, Sie haben die Hintergrundstandortberechtigung erteilt)

**Speicherung von Standortdaten:**
• Standortpunkte während Sitzungen werden verknüpft mit der Reisesitzung gespeichert
• Komplette Reisesitzungen werden sicher gespeichert
• Daten sind mit Ihrem Benutzer verknüpft und durch Row Level Security (RLS) geschützt`
              },
              {
                subtitle: '1.3 Geräteinformationen',
                content: `Wir erfassen technische Geräteinformationen zur Serviceoptimierung und Fehlerbehebung:

**Identifikatoren:**
• Device ID (eindeutige Gerätekennung)
• Unique ID (eindeutige Kennung der App-Installation)
• Push-Benachrichtigungstoken (für Benachrichtigungen, falls zulässig)

**Hardware-Informationen:**
• Gerätemodell (z. B. iPhone 14, Samsung Galaxy S23)
• Betriebssystem (iOS/Android)
• OS-Version (z. B. iOS 17.0, Android 14)
• App-Version
• Build-Nummer
• Gerätename (falls verfügbar)

**Leistungsinformationen:**
• Gesamter Gerätespeicher (zur Optimierung)
• Speicherkapazität (für Cache-Management)`
              },
              {
                subtitle: '1.4 Nutzungs- und Interaktionsdaten',
                content: `Wir erfassen Informationen darüber, wie Sie die Anwendung nutzen:

**Sitzungsereignisse:**
• Beginn und Ende von Reisesitzungen
• Dauer jeder Sitzung
• Verwendeter Transportmodus (Fahren, Gehen, Fahrrad usw.)

**Interaktionen mit POIs:**
• Während Fahrten besuchte/erkannte POIs
• Auslösedistanz jedes POIs
• Richtung des POIs relativ zum Benutzer (links, rechts, vorne, hinten)
• Zeitstempel jeder Erkennung
• Audiowiedergabe (Start, Dauer, Abschluss oder Unterbrechung)

**Interaktionen mit Routen:**
• Erstellte und gespeicherte Routen
• In jede Route aufgenommene POIs
• Optimierte Reihenfolge der POIs
• Geschätzte Gesamtdistanz
• Geschätzte Gesamtdauer
• Routeneinstellungen

**Reiseverlauf:**
• Vollständiger Verlauf der durchgeführten Routen und Fahrten
• Während jeder Fahrt besuchte Punkte
• Start- und Endstandorte jeder Sitzung`
              },
              {
                subtitle: '1.5 Audio- und Erzählungsdaten',
                content: `**Audioeinstellungen:**
• Bevorzugte Audiosprache (pt-BR, en, es)
• Bevorzugte Stimme (männlich/weiblich)
• TTS-Geschwindigkeit (Text-to-Speech)

**Wiedergabestatistiken:**
• Dauer der abgespielten Audios
• Abschlussrate (Audio bis zum Ende gehört oder unterbrochen)
• Für jeden POI ausgewählte Audiosprache

**Lokaler Audio-Cache:**
• Lokal heruntergeladene Audiodateien für Offline-Wiedergabe
• Cache-Metadaten (URLs, Zeitstempel, Größen)
• **Hinweis:** Audios werden lokal auf dem Gerät gespeichert und nicht an unsere Server gesendet`
              },
              {
                subtitle: '1.6 Daten zu Einstellungen und Präferenzen',
                content: `Wir speichern Ihre Präferenzen und Einstellungen:

**Reiseführer-Einstellungen:**
• Auslöseradius (100m, 200m oder 500m)
• Standard-POI-Datenschutz (privat/öffentlich)
• Berechtigung zum Teilen von Listen

**Benachrichtigungseinstellungen:**
• Status der Push-Benachrichtigungsberechtigung
• Präferenzen für Benachrichtigungstypen (falls konfiguriert)`
              }
            ]
          },
          {
            title: '2. Wie wir Ihre Daten verwenden',
            subsections: [
              {
                subtitle: '2.1 Für die Servicefunktionalität',
                content: `Wir verwenden Ihre Daten, um die Hauptdienste der Anwendung bereitzustellen:

• **Automatische POI-Erkennung:** Wir verwenden Ihren Standort in Echtzeit, um zu erkennen, wenn Sie sich Points of Interest nähern, und Erzählungen automatisch abzuspielen
• **Routenerstellung:** Wir erstellen personalisierte Routen, die mehrere POIs basierend auf Ihrem Standort und Ihren Präferenzen verbinden
• **Reiseverlauf:** Wir speichern Ihren Verlauf, damit Sie auf frühere Routen und Fahrten zugreifen können
• **Offline-Funktionalität:** Der lokale Cache ermöglicht es Ihnen, die App auch ohne Internetverbindung zu nutzen
• **Authentifizierung:** Wir verwalten Ihr Konto und die Authentifizierung für den sicheren Zugriff auf den Dienst`
              },
              {
                subtitle: '2.2 Zur Verbesserung des Service',
                content: `Wir verwenden aggregierte und anonymisierte Daten, um die Anwendung kontinuierlich zu verbessern:

• **Nutzungsanalyse:** Wir analysieren Nutzungsmuster, um Probleme und Verbesserungsmöglichkeiten zu identifizieren
• **Leistungsoptimierung:** Wir verwenden Geräteinformationen, um die App-Leistung zu optimieren
• **Standortverbesserung:** Wir verbessern die Genauigkeit der POI-Erkennung basierend auf Nutzungsdaten
• **Cache-Optimierung:** Wir verwalten effizient den Audio- und POI-Cache für eine bessere Erfahrung
• **Problemlösung:** Wir verwenden Crash- und Fehlerdaten, um Bugs zu identifizieren und zu beheben`
              },
              {
                subtitle: '2.3 Zur Personalisierung',
                content: `Wir personalisieren Ihre Erfahrung basierend auf Ihren Präferenzen:

• **Personalisierte Oberfläche:** Wir verwenden Ihren Namen, Spitznamen und Ihr Profilbild, um die Oberfläche zu personalisieren
• **Relevante Inhalte:** Wir bieten Inhalte und Routen basierend auf Ihren Präferenzen und Ihrem Verlauf an
• **Audioeinstellungen:** Wir wenden Ihre Präferenzen für Sprache, Stimme und Erzählgeschwindigkeit an
• **Personalisierte Benachrichtigungen:** Wir senden relevante Benachrichtigungen über nahegelegene Attraktionen (falls zulässig)`
              },
              {
                subtitle: '2.4 Für Kommunikation und Support',
                content: `Wir verwenden Ihre Kontaktdaten für:

• **Kontoverifizierung:** Wir senden Verifizierungs-E-Mails während der Registrierung
• **Kontowiederherstellung:** Ermöglicht Passwortwiederherstellung per E-Mail
• **Kundensupport:** Wir beantworten Ihre Anfragen und Fragen
• **Wichtige Mitteilungen:** Wir benachrichtigen Sie über wesentliche Änderungen der Richtlinie oder Nutzungsbedingungen`
              }
            ]
          },
          {
            title: '3. Datenteilung mit Dritten',
            subsections: [
              {
                subtitle: '3.1 Wesentliche Dienstleister',
                content: `Wir teilen Daten mit Dienstleistern, die uns beim Betrieb der Anwendung unterstützen:

**Backend- und Speicheranbieter:**
• **Geteilte Daten:** Alle Benutzerdaten (Profil, Standort, Routen, Fahrten, Präferenzen)
• **Zweck:** Sichere Datenspeicherung, Authentifizierung, APIs und Synchronisierung zwischen Geräten
• **Sicherheit:** Daten geschützt durch Row Level Security (RLS) und Verschlüsselung
• **Standort:** Server können sich außerhalb von Brasilien befinden
• **Datenschutzrichtlinie:** Verfügbar in den Richtlinien des Dienstanbieters

**Analyse- und Überwachungsdienste:**
• **Analytics:** Anonymisierte Nutzungs- und Ereignisdaten zur Analyse
• **Crash Reporting:** Crash- und Fehlerberichte (ohne persönlich identifizierbare Informationen)
• **Push-Benachrichtigungen:** Token für den Versand von Push-Benachrichtigungen
• **Geteilte Daten:** Nutzungsereignisse, Crashdaten, Benachrichtigungstoken, Geräteinformationen (anonymisiert, wenn möglich)
• **Zweck:** Analytics, Problemlösung, Push-Benachrichtigungen
• **Standort:** Server können sich außerhalb von Brasilien befinden (hauptsächlich USA)
• **Datenschutzrichtlinie:** Verfügbar in den Richtlinien des Dienstanbieters

**Kartendienst:**
• **Geteilte Daten:** Standort, Routen, POIs (gemäß Anbieterrichtlinie)
• **Zweck:** Karten rendering, Geocodierung, Navigationsdienste
• **Datenschutzrichtlinie:** Verfügbar in den Richtlinien des Dienstanbieters

**Anbieter sozialer Authentifizierung:**
• **Geteilte Daten:** E-Mail, Name (falls autorisiert), Profilbild (falls autorisiert)
• **Zweck:** Benutzerauthentifizierung
• **Datenschutzrichtlinie:** Verfügbar in den Richtlinien jedes Authentifizierungsanbieters`
              },
              {
                subtitle: '3.2 Nicht erlaubte Teilung',
                content: `**Wir verkaufen, vermieten oder vermarkten Ihre persönlichen Daten NICHT** an Dritte für Marketing- oder Werbezwecke.

**Wir teilen Ihre Daten NICHT mit:**
• Werbeunternehmen für gezieltes Marketing
• Datenmaklern
• Anderen Diensten, die für den Betrieb der App nicht wesentlich sind`
              },
              {
                subtitle: '3.3 Gesetzliche Anforderungen',
                content: `Wir können Ihre Daten teilen, wenn dies gesetzlich vorgeschrieben ist:

• Als Reaktion auf gültige rechtliche Verfahren (Haftbefehle, Gerichtsbeschlüsse)
• Zur Erfüllung gesetzlicher Verpflichtungen
• Zum Schutz von Rechten, Eigentum oder Sicherheit von uns, unseren Benutzern oder der Öffentlichkeit
• Im Falle einer Fusion, Übernahme oder eines Verkaufs von Vermögenswerten (mit vorheriger Ankündigung)`
              }
            ]
          },
          {
            title: '4. Datenspeicherung',
            subsections: [
              {
                subtitle: '4.1 Speicherung auf dem Server',
                content: `Ihre Daten werden sicher auf geschützten Servern gespeichert:

**Arten gespeicherter Daten:**
• **Profildaten:** Kontoinformationen, Audioeinstellungen und Parameter (Aufbewahrung: solange das Konto existiert)
• **Routenverlauf:** Gespeicherte Routen und deren Details (Aufbewahrung: solange das Konto existiert oder bis zur Löschung durch Sie)
• **Reisesitzungen:** Vollständige Daten jeder durchgeführten Fahrt (Aufbewahrung: solange das Konto existiert oder bis zur Löschung durch Sie)
• **Besuchte Punkte:** Während Fahrten besuchte POIs (Aufbewahrung: verknüpft mit der Reisesitzung)
• **Standortdaten:** Während aktiver Sitzungen aufgezeichnete Standortpunkte (Aufbewahrung: verknüpft mit der Sitzung)
• **Benachrichtigungstoken:** Token für Push-Benachrichtigungen (Aufbewahrung: solange die App installiert ist)
• **Audit-Logs:** Aufzeichnungen von Löschanfragen und administrativen Aktionen (Aufbewahrung: für Audits, gemäß Vorschriften)

**Sicherheit:**
• Alle Daten geschützt durch Row Level Security (RLS)
• Nur Sie können auf Ihre eigenen Daten zugreifen
• Verschlüsselung bei Übertragung (HTTPS/TLS)
• Verschlüsselung im Ruhezustand gemäß Sicherheitsstandards
• Datenbankstruktur geschützt und nicht öffentlich zugänglich`
              },
              {
                subtitle: '4.2 Lokale Speicherung (Gerät)',
                content: `Lokal auf Ihrem Gerät gespeicherte Daten:

**Lokale Datenbank (Cache):**
• POI-Cache (Aufbewahrung: 5 Tage, automatische Bereinigung)
• Audio-Cache (Aufbewahrung: 7 Tage, automatische Bereinigung)
• Cache-Metadaten (URLs, Zeitstempel, Größen)

**Temporäre Speicherung:**
• Temporärer Datencache (Aufbewahrung: 1 Minute)
• Temporäre lokale Präferenzen

**Lokale Dateien:**
• Heruntergeladene Audiodateien für Offline-Wiedergabe
• Gespeichert in der sicheren Sandbox der App (isolierter Bereich des Betriebssystems)
• Nicht zugänglich für andere Apps oder Benutzer des Geräts

**Automatische Bereinigung:**
• Abgelaufener Cache wird automatisch entfernt
• Wöchentliche Bereinigung verwaister Dateien
• Alle lokalen Daten werden bei der Deinstallation der App entfernt`
              }
            ]
          },
          {
            title: '5. Angeforderte Berechtigungen',
            subsections: [
              {
                subtitle: '5.1 Obligatorische Berechtigungen',
                content: `**Standort (KRITISCH - Erforderlich):**
Die App **funktioniert nicht ordnungsgemäß** ohne Standortberechtigung.

• **Android:** ACCESS_FINE_LOCATION (präzises GPS), ACCESS_COARSE_LOCATION (ungefährer Standort), ACCESS_BACKGROUND_LOCATION (optional, aber empfohlen für den Betrieb während Fahrten)
• **iOS:** Standort, während die App geöffnet ist, und im Hintergrund während Reisesitzungen
• **Zweck:** Automatische POI-Erkennung, Routenverfolgung, Entfernungsberechnung, Funktion des Reiseführers
• **Wann verwendet:** Während aktiver Führersitzungen und im Hintergrund während Fahrten

**Audio (Erforderlich):**
• **Android:** Berechtigungen zum Abspielen von Audio und Anpassen der Lautstärke
• **iOS:** Automatische Berechtigungen für Audiowiedergabe
• **Zweck:** Wiedergabe von POI-Erzählungen, Audiosteuerung während der Navigation, Integration mit Fahrzeugsystemen (CarPlay)`
              },
              {
                subtitle: '5.2 Optionale Berechtigungen',
                content: `**Push-Benachrichtigungen (Optional):**
• **Zweck:** Benachrichtigungen über nahegelegene POIs, App-Updates, Erinnerungen und Empfehlungen
• **Kontrolle:** Sie können dies jederzeit in den Geräteeinstellungen aktivieren/deaktivieren
• **Erfasste Daten:** Benachrichtigungstoken, Berechtigungsstatus, Benachrichtigungspräferenzen

**Biometrie (Optional):**
• **Zweck:** Sicherer und bequemerer Login
• **Speicherung:** Gespeichert im Sicherheitssystem des Geräts (Keychain/Secure Enclave), niemals auf unseren Servern
• **Kontrolle:** Sie können dies in den App-Einstellungen aktivieren/deaktivieren

**Kamera (Zukünftig - Optional):**
• **Zweck:** Um ein Profilfoto aufzunehmen, falls gewünscht
• **Kontrolle:** Wird nur angefordert, wenn Sie diese Funktion nutzen möchten`
              },
              {
                subtitle: '5.3 Berechtigungskontrolle',
                content: `Sie haben die volle Kontrolle über Berechtigungen:

• Sie können jede Berechtigung jederzeit in den Geräteeinstellungen widerrufen
• Einige Funktionen funktionieren möglicherweise nicht ohne erforderliche Berechtigungen
• Die App fordert Berechtigungen an, wenn nötig, und erklärt den Grund
• Sie können optionale Berechtigungen verweigern, ohne die grundlegende Nutzung der App zu beeinträchtigen (außer Standort, der wesentlich ist)`
              }
            ]
          },
          {
            title: '6. Analytics und Tracking',
            subsections: [
              {
                subtitle: '6.1 Analytics und Nutzungsanalyse',
                content: `Wir verwenden Analysedienste, um zu verstehen, wie die App genutzt wird, und sie zu verbessern:

**Verfolgte Ereignisse:**
• **Sitzungsereignisse:** Fahrtbeginn/-ende, Bildschirmaufrufe
• **POI-Ereignisse:** POI erkannt, Start/Abschluss der Audiowiedergabe
• **Authentifizierungsereignisse:** Login, Logout, Login-/Anmeldeversuche
• **Interaktionsereignisse:** Klicks auf Schaltflächen, Bildschirmaufrufe

**Mit Ereignissen erfasste Daten:**
• User ID (anonymisiert, wenn möglich)
• Session ID
• Zeitstempel
• Standortdaten (Breitengrad, Längengrad, Genauigkeit) - anonymisiert
• POI-Informationen (ID, Name, Kategorie) - anonymisiert
• Leistungskennzahlen (Antwortzeit, Cache-Trefferquote)

**Anonymisierung:**
• Daten werden wenn möglich anonymisiert
• Wir erfassen keine persönlich identifizierbaren Informationen über Analytics
• Daten werden für statistische Analysen aggregiert

**Deaktivierung:**
• Analytics ist für die Funktionalität und Serviceverbesserung erforderlich
• Daten werden gemäß der Richtlinie des Dienstanbieters behandelt
• Aufbewahrung: In der Regel 14 Monate (Standardrichtlinie des Anbieters)`
              },
              {
                subtitle: '6.2 Fehler- und Crashberichte',
                content: `Wir verwenden Fehlerberichterstattungsdienste, um technische Probleme zu identifizieren und zu beheben:

**Erfasste Daten:**
• Fehler-Stack-Traces
• Geräteinformationen (Modell, OS, App-Version) - anonymisiert
• App-Zustand zum Zeitpunkt des Crashes
• Fehlerprotokolle (ohne persönlich identifizierbare Informationen)

**Beinhaltet nicht:**
• Persönlich identifizierbare Informationen
• Standortdaten (außer wenn für das Debuggen des spezifischen Fehlers erforderlich)
• Sensible Benutzerdaten

**Zweck:**
• Bugs und Crashes identifizieren
• App-Stabilität verbessern
• Technische Probleme schnell lösen`
              },
              {
                subtitle: '6.3 Push-Benachrichtigungen',
                content: `Wir verwenden Push-Benachrichtigungsdienste, um Benachrichtigungen zu senden:

**Erfasste Daten:**
• Benachrichtigungstoken (eindeutige Gerätekennung für Push)
• Status der Benachrichtigungsberechtigung
• Benachrichtigungspräferenzen des Benutzers

**Speicherung:**
• Token sicher verknüpft mit dem Benutzer gespeichert
• Werden entfernt, wenn Sie die App deinstallieren oder Berechtigungen widerrufen

**Zweck:**
• Benachrichtigungen über nahegelegene POIs senden
• App-Updates
• Erinnerungen und Empfehlungen (falls zulässig)`
              }
            ]
          },
          {
            title: '7. Datensicherheit',
            subsections: [
              {
                subtitle: '7.1 Implementierte Sicherheitsmaßnahmen',
                content: `Wir setzen robuste Sicherheitsmaßnahmen um, um Ihre Daten zu schützen:

**Authentifizierung:**
• Gehashte Passwörter (niemals im Klartext gespeichert)
• Sichere Authentifizierungstoken
• Sichere soziale Authentifizierung (Google/Apple)
• Optionale biometrische Authentifizierung (auf dem Gerät gespeichert)

**Verschlüsselung:**
• HTTPS/TLS-Kommunikation mit Servern
• Sensible Daten bei Übertragung verschlüsselt
• Sichere Speicherung auf geschützten Servern (gemäß Sicherheitsstandards)
• Verschlüsselung im Ruhezustand gemäß Sicherheitsstandards

**Row Level Security (RLS):**
• Benutzer können nur auf ihre eigenen Daten zugreifen
• Sicherheitszugriffsrichtlinien (RLS) für alle Tabellen
• Authentifizierungsprüfung bei allen Abfragen
• Vollständige Datenisolierung zwischen Benutzern

**Lokale Speicherung:**
• Lokale Daten in der App-Sandbox gespeichert
• Nicht zugänglich für andere Apps
• Automatische Bereinigung bei Deinstallation
• Cache läuft automatisch nach definiertem Zeitraum ab`
              },
              {
                subtitle: '7.2 Schutz vor unbefugtem Zugriff',
                content: `• Kontinuierliche Sicherheitsüberwachung
• Zugriff auf autorisierte Mitarbeiter beschränkt
• Regelmäßige Sicherheitsaudits
• Schnelle Reaktion auf Sicherheitsvorfälle`
              }
            ]
          },
          {
            title: '8. Ihre Rechte (LGPD/DSGVO)',
            subsections: [
              {
                subtitle: '8.1 Auskunftsrecht',
                content: `Sie haben das Recht auf Zugang zu allen Ihren persönlichen Daten:

• Alle Profildaten im Profil-Bildschirm der App anzeigen
• Auf Routen- und Reiseverlauf in der App zugreifen
• Detaillierte Informationen zu gespeicherten Daten anfordern über **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Recht auf Berichtigung',
                content: `Sie können Ihre Daten jederzeit korrigieren:

• Profil (Name, Telefon, Spitzname) direkt in der App bearbeiten
• Audioeinstellungen und Präferenzen aktualisieren
• Korrektur falscher Daten anfordern über **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Recht auf Löschung',
                content: `Sie können die vollständige Löschung Ihres Kontos und Ihrer Daten beantragen:

• **Löschung in der App verfügbar:** Gehen Sie zu Einstellungen und wählen Sie "Konto löschen"
• **Was entfernt wird:**
  - Alle Profildaten
  - Routen- und Reiseverlauf
  - Präferenzen und Einstellungen
  - Systemauthentifizierungsdaten
  - Lokaler Geräte-Cache
• **Bearbeitungszeit:** In der Regel bis zu 30 Tage
• **Ausnahmen:** Einige Daten können gemäß gesetzlichen Verpflichtungen (Audit-Logs) aufbewahrt werden`
              },
              {
                subtitle: '8.4 Recht auf Datenübertragbarkeit',
                content: `Sie können eine Kopie Ihrer Daten in einem strukturierten Format anfordern:

• Anfordern über **contato@tuggi.app**
• Daten werden im JSON-Format exportiert
• Beinhaltet alle Profildaten, Routen, Fahrten und Präferenzen
• Bearbeitung bis zu 30 Tage`
              },
              {
                subtitle: '8.5 Recht auf Widerruf der Einwilligung',
                content: `Sie können Einwilligungen jederzeit widerrufen:

• **Standortberechtigungen:** In den Geräteeinstellungen widerrufen (kann die App-Funktionalität beeinträchtigen)
• **Push-Benachrichtigungen:** In den Geräteeinstellungen deaktivieren
• **Analytics:** Kontakt über **contato@tuggi.app** (einige Funktionen können beeinträchtigt sein)
• **Kontolöschung:** Entfernt alle Einwilligungen und Daten`
              },
              {
                subtitle: '8.6 Recht auf Widerspruch gegen die Verarbeitung',
                content: `Sie können der Verarbeitung Ihrer Daten widersprechen:

• Stopp der Verarbeitung anfordern über **contato@tuggi.app**
• Einige Funktionen sind möglicherweise nicht verfügbar
• Kontolöschung entfernt alle Verarbeitungen`
              }
            ]
          },
          {
            title: '9. Datenaufbewahrung',
            content: `**Profildaten:**
• Aufbewahrt, solange Ihr Konto existiert
• Bei Kontolöschung sofort gelöscht

**Routen- und Reiseverlauf:**
• Aufbewahrt, solange das Konto existiert
• Können von Ihnen einzeln gelöscht werden
• Bei Kontolöschung gelöscht

**Standortdaten:**
• Während der Reisesitzung aufbewahrt
• Mit dem Reiseverlauf verknüpft
• Gelöscht, wenn die Reisesitzung gelöscht wird

**Lokaler Cache:**
• POI: 5 Tage (automatische Bereinigung)
• Audios: 7 Tage (automatische Bereinigung)
• Wöchentliche Bereinigung verwaister Dateien

**Analytics-Daten:**
• Gemäß der Richtlinie des Dienstanbieters aufbewahrt
• In der Regel 14 Monate (Standardrichtlinie des Anbieters)

**Löschprotokolle:**
• Zu Audit-Zwecken aufbewahrt
• Zeitraum gemäß geltenden Vorschriften (LGPD, DSGVO)`
          },
          {
            title: '10. Internationale Datenübertragung',
            content: `Ihre Daten können außerhalb von Brasilien übertragen und verarbeitet werden:

**Backend- und Speicheranbieter:**
• Server können sich außerhalb von Brasilien befinden
• Einhaltung internationaler Sicherheitsstandards
• Datenschutzrichtlinie verfügbar in den Richtlinien des Anbieters

**Analyse- und Überwachungsanbieter:**
• Server weltweit (hauptsächlich USA)
• Analytics-Daten an Server des Anbieters übertragen
• Einhaltung der Sicherheitsstandards des Anbieters
• Datenschutzrichtlinie verfügbar in den Richtlinien des Anbieters

**Kartendienstanbieter:**
• Kartendienste können Daten auf globalen Servern verarbeiten
• Einhaltung der Datenschutzrichtlinie des Anbieters

**Schutzmaßnahmen:**
• Wir verwenden nur Anbieter, die angemessenen Schutz garantieren
• Standardvertragsklauseln (SCCs), wenn anwendbar
• DSGVO-Konformität für Übertragungen in die EU`
          },
          {
            title: '11. Push-Benachrichtigungen',
            content: `Wenn Sie Push-Benachrichtigungen erhalten möchten:

**Arten von Benachrichtigungen:**
• Benachrichtigungen über nahegelegene POIs (wenn implementiert)
• App-Updates
• Erinnerungen und Empfehlungen

**Kontrolle:**
• Sie können dies jederzeit in den Geräteeinstellungen aktivieren/deaktivieren
• Benachrichtigungspräferenzen können in der App verwaltet werden (wenn implementiert)

**Verwendete Daten:**
• Benachrichtigungstoken (eindeutige Gerätekennung)
• Berechtigungsstatus
• Ihr Standort (nur für Benachrichtigungen über nahegelegene POIs, falls zulässig)

**Widerruf:**
• Sie können die Benachrichtigungsberechtigung in den Geräteeinstellungen widerrufen
• Sofort wirksam`
          },
          {
            title: '12. Regulatorische Konformität',
            content: `Wir entsprechen:

**LGPD (Allgemeines Datenschutzgesetz - Brasilien):**
• Ausdrückliche Einwilligung zur Datenerfassung
• Recht auf Zugang, Berichtigung und Löschung
• Datenübertragbarkeit
• Implementiertes Datenlöschsystem
• Transparenz über Datenerfassung und -nutzung

**DSGVO (Datenschutz-Grundverordnung - Europa):**
• Rechtsgrundlage für die Datenverarbeitung
• Betroffenenrechte
• Datenlöschsystem
• Schutz internationaler Datenübertragungen
• Meldung von Datenverletzungen (falls anwendbar)

**COPPA (Children's Online Privacy Protection Act - USA):**
• Die App richtet sich nicht an Kinder unter 13 Jahren
• Wir erfassen keine Daten von Kindern ohne elterliche Einwilligung

**Datenschutzrichtlinie für Kinder:**
• Wenn Sie unter 13 Jahre alt sind (oder das Mindestalter in Ihrem Land haben), nutzen Sie diese App nicht ohne elterliche Einwilligung
• Kontaktieren Sie uns, wenn Sie Fragen zum Datenschutz bei Kindern haben`
          },
          {
            title: '13. Cookies und ähnliche Technologien',
            content: `**Website (tuggi.app):**
Die Website kann Cookies und ähnliche Technologien verwenden. Siehe unsere Cookie-Richtlinie für weitere Details.

**Anwendung:**
Die Anwendung verwendet keine Cookies im herkömmlichen Sinne. Wir verwenden:
• Lokalen Cache (lokale Datenbank) für Offline-Funktionalität
• Authentifizierungstoken für Sitzungen
• Benachrichtigungstoken für Push-Benachrichtigungen

Diese Daten werden lokal auf dem Gerät gespeichert und sind keine verfolgbaren Cookies.`
          },
          {
            title: '14. Aktualisierungen dieser Richtlinie',
            content: `Wir können diese Datenschutzrichtlinie regelmäßig aktualisieren, um Änderungen in unseren Diensten oder rechtlichen Praktiken widerzuspiegeln.

**Benachrichtigungen:**
• Wesentliche Änderungen werden über die App oder per E-Mail kommuniziert
• Datum der letzten Aktualisierung immer oben in dieser Richtlinie sichtbar
• Sie werden über wichtige Änderungen informiert, bevor sie in Kraft treten

**Kontinuität:**
• Durch die fortgesetzte Nutzung der App nach Änderungen stimmen Sie den aktualisierten Bedingungen zu
• Wenn Sie den Änderungen nicht zustimmen, können Sie Ihr Konto jederzeit löschen

**Verlauf:**
• Frühere Versionen dieser Richtlinie können über **contato@tuggi.app** angefordert werden`
          },
          {
            title: '15. Kontakt und Fragen',
            content: `Wenn Sie Fragen zu unserer Datenschutzrichtlinie haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns:

**Allgemeine E-Mail:**
**contato@tuggi.app**

**Für Datenschutzfragen:**
**contato@tuggi.app** (Betreff: "Datenschutz")

**Zur Ausübung von Rechten (LGPD/DSGVO):**
**contato@tuggi.app** (Betreff: "Datenrechte")

**Website:**
https://www.tuggi.app/de/privacy-policy

**Antwortzeit:**
Wir beantworten Anfragen zu Datenrechten innerhalb von 30 Tagen, wie von LGPD und DSGVO gefordert.

**Identifizierung:**
Bei der Anforderung zur Ausübung von Rechten können wir eine Identitätsprüfung verlangen, um Ihre Daten zu schützen.`
          }
        ]
      },
      IT: {
        title: 'Informativa sulla Privacy',
        lastUpdated: 'Ultimo aggiornamento: Gennaio 2025',
        introduction: 'Questa Informativa sulla Privacy descrive come l\'applicazione Tuggi e il sito tuggi.app raccolgono, utilizzano, archiviano, condividono e proteggono i dati degli utenti. Questa informativa è conforme alla Legge Generale sulla Protezione dei Dati (LGPD) del Brasile e al Regolamento Generale sulla Protezione dei Dati (GDPR) dell\'Unione Europea.',
        sections: [
          {
            title: '1. Informazioni che Raccogliamo',
            subsections: [
              {
                subtitle: '1.1 Informazioni sull\'Account e Autenticazione',
                content: `Tuggi Drive offre tre metodi di registrazione e accesso:

**Registrazione con Email e Password:**
• Email (obbligatoria, usata per login e comunicazione)
• Password (archiviata crittografata, mai in testo in chiaro)
• Nome completo (opzionale, per personalizzazione)
• Numero di telefono (opzionale, per recupero account)
• Verifica dell'email obbligatoria per attivazione account

**Autenticazione Social (Google):**
• Integrazione con servizio di autenticazione di terze parti
• Email (fornita dal provider)
• Nome (se autorizzato)
• Foto profilo (se autorizzato)
• Token di autenticazione gestiti dal provider secondo la sua privacy policy

**Autenticazione Social (Apple):**
• Integrazione nativa con servizio di autenticazione
• Email (può essere una email privata fornita dal provider per proteggere la tua privacy)
• Nome (se autorizzato la prima volta)
• Secondo privacy policy del provider

**Dati del Profilo Archiviati:**
• Nome completo (full_name)
• Email (sola lettura dopo creazione account)
• Telefono (phone) - opzionale
• Soprannome (nickname) - opzionale
• Avatar/foto profilo (avatar_url) - opzionale
• ID univoco utente (UUID)
• Data creazione account
• Ultimo aggiornamento profilo`
              },
              {
                subtitle: '1.2 Dati di Posizione',
                content: `La raccolta dei dati di posizione è **essenziale** per il funzionamento dell'applicazione. L'app non funziona adeguatamente senza permesso di posizione.

**Permessi Richiesti:**
• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (posizione approssimativa), ACCESS_BACKGROUND_LOCATION (posizione in background - opzionale ma raccomandato)
• **iOS:** Posizione mentre l'app è aperta e in background durante sessioni di viaggio

**Dati di Posizione Raccolti:**
• Latitudine e longitudine (con precisione GPS)
• Altitudine
• Heading (direzione del movimento)
• Velocità
• Precisione del segnale GPS
• Timestamp di ogni aggiornamento
• Stato di movimento (fermo/in movimento)

**Quando Raccogliamo la Posizione:**
• Durante sessioni di guida viaggio attive
• In background quando l'app è in esecuzione durante un viaggio
• Per tracciamento percorso durante spostamenti
• Per rilevamento automatico di punti di interesse (POI) vicini
• **NON raccogliamo quando l'app è completamente chiusa** (a meno che tu non abbia concesso permesso di posizione in background)

**Archiviazione Dati di Posizione:**
• Punti di posizione durante sessioni sono archiviati collegati alla sessione di viaggio
• Sessioni complete di viaggio sono archiviate in modo sicuro
• Dati sono collegati al tuo utente e protetti da Row Level Security (RLS)`
              },
              {
                subtitle: '1.3 Informazioni sul Dispositivo',
                content: `Raccogliamo informazioni tecniche del dispositivo per ottimizzazione del servizio e risoluzione problemi:

**Identificatori:**
• Device ID (identificatore univoco del dispositivo)
• Unique ID (identificatore univoco dell'installazione app)
• Token notifica push (per notifiche, se permesso)

**Informazioni Hardware:**
• Modello del dispositivo (es: iPhone 14, Samsung Galaxy S23)
• Sistema operativo (iOS/Android)
• Versione OS (es: iOS 17.0, Android 14)
• Versione app
• Build number
• Nome del dispositivo (se disponibile)

**Informazioni Performance:**
• Memoria totale dispositivo (per ottimizzazione)
• Capacità di archiviazione (per gestione cache)`
              },
              {
                subtitle: '1.4 Dati di Utilizzo e Interazioni',
                content: `Raccogliamo informazioni su come usi l'applicazione:

**Eventi di Sessione:**
• Inizio e fine sessioni di viaggio
• Durata di ogni sessione
• Modalità di trasporto usata (guida, camminata, bicicletta, ecc.)

**Interazioni con POI:**
• POI visitati/rilevati durante viaggi
• Distanza di trigger di ogni POI
• Direzione del POI rispetto all'utente (sinistra, destra, fronte, retro)
• Timestamp di ogni rilevamento
• Riproduzione audio (inizio, durata, completamento o interruzione)

**Interazioni con Percorsi:**
• Percorsi creati e salvati
• POI inclusi in ogni percorso
• Ordine ottimizzato dei POI
• Distanza totale stimata
• Durata totale stimata
• Preferenze percorso

**Cronologia Viaggi:**
• Cronologia completa di percorsi e viaggi effettuati
• Punti visitati durante ogni viaggio
• Posizioni iniziali e finali di ogni sessione`
              },
              {
                subtitle: '1.5 Dati Audio e Narrazioni',
                content: `**Preferenze Audio:**
• Lingua audio preferita (pt-BR, en, es)
• Voce preferita (maschile/femminile)
• Velocità TTS (text-to-speech)

**Statistiche Riproduzione:**
• Durata audio riprodotti
• Tasso di completamento (audio ascoltato fino alla fine o interrotto)
• Lingua audio selezionata per ogni POI

**Cache Locale Audio:**
• File audio scaricati localmente per riproduzione offline
• Metadati cache (URL, timestamp, dimensioni)
• **Nota:** Audio sono archiviati localmente sul dispositivo, non inviati ai nostri server`
              },
              {
                subtitle: '1.6 Dati Impostazioni e Preferenze',
                content: `Archiviamo le tue preferenze e impostazioni:

**Preferenze Guida:**
• Raggio di trigger (100m, 200m o 500m)
• Privacy predefinita POI (privato/pubblico)
• Permesso condivisione liste

**Preferenze Notifiche:**
• Stato permesso notifiche push
• Preferenze tipi notifica (se configurato)`
              }
            ]
          },
          {
            title: '2. Come Utilizziamo i Tuoi Dati',
            subsections: [
              {
                subtitle: '2.1 Per Funzionamento del Servizio',
                content: `Utilizziamo i tuoi dati per fornire i servizi principali dell'applicazione:

• **Rilevamento Automatico POI:** Utilizziamo la tua posizione in tempo reale per rilevare quando ti avvicini a punti di interesse e riprodurre narrazioni automaticamente
• **Generazione Percorsi:** Creiamo percorsi personalizzati collegando multipli POI basato sulla tua posizione e preferenze
• **Cronologia Viaggi:** Archiviamo la tua cronologia affinché tu possa accedere a percorsi e viaggi precedenti
• **Funzionalità Offline:** Cache locale permette di usare l'app anche senza connessione internet
• **Autenticazione:** Gestiamo il tuo account e autenticazione per accesso sicuro al servizio`
              },
              {
                subtitle: '2.2 Per Migliorare il Servizio',
                content: `Utilizziamo dati aggregati e anonimizzati per migliorare continuamente l'applicazione:

• **Analisi Utilizzo:** Analizziamo pattern di utilizzo per identificare problemi e opportunità di miglioramento
• **Ottimizzazione Performance:** Utilizziamo informazioni del dispositivo per ottimizzare le prestazioni dell'app
• **Miglioramento Posizione:** Miglioriamo la precisione del rilevamento POI basato su dati di utilizzo
• **Ottimizzazione Cache:** Gestiamo efficientemente cache audio e POI per migliore esperienza
• **Risoluzione Problemi:** Utilizziamo dati di crash ed errori per identificare e correggere bug`
              },
              {
                subtitle: '2.3 Per Personalizzazione',
                content: `Personalizziamo la tua esperienza in base alle tue preferenze:

• **Interfaccia Personalizzata:** Utilizziamo il tuo nome, soprannome e foto profilo per personalizzare l'interfaccia
• **Contenuto Rilevante:** Offriamo contenuto e percorsi basati su tue preferenze e cronologia
• **Impostazioni Audio:** Applichiamo le tue preferenze di lingua, voce e velocità narrazione
• **Notifiche Personalizzate:** Inviamo notifiche rilevanti su attrazioni vicine (se permesso)`
              },
              {
                subtitle: '2.4 Per Comunicazione e Supporto',
                content: `Utilizziamo i tuoi dati di contatto per:

• **Verifica Account:** Inviamo email di verifica durante la registrazione
• **Recupero Account:** Permette recupero password via email
• **Supporto Clienti:** Rispondiamo alle tue richieste e domande
• **Comunicazioni Importanti:** Notifichiamo su cambiamenti significativi nella policy o termini d'uso`
              }
            ]
          },
          {
            title: '3. Condivisione Dati con Terze Parti',
            subsections: [
              {
                subtitle: '3.1 Fornitori di Servizi Essenziali',
                content: `Condividiamo dati con fornitori di servizi che ci aiutano a operare l'applicazione:

**Provider Backend e Archiviazione:**
• **Dati condivisi:** Tutti i dati utente (profilo, posizione, percorsi, viaggi, preferenze)
• **Finalità:** Archiviazione sicura dati, autenticazione, API e sincronizzazione tra dispositivi
• **Sicurezza:** Dati protetti da Row Level Security (RLS) e crittografia
• **Posizione:** Server possono essere situati fuori dal Brasile
• **Privacy Policy:** Disponibile nelle policy del fornitore servizi

**Servizi Analytics e Monitoraggio:**
• **Analytics:** Dati utilizzo ed eventi anonimizzati per analisi
• **Crash Reporting:** Rapporti crash ed errori (senza informazioni personali identificabili)
• **Notifiche Push:** Token per invio notifiche push
• **Dati condivisi:** Eventi utilizzo, dati crash, token notifica, informazioni dispositivo (anonimizzati quando possibile)
• **Finalità:** Analytics, risoluzione problemi, notifiche push
• **Posizione:** Server possono essere situati fuori dal Brasile (principalmente USA)
• **Privacy Policy:** Disponibile nelle policy del fornitore servizi

**Servizio Mappe:**
• **Dati condivisi:** Posizione, percorsi, POI (secondo policy fornitore)
• **Finalità:** Rendering mappe, geocodifica, servizi navigazione
• **Privacy Policy:** Disponibile nelle policy del fornitore servizi

**Provider Autenticazione Social:**
• **Dati condivisi:** Email, nome (se autorizzato), foto profilo (se autorizzato)
• **Finalità:** Autenticazione utente
• **Privacy Policy:** Disponibile nelle policy di ogni provider autenticazione`
              },
              {
                subtitle: '3.2 Condivisione Non Permessa',
                content: `**NON vendiamo, affittiamo o commercializziamo i tuoi dati personali** a terze parti per fini di marketing o pubblicità.

**NON condividiamo i tuoi dati con:**
• Aziende pubblicitarie per marketing mirato
• Data broker
• Altri servizi che non siano essenziali per il funzionamento dell'app`
              },
              {
                subtitle: '3.3 Requisiti Legali',
                content: `Possiamo condividere i tuoi dati quando richiesto dalla legge:

• In risposta a processi legali validi (mandati, ordini giudiziari)
• Per adempiere obblighi legali
• Per proteggere diritti, proprietà o sicurezza nostra, dei nostri utenti o del pubblico
• In caso di fusione, acquisizione o vendita di asset (con preavviso)`
              }
            ]
          },
          {
            title: '4. Archiviazione Dati',
            subsections: [
              {
                subtitle: '4.1 Archiviazione su Server',
                content: `I tuoi dati sono archiviati in modo sicuro su server protetti:

**Tipi di Dati Archiviati:**
• **Dati Profilo:** Informazioni account, preferenze audio e impostazioni (ritenzione: finché account esiste)
• **Cronologia Percorsi:** Percorsi salvati e dettagli (ritenzione: finché account esiste o finché cancelli)
• **Sessioni Viaggio:** Dati completi di ogni viaggio effettuato (ritenzione: finché account esiste o finché cancelli)
• **Punti Visitati:** POI visitati durante viaggi (ritenzione: collegato a sessione viaggio)
• **Dati Posizione:** Punti posizione registrati durante sessioni attive (ritenzione: collegato a sessione)
• **Token Notifica:** Token per push notifications (ritenzione: finché app installata)
• **Log Audit:** Registri richieste cancellazione e azioni amministrative (ritenzione: per audit, secondo regolamentazione)

**Sicurezza:**
• Tutti i dati protetti da Row Level Security (RLS)
• Solo tu puoi accedere ai tuoi propri dati
• Crittografia in transito (HTTPS/TLS)
• Crittografia a riposo secondo standard sicurezza
• Struttura database protetta e non accessibile pubblicamente`
              },
              {
                subtitle: '4.2 Archiviazione Locale (Dispositivo)',
                content: `Dati archiviati localmente sul tuo dispositivo:

**Database Locale (Cache):**
• Cache POI (ritenzione: 5 giorni, pulizia automatica)
• Cache audio (ritenzione: 7 giorni, pulizia automatica)
• Metadati cache (URL, timestamp, dimensioni)

**Archiviazione Temporanea:**
• Cache dati temporanea (ritenzione: 1 minuto)
• Preferenze locali temporanee

**File Locali:**
• File audio scaricati per riproduzione offline
• Archiviati nella sandbox sicura dell'app (area isolata del sistema operativo)
• Non accessibili da altre app o utenti dispositivo

**Pulizia Automatica:**
• Cache scaduta viene rimossa automaticamente
• Pulizia settimanale file orfani
• Tutti i dati locali vengono rimossi disinstallando l'app`
              }
            ]
          },
          {
            title: '5. Permessi Richiesti',
            subsections: [
              {
                subtitle: '5.1 Permessi Obbligatori',
                content: `**Posizione (CRITICO - Obbligatorio):**
L'app **non funziona adeguatamente** senza permesso di posizione.

• **Android:** ACCESS_FINE_LOCATION (GPS preciso), ACCESS_COARSE_LOCATION (posizione approssimativa), ACCESS_BACKGROUND_LOCATION (opzionale ma raccomandato per funzionamento durante viaggi)
• **iOS:** Posizione mentre l'app è aperta e in background durante sessioni di viaggio
• **Finalità:** Rilevamento automatico POI, tracciamento percorso, calcolo distanze, funzionamento guida viaggio
• **Quando usata:** Durante sessioni guida attive e in background durante viaggi

**Audio (Obbligatorio):**
• **Android:** Permessi per riprodurre audio e regolare volume
• **iOS:** Permessi automatici per riproduzione audio
• **Finalità:** Riproduzione narrazioni POI, controllo audio durante navigazione, integrazione con sistemi auto (CarPlay)`
              },
              {
                subtitle: '5.2 Permessi Opzionali',
                content: `**Notifiche Push (Opzionale):**
• **Finalità:** Notifiche su POI vicini, aggiornamenti app, promemoria e raccomandazioni
• **Controllo:** Puoi attivare/disattivare nelle impostazioni dispositivo in qualsiasi momento
• **Dati raccolti:** Token notifica, stato permesso, preferenze notifica

**Biometria (Opzionale):**
• **Finalità:** Login più sicuro e conveniente
• **Archiviazione:** Archiviato nel sistema sicurezza dispositivo (keychain/secure enclave), mai sui nostri server
• **Controllo:** Puoi attivare/disattivare nelle impostazioni app

**Fotocamera (Futuro - Opzionale):**
• **Finalità:** Per scattare foto profilo, se desiderato
• **Controllo:** Sarà richiesta solo quando scegli di usare questa funzionalità`
              },
              {
                subtitle: '5.3 Controllo Permessi',
                content: `Hai controllo totale sui permessi:

• Puoi revocare qualsiasi permesso in qualsiasi momento nelle impostazioni dispositivo
• Alcune funzionalità possono non funzionare senza permessi necessari
• L'app richiederà permessi quando necessario e spiegherà il motivo
• Puoi negare permessi opzionali senza influenzare uso base app (eccetto posizione, che è essenziale)`
              }
            ]
          },
          {
            title: '6. Analytics e Tracciamento',
            subsections: [
              {
                subtitle: '6.1 Analytics e Analisi Utilizzo',
                content: `Utilizziamo servizi analytics per capire come l'app viene usata e migliorarla:

**Eventi Tracciati:**
• **Eventi Sessione:** Inizio/fine viaggio, visualizzazione schermate
• **Eventi POI:** POI rilevato, inizio/completamento riproduzione audio
• **Eventi Autenticazione:** Login, logout, tentativi login/registrazione
• **Eventi Interazione:** Click su pulsanti, visualizzazioni schermate

**Dati Raccolti con Eventi:**
• User ID (anonimizzato quando possibile)
• Session ID
• Timestamp
• Dati posizione (latitudine, longitudine, precisione) - anonimizzati
• Informazioni POI (ID, nome, categoria) - anonimizzate
• Metriche performance (tempo risposta, tasso cache hit)

**Anonimizzazione:**
• Dati sono anonimizzati quando possibile
• Non raccogliamo informazioni personali identificabili tramite Analytics
• Dati sono aggregati per analisi statistica

**Disattivazione:**
• Analytics è necessario per funzionalità e miglioramento servizio
• Dati sono trattati secondo policy fornitore servizi
• Ritenzione: Generalmente 14 mesi (policy standard fornitore)`
              },
              {
                subtitle: '6.2 Rapporti Errore e Crash',
                content: `Utilizziamo servizi rapporto errori per identificare e correggere problemi tecnici:

**Dati Raccolti:**
• Stack trace errori
• Informazioni dispositivo (modello, OS, versione app) - anonimizzate
• Stato app al momento del crash
• Log errore (senza informazioni personali identificabili)

**Non Include:**
• Informazioni personali identificabili
• Dati posizione (eccetto se necessario per debug errore specifico)
• Dati sensibili utente

**Finalità:**
• Identificare bug e crash
• Migliorare stabilità app
• Risolvere problemi tecnici rapidamente`
              },
              {
                subtitle: '6.3 Notifiche Push',
                content: `Utilizziamo servizi notifiche push per inviare notifiche:

**Dati Raccolti:**
• Token notifica (identificatore univoco dispositivo per push)
• Stato permesso notifiche
• Preferenze notifica utente

**Archiviazione:**
• Token archiviati in modo sicuro collegati all'utente
• Rimossi quando disinstalli app o revochi permessi

**Finalità:**
• Inviare notifiche su POI vicini
• Aggiornamenti app
• Promemoria e raccomandazioni (se permesso)`
              }
            ]
          },
          {
            title: '7. Sicurezza Dati',
            subsections: [
              {
                subtitle: '7.1 Misure Sicurezza Implementate',
                content: `Implementiamo misure sicurezza robuste per proteggere i tuoi dati:

**Autenticazione:**
• Password con hash (mai archiviate in testo in chiaro)
• Token autenticazione sicuri
• Autenticazione social sicura (Google/Apple)
• Autenticazione biometrica opzionale (archiviata su dispositivo)

**Crittografia:**
• Comunicazione HTTPS/TLS con server
• Dati sensibili crittografati in transito
• Archiviazione sicura su server protetti (secondo standard sicurezza)
• Crittografia a riposo secondo standard sicurezza

**Row Level Security (RLS):**
• Utenti possono accedere solo ai propri dati
• Policy sicurezza accesso (RLS) per tutte le tabelle
• Verifica autenticazione su tutte le query
• Isolamento completo dati tra utenti

**Archiviazione Locale:**
• Dati locali archiviati nella sandbox app
• Non accessibili da altre app
• Pulizia automatica alla disinstallazione
• Cache scade automaticamente dopo periodo definito`
              },
              {
                subtitle: '7.2 Protezione Contro Accesso Non Autorizzato',
                content: `• Monitoraggio continuo sicurezza
• Accesso limitato solo a dipendenti autorizzati
• Audit regolari sicurezza
• Risposta rapida a incidenti sicurezza`
              }
            ]
          },
          {
            title: '8. I Tuoi Diritti (LGPD/GDPR)',
            subsections: [
              {
                subtitle: '8.1 Diritto di Accesso',
                content: `Hai diritto di accedere a tutti i tuoi dati personali:

• Visualizzare tutti i dati profilo nella schermata Profile app
• Accedere a cronologia percorsi e viaggi nell'app
• Richiedere informazioni dettagliate su dati archiviati via **contato@tuggi.app**`
              },
              {
                subtitle: '8.2 Diritto di Rettifica',
                content: `Puoi correggere i tuoi dati in qualsiasi momento:

• Modificare profilo (nome, telefono, soprannome) direttamente nell'app
• Aggiornare preferenze audio e impostazioni
• Richiedere correzione dati errati via **contato@tuggi.app**`
              },
              {
                subtitle: '8.3 Diritto di Cancellazione',
                content: `Puoi richiedere la cancellazione completa del tuo account e dati:

• **Cancellazione disponibile in app:** Accedi impostazioni e seleziona "Elimina Account"
• **Cosa viene rimosso:**
  - Tutti i dati profilo
  - Cronologia percorsi e viaggi
  - Preferenze e impostazioni
  - Dati autenticazione sistema
  - Cache locale dispositivo
• **Tempo elaborazione:** Generalmente entro 30 giorni
• **Eccezioni:** Alcuni dati possono essere mantenuti secondo obblighi legali (log audit)`
              },
              {
                subtitle: '8.4 Diritto di Portabilità',
                content: `Puoi richiedere una copia dei tuoi dati in formato strutturato:

• Richiedi via **contato@tuggi.app**
• Dati saranno esportati in formato JSON
• Include tutti i dati profilo, percorsi, viaggi e preferenze
• Elaborazione entro 30 giorni`
              },
              {
                subtitle: '8.5 Diritto di Revoca Consenso',
                content: `Puoi revocare consensi in qualsiasi momento:

• **Permessi Posizione:** Revoca nelle impostazioni dispositivo (può influenzare funzionalità app)
• **Notifiche Push:** Disattiva nelle impostazioni dispositivo
• **Analytics:** Contatta via **contato@tuggi.app** (alcune funzionalità possono essere influenzate)
• **Cancellazione Account:** Rimuove tutti i consensi e dati`
              },
              {
                subtitle: '8.6 Diritto di Opposizione al Trattamento',
                content: `Puoi opporti al trattamento dei tuoi dati:

• Richiedi stop trattamento via **contato@tuggi.app**
• Alcune funzionalità possono non essere disponibili
• Cancellazione account rimuove tutti i trattamenti`
              }
            ]
          },
          {
            title: '9. Ritenzione Dati',
            content: `**Dati Profilo:**
• Trattenuti finché il tuo account esiste
• Cancellati immediatamente all'eliminazione account

**Cronologia Percorsi e Viaggi:**
• Trattenuti finché account esiste
• Possono essere cancellati individualmente da te
• Cancellati all'eliminazione account

**Dati Posizione:**
• Trattenuti durante sessione viaggio
• Collegati a cronologia viaggio
• Cancellati quando sessione viaggio viene cancellata

**Cache Locale:**
• POI: 5 giorni (pulizia automatica)
• Audio: 7 giorni (pulizia automatica)
• Pulizia settimanale file orfani

**Dati Analytics:**
• Trattenuti secondo policy fornitore servizi
• Generalmente 14 mesi (policy standard fornitore)

**Log Cancellazione:**
• Trattenuti per fini audit
• Periodo secondo regolamentazione applicabile (LGPD, GDPR)`
          },
          {
            title: '10. Trasferimento Internazionale Dati',
            content: `I tuoi dati possono essere trasferiti e trattati fuori dal Brasile:

**Provider Backend e Archiviazione:**
• Server possono essere situati fuori dal Brasile
• Conformità con standard sicurezza internazionali
• Privacy policy disponibile nelle policy fornitore

**Provider Analytics e Monitoraggio:**
• Server situati globalmente (principalmente USA)
• Dati analytics trasferiti a server fornitore
• Conformità con standard sicurezza fornitore
• Privacy policy disponibile nelle policy fornitore

**Provider Servizi Mappe:**
• Servizi mappe possono trattare dati su server globali
• Conformità con privacy policy fornitore

**Protezioni:**
• Utilizziamo solo fornitori che garantiscono protezioni adeguate
• Clausole Contrattuali Standard (SCCs) quando applicabile
• Conformità GDPR per trasferimenti verso UE`
          },
          {
            title: '11. Notifiche Push',
            content: `Se scegli di ricevere notifiche push:

**Tipi Notifiche:**
• Notifiche su POI vicini (quando implementato)
• Aggiornamenti app
• Promemoria e raccomandazioni

**Controllo:**
• Puoi attivare/disattivare nelle impostazioni dispositivo in qualsiasi momento
• Preferenze notifica possono essere gestite nell'app (se implementato)

**Dati Utilizzati:**
• Token notifica (identificatore univoco dispositivo)
• Stato permesso
• La tua posizione (solo per notifiche su POI vicini, se permesso)

**Revoca:**
• Puoi revocare permesso notifiche nelle impostazioni dispositivo
• Immediatamente effettivo`
          },
          {
            title: '12. Conformità Regolatoria',
            content: `Siamo conformi con:

**LGPD (Legge Generale Protezione Dati - Brasile):**
• Consenso esplicito per raccolta dati
• Diritto di accesso, rettifica e cancellazione
• Portabilità dati
• Sistema cancellazione dati implementato
• Trasparenza su raccolta e utilizzo dati

**GDPR (Regolamento Generale Protezione Dati - Europa):**
• Base legale per trattamento dati
• Diritti interessati
• Sistema cancellazione dati
• Protezione dati trasferimento internazionale
• Notifica violazioni dati (se applicabile)

**COPPA (Children's Online Privacy Protection Act - USA):**
• L'app non è diretta a bambini sotto 13 anni
• Non raccogliamo dati da bambini senza consenso genitori

**Privacy Policy Bambini:**
• Se hai meno di 13 anni (o età minima nel tuo paese), non usare questa app senza consenso genitori
• Contattaci se hai domande su protezione dati bambini`
          },
          {
            title: '13. Cookie e Tecnologie Simili',
            content: `**Sito Web (tuggi.app):**
Il sito web può utilizzare cookie e tecnologie simili. Vedi nostra Cookie Policy per più dettagli.

**Applicazione:**
L'applicazione non utilizza cookie nel senso tradizionale. Utilizziamo:
• Cache locale (database locale) per funzionalità offline
• Token autenticazione per sessioni
• Token notifica per push notifications

Questi dati sono archiviati localmente sul dispositivo e non sono cookie tracciabili.`
          },
          {
            title: '14. Aggiornamenti a Questa Policy',
            content: `Possiamo aggiornare questa Privacy Policy periodicamente per riflettere cambiamenti nei nostri servizi o pratiche legali.

**Notifiche:**
• Cambiamenti significativi saranno comunicati tramite app o email
• Data ultimo aggiornamento sempre visibile in cima a questa policy
• Sarai notificato su cambiamenti importanti prima che entrino in vigore

**Continuità:**
• Continuando a usare l'app dopo cambiamenti, accetti i termini aggiornati
• Se non sei d'accordo con i cambiamenti, puoi cancellare il tuo account in qualsiasi momento

**Cronologia:**
• Versioni precedenti di questa policy possono essere richieste via **contato@tuggi.app**`
          },
          {
            title: '15. Contatto e Domande',
            content: `Se hai qualsiasi domanda sulla nostra Privacy Policy o desideri esercitare i tuoi diritti, contattaci:

**Email Generale:**
**contato@tuggi.app**

**Per Questioni Privacy:**
**contato@tuggi.app** (oggetto: "Privacy")

**Per Esercitare Diritti (LGPD/GDPR):**
**contato@tuggi.app** (oggetto: "Diritti Dati")

**Sito Web:**
https://www.tuggi.app/it/privacy-policy

**Tempo Risposta:**
Rispondiamo richieste relative a diritti dati entro 30 giorni, come richiesto da LGPD e GDPR.

**Identificazione:**
Nel richiedere esercizio diritti, possiamo richiedere verifica identità per proteggere i tuoi dati.`
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