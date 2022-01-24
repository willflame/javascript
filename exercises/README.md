# Introcução a javaScript com funções para fixação da pratica em utilizar a linguagem.
Esta pasta contem varios exercicos para fixação e aprendizagem da linguagem.

## Exercicio - 01
Crie uma função que dado o objeto a seguir:
const address = {
 street: "Rua dos pinheiros",
 number: 1293,
 district: "Centro",
 city: "São Paulo",
 state: "SP"
};

Deve retornar o seguinte conteúdo:
O usuário mora em São Paulo/SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

## Exercicio - 02
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares.

Daods os valores:
(32, 62);

Deve retornar:
32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62.

## Exercicio - 03
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
Dica: para verificar se um vetor contém um valor, utilize o método indexOf

Dado o valor:
["Javascript", "ReactJS", "React Native"];

Deve retornar:
true;

## Exercicio - 04
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é.

Dado o valor:
7;

Deve retornar:
Jedi Master
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

## Exercicio - 05
Escreva uma função que percorra os objetos e retorne as habilidades dos usuários.
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.

Dado o seguinte vetor de objetos:

users = [
 {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

Deve retornar:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

## Exercicio - 06
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

## Exercicio - 07
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0

## Exercicio - 08
A partir do seguinte vetor:

var nomes = ["Diego", "Gabriel", "Lucas"];

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas

## Exercicio - 09
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

<input type="text" name="nome">
<button onClick="add()">Adicionar</button>

Ao clicar no botão, a função add() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

## Exercicio - 10
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch.

## Exercicio - 11
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, uma lista deve aparecer abaixo:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
</ul>

## Exercicio - 12
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo.

<li>Carregando...</li>

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.