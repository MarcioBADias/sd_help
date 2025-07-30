const documentationData = [
  {
    id: 'sd-super-server',
    title: '1 Instalação do SD Super SERVIDOR',
    content: [
      {
        id: 'sd-super-server-requisitos',
        title: '1.1 - Requisitos:',
        text: `1.1.1 - Instalador do SD Super 10.2.1993 (https://www.sdsuper.net) [cite: 1]
            1.1.2 - Plug de segurança (Chave de segurança central do cliente conseguido pelo gestor em uma primeira instalação ou arquivo localizado no servidor antigo em \\C:\\SDSuper\\Programas, procurar "Plug.sdx") [cite: 1]
            1.1.3 - Arquivos importantes para casos de copiar um servidor: [cite: 1]
            --> Pasta Programas: [cite: 1]
            --- CopiarPdv; [cite: 1]
            --- SDCarga; [cite: 2]
            --- SDPlusServer; [cite: 2]
            --- SDSentinela; [cite: 2]
            --- SDSuper; [cite: 2]
            --- SDSuperX; [cite: 2]
            --> Pasta SDTerminal [cite: 2]
            --> BATS [cite: 2]
            --- Liberar_Portas; [cite: 2]
            --- Servidor_Bat; [cite: 2]
            --- Trocar_port; [cite: 2]
            (muda as portas para principal utilizada 8081) [cite: 3]`,
      },
      {
        id: 'sd-super-server-executando',
        title: '1.2 Executando o instalador:',
        text: `1.2.1 - Marcar "Este computador é um servidor" e check em relatórios; [cite: 3]
            1.2.2 - CNPJ e chave nos campos seguintes, campos a serem habilitados no SD App; [cite: 4]
            1.2.3 - numero de filial é obrigatório [cite: 5]
            1.2.4 - puxar o banco de dados do cliente e adicionar à pasta Dados. [cite: 5]
            (C:\\SDSuper\\Dados) [cite: 6]
            1.2.5 - Regedit > HKEY_LOCAL_MACHINE > SOFTWARE > WOW6432NODE > SDInformatica > SDSuper: APIP (Por o ip do servidor Windows)/ Ativador caminho (ip do servidor Windows) / BDIP (ip do Linux, onde encontra o banco de dados) [cite: 6]
            1.2.6 - Adicionar o arquivo do Plug na pasta SDSuper, pasta Programas [cite: 6]
            1.2.7 - compartilhar as pastas PROGRAMAS E RELATORIOS da pasta SDSuper: [cite: 6]
            --> Botão direito > Propriedades > Compartilhamento > Compartilhamento avançado > Marcar compartilhar Pasta > Mudar o nome "PROGRAMAS" para "SDProgs$" > Permissões > Habilitar controle total. [cite: 6]
            Depois em Segurança e repete o controle total. [cite: 7]
            IPC: Para relatórios serão as mesmas configurações mas com nome da pasta SDRelats$ [cite: 7]
            1.2.8 - Em casos de backup, copiar e colar os arquivos da pasta Programas. [cite: 7]
            1.2.9 - na primeira execução ele vai solicitar alteração de moeda: Opção correta da unidade monetário, para moeda negativa é quarta opção de baixo pra cima (R$-1,1) [cite: 8]`,
      },
      {
        id: 'sd-super-server-erro-chave',
        title:
          '1.3 Em caso de erro de chave de acesso incorreta na abertura do Sentinela:',
        text: `1.3.1 - Vai no SDSuper > Controle > Sentinela > Seleciona o sentinela e clica em alterar > Aba Vendas > em Chave clicar no botão verde que vai mudar a chave e normalizar o Sentinela. [cite: 8]`,
      },
    ],
  },
  {
    id: 'sd-super-retaguarda',
    title: '2 - Instalação de SDSuper Retaguarda',
    content: [
      {
        id: 'sd-super-retaguarda-requisitos',
        title: '2.1 - Requisitos:',
        text: `2.1.2 - Instalador do SDSuper [cite: 9]`,
      },
      {
        id: 'sd-super-retaguarda-executando',
        title: '2.2 - Executando a instalação:',
        text: `2.2.1 - Abrindo o instalador [cite: 9]
            2.2.2 - Marcar a caixa "Esse computador não será Servidor > Digitar o ip do servidor Windows > Marcar relatórios [cite: 9]
            2.2.2.1 - Para confirmar o IP do servidor Windows funcionando abrir o WIN+R e escrever \\\\ip_do_servidor_win\\SDProgs$ , se abrir está tudo certo, senão precisa configurar a credencial pelo gerenciador de credenciais, adicionando o ip, o nome como administrador e a senha que é SD@super0212 [cite: 9]
            2.2.3 - Repetir os passos 1.2.2 até 1.2.5 [cite: 9]
            2.2.4 - Caso precise ter um banco na filial 1 mas [cite: 10]
            praticar preços e etiquetas de filial 2, basta por o numero da filial praticante nos campos FilialEtiquetas e FilialPrecosPromocoes [cite: 10]
            2.2.5 - Repetir o procedimento 1.2.9 quando abrir pela primeira vez (Ajuste de moeda negativa) [cite: 10]`,
      },
      {
        id: 'sd-super-retaguarda-dica',
        title: 'PULO DO GATO (DICA) DE INSTALAÇÃO DE RETAGUARDA',
        text: `1 - Pegar com cliente CNPJ e pesquisar o nome para acessar o servidor [cite: 11]
            2 - Acessar o REGEDIT no caminho 1.2.5 e salvar os dados APIP, BDIP e FILIAL [cite: 12]
            3 - Para instalar pode-se por o CNPJ da SD (04260756/0001-20) e a chave 322685 [cite: 13]`,
      },
    ],
  },
  {
    id: 'preparacao-windows-sdpdv',
    title: '3 - Preparação Windows para o SDPdv',
    content: [
      {
        id: 'ativar-usuario-administrador',
        title: '3.1 - Ativar o usuário administrador do Windows',
        text: `3.1.1 - WIN+R digitar "netplwiz" [cite: 14]
            3.1.2 - avançado > avançado > pasta usuários > selecionar o administrador e clicar em propriedades > ativar o usuário administrador [cite: 14]
            3.1.3 - fazer logoff e entrar com administrador e excluir qualquer outro usuário [cite: 14]`,
      },
      {
        id: 'rodar-bat-sdpdv-install',
        title: '3.2 - Rodar o BAT SDPDV_install',
        text: `3.2.1 - Ao terminar de rodar precisa configurar a rede fixando o IP (se for necessário), na opção de desempenho por "ajustar para o melhor desempenho", na configuração de controle do usuário por o ultimo nível e no controle de plano de energia desmarcar [cite: 14]
            o desligamento pra nunca [cite: 15]`,
      },
      {
        id: 'desabilitar-defender-control',
        title: '3.3- Desabilitar o Defender Control',
        text: ``,
      },
      {
        id: 'atualizar-windows-update',
        title: '3.4 - Atualizar o Windows update',
        text: ``,
      },
      {
        id: 'wub',
        title: '3.5 - Wub',
        text: `Apenas se for necessário. [cite: 15]
            Manter ativo para desabilitar o win. update [cite: 16]`,
      },
      {
        id: 'bat-remocao-programas',
        title:
          '3.6 - BAT de remoção de programas que não são utilizados (Debload)',
        text: `3.6.1 - primeiro comando no powershell adm: Get-AppxPackage | [cite: 16]
            Remove-AppxPackage [cite: 17]
            3.6.2 - segundo comando no powershell adm: Get-AppxPackage | where-object {$_.name -notlike "*store*"} | [cite: 17]
            Remove-AppxPackage [cite: 18]`,
      },
      {
        id: 'bat-protecao-cpu',
        title: '3.7 - BAT Proteção do software 100% CPU',
        text: `3.7.1 - Regedit > HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Schedule > Start mudar de 2 para 4 [cite: 18]`,
      },
    ],
  },
  {
    id: 'instalacao-sdpdv',
    title: '4 - Instalação do SDPdv',
    content: [
      {
        id: 'executar-instalador-sdpdv',
        title: '4.1 - executar o INSTALADOR do SDPdv',
        text: `4.1.1 - Pegar o numero de ativação e passar no SDAPP para retornar a chave e seguir com o instalador [cite: 19]`,
      },
      {
        id: 'preparo-pos-instalacao',
        title: '4.2 - Preparo pós instalação',
        text: `4.2.1 - Selecionar o tipo de Impressora [cite: 19]
            4.2.2 - Numero do Caixa [cite: 19]
            4.2.3 - Filial DO BANCO DE DADOS [cite: 19]
            4.2.4 - tipo de carga SEMPRE SEGURA [cite: 19]
            4.2.5 - Se tiver os dados de a chave, numero IBGA, token e código SEFAZ pode inserir para preencher o XML ou só seguir que ele vai [cite: 19]
            instalar de qualquer forma. [cite: 19]
            !!! Ao termino não dar ok para reinicialização pois precisamos rodar o update que vai reiniciar de qualquer forma, só fechar. [cite: 20]`,
      },
      {
        id: 'rodar-update',
        title: '4.3 - Rodar o update',
        text: ``,
      },
      {
        id: 'preparando-sdpdv-inicializacao',
        title: '4.4 - Preparando o SDPdv para inicialização',
        text: `4.4.1 - abrir o XML para copiar de um XML de PDV já existente ou seguir as configurações indicadas a seguir. [cite: 21]
            4.4.1.1 - GFinalizar: 9 (Para desligar o computador pelo botão desligar) [cite: 21]
            4.4.1.2 - GValidarCarga: Sempre SIM [cite: 21]
            4.4.1.3 - ImpressoraFiscal: IFModelo colocar o mesmo modelo e IFPorta por a porta gerada pelo instalador ou USB se for rconhecida na porta USB [cite: 21]
            4.4.1.4 - Balanca: BModelo com modelo da baança e cuidado com a porta COM que vai aparecer conforme no gerenciador [cite: 21]
            4.4.1.5 - TEF: Se o cliente usar config SITEF, mudar o TefOpcao para dedicado e o TefExpress para SIM, se ele usar POS mudar o TefOpcao para manual [cite: 22]
            4.4.1.6 - CONTROLE GERAL: buscar CTNumeroPDV para por o numero do PDV e buscar o CTUsuariosSDSuper [cite: 22]
            e marcar SIM sempre para ela. [cite: 22]
            4.4.1.7 - NFCe: Se já houver na nova instalação os arquivos NFCeUltimoDoc, NFCeUltimoChaveDoc e NFCeUltimoProtocolo, apague e deixe puxar automaticamente. [cite: 23]
            !!! EM duvidas pode usar o SDPDV .ini que tem um gabarito para ajudar [cite: 23]`,
      },
      {
        id: 'instalacao-vpn-sitef',
        title: '4.5 - Instalação da VPN do SITEF do Express',
        text: `4.5.1 - Buscar o drive do pin-pad (rotineiramente gertec), instalador do VPN Gsurf e Certificado do cliente [cite: 24]
            4.5.2 - Abrir o GSClient e instalar o setup > avançar e na parte de serviço escrever "SITEF" e finalizar [cite: 24]
            4.5.3 - abrir o certificado. [cite: 24]
            4.5.3.1 - usuário: Fernando_Silva senha: Sd@2024 [cite: 24]
            4.5.3.2 - Solicitar e digitar o OTP e aguardar o OK [cite: 24]
            4.5.4 - Na instalação descompactar o Clisitef produção e copiar os arquivos [cite: 24]
            4.5.4.1 - Ir para C:\\windows\\systemwow64 e depois colar na pasta system32 [cite: 25]
            4.5.4.2 - na pasta system64 buscar clisitef.ini [cite: 25]
            4.5.4.2.1 - em porta digitar em maiúsculo AUTO_USB e reiniciar a maquina [cite: 25]`,
      },
      {
        id: 'comunicacao-sql',
        title: '4.6 - Comunicação do SQL',
        text: `4.6.1 - menu iniciar > Buscar "SQL Server Configuration Manager" [cite: 25]
            4.6.2 - expandir "Configuração de Rede do SQL Server > Habilitar os protocolos com botão direito. [cite: 25]`,
      },
      {
        id: 'compartilhar-pasta-sdpdv',
        title: '4.7 - compartilhar a pastar SDPdv',
        text: `4.7.1 - Botão direito > Propriedades > Compartilhamento > Compartilhamento avançado > Marcar compartilhar [cite: 25]
            Pasta > Mudar o nome "SDPdv" para "SDPdv$" > Permissões > Habilitar controle total. Depois em Segurança e repete o controle total. [cite: 25]
            !! Agora só abrir o PDV e aguardar o erro de carga, após isso fechar o erro e ir no Super dar uma primeira carga (ATUALIZAR > Filial > Desmarca todos e marcar só o da instalação e enviar carga com botão "Atualizar")`,
      },
      {
        id: 'iniciar-pelo-pdv',
        title: '4.8 - Iniciar pelo PDV',
        text: `4.8.1 - HKEY_LOCAL_MACHINE > SOFTWARE > MICROSOFT > WINDOWS NT > CurrentVersion > WinLogon > Shell > Alterar para c:\\SDPdv\\SDPdv.exe [cite: 26]`,
      },
      {
        id: 'ajuste-resolucao',
        title: '4.9 - Ajuste de resolução',
        text: `4.9.1 - Menu inicar intel e selecionar o CENTRO [cite: 26]
            DE COMANDO GRAFICO > Video > Modificar a escala para escala de exibição ou preenchimento. [cite: 27]`,
      },
    ],
  },
  {
    id: 'sdpdv-funcoes',
    title: '5 - SDPdv e suas funções',
    content: [
      {
        id: 'abrir-caixa',
        title: '5.1 - Abrir caixa:',
        text: `A [cite: 27]
            5.1.1 - Senha PDV: [cite: 27]`,
      },
      {
        id: 'fechar-caixa',
        title: '5.2 - Fechar Caixa: F',
        text: ``,
      },
      {
        id: 'ativar-caixa',
        title: '5.3 - Ativar caixa: M',
        text: ``,
      },
      {
        id: 'bloquear-caixa',
        title: '5.4 - Bloquear Caixa:',
        text: ``,
      },
      {
        id: 'leitura',
        title: '5.5 - Leitura: X',
        text: `(Imprime o resumo de operação até o momento) [cite: 27]`,
      },
      {
        id: 'suprimentos',
        title: '5.6 - Suprimentos: Z',
        text: ``,
      },
      {
        id: 'manutencao',
        title: '5.7 - Manutenção:',
        content: [
          {
            id: 'menu-nfce',
            title: '5.7.1 - Menu NFCe',
            text: `5.7.1.1 - Ativar modo off-line [cite: 27]
            5.7.1.2 - Cancelar NFCe Aberta [cite: 27]
            5.7.1.3 - Reimprimir Danfe (Ultima ou anterior) [cite: 27]
            5.7.1.4 - Enviar NFCe em contigencias [cite: 27]`,
          },
          {
            id: 'administracao-tef',
            title: '5.7.2 - Administração Tef',
            text: `5.7.2.1 - Recarga de celular [cite: 28]
            5.7.2.2 - Carga forçada de tabelas no pinpad (servidor) [cite: 28]
            5.7.2.3 - Cancelamento de transação [cite: 28]`,
          },
          {
            id: 'trocar-operador',
            title: '5.7.3 - Trocar Operador',
            text: ``,
          },
        ],
      },
      {
        id: 'desligar',
        title: '5.8 - Desligar:',
        text: ``,
      },
      {
        id: 'abortar',
        title: '5.9 - Abortar: (esc)',
        text: ``,
      },
      {
        id: 'cliente',
        title: '5.10 - Cliente',
        text: ``,
      },
      {
        id: 'vale',
        title: '5.11 - Vale',
        text: ``,
      },
      {
        id: 'limite',
        title: '5.12 - Limite',
        text: ``,
      },
      {
        id: 'entrega',
        title: '5.13 - Entrega',
        text: ``,
      },
      {
        id: 'retirada',
        title: '5.14 - [cite: 28] Retirada (Sangria)',
        text: ``,
      },
      {
        id: 'pagamento',
        title: '5.15 - Pagamento',
        text: `(pagamento realiza pagamento direto com valor do PDV, cuidado não gera vinculo com fornecedor e com contas a pagar) [cite: 28]`,
      },
      {
        id: 'preco',
        title: '5.16 - Preço (Consulta)',
        text: ``,
      },
      {
        id: 'desconto',
        title: '5.17 - Desconto (desconto manual)',
        text: ``,
      },
      {
        id: 'crediario',
        title: '5.18 - Crediario (Venda fiada)',
        text: ``,
      },
    ],
  },
]

export { documentationData }
