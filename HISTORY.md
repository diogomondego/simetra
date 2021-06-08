## Para rodar a API:

### `cd server`
### `npm install`
### `npm start`

## Para rodar o App Mobile:

### `cd mobile`
### `npm install`
### Entre na pasta services. No arquivo api.js digite seu endereço ip dentro da constante ip
### `npm start`

## História da construção

### Server

Decidi criar uma api com o Node.js
Para desenvolvimento decidi utilizar a biblioteca Nodemon para fazer o recarregamento automático da api sem ser necessário parar o servidor toda hora. Utilizei a biblioteca Express para criação rápida do servidor, das rotas e a api. Para salvar os dados, decidi utilizar o SQLite versão 3. Ademais, utilizei o mecanismo Cors para uma possível permissão de acesso a só alguns dados da api.

Antes de utilizar algumas dessas bibliotecas tentei utilizar a biblioteca Knex que mantém um padrão de querys. Junto dela comecei a utilizar o módulo do ES6, mas apareceram uns erros na criação de migrations. Como não queria perder muito tempo no desenvolvimento da api e partir para o app mobile, decidi não utilizá-los.

### App Mobile

O React Native já tinha estudado comandos básicos de criação de interface, assistindo video-aulas em muitos casos. Estava focando primeiro no ReactJS para posteriormente ler a documentação do React Native e então praticar. Com o teste sendo em React Native achei desafiador, foi algo que me fortaleceu pois tomei como um desafio que iria conseguir.
Comecei então utilizando o Expo como plataforma de construção.
Iniciei a criação da Home no arquivo principal (App.js). No cabeçalho, importei a logo da empresa em SVG, para isso utilizei as bibliotecas react-native-svg e react-native-svg-transformer.
Para buscar os dados do servidor utilizei o Axios. Usei os Hooks Effect e State, o primeiro para ao renderizar a tela buscar os dados da api de forma assíncrona e o segundo, para armazenar os dados.
Com isso, usei o expo-google-fonts para buscar as fontes necessárias, além de ter utilizado o expo-app-loading para não deixar a aplicação rodar sem carregar as fontes.
Depois de criar o componente da página do blog, utilizei o React Navigation para fazer o roteamento entre as telas e o Stack Navigator para fazer uma navegação em pilha, além de ter um comportamento similar do iOS e do Android.

Como separei a listagem de posts em um componente sendo chamada na Home, ela não estava recebendo diretamente a prop navigate, então repassei através da Home. Com isso, utilizei a prop pelo componente TouchableOpacity para fazer a navegação para a respectiva tela do post, sendo mandado o id para fazer a busca na api por ele. Queria ter utilizado o RectButton que tem o comportamento similar ao nativo de cada sistema, mas estava dando erros na estilização.
Utilizei o TouchableOpacity também como botão de voltar para Home no texto ""Início > Blog" da página mobile-notícias

No começo quase toda a aplicação estava envolvida em uma ScrollView, porém ela não estava funcionando depois de utilizar o React Navigation. Além disso, estava dando umas mensagens de alerta utlizando ScrollView e ListView juntas, decidi então utilizar o método map e continuar com a ScrollView.

### Aperfeiçoamentos + correções na aplicação

Se tivesse mais tempo, queria primeiro resolver uns problemas na aplicação mobile. Na Home, a exibição dos posts está sendo feita em ordem de o último adicionado aparecendo primeiro, porém queria ter feito essa ordenação pela data de publicação, mas fiz pelo id (ele também representa uma ordenação, já que é um número crescente).
Queria também adicionar o vetor retângulo em amarelo que pega parte da imagem de capa e a descrição, mas decidi focar mais na programação.
Além disso, o que achei mais importante, o que tive bastante dificuldade foi em estilizar as palavras que aparecem em negrito vindo da api. Tentei utilizar o método replace() para definir estilos específicos a cada tag armazenada no banco, no entanto ainda não consegui.
Ademais, queria ter utilizado mais a responsividade.

Na api, o server, queria ter implantado em núvem para automatizar a busca dos dados.

Pensando em algo mais automatizado, queria ter feito telas e rotas de cadastrar e deletar. Essas ficarão agora para eu fazer como um aperfeiçoamento da apliação/segunda entrega.