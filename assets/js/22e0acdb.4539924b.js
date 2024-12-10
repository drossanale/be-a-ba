"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5518],{7493:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"processador-digital/unidade-de-controle","title":"Unidade de Controle (UC)","description":"A Unidade de Controle (UC) \xe9 o componente do processador respons\xe1vel por interpretar as instru\xe7\xf5es de um programa e convert\xea-las em sinais de controle para outros componentes do processador. Sua principal fun\xe7\xe3o \xe9 coordenar o funcionamento de elementos como a Unidade L\xf3gica e Aritm\xe9tica (ULA), mem\xf3rias e dispositivos de entrada/sa\xedda, garantindo que cada opera\xe7\xe3o seja executada na ordem correta.","source":"@site/docs/5-processador-digital/2-unidade-de-controle.md","sourceDirName":"5-processador-digital","slug":"/processador-digital/unidade-de-controle","permalink":"/be-a-ba/docs/processador-digital/unidade-de-controle","draft":false,"unlisted":false,"editUrl":"https://github.com/de-abreu/be-a-ba/edit/main/website/docs/5-processador-digital/2-unidade-de-controle.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ULA","permalink":"/be-a-ba/docs/processador-digital/unidade-logica-aritmetica"},"next":{"title":"Registradores","permalink":"/be-a-ba/docs/processador-digital/registradores"}}');var o=a(4848),s=a(8453);const d={},i="Unidade de Controle (UC)",c={},t=[{value:"Tipos de Unidade de Controle",id:"tipos-de-unidade-de-controle",level:2},{value:"Estrutura da Unidade de Controle",id:"estrutura-da-unidade-de-controle",level:2},{value:"Funcionamento da Unidade de Controle",id:"funcionamento-da-unidade-de-controle",level:2},{value:"Exerc\xedcios",id:"exerc\xedcios",level:2},{value:"1. Somando N\xfameros",id:"1-somando-n\xfameros",level:3},{value:"2. Pulando para Outro Lugar",id:"2-pulando-para-outro-lugar",level:3},{value:"3. Fazendo o Ciclo Funcionar",id:"3-fazendo-o-ciclo-funcionar",level:3},{value:"4. Comparando Tipos de UC",id:"4-comparando-tipos-de-uc",level:3},{value:"5. Contador de Programa (PC)",id:"5-contador-de-programa-pc",level:3},{value:"Respostas Sugeridas",id:"respostas-sugeridas",level:2}];function l(e){const r={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"unidade-de-controle-uc",children:"Unidade de Controle (UC)"})}),"\n",(0,o.jsxs)(r.p,{children:["A ",(0,o.jsx)(r.strong,{children:"Unidade de Controle (UC)"})," \xe9 o componente do processador respons\xe1vel por interpretar as instru\xe7\xf5es de um programa e convert\xea-las em sinais de controle para outros componentes do processador. Sua principal fun\xe7\xe3o \xe9 coordenar o funcionamento de elementos como a Unidade L\xf3gica e Aritm\xe9tica (ULA), mem\xf3rias e dispositivos de entrada/sa\xedda, garantindo que cada opera\xe7\xe3o seja executada na ordem correta."]}),"\n",(0,o.jsx)(r.h2,{id:"tipos-de-unidade-de-controle",children:"Tipos de Unidade de Controle"}),"\n",(0,o.jsx)(r.p,{children:"Existem dois tipos principais de Unidade de Controle:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"UC por Hardware"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Implementada com circuitos fixos, projetados para trabalhar com um conjunto espec\xedfico de instru\xe7\xf5es."}),"\n",(0,o.jsx)(r.li,{children:"Vantagens: Alta velocidade de execu\xe7\xe3o."}),"\n",(0,o.jsx)(r.li,{children:"Desvantagens: Dif\xedcil de modificar ou atualizar."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"UC Microprogramada"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:'Utiliza uma mem\xf3ria para armazenar "micro-instru\xe7\xf5es", que s\xe3o pequenos comandos internos.'}),"\n",(0,o.jsx)(r.li,{children:"Vantagens: Flex\xedvel e f\xe1cil de adaptar."}),"\n",(0,o.jsx)(r.li,{children:"Desvantagens: Menor velocidade comparada \xe0 UC por hardware."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"estrutura-da-unidade-de-controle",children:"Estrutura da Unidade de Controle"}),"\n",(0,o.jsx)(r.p,{children:"A UC \xe9 composta por v\xe1rias partes importantes que trabalham em conjunto:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Registradores"}),": Armazenam informa\xe7\xf5es tempor\xe1rias, como o endere\xe7o da pr\xf3xima instru\xe7\xe3o ou dados a serem processados."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Decodificador de Instru\xe7\xf5es"}),": Analisa a instru\xe7\xe3o e decide o que deve ser feito."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Circuitos Sequenciais"}),": Garantem que as etapas (buscar, decodificar e executar) aconte\xe7am na ordem correta."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Geradores de Sinais de Controle"}),": Enviam comandos para os outros componentes, indicando o que fazer."]}),"\n"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"funcionamento-da-unidade-de-controle",children:"Funcionamento da Unidade de Controle"}),"\n",(0,o.jsx)(r.p,{children:"O funcionamento da UC segue um ciclo b\xe1sico de tr\xeas etapas:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Buscar (Fetch)"}),": A UC busca a pr\xf3xima instru\xe7\xe3o na mem\xf3ria e a coloca em um registrador."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Decodificar (Decode)"}),": A instru\xe7\xe3o \xe9 analisada para determinar a opera\xe7\xe3o a ser executada."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Executar (Execute)"}),": A UC envia sinais para os componentes envolvidos, como a ULA, para realizar a tarefa."]}),"\n"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"exerc\xedcios",children:"Exerc\xedcios"}),"\n",(0,o.jsx)(r.h3,{id:"1-somando-n\xfameros",children:"1. Somando N\xfameros"}),"\n",(0,o.jsx)(r.p,{children:"A UC precisa somar dois n\xfameros guardados em registradores. O que ela faz para:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Escolher os registradores certos?"}),"\n",(0,o.jsx)(r.li,{children:"Enviar os dados para a ULA?"}),"\n",(0,o.jsx)(r.li,{children:"Guardar o resultado em outro registrador?"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"2-pulando-para-outro-lugar",children:"2. Pulando para Outro Lugar"}),"\n",(0,o.jsxs)(r.p,{children:["Quando a instru\xe7\xe3o \xe9 ",(0,o.jsx)(r.strong,{children:'"SE X > 0, ENT\xc3O V\xc1 PARA O ENDERE\xc7O Y"'}),", o que a UC faz?"]}),"\n",(0,o.jsx)(r.h3,{id:"3-fazendo-o-ciclo-funcionar",children:"3. Fazendo o Ciclo Funcionar"}),"\n",(0,o.jsxs)(r.p,{children:["Desenhe um diagrama simples que mostre como a UC alterna entre ",(0,o.jsx)(r.strong,{children:"buscar"}),", ",(0,o.jsx)(r.strong,{children:"decodificar"})," e ",(0,o.jsx)(r.strong,{children:"executar"})," instru\xe7\xf5es. Imagine que cada etapa acontece em um ciclo de clock."]}),"\n",(0,o.jsx)(r.h3,{id:"4-comparando-tipos-de-uc",children:"4. Comparando Tipos de UC"}),"\n",(0,o.jsx)(r.p,{children:"Qual a diferen\xe7a entre uma UC por hardware e uma UC microprogramada em rela\xe7\xe3o a:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Velocidade"}),"\n",(0,o.jsx)(r.li,{children:"Facilidade de mudan\xe7a"}),"\n",(0,o.jsx)(r.li,{children:"Custo"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"5-contador-de-programa-pc",children:"5. Contador de Programa (PC)"}),"\n",(0,o.jsxs)(r.p,{children:["O PC est\xe1 no valor ",(0,o.jsx)(r.strong,{children:"1000"})," e a pr\xf3xima instru\xe7\xe3o est\xe1 no endere\xe7o ",(0,o.jsx)(r.strong,{children:"1004"}),". O que acontece com o valor do PC depois de buscar a instru\xe7\xe3o?"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"respostas-sugeridas",children:"Respostas Sugeridas"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Somando N\xfameros"}),(0,o.jsx)(r.br,{}),"\n","A UC ativa os registradores corretos, envia os dados para a ULA, realiza a soma e guarda o resultado em outro registrador."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Pulando para Outro Lugar"}),(0,o.jsx)(r.br,{}),"\n","A UC verifica a condi\xe7\xe3o e, se verdadeira, altera o valor do PC para o endere\xe7o indicado."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Fazendo o Ciclo Funcionar"}),(0,o.jsx)(r.br,{}),"\n","O diagrama deve incluir flip-flops para guardar o estado atual e uma l\xf3gica que decide a pr\xf3xima etapa (",(0,o.jsx)(r.strong,{children:"buscar"}),", ",(0,o.jsx)(r.strong,{children:"decodificar"})," ou ",(0,o.jsx)(r.strong,{children:"executar"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Comparando Tipos de UC"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"UC por hardware: mais r\xe1pida, menos flex\xedvel."}),"\n",(0,o.jsx)(r.li,{children:"UC microprogramada: mais flex\xedvel, mas pode ser mais lenta e mais cara de implementar."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Contador de Programa (PC)"}),(0,o.jsx)(r.br,{}),"\n","O PC passa a valer ",(0,o.jsx)(r.strong,{children:"1004"})," ap\xf3s buscar a instru\xe7\xe3o."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>d,x:()=>i});var n=a(6540);const o={},s=n.createContext(o);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);