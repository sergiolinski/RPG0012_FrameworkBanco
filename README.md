# RPG0012 - Vamos colocar o framework para acessar um banco!
MeuPrimeiroFramework
estacio logo
Universidade Estácio de Sá
DESENVOLVIMENTO FULL STACK
Disciplina: RPG0009 - Descobrindo o Java Script
Repositorio Git: https://github.com/sergiolinski/RPG0012_FrameworkBanco
SERGIO DOLINSKI CALDEIRA - MATRICULA: 202308936311

Servidor baseado em Express e Mongoose, acessando o banco de dados
MongoDB, e front-ends baseados em React JS, Next JS e Angular.

## Objetivos da prática

A partir dos objetivos listados abaixo, no final do projeto, você terá criado um
servidor baseado em Express e Mongoogse, com acesso ao banco de dados
MongoDB, além de utilizar diversas tecnologias para implementar o front-end,
tornando-se capacitado para lidar com plataformas de desenvolvimento variadas,
e satisfazendo às necessidades de um mercado cada vez mais heterogêneo:

* Utilizar o banco de dados MongoDB para a criação de repositório NoSQL
* Implementar servidor baseado em Express e Mongoose
* Implementar biblioteca cliente de acesso em Java Script
* Utilizar front-ends baseados em React JS, Next JS e Angular

## Materiais necessários para a prática

* Computador com acesso à internet;
* Editor de código Visual Studio Code;
* Banco de dados MongoDB e ferramenta Compass;
* Ambiente de desenvolvimento NodeJS;
* Navegador de internet instalado no computador.
  
## Desenvolvimento da prática

### 👉 1º Procedimento | Criando o Servidor com Express e Mogoose

* Crie o banco de dados livraria, e a coleção livros, no MongoDB Compass,
através da opção Create Database, como na imagem seguinte:

Resultado Esperado:

* Crie o aplicativo livros-servidor, baseado em Node JS, com Express e Mongoose:
  
* Em "livro-schema.js", importar a conexão efetuada na variável banco e definir
a estrutura do banco, na variável LivroSchema, instanciando um objeto do
tipo banco.Schema, e passando a estrutura no formato JSON.

Resultado Esperado: 

* Configurar o sistema de CORS, definindo uma variável cors, que receberá a
biblioteca de mesmo nome, antes de instanciar app, e utilizá-la pelo app logo
após instanciar, através do método use, mantendo a configuração padrão,
onde temos acesso a partir de qualquer porta ou endereço.

Resultado Esperado: 


* Execute o servidor com npm start, e teste as chamadas através do Postman ou
do Boomerang, lembrando que apenas o método GET pode ser verificado através
do navegador:

## 👉 2º Procedimento | Alteração dos Projetos Clientes

* Crie um diretório denominado clientes, e copiar para dentro dele os projetos
livros-react, livros-next e livros-angular;

* Definir a interface LivroMongo, para compatibilizar o tipo de Livro às
chamadas para o servidor, contendo os atributos apresentados a seguir:



* Com o projeto livro-servidor em execução, iniciar a execução da nova versão de
livros-react com npm start, e testar as funcionalidades através de um navegador,
acessando o endereço http://localhost:3000


### Observação

É importante analisar a grande similaridade com o código utilizado na classe
LivroLista, na nova versão de livros-react, diferenciando-se apenas pelo uso de
tipos, devido à adoção do Type Script.

* Com o projeto livro-servidor em execução, iniciar a execução da nova versão de
livros-next via comando npm run dev, e testar as funcionalidades através de um
navegador, acessando o endereço http://localhost:3000

* Definir a interface LivroMongo, para compatibilizar o tipo de Livro às
chamadas para o servidor, contendo os atributos apresentados a seguir:

### Observação

Os três métodos podem ser simplesmente copiados da nova versão de
ControleLivros, na versão alterada de livros-react, pois não há nenhuma diferença
em termos de código-fonte.


* Com o projeto livro-servidor em execução, inicie a execução da nova versão de
livros-angular via comando ng serve, e teste as funcionalidades através de um
navegador, acessando o endereço http://localhost:4200


Resultados esperados da prática

* É importante que o código seja organizado;
* Explore as funcionalidades do Visual Studio Code para facilitar o
desenvolvimento da prática;
* Nessa missão, é esperado que você demonstre habilidades básicas para:
*construção de servidores com base em Express e Mongoose
* integrar diferentes tipos de front-end ao back-end baseado em protocolo
HTTP


