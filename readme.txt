
instalar nodejs:
instalar npm;

na pasta do projeto digitar no terminal:
npm init -y

instalar dependencia express: (micro framework que vai ajudar a lidar com rotas e views)
npm install express

configurar servidor, arquivo principal:
digitar: code .

criar na raiz do projeto arquivo:
server.js

Nodemon: ferramenta que faz automaticamente a reinicialização do servidor em caso de alteração.
instalar como dependencia de Desenvolvimento -D;
no terminal do projeto digitar: npm install -D nodemon
alterar aquivo package.json:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },

agora para rodar servidor ao inves de: node server.js 
digitar: npm run dev

Instalar Docker, contenirização, máquina virtual para instalar o banco de dados para não dar problemas.
https://hub.docker.com/editions/community/docker-ce-desktop-windows
Instalar MongoDb no docker:
no terminal digitar: docker pull mongo 
Subir um novo container contendo essa instalação rodando:
docker run --name mongodb -p 27017:27017 -d mongo
retornar quais imagens estão rodando:
docker ps
ao entrar no navegador e digitar:
http://localhost:27017/
deve aparecer:
It looks like you are trying to access MongoDB over HTTP on the native driver port.
Pode tb baixar o Robo 3t:
https://robomongo.org/download

Ver imagens que não estão onlines e estão pausada:
docker ps -a
subir imagem que está pausada:
docker start nomedaimagem

Instalar dependencia para conectar com o banco de dados:
npm install mongoose

Instalar biblioteca require, ela faz o require automaticamente:
npm install require-dir

Instalar Insomnia para testar as rotas:
https://insomnia.rest/download/

Paginação:
Instalação do módulo:
npm install mongoose-paginate

Cors:
Cross-origin resource sharing (CORS ou compartilhamento de recursos de origem cruzada) 
é uma especificação de uma tecnologia de navegadores que define meios para um servidor 
permitir que seus recursos sejam acessados por uma página web de um domínio diferente.
Instalar:
npm install cors