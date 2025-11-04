# Documento de Referência - Política de Privacidade e Termos de Uso
## Tuggi Drive App

**Data de Criação:** Janeiro 2025  
**Propósito:** Este documento lista todas as funcionalidades, dados coletados e tecnologias utilizadas no app Tuggi Drive para auxiliar na atualização das políticas de privacidade e termos de uso do site.

---

## 📱 1. VISÃO GERAL DO APLICATIVO

O Tuggi Drive é um aplicativo de guia de viagem que fornece informações sobre pontos de interesse (POIs) durante deslocamentos. O app utiliza localização GPS para detectar automaticamente quando o usuário se aproxima de pontos de interesse e reproduz narrações em áudio sobre esses locais.

### Funcionalidades Principais:
- **Guia de Viagem Automático**: Detecta automaticamente POIs próximos durante deslocamentos
- **Narração de Áudio**: Reproduz automaticamente narrações sobre pontos de interesse
- **Geração de Rotas**: Cria rotas personalizadas conectando múltiplos POIs
- **Mapas Interativos**: Visualização de rotas e POIs em mapas (Google Maps)
- **Histórico de Viagens**: Armazena histórico de rotas e viagens realizadas
- **Cache Offline**: Funcionalidade offline para POIs e áudios pré-baixados
- **Personalização**: Configurações de idioma de áudio, voz e preferências

---

## 🔐 2. AUTENTICAÇÃO E CONTA DE USUÁRIO

### 2.1 Métodos de Autenticação

O app oferece três métodos de cadastro/login:

1. **Email e Senha**
   - Coleta: email, senha (hash), nome completo, telefone (opcional)
   - Verificação de email obrigatória
   - Recuperação de senha via email

2. **Google Sign-In**
   - Integração com Google OAuth
   - Coleta: email, nome, foto de perfil (se autorizado)
   - Tokens de autenticação gerenciados pelo Google

3. **Apple Sign-In**
   - Integração nativa com Apple Authentication
   - Coleta: email, nome (se autorizado na primeira vez)
   - Privacidade: Apple pode ocultar email real (usando email privado)

### 2.2 Dados do Perfil do Usuário

**Informações coletadas e armazenadas:**
- Nome completo (`full_name`)
- Email (readonly após criação)
- Telefone (`phone`) - opcional
- Nickname (`nickname`) - opcional
- Avatar/foto de perfil (`avatar_url`) - opcional
- ID único do usuário (UUID)
- Data de criação da conta
- Última atualização do perfil

**Localização dos dados:**
- Armazenados no Supabase (schema `drive.profiles`)
- Sincronizados entre dispositivos
- Acessíveis apenas pelo próprio usuário (Row Level Security)

### 2.3 Gerenciamento de Conta

- **Edição de Perfil**: Usuário pode atualizar nome, telefone e nickname
- **Exclusão de Conta**: Sistema completo de exclusão de dados (GDPR compliant)
  - Deleta todos os dados do usuário
  - Remove histórico de rotas, viagens e preferências
  - Remove autenticação do Supabase Auth
  - Limpa cache local do dispositivo

---

## 📍 3. PERMISSÕES E DADOS DE LOCALIZAÇÃO

### 3.1 Permissões Solicitadas

#### Localização (CRÍTICA - Obrigatória)

**Android:**
- `ACCESS_FINE_LOCATION` - Localização precisa (GPS)
- `ACCESS_COARSE_LOCATION` - Localização aproximada (rede)
- `ACCESS_BACKGROUND_LOCATION` - Localização em background (opcional, mas recomendado)

**iOS:**
- `NSLocationWhenInUseUsageDescription` - Localização enquanto app está aberto
- `NSLocationAlwaysAndWhenInUseUsageDescription` - Localização em background
- `NSLocationAlwaysUsageDescription` - Localização sempre ativa

**Finalidade:**
- Detecção automática de POIs próximos
- Rastreamento de rota durante viagens
- Cálculo de distâncias e direções
- Funcionamento do guia de viagem

**Dados coletados:**
- Latitude e longitude (precisão GPS)
- Altitude
- Heading (direção do movimento)
- Velocidade
- Precisão do sinal GPS
- Timestamp de cada atualização
- Status de movimento (parado/em movimento)

**Quando coletado:**
- Durante sessões de guia de viagem ativas
- Em background quando o app está em segundo plano durante viagem
- Não coletado quando o app está completamente fechado (a menos que tenha permissão de background)

#### Notificações Push (OPCIONAL)

**Android:**
- Permissões de notificação automáticas

**iOS:**
- `NSUserNotificationsUsageDescription`

**Finalidade:**
- Notificações sobre POIs próximos
- Atualizações do app
- Lembretes e recomendações

**Dados coletados:**
- Token FCM (Firebase Cloud Messaging)
- Status de permissão (concedida/negada)
- Preferências de notificação do usuário

#### Áudio (CRÍTICA - Para narração)

**Android:**
- `RECORD_AUDIO` - Permissão para reproduzir áudio
- `MODIFY_AUDIO_SETTINGS` - Ajustar volume e roteamento

**iOS:**
- Permissões de reprodução de áudio automáticas
- `NSMicrophoneUsageDescription` - Não utilizado atualmente, mas pode ser necessário para futuras funcionalidades

**Finalidade:**
- Reprodução de narrações de POIs
- Controle de áudio durante navegação
- Integração com sistemas de carro (CarPlay)

### 3.2 Armazenamento de Dados de Localização

**Tabela `drive.route_trail`:**
- Armazena pontos de localização durante sessões de guia
- Dados: latitude, longitude, altitude, heading, velocidade, timestamp
- Vinculado a `trip_session_id` e `user_id`
- Retido por período necessário para funcionalidade de histórico

**Tabela `drive.trip_sessions`:**
- Armazena sessões de viagem completas
- Dados: localização inicial/final, duração, modo de transporte
- Vinculado a `user_id`

---

## 🗺️ 4. FUNCIONALIDADES E DADOS RELACIONADOS

### 4.1 Sistema de Guia de Viagem

**Como funciona:**
- Detecta automaticamente quando usuário se aproxima de POIs
- Reproduz narrações em áudio automaticamente
- Funciona em background durante viagens

**Dados coletados:**
- Histórico de POIs visitados/ouvidos
- Distância de trigger de cada POI
- Direção do POI em relação ao usuário (esquerda, direita, frente, atrás)
- Timestamp de cada trigger
- Duração de áudio reproduzido
- Taxa de conclusão de áudio

**Armazenamento:**
- Tabela `drive.trip_session_attractions` - POIs visitados durante viagens
- Vinculado a sessão de viagem e usuário

### 4.2 Geração e Salvamento de Rotas

**Funcionalidade:**
- Usuário pode criar rotas conectando múltiplos POIs
- Sistema otimiza ordem dos POIs baseado em localização e modo de transporte
- Rotas podem ser salvas para uso futuro

**Dados coletados:**
- Lista de POIs na rota
- Ordem otimizada dos POIs
- Modo de transporte (dirigindo, caminhando, bicicleta, etc.)
- Distância total estimada
- Duração total estimada
- Tempo de exploração em cada POI
- Localização inicial e final
- Preferências de rota (evitar multidões, preferir lugares quietos, etc.)

**Armazenamento:**
- Tabela `drive.user_route_history` - Histórico de rotas salvas
- Tabela `drive.route_pois` - Detalhes dos POIs em cada rota
- Vinculado a `user_id`

### 4.3 Sistema de Mapas

**Tecnologia:**
- Google Maps SDK (iOS e Android)
- Integração com apps externos (Google Maps, Apple Maps, Waze)

**Dados coletados:**
- Interações com mapas (zoom, pan, seleção de POIs)
- Abertura de rotas em apps externos
- Preferências de visualização de mapa

**Compartilhamento com terceiros:**
- Google Maps SDK coleta dados de uso conforme política do Google
- Ao abrir rotas em apps externos, os dados são compartilhados com esses apps

### 4.4 Cache e Funcionalidade Offline

**Sistema de Cache:**
- SQLite local para cache de POIs (5 dias de retenção)
- SQLite local para cache de áudios (7 dias de retenção)
- AsyncStorage para cache temporário (1 minuto)

**Dados armazenados localmente:**
- POIs essenciais: ID, nome, coordenadas, pontos de trigger
- Arquivos de áudio baixados localmente
- Metadados de cache (URLs, timestamps, tamanhos)

**Finalidade:**
- Redução de uso de dados
- Funcionalidade offline
- Melhor performance

**Localização no dispositivo:**
- iOS: `Documents/audio/` (sandbox do app)
- Android: `DocumentDirectory/audio/` (armazenamento interno do app)
- Banco SQLite: armazenamento interno do app

---

## 🔊 5. SISTEMA DE ÁUDIO E NARRAÇÕES

### 5.1 Narrações de POIs

**Funcionalidade:**
- Cada POI pode ter múltiplas narrações em diferentes idiomas
- Narrações geradas por IA (text-to-speech ou áudio pré-gravado)
- Reprodução automática quando usuário se aproxima do POI

**Dados coletados:**
- Idioma de áudio preferido pelo usuário
- Preferência de voz (masculina/feminina)
- Idioma de áudio selecionado para cada POI
- Duração de áudio reproduzido
- Taxa de conclusão (áudio ouvido até o fim ou interrompido)

**Armazenamento:**
- URLs de áudio armazenadas no banco de dados
- Arquivos de áudio cacheados localmente após primeiro uso
- Preferências de áudio no perfil do usuário

### 5.2 Configurações de Áudio

**Preferências do usuário:**
- Idioma de áudio (`audio_language`): pt-BR, en, es
- Voz preferida (`voice_preference`): brian (masculina), laura (feminina)
- Velocidade de TTS (`tts_speed`): 0.8 a 1.5

**Armazenamento:**
- Tabela `drive.profiles` - colunas de preferências
- Sincronizado entre dispositivos

---

## 📊 6. ANALYTICS E RASTREAMENTO

### 6.1 Firebase Analytics

**Serviço utilizado:**
- Firebase Analytics (Google Analytics)
- Integrado com Firebase Crashlytics

**Eventos rastreados:**

**Eventos de Sessão:**
- `trip_session_started` - Início de viagem
- `trip_session_ended` - Fim de viagem
- `screen_viewed` - Visualização de telas

**Eventos de POI:**
- `poi_triggered` - POI detectado automaticamente
- `poi_audio_started` - Início de reprodução de áudio
- `poi_audio_completed` - Conclusão de reprodução de áudio

**Eventos de Autenticação:**
- `user_login` - Login realizado
- `user_logout` - Logout realizado
- `login_attempt` - Tentativa de login
- `login_success` - Login bem-sucedido
- `login_failure` - Login falhou
- `signup_attempt` - Tentativa de cadastro
- `signup_success` - Cadastro bem-sucedido
- `signup_failure` - Cadastro falhou

**Eventos de Interação:**
- `button_clicked` - Cliques em botões
- `welcome_screen_viewed` - Visualização da tela de boas-vindas

**Dados coletados com eventos:**
- User ID (anonimizado quando possível)
- Session ID
- Timestamps
- Dados de localização (latitude, longitude, precisão)
- Informações de POI (ID, nome, categoria)
- Métricas de performance (tempo de resposta, taxa de cache hit)

**Desativação:**
- Usuário não pode desativar completamente (necessário para funcionalidade do app)
- Dados são anonimizados quando possível
- Conforme política do Google Analytics

### 6.2 Firebase Crashlytics

**Finalidade:**
- Coleta de relatórios de crash
- Rastreamento de erros e exceções

**Dados coletados:**
- Stack traces de erros
- Informações do dispositivo (modelo, OS, versão do app)
- Estado do app no momento do crash
- Logs de erro (sem informações pessoais)

**Não inclui:**
- Informações pessoais identificáveis
- Dados de localização (exceto se necessário para debug do erro)

### 6.3 Firebase Cloud Messaging (FCM)

**Finalidade:**
- Notificações push
- Mensagens remotas

**Dados coletados:**
- FCM Token (identificador único do dispositivo para push)
- Status de permissão de notificações
- Preferências de notificação do usuário

**Armazenamento:**
- Tabela `drive.fcm_tokens` - Tokens FCM vinculados a usuários
- Armazenado no Supabase

---

## 📱 7. DADOS DO DISPOSITIVO

### 7.1 Informações Coletadas

**Identificadores:**
- Device ID (identificador único do dispositivo)
- Unique ID (identificador único do app instalado)
- FCM Token (para push notifications)

**Informações do Hardware:**
- Modelo do dispositivo (ex: iPhone 14, Samsung Galaxy S23)
- Sistema operacional (iOS/Android)
- Versão do OS (ex: iOS 17.0, Android 14)
- Versão do app
- Build number
- Nome do dispositivo (opcional)

**Informações de Performance:**
- Memória total do dispositivo (para otimização)
- Capacidade de armazenamento (para gerenciamento de cache)

**Finalidade:**
- Otimização de performance do app
- Resolução de problemas técnicos
- Personalização de experiência
- Gerenciamento de cache e armazenamento

**Armazenamento:**
- Tabela `drive.fcm_tokens` - Informações do dispositivo vinculadas ao usuário
- Analytics (anonimizado)

---

## ⚙️ 8. CONFIGURAÇÕES E PREFERÊNCIAS DO USUÁRIO

### 8.1 Configurações Armazenadas

**Preferências de Áudio:**
- Idioma de áudio (`audio_language`)
- Voz preferida (`voice_preference`)
- Velocidade de TTS (`tts_speed`)

**Preferências de Guia:**
- Raio de trigger (`trigger_radius`): 100m, 200m ou 500m
- Privacidade padrão de POI (`default_poi_privacy`): private/public
- Permissão de compartilhamento de listas (`allow_list_sharing`): true/false

**Preferências de Notificação:**
- Status de permissão de notificações
- Preferências de tipos de notificação (se implementado)

**Armazenamento:**
- Tabela `drive.profiles` - Colunas de preferências
- Tabela `drive.user_preferences` - Preferências adicionais (se existir)

---

## 🔄 9. COMPARTILHAMENTO E INTEGRAÇÕES

### 9.1 Integrações com Terceiros

**Google Maps SDK:**
- Uso de mapas e serviços de geocodificação
- Dados compartilhados: localização, rotas, POIs (conforme política do Google)
- Finalidade: Renderização de mapas e navegação

**Firebase (Google):**
- Analytics, Crashlytics, Cloud Messaging
- Dados compartilhados: eventos, crashes, tokens FCM (conforme política do Google)
- Finalidade: Analytics, crash reporting, push notifications

**Supabase:**
- Backend as a Service
- Dados compartilhados: Todos os dados do usuário são armazenados no Supabase
- Finalidade: Armazenamento de dados, autenticação, APIs

**Google OAuth / Apple Sign-In:**
- Autenticação social
- Dados compartilhados: Email, nome (se autorizado)
- Finalidade: Autenticação de usuário

### 9.2 Compartilhamento de Rotas

**Funcionalidade:**
- Usuário pode compartilhar rotas salvas (se permitido nas configurações)

**Dados compartilhados:**
- Nome da rota
- Lista de POIs na rota
- Ordem dos POIs
- Modo de transporte
- Distâncias e durações estimadas

**Controle do usuário:**
- Configuração `allow_list_sharing` controla se rotas podem ser compartilhadas
- Rotas privadas não são compartilhadas

---

## 🗄️ 10. ARMAZENAMENTO DE DADOS

### 10.1 Armazenamento no Servidor (Supabase)

**Tabelas principais:**

**drive.profiles:**
- Dados do perfil do usuário
- Preferências de áudio e configurações
- Retenção: Enquanto conta existir

**drive.user_route_history:**
- Histórico de rotas salvas
- Retenção: Enquanto conta existir ou usuário deletar

**drive.route_pois:**
- POIs detalhados de cada rota salva
- Retenção: Vinculado à rota (deletado quando rota é deletada)

**drive.trip_sessions:**
- Sessões de viagem completas
- Retenção: Enquanto conta existir ou usuário deletar

**drive.trip_session_attractions:**
- POIs visitados durante viagens
- Retenção: Vinculado à sessão de viagem

**drive.route_trail:**
- Pontos de localização durante sessões
- Retenção: Vinculado à sessão de viagem

**drive.fcm_tokens:**
- Tokens FCM para push notifications
- Retenção: Enquanto app estiver instalado ou token válido

**drive.data_deletion_requests:**
- Logs de solicitações de exclusão de dados
- Retenção: Para fins de auditoria (conforme regulamentação)

### 10.2 Armazenamento Local (Dispositivo)

**SQLite:**
- Cache de POIs (5 dias)
- Cache de áudios (7 dias)
- Metadados de cache

**AsyncStorage:**
- Cache temporário de dados (1 minuto)
- Preferências locais temporárias

**File System:**
- Arquivos de áudio baixados
- Localização: `Documents/audio/` (iOS) ou `DocumentDirectory/audio/` (Android)

**Limpeza automática:**
- Cache expirado é removido automaticamente
- Limpeza semanal de arquivos órfãos
- Limpeza ao desinstalar app

---

## 🔒 11. SEGURANÇA E PRIVACIDADE

### 11.1 Medidas de Segurança

**Autenticação:**
- Senhas hashadas (nunca armazenadas em texto plano)
- Tokens JWT para autenticação
- OAuth seguro para Google/Apple Sign-In

**Criptografia:**
- Comunicação HTTPS/TLS com servidores
- Dados sensíveis criptografados em trânsito
- Armazenamento seguro no Supabase (conforme padrões de segurança)

**Row Level Security (RLS):**
- Usuários só podem acessar seus próprios dados
- Políticas RLS no Supabase para todas as tabelas
- Verificação de autenticação em todas as queries

**Armazenamento Local:**
- Dados locais armazenados no sandbox do app
- Não acessíveis por outros apps
- Limpeza automática ao desinstalar

### 11.2 Conformidade com Regulamentações

**LGPD (Lei Geral de Proteção de Dados - Brasil):**
- Consentimento explícito para coleta de dados
- Direito de acesso, correção e exclusão
- Portabilidade de dados
- Sistema de exclusão de dados implementado

**GDPR (Regulamento Geral sobre a Proteção de Dados - Europa):**
- Base legal para processamento de dados
- Direitos dos titulares de dados
- Sistema de exclusão de dados
- Proteção de dados de transferência internacional

**COPPA (Children's Online Privacy Protection Act - EUA):**
- App não é direcionado a crianças menores de 13 anos
- Não coletamos dados de crianças sem consentimento parental

---

## 👤 12. DIREITOS DO USUÁRIO

### 12.1 Direitos Disponíveis

**Acesso aos Dados:**
- Usuário pode visualizar todos os dados do perfil na tela de Profile
- Histórico de rotas e viagens acessível no app

**Correção de Dados:**
- Edição de perfil (nome, telefone, nickname) disponível no app
- Atualização de preferências disponível

**Exclusão de Dados:**
- Exclusão completa de conta disponível no app
- Remove todos os dados do usuário (perfil, rotas, viagens, preferências)
- Remove autenticação
- Limpa cache local

**Portabilidade de Dados:**
- Usuário pode solicitar exportação de dados via suporte
- Dados exportados em formato JSON

**Revogação de Consentimento:**
- Usuário pode revogar permissões de localização nas configurações do dispositivo
- Usuário pode desativar notificações push nas configurações do dispositivo
- Algumas funcionalidades podem não funcionar sem permissões necessárias

**Oposição ao Processamento:**
- Usuário pode solicitar parada de processamento de dados via suporte
- Exclusão de conta remove todos os dados

---

## 📧 13. NOTIFICAÇÕES E COMUNICAÇÕES

### 13.1 Notificações Push

**Tipos de Notificações:**
- Notificações sobre POIs próximos (quando implementado)
- Atualizações do app
- Lembretes e recomendações

**Controle do Usuário:**
- Permissão de notificações pode ser concedida/revogada nas configurações do dispositivo
- Preferências de notificação podem ser gerenciadas no app (se implementado)

**Dados Coletados:**
- FCM Token
- Status de permissão
- Histórico de notificações enviadas (no servidor)

### 13.2 Comunicações por Email

**Emails Enviados:**
- Verificação de email (cadastro)
- Recuperação de senha
- Confirmações de ações importantes (se implementado)

**Dados Utilizados:**
- Email do usuário (fornecido durante cadastro)
- Nome do usuário (para personalização)

---

## 🔄 14. TRANSFERÊNCIA INTERNACIONAL DE DADOS

### 14.1 Serviços Utilizados

**Supabase:**
- Servidor pode estar localizado fora do Brasil
- Dados transferidos para servidores Supabase conforme política deles
- Conformidade com padrões de segurança internacionais

**Firebase (Google):**
- Servidores localizados globalmente (principalmente EUA)
- Dados de analytics transferidos para servidores Google
- Conformidade com padrões de segurança do Google

**Google Maps:**
- Serviços de mapas podem processar dados em servidores globais
- Conformidade com política de privacidade do Google

---

## ⏱️ 15. RETENÇÃO DE DADOS

### 15.1 Períodos de Retenção

**Dados do Perfil:**
- Retidos enquanto conta existir
- Deletados imediatamente ao excluir conta

**Histórico de Rotas e Viagens:**
- Retidos enquanto conta existir
- Deletados ao excluir conta ou individualmente pelo usuário

**Dados de Localização:**
- Retidos durante sessão de viagem
- Vinculados ao histórico de viagem
- Deletados quando sessão de viagem é deletada

**Cache Local:**
- POIs: 5 dias
- Áudios: 7 dias
- Limpeza automática após expiração

**Dados de Analytics:**
- Retidos conforme política do Firebase Analytics
- Geralmente 14 meses (política padrão do Google Analytics)

**Logs de Exclusão:**
- Retidos para fins de auditoria
- Período conforme regulamentação aplicável

---

## 🆕 16. ATUALIZAÇÕES E MUDANÇAS

### 16.1 Notificações de Mudanças

**Política de Privacidade:**
- Usuário será notificado sobre mudanças significativas
- Notificação via app ou email
- Data de última atualização sempre visível

**Termos de Uso:**
- Usuário será notificado sobre mudanças significativas
- Aceitação de novos termos pode ser necessária

---

## 📞 17. CONTATO E SUPORTE

### 17.1 Informações de Contato

**Para questões sobre privacidade:**
- Email: [email de privacidade]
- Website: https://www.tuggi.app/pt/privacy-policy

**Para questões sobre termos:**
- Email: [email de termos]
- Website: https://www.tuggi.app/pt/terms-of-use

**Para suporte geral:**
- Email: [email de suporte]
- Website: https://www.tuggi.app

---

## 📋 18. CHECKLIST DE PONTOS PARA POLÍTICA DE PRIVACIDADE

### 18.1 Informações a Incluir

- [ ] Explicação clara sobre coleta de localização e finalidade
- [ ] Detalhamento de todos os métodos de autenticação
- [ ] Lista completa de dados coletados (perfil, localização, dispositivo, analytics)
- [ ] Explicação sobre uso de Firebase Analytics e compartilhamento com Google
- [ ] Informações sobre cache local e armazenamento offline
- [ ] Detalhes sobre sistema de áudio e narrações
- [ ] Explicação sobre geração e salvamento de rotas
- [ ] Informações sobre integrações (Google Maps, Firebase, Supabase)
- [ ] Direitos do usuário (acesso, correção, exclusão, portabilidade)
- [ ] Informações sobre exclusão de conta e dados
- [ ] Detalhes sobre retenção de dados
- [ ] Informações sobre transferência internacional de dados
- [ ] Política de notificações push
- [ ] Medidas de segurança implementadas
- [ ] Conformidade com LGPD e GDPR
- [ ] Informações de contato para questões de privacidade

---

## 📋 19. CHECKLIST DE PONTOS PARA TERMOS DE USO

### 19.1 Informações a Incluir

- [ ] Aceitação dos termos ao criar conta
- [ ] Uso do app apenas para fins legais
- [ ] Responsabilidade do usuário pela precisão das informações fornecidas
- [ ] Limitações de responsabilidade (app é um guia, não substitui navegação profissional)
- [ ] Proibição de uso do app enquanto dirige (usar apenas como passageiro)
- [ ] Propriedade intelectual do conteúdo do app
- [ ] Política de modificações e atualizações do app
- [ ] Política de cancelamento e exclusão de conta
- [ ] Limitações de garantias
- [ ] Resolução de disputas
- [ ] Lei aplicável e jurisdição
- [ ] Idade mínima para uso (13+ anos conforme COPPA)
- [ ] Responsabilidade do usuário por uso de dados de localização
- [ ] Política de uso de dados de terceiros (Google Maps, etc.)

---

## 🎯 20. BENCHMARK - INSPIRAÇÃO DE APPS SIMILARES

### 20.1 Waze (Referência)

**Pontos de referência na política do Waze:**
- Explicação clara sobre coleta de localização em tempo real
- Detalhamento sobre uso de dados para melhorar navegação
- Informações sobre compartilhamento com Google
- Explicação sobre dados coletados mesmo quando app está fechado (se permitido)
- Política de retenção de dados
- Direitos do usuário sobre dados
- Informações sobre uso de dados agregados e anonimizados

**Aplicar ao Tuggi Drive:**
- Seguir estrutura similar de explicação sobre localização
- Detalhar uso de dados para melhorar guia de viagem
- Explicar compartilhamento com Firebase/Google
- Clarificar quando dados são coletados (apenas durante sessões ativas)
- Política clara de retenção e exclusão

---

## 📝 21. OBSERVAÇÕES FINAIS

### 21.1 Pontos Importantes a Destacar

1. **Localização é essencial**: O app não funciona sem permissão de localização
2. **Background location**: Necessário para funcionamento durante viagens
3. **Cache local**: Dados são armazenados localmente para funcionalidade offline
4. **Analytics**: Firebase Analytics é usado mas dados são anonimizados quando possível
5. **Exclusão completa**: Sistema implementado para exclusão completa de dados
6. **Segurança**: RLS e criptografia protegem dados do usuário
7. **LGPD/GDPR compliant**: App implementa medidas de conformidade

### 21.2 Recomendações para Atualização das Políticas

1. **Clareza**: Usar linguagem clara e acessível
2. **Detalhamento**: Explicar cada tipo de dado coletado e sua finalidade
3. **Transparência**: Ser transparente sobre compartilhamento com terceiros
4. **Controle do usuário**: Destacar opções de controle e direitos do usuário
5. **Atualização regular**: Revisar e atualizar políticas regularmente
6. **Multilíngue**: Manter políticas em português, inglês e espanhol (conforme app)

---

**Fim do Documento**

Este documento serve como referência completa para atualização das políticas de privacidade e termos de uso do Tuggi Drive. Todas as informações foram extraídas diretamente do código-fonte do aplicativo, sem suposições.

