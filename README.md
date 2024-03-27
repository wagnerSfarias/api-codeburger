
<h1 align="center">API Code Burger</h1>

## Documentação 

API desenvolvida com objetivo de oferecer um sitstema robusto e eficaz a uma hamburgueria, com funcionalidades para os clientes e funcionários.


## Funcionalidades

### Usuários

- Criar usuário
- Logar
- Visualizar categorias
- Visualizar produtos
- Realizar pedidos
- Visualizar seus pedidos

### Funcionários

- Criar e editar categorias
- Criar e editar produtos
- Atulizar status do pedido
- Visualizar todos os pedidos 

## Rotas

#### Criar usuário

```bash
  POST /users
```
 As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**.|
| `password` | `string` | **Obrigatório**.|

#### Fazer Logon

```bash
  POST /sessions
```
As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**.|
| `password`      | `string` | **Obrigatório**.|

Resposta :
```js
[
  {
    id: "3e7417d4-94d4-44a3-a3cc-2a3096664a9a",
    email: "matheus@gmail.com",
    name:"Matheus", 
    admin: false,
    token: "eyJhbGciOiJIUzI1NiIsI.nR5cCI6IkpXVCJ9.e..."
  }
];
```

### TOKEN 

As rotas abaixo exigem de um token JWT, que deve ser passado pelo
`Bearer Token` como o tipo de autenticação, que é fornecido quando o usuário faz logon.

**Observação**: Para maior segurança, lembre-se de gerar um hash de senha pra seu token e insira no arquivo 
/src/config/auth.js.

 [HashMD5](https://www.md5hashgenerator.com/) - Gerador de Hash

Exemplo:

```js
export default {
  secret: 'hashMD5 AQUI',
  expiresIn: '5d',
}
```

#### Criar categoria

```bash
  POST /categories
```
As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `file`      | `file` | **Obrigatório**. Arquivos de extensão .png .jpg .jpeg. |

#### Editar categoria

```bash
  PUT /categories/${id}
```
As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID da categoria que você deseja. |
| `name`      | `string` | **Opcional**. |
| `file`      | `file` | **Opcional**. Arquivos de extensão .png .jpg .jpeg. |

**Observação**: O id deve ser passado na requisição como route params.

#### Retorna todas as categoria

```bash
  GET /categories
```

#### Criar produto

```bash
  POST /products
```

As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `price`      | `integer` | **Obrigatório**. |
| `category_id`      | `integer` | **Obrigatório**. O ID da categoria que o produto pertence. |
| `file`      | `file` | **Obrigatório**. Arquivos de extensão .png .jpg .jpeg. |


#### Editar produto

```bash
  PUT /products/${id}
```

As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do produto que você deseja. |
| `name`      | `string` | **Opcional**. |
| `price`      | `integer` | **Opcional**. |
| `category_id`      | `integer` | **Opcional**. O ID da categoria que o produto pertence . |
| `file`      | `file` | **Opcional**. Arquivos de extensão .png .jpg .jpeg. |

**Observação**: O id deve ser passado na requisição como route params.

#### Retorna todas os produtos

```bash
  GET /products
```

#### Realizar pedidos

```bash
  POST /orders
```

As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do produto. |
| `quantity`      | `integer` | **Obrigatório**. Quantidade do produto. |


#### Atualizar status do pedido

```bash
  PUT /orders/${id}
```
As informações devem ser passadas dentro do corpo(body) da requisição.

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do pedido que você deseja. |
| `status`      | `string` | **Obrigatório**. |

**Observação**: O id deve ser passado na requisição como route params.


#### Retorna todos os pedidos 

```bash
  GET /orders
```

#### Retorna os pedidos do usuário

```bash
  GET /user/orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user_id`      | `string` | **Obrigatório**. Recebe automaticamente o ID do usuário que esta logado na aplicação. |

## Rodando localmente

Antes de começar, você precisa ter o Git, Node e Docker instalados.

yarn - instalação opcional.

### Criando contêiner 

Nesta aplicação, estou utilizando os banco de dados PostgreSQL e MongoDB para armazenar os dados. Abaixo, estão as instruções sobre como subir os contêineres dos bancos em sua máquina.

**Observação**: É necessário estar com o aplicativo do docker aberto na sua maquina, antes de executar os comandos abaixo.

#### PostgreSQL
```bash
docker run --name codeburger-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

#### MongoDB
```bash
docker run --name codeburger-mongo -p 27017:27017 -d -t mongo
```

### Clone o projeto

```bash
  git clone https://github.com/wagnerSfarias/api-codeburger.git
```

### Entre no diretório do projeto

```bash
  cd api-codeburger
```

### Instale as dependências

```bash
  npm install ou yarn 
```

### Rodando as migrations 
Esse comando é responsável por criar as tabelas no banco de dados.

```bash
npx sequelize db:migrate ou yarn sequelize db:migrate
```

**Observação**: Antes de rodas as migrations, é necessário criar um banco de dados em seu contêiner do postgreSQL, e em seguida insira as informações do seu banco, dentro de ./src/config/database.js .

Exemplo:

```js
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
```
#### Rodando comando seed
Esse comando será responsável por inserir os dados de um usuário administrador na tabela users.

```bash
npx sequelize db:seed:all ou yarn sequelize db:seed:all
```

### Inicie o servidor

```bash
  npm run dev ou yarn dev
```

### Dados de acesso

**baseURL** : http://localhost:3001

**Usuário Administrador**

**Email** : adm@adm.com

**Senha** : 123456


## Tecnologias utilizadas 👨🏻‍💻

- Node
- Express
- UUID
- Sequelize
- Moongose
- Multer
- Yup
- Autenticação JWT
- bcrypt
- Docker
- PostgreSQL
- MongoDB
- Eslint / Prettier

