export const sdPdvInstall = [
  {
    id: 'i001',
    title: `Ativando usuário Administrador`,
    content: `
            1.1 - WIN+R digitar "netplwiz"
	        1.2 - avançado > avançado > pasta usuários > selecionar o administrador e 	clicar em propriedades > ativar o usuário administrador
	        1.3 - fazer logoff e entrar com administrador e excluir qualquer outro 	usuário
        `,
  },
  {
    id: 'i002',
    title: `Criar uma pasta no C: chamada "PDV+"`,
    content: ``,
  },
  {
    id: 'i003',
    title: `Instalar e configurar o teamviewer`,
    content: `
            3.1 - configurar teamviewer - teamviewer inicia com Windows 
	        (MARCAR), conexões de lan (aceitar) - por senha: SD@info1525
        `,
  },
  {
    id: 'i004',
    title: `Mudar o nome da maquina para o nome do PDV.`,
    content: `4.1 - No CMD seguir com comando:
		WMIC computersystem where name="%computername%" call rename name="SDPdv02"`,
    copyArea: `WMIC computersystem where name="%computername%" call rename name="SDPdv02"`,
  },
  {
    id: 'i005',
    title: `rodar o Bash: SDPDV.install 3`,
    content: `
            5.1 - alterar configurações de controle de conta (MINIMO)
	        5.2 - alterar configurações de segurança (desmarcar todas as mensagens de segurança)
	        5.3 - Opções de desempenho - ajustar para obter um melhor desempenho
	        5.4 - energia -desligar video nunca- configurações avançadas - desliga disco rigido nunca -
		    configurações USB - Desabilitado
        `,
  },
  {
    id: 'i006',
    title: `configurar o IP Fixo`,
    content: `
            6.1 - abrir o servidor para ver qual o IP configurado para o PDV 
	        6.2 - conferir o gateway no proprio PDV 
	        6.3 - ir em central de rede e compartilhamento -> alterar as configurações de compartilhamento avançadas -> todas as redes ->
	        ativar compartilhamento -> desativar compartilhamento por senha 
        `,
  },
  {
    id: 'i007',
    title: `Buscando backup e arquivos para restaurar o uso`,
    content: `ir no pdv em uso, copiar 4 arquivos - SDPDVXML, SD.AVI na Windows, syswow64/system32 = Clisitef.ini e DLL.pdv.dll`,
  },
  {
    id: 'i008',
    title: `Rodando o instalador`,
    content: `
            8.1 - executar INSTALADOR PDV como ADMINISTRADOR - desmarcar SD ATIVADOR <-----
	        8.2 - conferir impressora
	        8.3 - conferir numero do PDV
	        8.4 - CARGA SEMPRE SEGURA
	        8.5 - Se houver XML de referencia, alterar as informaçoes do Caixa respectivo
	        8.6 - Conferir as tags no XML "versão PDV", "GPdvPadrao", "CTNUMEROPDV", "TefPdv", "<TefPdv>SE000002</TefPdv>", 
		    mudar para numero do PDV de instalação.
	        8.7 - Conferir a tag "NFCE SERIE" e por a série que vamos pegar no retaguarda (Fiscal > NFCe)
	        8.8 - Apagar o conteúdo das tags "NFCE ULTIMO"
        `,
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
