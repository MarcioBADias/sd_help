const documentationData = [
  {
    id: 'sd-super-server',
    title: '1 SD Super SERVIDOR',
    content: [
      {
        id: 'sd-super-server-requisitos',
        title: '1.1 - Requisitos:',
        text: [
          {
            id: 'sd-super-server-requisitos',
            title: '1.1 - Requisitos:',
            text: `1.1.1 - Instalador do SD Super 10.2.1993 (https://www.sdsuper.net)
            1.1.2 - Plug de segurança (Chave de segurança central do cliente conseguido pelo gestor em uma primeira instalação ou arquivo localizado no servidor antigo em \\C:\\SDSuper\\Programas, procurar "Plug.sdx")
            1.1.3 - Arquivos importantes para casos de copiar um servidor:
            --> Pasta Programas:
            --- CopiarPdv;
            --- SDCarga;
            --- SDPlusServer;
            --- SDSentinela;
            --- SDSuper;
            --- SDSuperX;
            --> Pasta SDTerminal
            --> BATS
            --- Liberar_Portas;
            --- Servidor_Bat;
            --- Trocar_port;
            (muda as portas para principal utilizada 8081)`,
          },
          {
            id: 'sd-super-server-executando',
            title: '1.2 Executando o instalador:',
            text: `1.2.1 - Marcar "Este computador é um servidor" e check em relatórios;
            1.2.2 - CNPJ e chave nos campos seguintes, campos a serem habilitados no SD App;
            1.2.3 - numero de filial é obrigatório
            1.2.4 - puxar o banco de dados do cliente e adicionar à pasta Dados.
            (C:\\SDSuper\\Dados)
            1.2.5 - Regedit > HKEY_LOCAL_MACHINE > SOFTWARE > WOW6432NODE > SDInformatica > SDSuper: APIP (Por o ip do servidor Windows)/ Ativador caminho (ip do servidor Windows) / BDIP (ip do Linux, onde encontra o banco de dados)
            1.2.6 - Adicionar o arquivo do Plug na pasta SDSuper, pasta Programas
            1.2.7 - compartilhar as pastas PROGRAMAS E RELATORIOS da pasta SDSuper:
            --> Botão direito > Propriedades > Compartilhamento > Compartilhamento avançado > Marcar compartilhar Pasta > Mudar o nome "PROGRAMAS" para "SDProgs$" > Permissões > Habilitar controle total.
            Depois em Segurança e repete o controle total.
            IPC: Para relatórios serão as mesmas configurações mas com nome da pasta SDRelats$
            1.2.8 - Em casos de backup, copiar e colar os arquivos da pasta Programas.
            1.2.9 - na primeira execução ele vai solicitar alteração de moeda: Opção correta da unidade monetário, para moeda negativa é quarta opção de baixo pra cima (R$-1,1)`,
          },
          {
            id: 'sd-super-server-erro-chave',
            title:
              '1.3 Em caso de erro de chave de acesso incorreta na abertura do Sentinela:',
            text: `1.3.1 - Vai no SDSuper > Controle > Sentinela > Seleciona o sentinela e clica em alterar > Aba Vendas > em Chave clicar no botão verde que vai mudar a chave e normalizar o Sentinela.`,
          },
        ],
      },
    ],
  },
  {
    id: 'criar-pasta-c',
    title: '2 - Criar uma pasta no C: chamada "PDV+"',
    text: 'Criar uma pasta no C: chamada "PDV+"',
  },
  {
    id: 'instalar-teamviewer',
    title: '3 - Instalar e configurar o teamviewer',
    content: [
      {
        id: 'instalar-teamviewer-config',
        title: '3.1 - Configurar teamviewer',
        text: 'teamviewer inicia com Windows (MARCAR), conexões de lan (aceitar) - por senha: SD@info1525',
      },
    ],
  },
  {
    id: 'mudar-nome-maquina',
    title: '4 - Mudar o nome da maquina para o nome do PDV',
    content: [
      {
        id: 'mudar-nome-maquina-cmd',
        title: '4.1 - No CMD seguir com comando',
        text: 'WMIC computersystem where name="%computername%" call rename name="SDPdv02" obs: dentro de name="SDPdvV04" Vamos mudar para o nome do PC que desejamos. WMIC computersystem where name="DESKTOP-HT" call rename name="SDPdv01"',
      },
    ],
  },
  {
    id: 'rodar-sdpdv-install',
    title: '5 - Rodar SDPDV.install 3',
    content: [
      {
        id: 'sdpdv-install-configuracao',
        title: '5.1 - Alterar configurações de controle de conta (MINIMO)',
        text: 'alterar configurações de controle de conta (MINIMO)',
      },
      {
        id: 'sdpdv-install-seguranca',
        title:
          '5.2 - Alterar configurações de segurança (desmarcar todas as mensagens de segurança)',
        text: 'alterar configurações de segurança (desmarcar todas as mensagens de segurança)',
      },
      {
        id: 'sdpdv-install-desempenho',
        title: '5.3 - Opções de desempenho',
        text: 'ajustar para obter um melhor desempenho',
      },
      {
        id: 'sdpdv-install-energia',
        title: '5.4 - Energia',
        text: 'desligar video nunca- configurações avançadas - desliga disco rigido nunca - configurações USB - Desabilitado',
      },
    ],
  },
  {
    id: 'configurar-ip-fixo',
    title: '6 - Configurar o IP Fixo',
    content: [
      {
        id: 'configurar-ip-fixo-servidor',
        title:
          '6.1 - Abrir o servidor para ver qual o IP configurado para o PDV',
        text: 'abrir o servidor para ver qual o IP configurado para o PDV',
      },
      {
        id: 'configurar-ip-fixo-gateway',
        title: '6.2 - Conferir o gateway no proprio PDV',
        text: 'conferir o gateway no proprio PDV',
      },
      {
        id: 'configurar-ip-fixo-rede',
        title: '6.3 - Ir em central de rede e compartilhamento',
        text: 'ir em central de rede e compartilhamento -> alterar as configurações de compartilhamento avançadas -> todas as redes -> ativar compartilhamento -> desativar compartilhamento por senha',
      },
    ],
  },
  {
    id: 'copiar-arquivos',
    title: '7 - Copiar arquivos',
    text: 'ir no pdv em uso, copiar 4 arquivos - SDPDVXML, SD.AVI na Windows, syswow64/system32 = Clisitef.ini e DLL.pdv.dll',
  },
  {
    id: 'verificar-versao-pdvs',
    title: '8 - Verificar a versão dos PDVS',
    content: [
      {
        id: 'verificar-versao-pdvs-instalador',
        title: '8.1 - Executar INSTALADOR PDV como ADMINISTRADOR',
        text: 'executar INSTALADOR PDV como ADMINISTRADOR - desmarcar SD ATIVADOR <-----',
      },
      {
        id: 'verificar-versao-pdvs-impressora',
        title: '8.2 - Conferir impressora',
        text: 'conferir impressora',
      },
      {
        id: 'verificar-versao-pdvs-numero',
        title: '8.3 - Conferir numero do PDV',
        text: 'conferir numero do PDV',
      },
      {
        id: 'verificar-versao-pdvs-carga',
        title: '8.4 - CARGA SEMPRE SEGURA',
        text: 'CARGA SEMPRE SEGURA',
      },
      {
        id: 'verificar-versao-pdvs-xml-referencia',
        title: '8.5 - Se houver XML de referencia',
        text: 'Se houver XML de referencia, alterar as informaçoes do Caixa respectivo',
      },
      {
        id: 'verificar-versao-pdvs-tags-xml',
        title: '8.6 - Conferir as tags no XML',
        text: 'Conferir as tags no XML "versão PDV", "GPdvPadrao", "CTNUMEROPDV", "TefPdv", "<TefPdv>SE000002</TefPdv>", mudar para numero do PDV de instalação e "NFCE SERIE" "NFCE ULTIMO" > zerar todos,NFC dentro da pasta do PDV -> GNE - NNF VER A SERIE. ultimo doc que foi emitido no invoice. NFC SERIE - Serie do site do invoice.',
      },
    ],
  },
  {
    id: 'rodar-atualizador',
    title: '9 - RODAR ATUALIZADOR',
    content: [
      {
        id: 'rodar-atualizador-programa-sdpdv',
        title: '9.1 - Abrir o programa SDPDV',
        text: 'abrir o programa SDPDV, ele vai dar erro de carga (FECHAR RAPIDO PARA NAO DESLIGAR QUANDO SAIR DESSA TELA)',
      },
    ],
  },
  {
    id: 'parar-habilitar-sql',
    title: '12 - Parar e habilitar o serviço do sql',
    text: 'parar o serviço do sql > net stop mssqlserver - habilitar o serviço do sql > net start mssqlserver (Abrir o services.msc)',
  },
  {
    id: 'enviar-carga',
    title: '13 - Enviar carga apenas para o PDV selecionado',
    text: 'enviar carga apenas para o PDV selecionado',
  },
  {
    id: 'instalando-gsurf',
    title: 'Instalando GSURF',
    content: [
      {
        id: 'instalando-gsurf-acesso',
        title: 'Acesso GSURF',
        text: 'login: Fernando_Silva Senha: SD@123!@#',
      },
      {
        id: 'instalando-gsurf-site',
        title: 'Site GSURF',
        text: 'IR NO SITE E JOGAR O CNPJ DO CLIENTE, IR NO PDV QUE DEVEMOS E APERTAR EM REINSTALAR. Dessa forma vai aparecer o codigo OTP. Pegar a OTP no site da Gsrf e ve se o cliente é GSURF. login: Fernando_silva Senha: SD@123!@# otp: 3415048349',
      },
      {
        id: 'instalando-gsurf-listener',
        title: '- Instalar o GsurfRSA Listener',
        text: 'instalar o GsurfRSA Listener - serviço: sitef.',
      },
    ],
  },
  {
    id: 'executa-pdv',
    title: '14 - Executa o PDV',
    content: [
      {
        id: 'executa-pdv-abrir-caixa',
        title: '14.1 - A para abrir o caixa',
        text: 'A para abrir o caixa (senha é +1 HORA +1 MES +1 ANO)',
      },
      {
        id: 'executa-pdv-abrir-venda',
        title: '14.2 - J para tentar abrir venda',
        text: 'J para tentar abrir venda',
      },
    ],
  },
  {
    id: 'fechar-abrir-gne',
    title: '15 - Fechar o pdv, e abrir o arquivo GNE.XML',
    text: 'fechar o pdv, e abrir o arquivo GNE.XML (Conferir e NNF e Serie)',
  },
  {
    id: 'conferir-ultima-venda',
    title: '16 - Conferir a ultima venda no invoicy',
    text: 'conferir a ultima venda no invoicy',
  },
  {
    id: 'realizar-venda-teste',
    title: '17 - Realizar venda de teste',
    content: [
      {
        id: 'realizar-venda-teste-abrir-caixa',
        title: '17.1 - A (Abrir o Caixa)',
        text: 'A (Abrir o Caixa)',
      },
      {
        id: 'realizar-venda-teste-ativar-caixa',
        title: '17.2 - M (Ativar o Caixa)',
        text: 'M (Ativar o Caixa)',
      },
      {
        id: 'realizar-venda-teste-abrir-venda',
        title: '17.3 - F1 (Abrir Venda)',
        text: 'F1 (Abrir Venda)',
      },
      {
        id: 'realizar-venda-teste-fechar-venda',
        title: '17.4 - J (Fechar Venda)',
        text: 'J (Fechar Venda)',
      },
      {
        id: 'realizar-venda-teste-credito',
        title: '17.5 - K (Credito)',
        text: 'K (Credito)',
      },
      {
        id: 'realizar-venda-teste-dinheiro',
        title: '17.6 - D (Dinheiro)',
        text: 'D (Dinheiro)',
      },
      {
        id: 'realizar-venda-teste-cancelar-venda',
        title: '17.7 - U (Cancelar Venda)',
        text: 'U (Cancelar Venda)',
      },
      {
        id: 'realizar-venda-teste-fechar-caixa',
        title: '17.8 - F (Fechar Caixa)',
        text: 'F (Fechar Caixa)',
      },
    ],
  },
  {
    id: 'dicas',
    title: 'DICAS!',
    text: 'VER A SERIE DO PDV -> FISCAL / NFC-E / CONFIGURAÇÕES / ESCOLHER A FILIAL - EXIBIR/ Pegar o numero de serie e olhar no invoice.',
  },
  {
    id: 'formulario-instalacao',
    title: 'Formulário para Instalação de PDV',
    text: 'Nome: Número do PDV: Modelo da impressora: Modelo do PinPad: Marca da balança: PDV: CNPJ: Usuário do Windows é administrador? ( ) Sim ( ) Não TeamViewer ID: Senha: Senha: SD@info1525 13]',
  },
  {
    id: 'sdpdv-funcoes',
    title: '5 - SDPdv e suas funções',
    content: [
      {
        id: 'abrir-caixa',
        title: '5.1 - Abrir caixa:',
        text: `A
            5.1.1 - Senha PDV:`,
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
        text: `(Imprime o resumo de operação até o momento)`,
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
            text: `5.7.1.1 - Ativar modo off-line
            5.7.1.2 - Cancelar NFCe Aberta
            5.7.1.3 - Reimprimir Danfe (Ultima ou anterior)
            5.7.1.4 - Enviar NFCe em contigencias`,
          },
          {
            id: 'administracao-tef',
            title: '5.7.2 - Administração Tef',
            text: `5.7.2.1 - Recarga de celular
            5.7.2.2 - Carga forçada de tabelas no pinpad (servidor)
            5.7.2.3 - Cancelamento de transação`,
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
        title: '5.14 - Retirada (Sangria)',
        text: ``,
      },
      {
        id: 'pagamento',
        title: '5.15 - Pagamento',
        text: `(pagamento realiza pagamento direto com valor do PDV, cuidado não gera vinculo com fornecedor e com contas a pagar)`,
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
