"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8952],{2169:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"processador-digital/registradores","title":"Registradores","description":"Grupo 4","source":"@site/docs/5-processador-digital/3-registradores.md","sourceDirName":"5-processador-digital","slug":"/processador-digital/registradores","permalink":"/be-a-ba/docs/processador-digital/registradores","draft":false,"unlisted":false,"editUrl":"https://github.com/de-abreu/be-a-ba/edit/main/website/docs/5-processador-digital/3-registradores.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Registradores","description":"Grupo 4"},"sidebar":"tutorialSidebar","previous":{"title":"Unidade de Controle (UC)","permalink":"/be-a-ba/docs/processador-digital/unidade-de-controle"},"next":{"title":"Mem\xf3ria de Programa e de Dados","permalink":"/be-a-ba/docs/processador-digital/memoria-de-programa-e-dados"}}');var o=s(4848),n=s(8453);const i={title:"Registradores",description:"Grupo 4"},t="Registradores",d={},c=[{value:"Recapitulando",id:"recapitulando",level:2},{value:"Registradores na CPU",id:"registradores-na-cpu",level:2},{value:"Exerc\xedcios",id:"exerc\xedcios",level:2},{value:"Gabarito",id:"gabarito",level:2}];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"registradores",children:"Registradores"})}),"\n",(0,o.jsx)(r.h2,{id:"recapitulando",children:"Recapitulando"}),"\n",(0,o.jsx)(r.p,{children:"Na parte Circuitos com Registradores do cap\xedtulo L\xf3gica Sequencial deste livro, vimos que registradores s\xe3o circuitos digitais formados por flip-flops utilizados dentro da CPU para armazenar bits. Os registradores podem ser de deslocamento, em que o valor de cada flip-flop \xe9 passado para o pr\xf3ximo de maneira serial, ou de acesso paralelo, em que conjuntos de bits podem ser lidos e/ou escritos simultaneamente."}),"\n",(0,o.jsx)(r.h2,{id:"registradores-na-cpu",children:"Registradores na CPU"}),"\n",(0,o.jsx)(r.p,{children:"No processador do computador, os registradores recebem classifica\xe7\xf5es de acordo com sua fun\xe7\xe3o:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registrador de Dados:"})," armazena valores num\xe9ricos de opera\xe7\xf5es aritm\xe9ticas e l\xf3gicas;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registrador de Endere\xe7o:"})," armazena endere\xe7os de mem\xf3ria;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registrador de Controle:"})," armazena flags relacionadas a opera\xe7\xf5es e sinais de controle, que s\xe3o os diferentes tipos de a\xe7\xf5es que podem ou n\xe3o ocorrer dependendo da instru\xe7\xe3o recebida;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registrador de Instru\xe7\xe3o:"})," armazena a instru\xe7\xe3o que est\xe1 sendo executada no momento;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Contador de Programa (Program Counter):"})," armazena o endere\xe7o da pr\xf3xima instru\xe7\xe3o a ser executada pelo processador;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registrador de Prop\xf3sito Geral:"})," armazena qualquer tipo de dado, conforme for necess\xe1rio de acordo com a instru\xe7\xe3o do programa."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"exerc\xedcios",children:"Exerc\xedcios"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) Explique a diferen\xe7a entre um registrador de deslocamento e um registrador de prop\xf3sito geral. ",(0,o.jsx)("br",{}),"\nb) Por que os registradores s\xe3o mais r\xe1pidos que a mem\xf3ria RAM?"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Dado o circuito de um registrador de 4 bits com entradas paralelas e sa\xeddas paralelas: ",(0,o.jsx)("br",{}),"\na) Identifique os sinais necess\xe1rios para carregar um valor no registrador. ",(0,o.jsx)("br",{}),"\nb) Descreva como o sinal de reset influencia o comportamento do circuito."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Considere um registrador de deslocamento de 4 bits com entrada serial D. Entrada serial ao longo de 4 pulsos de clock: 1,0,1,1. ",(0,o.jsx)("br",{}),"\na) Qual ser\xe1 o conte\xfado do registrador ap\xf3s os 4 pulsos? ",(0,o.jsx)("br",{}),"\nb) Mostre o conte\xfado do registrador ap\xf3s mais dois deslocamentos para a direita com D = 0."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Analise o seguinte diagrama temporal para um registrador de 4 bits com deslocamento \xe0 direita: ",(0,o.jsx)("br",{}),"\na) Preencha a \xfaltima linha da tabela com o pr\xf3ximo estado do registrador. ",(0,o.jsx)("br",{}),"\nb) Explique o comportamento do registrador no deslocamento."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Ciclo de Clock"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Entrada (D)"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Sa\xedda Q3 Q2 Q1 Q0"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"0"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"0000"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"0"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1000"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"2"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"0100"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"3"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1010"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"4"}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:"1"}),(0,o.jsx)(r.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,o.jsxs)(r.ol,{start:"5",children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) Explique como o Program Counter (PC) utiliza registradores para determinar a pr\xf3xima instru\xe7\xe3o a ser executada. ",(0,o.jsx)("br",{}),"\nb) Por que registradores de prop\xf3sito espec\xedfico geralmente s\xe3o mais r\xe1pidos que registradores de prop\xf3sito geral?"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Discuta as vantagens e desvantagens de implementar registradores de grande capacidade (ex: 128 bits) em um processador, comparado ao uso de mem\xf3ria cache."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Extra: Escreva um c\xf3digo em VHDL para implementar um registrador de 4 bits com entrada e sa\xedda paralelas. O registrador deve possuir os sinais de clock, reset, e enable."}),"\n",(0,o.jsx)(r.h2,{id:"gabarito",children:"Gabarito"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) Um registrador de deslocamento move os bits armazenados para a direita ou esquerda a cada pulso de clock, enquanto um registrador de prop\xf3sito geral armazena temporariamente dados para opera\xe7\xf5es diversas no processador. ",(0,o.jsx)("br",{}),"\nb) Os registradores est\xe3o fisicamente dentro do processador, tornando o acesso mais r\xe1pido devido \xe0 menor lat\xeancia e maior largura de banda em compara\xe7\xe3o com a mem\xf3ria RAM."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) Para carregar um valor, \xe9 necess\xe1rio ativar o sinal de enable enquanto o clock fornece pulsos para sincronizar a opera\xe7\xe3o. ",(0,o.jsx)("br",{}),"\nb) O sinal de reset zera o conte\xfado do registrador, independentemente do valor que estava armazenado anteriormente."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) Ap\xf3s os 4 pulsos, o conte\xfado ser\xe1 Q3, Q2, Q1, Q0 = 1011. ",(0,o.jsx)("br",{}),"\nb) Ap\xf3s dois deslocamentos adicionais para a direita com D=0, o conte\xfado ser\xe1 Q3,Q2,Q1,Q0=0010."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) O pr\xf3ximo estado ser\xe1 Q3, Q2, Q1, Q0=1101. ",(0,o.jsx)("br",{}),"\nb) O registrador desloca os bits para a direita, com a entrada D preenchendo o bit mais significativo e o menos significativo sendo descartado."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["a) O Program Counter (PC) utiliza um registrador para armazenar o endere\xe7o da pr\xf3xima instru\xe7\xe3o, incrementando-o a cada ciclo de clock ou mudando para um endere\xe7o espec\xedfico em casos de desvios. ",(0,o.jsx)("br",{}),"\nb) Registradores de prop\xf3sito espec\xedfico s\xe3o otimizados para fun\xe7\xf5es espec\xedficas, reduzindo a l\xf3gica adicional necess\xe1ria para uso gen\xe9rico."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Vantagens: Alta velocidade e menor lat\xeancia. ",(0,o.jsx)("br",{}),"\nDesvantagens: Consomem mais espa\xe7o no processador. Dif\xedcil de escalar para capacidades maiores devido ao custo e \xe0 complexidade."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Extra: C\xf3dgio em VHDL:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-vhdl",children:"library IEEE;\nuse IEEE.STD_LOGIC_1164.ALL;\n\nentity registrador_4bits is\n    Port (\n        clk    : in std_logic;\n        reset  : in std_logic;\n        enable : in std_logic;\n        data_in  : in std_logic_vector(3 downto 0);\n        data_out : out std_logic_vector(3 downto 0)\n    );\nend registrador_4bits;\n\narchitecture Behavioral of registrador_4bits is\n    signal reg : std_logic_vector(3 downto 0) := \"0000\";\nbegin\n    process (clk, reset)\n    begin\n        if reset = '1' then\n            reg <= \"0000\";\n        elsif rising_edge(clk) then\n            if enable = '1' then\n                reg <= data_in;\n            end if;\n        end if;\n    end process;\n    data_out <= reg;\nend Behavioral;\n"})}),"\n",(0,o.jsx)(r.admonition,{title:"Autores",type:"info",children:(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Jo\xe3o Victor De Bortoli Prado"}),"\n",(0,o.jsx)(r.li,{children:"Lucas Rodrigues Baptista"}),"\n",(0,o.jsx)(r.li,{children:"Samuel Sandoval Bonachela"}),"\n"]})})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>t});var a=s(6540);const o={},n=a.createContext(o);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);