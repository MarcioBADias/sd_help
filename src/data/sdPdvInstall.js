export const sdPdvInstall = [
  {
    id: 'i001',
    title: `Ativando usuário Administrador`,
    content: [
      {
        id: 'i001.1',
        text: `WIN+R digitar "netplwiz"`,
      },
      {
        id: 'i001.2',
        text: `avançado > avançado > pasta usuários > selecionar o administrador e 	clicar em propriedades > ativar o usuário administrador`,
      },
      {
        id: 'i001.3',
        text: `fazer logoff e entrar com administrador e excluir qualquer outro usuário`,
      },
    ],
  },
  {
    id: 'i002',
    title: `Criando pasta de ferramentas e instalações`,
    content: [
      {
        id: 'i002.1',
        text: `Criar uma pasta no C: chamada "PDV+"`,
      },
    ],
  },
  {
    id: 'i003',
    title: `Instalar e configurar o teamviewer`,
    content: [
      {
        id: 'i003.1',
        text: `
            3.1 - configurar teamviewer - teamviewer inicia com Windows 
	        (MARCAR), conexões de lan (aceitar) - por senha: SD@info1525
        `,
      },
    ],
  },
  {
    id: 'i004',
    title: `Mudar o nome da maquina para o nome do PDV.`,
    content: [
      {
        id: 'i004.1',
        text: `4.1 - No CMD seguir com comando:
		WMIC computersystem where name="%computername%" call rename name="SDPdv02"`,
      },
    ],
    copyArea: `WMIC computersystem where name="%computername%" call rename name="SDPdv02"`,
  },
  {
    id: 'i005',
    title: `rodar o Bash: SDPDV.install 3`,
    content: [
      {
        id: 'i005.1',
        text: `5.1 - alterar configurações de controle de conta (MINIMO)`,
      },
      {
        id: 'i005.2',
        text: `5.2 - alterar configurações de segurança (desmarcar todas as mensagens de segurança)`,
      },
      {
        id: 'i005.3',
        text: `5.3 - Opções de desempenho - ajustar para obter um melhor desempenho`,
      },
      {
        id: 'i005.4',
        text: `5.4 - energia -desligar video nunca- configurações avançadas - desliga disco rigido nunca - configurações USB - Desabilitado`,
      },
    ],
  },
  {
    id: 'i006',
    title: `configurar o IP Fixo`,
    content: [
      {
        id: 'i006.1',
        text: `6.1 - abrir o servidor para ver qual o IP configurado para o PDV`,
      },
      {
        id: 'i006.2',
        text: `6.2 - conferir o gateway no proprio PDV`,
      },
      {
        id: 'i006.3',
        text: `6.3 - ir em central de rede e compartilhamento -> alterar as configurações de compartilhamento avançadas -> todas as redes ->ativar compartilhamento -> desativar compartilhamento por senha `,
      },
    ],
  },
  {
    id: 'i007',
    title: `Buscando backup e arquivos para restaurar o uso`,
    content: [
      {
        id: 'i007.1',
        text: `ir no pdv em uso, copiar 4 arquivos - SDPDVXML, SD.AVI na Windows, syswow64/system32 = Clisitef.ini e DLL.pdv.dll`,
      },
    ],
  },
  {
    id: 'i008',
    title: `Rodando o instalador`,
    content: [
      {
        id: 'i008.1',
        text: `8.1 - executar INSTALADOR PDV como ADMINISTRADOR - desmarcar SD ATIVADOR`,
      },
      {
        id: 'i008.2',
        text: `8.2 - conferir impressora, Numero de PDV, selecionar sempre CARGA SEGURA e avançar os proximos passos`,
      },
      {
        id: 'i008.3',
        text: `8.3 - Se houver XML de referencia, alterar as informaçoes do Caixa respectivo`,
      },
      {
        id: 'i008.4',
        text: `8.4 -  Conferir as tags no XML "versão PDV", "GPdvPadrao", "CTNUMEROPDV", "TefPdv", "<TefPdv>SE000002</TefPdv>", 
		    mudar para numero do PDV de instalação.`,
      },
      {
        id: 'i008.5',
        text: `Conferir a tag "NFCE SERIE" e por a série que vamos pegar no retaguarda (Fiscal > NFCe > Configurações)`,
      },
      {
        id: 'i008.6',
        text: `Apagar o conteúdo das tags "NFCE ULTIMO"`,
      },
    ],
  },
  {
    id: 'i009',
    title: `Rodando o atualizador`,
    content: [
      {
        id: 'i009.1',
        text: `Abrir o programa SDPDV, ele vai dar erro de carga (FECHAR RAPIDO PARA NAO DESLIGAR QUANDO SAIR DESSA TELA)`,
      },
      {
        id: 'i009.2',
        text: `abri novamente e assim que abrir fechar e ir na pasta do SDPdv buscar o XML do GNE, inserindo na tag NNF o ultimo doc que foi emitido no invoice e na tag SERIE a serie do PDV`,
      },
    ],
  },
]
